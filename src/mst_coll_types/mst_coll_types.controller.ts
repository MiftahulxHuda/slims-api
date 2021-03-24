import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTCollTypesService } from './mst_coll_types.service';
import { MST_Coll_Type } from './mst_coll_type.entity';

// @ApiBearerAuth()
@ApiTags('mst-coll-type')
@Controller('mst-coll-type')
// @UseGuards(AuthGuard())
export class MSTCollTypesController {
  constructor(
    private MSTCollTypesService: MSTCollTypesService
  ) { }

  @Get('/:coll_type_name')
  @ApiQuery({ name: 'coll_type_name', required: false })
  getMSTCollTypesByCollTypeName(@Query('coll_type_name') coll_type_name: string): Promise<MST_Coll_Type[]> {
    return this.MSTCollTypesService.getMSTCollTypesByCollTypeName(coll_type_name);
  }
}