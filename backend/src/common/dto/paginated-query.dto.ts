import { IsOptional, IsString } from 'class-validator';

export class PaginatedQueryDto {
  @IsOptional()
  @IsString()
  page?: string;

  @IsOptional()
  @IsString()
  limit?: string;
}
