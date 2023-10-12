import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateReportDto{
    @IsNumber()
    @IsPositive()    
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}

export class UpdateReportDto{
    @Optional()
    @IsNumber()
    @IsPositive()    
    amount: number;
    
    @Optional()
    @IsString()
    @IsNotEmpty()
    source: string;
}