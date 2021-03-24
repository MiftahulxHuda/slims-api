import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTSuppliersService } from './mst_suppliers.service';
import { MST_Supplier } from './mst_supplier.entity';

// @ApiBearerAuth()
@ApiTags('mst-supplier')
@Controller('mst-supplier')
// @UseGuards(AuthGuard())
export class MSTSuppliersController {
  constructor(
    private MSTSuppliersService: MSTSuppliersService
  ) { }

  @Get('/:supplier_name')
  @ApiQuery({ name: 'supplier_name', required: false })
  getMSTSuppliersBySupplierName(@Query('supplier_name') supplier_name: string): Promise<MST_Supplier[]> {
    return this.MSTSuppliersService.getMSTSuppliersBySupplierName(supplier_name);
  }
}