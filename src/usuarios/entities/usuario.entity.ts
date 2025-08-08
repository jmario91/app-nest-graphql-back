import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Usuario {
  @Field(() => ID)
  id: string;

  @Field()
  nombre: string;

  @Field()
  apellidoPaterno: string;

  @Field({ nullable: true })
  apellidoMaterno?: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  sexo?: string;

  @Field({ nullable: true })
  fechaNacimiento?: string;

  @Field({ nullable: true })
  edad?: number;

  @Field({ nullable: true })
  talla?: number;

  @Field({ nullable: true })
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
