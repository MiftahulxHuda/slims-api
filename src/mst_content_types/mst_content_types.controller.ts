import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTContentTypesService } from './mst_content_types.service';
import { MST_Content_Type } from './mst_content_type.entity';

// @ApiBearerAuth()
@ApiTags('mst-content-type')
@Controller('mst-content-type')
// @UseGuards(AuthGuard())
export class MSTContentTypesController {
  constructor(
    private MSTContentTypesService: MSTContentTypesService
  ) { }

  @Get('/:content_type')
  getMSTContentTypesByContentType(@Param('content_type') content_type: string): Promise<MST_Content_Type[]> {
    return this.MSTContentTypesService.getMSTContentTypesByContentType(content_type);
  }
}