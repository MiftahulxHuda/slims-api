import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTFrequenciesService } from './mst_frequencies.service';
import { MST_Frequency } from './mst_frequency.entity';

// @ApiBearerAuth()
@ApiTags('mst-frequency')
@Controller('mst-frequency')
// @UseGuards(AuthGuard())
export class MSTFrequenciesController {
  constructor(
    private MSTFrequenciesService: MSTFrequenciesService
  ) { }

  @Get('frequency/:frequency')
  @ApiQuery({ name: 'frequency', required: false })
  getMSTFrequenciesByFrequency(@Query('frequency') frequency: string): Promise<MST_Frequency[]> {
    return this.MSTFrequenciesService.getMSTFrequenciesByFrequency(frequency);
  }
}