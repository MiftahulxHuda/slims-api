import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTLocationsService } from './mst_locations.service';
import { MST_Location } from './mst_location.entity';

// @ApiBearerAuth()
@ApiTags('mst-location')
@Controller('mst-location')
// @UseGuards(AuthGuard())
export class MSTLocationsController {
  constructor(
    private MSTLocationsService: MSTLocationsService
  ) { }

  @Get('location_name/:location_name')
  @ApiQuery({ name: 'location_name', required: false })
  getMSTLocationsByLocationName(@Query('location_name') location_name: string): Promise<MST_Location[]> {
    return this.MSTLocationsService.getMSTLocationsByLocationName(location_name);
  }
}