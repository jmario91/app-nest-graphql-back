import { InputType, Field } from '@nestjs/graphql';

@InputType('FiltroUsuarioInput') // 👈 Este nombre debe coincidir con el frontend
export class FiltroUsuarioInput {
  @Field({ nullable: true })
  nombre?: string;

  @Field({ nullable: true })
  email?: string;
}
