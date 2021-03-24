import { Controller, Get, UseGuards, Post, Body, UsePipes, ValidationPipe, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { BiblioTopicsService } from './biblio_topics.service';
import { Biblio_Topic } from './biblio_topic.entity';
import { CreateBiblioTopicDto } from './dto/create-biblio-topic.dto';

// @ApiBearerAuth()
@ApiTags('biblio-topic')
@Controller('biblio-topic')
// @UseGuards(AuthGuard())
export class BiblioTopicsController {
    constructor(
        private BiblioTopicsService: BiblioTopicsService
    ) { }

    @Get('biblio_id/:biblio_id')
    getBiblioTopicsByBiblioId(@Param('biblio_id') biblio_id: number): Promise<Biblio_Topic[]> {
        return this.BiblioTopicsService.getBiblioTopicsByBiblioId(biblio_id);
    }

    @Post('bulk')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiBody({ type: [CreateBiblioTopicDto] })
    createBulkBiblioTopic(@Body() createBulkBiblioTopicDto: CreateBiblioTopicDto[]): Promise<Biblio_Topic[]> {
        return this.BiblioTopicsService.createBulkBiblioTopic(createBulkBiblioTopicDto);
    }

    @Delete('biblio_id/:biblio_id/topic_id/:topic_id')
    deleteBiblioTopicByBiblioIdAndTopicId(
        @Param('biblio_id', ParseIntPipe) biblio_id: number,
        @Param('topic_id', ParseIntPipe) topic_id: number
    ): Promise<void> {
        return this.BiblioTopicsService.deleteBiblioTopicByBiblioIdAndTopicId(
            biblio_id,
            topic_id
        );
    }
}