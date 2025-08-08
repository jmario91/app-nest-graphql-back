import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { Usuario } from './entities/usuario.entity';
import { v4 as uuidv4 } from 'uuid';
import { FiltroUsuarioInput } from './dto/filtro-usuario.input'; // ✅ Importación correcta

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [];

  crear(createUsuarioInput: CreateUsuarioInput): Usuario {
    const nuevoUsuario: Usuario = {
      id: uuidv4(),
      ...createUsuarioInput,
    };
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  obtenerTodos(): Usuario[] {
    return this.usuarios;
  }

  obtenerPorId(id: string): Usuario {
    const usuario = this.usuarios.find((u) => u.id === id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    return usuario;
  }

  actualizar(id: string, updateUsuarioInput: UpdateUsuarioInput): Usuario {
    const index = this.usuarios.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    this.usuarios[index] = { ...this.usuarios[index], ...updateUsuarioInput };
    return this.usuarios[index];
  }

  eliminar(id: string): boolean {
    const usuario = this.obtenerPorId(id);
    this.usuarios = this.usuarios.filter((u) => u.id !== usuario.id);
    return true;
  }

  async obtenerUsuariosPaginado(pagina: number, limite: number, filtro?: FiltroUsuarioInput) {
    // 1. Filtrar por nombre/email si se proporciona
    let usuariosFiltrados = this.usuarios;

    if (filtro?.nombre?.trim()) {
  usuariosFiltrados = usuariosFiltrados.filter((u) =>
    u.nombre.toLowerCase().includes(filtro.nombre!.toLowerCase()),
  );
}

if (filtro?.email?.trim()) {
  usuariosFiltrados = usuariosFiltrados.filter((u) =>
    u.email.toLowerCase().includes(filtro.email!.toLowerCase()),
  );
}

    // 2. Paginación
    const total = usuariosFiltrados.length;
    const paginas = Math.max(1, Math.ceil(total / limite));
    const paginaActual = Math.min(pagina, paginas);
    const desde = (paginaActual - 1) * limite;
    const hasta = desde + limite;
    const usuarios = usuariosFiltrados.slice(desde, hasta);

    // 3. Retorno en formato compatible con frontend
    return {
      total,
      paginas,
      paginaActual,
      usuarios,
    };
  }
}
