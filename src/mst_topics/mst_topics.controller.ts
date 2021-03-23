import { Controller, Get, UseGuards, Post, Body, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTTopicsService } from './mst_topics.service';
import { MST_Topic } from './mst_topic.entity';
import { CreateMSTTopicDto } from './dto/create-mst-topic.dto';

// @ApiBearerAuth()
@ApiTags('mst-topic')
@Controller('mst-topic')
// @UseGuards(AuthGuard())
export class MSTTopicsController {
  constructor(
    private MSTTopicsService: MSTTopicsService
  ) { }

  @Get('/:topic')
  @ApiQuery({ name: 'topic', required: false })
  getMSTTopicsByTopic(@Query('topic') topic: string): Promise<MST_Topic[]> {
    return this.MSTTopicsService.getMSTTopicsByTopic(topic);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createMSTTopic(@Body() createMSTTopicDto: CreateMSTTopicDto): Promise<MST_Topic> {
    return this.MSTTopicsService.createMSTTopic(createMSTTopicDto);
  }
}