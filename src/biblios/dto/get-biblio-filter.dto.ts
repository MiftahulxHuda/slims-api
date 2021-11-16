import { IsOptional, IsIn, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetBiblioFilterDto {
  @IsOptional()
  title: string;

  @IsOptional()
  sort: string;
}