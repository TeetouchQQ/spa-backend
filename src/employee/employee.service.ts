import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeDocument } from './schemas/employee.schema';

@Injectable()
export class EmployeeService {
  @InjectModel('Employee') private readonly employeeModel: any;
  async create(createEmployeeDto: CreateEmployeeDto) {
    await this.employeeModel.create(createEmployeeDto);
  }

  async findAll() {
    return await this.employeeModel.find().exec();

  }

  async findOne(id: string) {
    return await this.employeeModel.findById(id).exec();
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto);
  }

  async remove(id: string) {
    return await this.employeeModel.findByIdAndDelete(id).exec();
  }
}
