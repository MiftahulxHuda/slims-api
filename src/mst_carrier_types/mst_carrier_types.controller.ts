import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTCarrierTypesService } from './mst_carrier_types.service';
import { MST_Carrier_Type } from './mst_carrier_type.entity';

// @ApiBearerAuth()
@ApiTags('mst-carrier-type')
@Controller('mst-carrier-type')
// @UseGuards(AuthGuard())
export class MSTCarrierTypesController {
  constructor(
    private MSTCarrierTypesService: MSTCarrierTypesService
  ) { }

  @Get('/:carrier_type')
  getMSTCarrierTypesByCarrierType(@Param('carrier_type') carrier_type: string): Promise<MST_Carrier_Type[]> {
    return this.MSTCarrierTypesService.getMSTCarrierTypesByCarrierType(carrier_type);
  }
}