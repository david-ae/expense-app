import { Body, Param, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { ReportType, data } from './data';
import {v4 as uuid} from 'uuid';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReports(@Param('type') type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getIncomeReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
    .filter((report) => report.type === reportType)
    .find(report => report.id === id);
  }

  @Post()
  createReport(
    @Param('type') type: string, @Body() body: {amount: number, source: string}) {
    const {source, amount} = body;
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    };

    data.report.push(newReport);
    return newReport;
  }

  @Put(':id')
  updateReport(
    @Param('type') type: string, @Param('id')id: string, 
    @Body() body: {source: string, amount: number} 
  ) {
    const report = data.report.find(r => r.id === id);

    if(!report) return;

    const reportIndex = data.report.findIndex((r) => r.id === report.id);
    
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body
    };

    return data.report[reportIndex];
  }

  @Delete(':id')
  deleteReport() {
    return 'Deleted';
  }
}
