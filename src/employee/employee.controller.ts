import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    await this.employeeService.create(createEmployeeDto);
    return {
      success: true,
      message: 'Employee created successfully',
      data: createEmployeeDto,
    }
  }

  @Get()
  async findAll() {
    const x = await this.employeeService.findAll();
    return {
      success: true, 
      message: 'Employee fetched successfully', 
      data:x
    };
    
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.employeeService.findOne(id);
    return {success: true, message: 'Employee fetched successfully', data: data};
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    const new_data = await this.employeeService.update(id, updateEmployeeDto);
    return  {success: true, message: 'Employee updated successfully', data: new_data};
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.employeeService.remove(id);
    return {success: true, message: 'Employee removed successfully', data: data};
  }
}
