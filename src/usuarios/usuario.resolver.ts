// src/usuarios/usuario.resolver.ts

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'; // ✅ IMPORTAR Int
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { FiltroUsuarioInput } from './dto/filtro-usuario.input'; // ✅ nombre corregido
import { PaginadoUsuarioType } from './dto/paginado-usuario.type'; // ✅ nuevo import


@Resolver(() => Usuario)
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Mutation(() => Usuario)
  crearUsuario(@Args('input') input: CreateUsuarioInput): Usuario {
    return this.usuarioService.crear(input);
  }

  @Query(() => [Usuario], { name: 'usuarios' })
  obtenerUsuarios(): Usuario[] {
    return this.usuarioService.obtenerTodos();
  }

  @Query(() => Usuario, { name: 'usuario' })
  obtenerUsuario(@Args('id', { type: () => String }) id: string): Usuario {
    return this.usuarioService.obtenerPorId(id);
  }

  @Mutation(() => Usuario)
  actualizarUsuario(
    @Args('id', { type: () => String }) id: string,
    @Args('input') input: UpdateUsuarioInput,
  ): Usuario {
    return this.usuarioService.actualizar(id, input);
  }

  @Mutation(() => Boolean)
  eliminarUsuario(@Args('id', { type: () => String }) id: string): boolean {
    return this.usuarioService.eliminar(id);
  }

  // ✅ QUERY CON PAGINADO Y FILTRO FUNCIONAL
@Query(() => PaginadoUsuarioType, { name: 'usuariosPaginado' })
  async usuariosPaginado(
    @Args('pagina', { type: () => Int }) pagina: number,
    @Args('limite', { type: () => Int }) limite: number,
    @Args('filtro', { nullable: true }) filtro?: FiltroUsuarioInput,
  ): Promise<PaginadoUsuarioType> {
    return this.usuarioService.obtenerUsuariosPaginado(pagina, limite, filtro);
  }
}
