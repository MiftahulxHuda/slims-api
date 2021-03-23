import { Controller, Get, UseGuards, Post, Body, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTPublishersService } from './mst_publishers.service';
import { MST_Publisher } from './mst-publisher.entity';
import { CreateMSTPublisherDto } from './dto/create-mst-publisher.dto';

// @ApiBearerAuth()
@ApiTags('mst-publisher')
@Controller('mst-publisher')
// @UseGuards(AuthGuard())
export class MSTPublishersController {
  constructor(
    private MSTPublishersService: MSTPublishersService
  ) { }

  @Get('/:publisher_name')
  @ApiQuery({ name: 'publisher_name', required: false })
  getMSTPublishersByName(@Query('publisher_name') publisher_name: string): Promise<MST_Publisher[]> {
    return this.MSTPublishersService.getMSTPublishersByName(publisher_name);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createMSTAuthor(@Body() createMSTAuthorDto: CreateMSTPublisherDto): Promise<MST_Publisher> {
    return this.MSTPublishersService.createMSTPublisher(createMSTAuthorDto);
  }
}