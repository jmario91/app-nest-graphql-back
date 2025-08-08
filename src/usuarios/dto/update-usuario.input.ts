 
import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class UpdateUsuarioInput {
  @Field({ nullable: true })
  nombre?: string;

  @Field({ nullable: true })
  apellidoPaterno?: string;

  @Field({ nullable: true })
  apellidoMaterno?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  sexo?: string;

  @Field({ nullable: true })
  fechaNacimiento?: string;

  @Field(() => Int, { nullable: true })
  edad?: number;

  @Field(() => Float, { nullable: true })
  talla?: number;

  @Field(() => Float, { nullable: true })
  peso?: number;

  @Field({ nullable: true })
  aceptaTerminos?: boolean;

  @Field({ nullable: true })
  ocupacion?: string;

  @Field({ nullable: true })
  estadoCivil?: string;

  @Field({ nullable: true })
  nivelEducativo?: string;

  @Field({ nullable: true })
  idioma?: string;

  @Field(() => [String], { nullable: true })
  hobbies?: string[];

  @Field({ nullable: true })
  notasAdicionales?: string;

  @Field({ nullable: true })
  estatus?: string;

  @Field({ nullable: true })
  entidad?: string;

  @Field({ nullable: true })
  municipio?: string;

  @Field({ nullable: true })
  colonia?: string;

  @Field({ nullable: true })
  codigoPostal?: string;
}
