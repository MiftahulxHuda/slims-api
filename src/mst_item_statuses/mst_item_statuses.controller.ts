import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTItemStatusesService } from './mst_item_statuses.service';
import { MST_Item_Status } from './mst_item_status.entity';

// @ApiBearerAuth()
@ApiTags('mst-item-status')
@Controller('mst-item-status')
// @UseGuards(AuthGuard())
export class MSTItemStatusesController {
  constructor(
    private MSTItemStatusesService: MSTItemStatusesService
  ) { }

  @Get('/:item_status_name')
  @ApiQuery({ name: 'item_status_name', required: false })
  getMSTItemStatusesByItemStatusName(@Query('item_status_name') item_status_name: string): Promise<MST_Item_Status[]> {
    return this.MSTItemStatusesService.getMSTItemStatusesByItemStatusName(item_status_name);
  }
}