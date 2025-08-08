import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Usuario } from '../entities/usuario.entity';
@ObjectType()
export class PaginadoUsuarioType {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  paginas: number;

  @Field(() => Int)
  paginaActual: number;

  @Field(() => [Usuario])
  usuarios: Usuario[];
}
