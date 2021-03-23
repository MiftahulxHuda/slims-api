import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTGMDsService } from './mst_gmds.service';
import { MST_GMD } from './mst_gmd.entity';

// @ApiBearerAuth()
@ApiTags('mst-gmd')
@Controller('mst-gmd')
// @UseGuards(AuthGuard())
export class MSTGMDsController {
  constructor(
    private MSTGMDsService: MSTGMDsService
  ) { }

  @Get('/:gmd_name')
  getMSTGMDsByName(@Param('gmd_name') gmd_name: string): Promise<MST_GMD[]> {
    return this.MSTGMDsService.getMSTGMDsByName(gmd_name);
  }
}