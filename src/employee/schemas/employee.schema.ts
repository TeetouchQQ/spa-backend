import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, Types } from 'mongoose';



export type EmployeeDocument = Employee & HydratedDocument<Employee>;

@Schema()
export class Employee extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  salary: number;

}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);