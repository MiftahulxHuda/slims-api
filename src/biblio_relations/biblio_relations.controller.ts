import { Controller, Get, UseGuards, Post, Body, UsePipes, ValidationPipe, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { BiblioRelationsService } from './biblio_relations.service';
import { Biblio_Relation } from './biblio_relation.entity';
import { CreateBiblioRelationDto } from './dto/create-biblio-relation.dto';

// @ApiBearerAuth()
@ApiTags('biblio-relation')
@Controller('biblio-relation')
// @UseGuards(AuthGuard())
export class BiblioRelationsController {
    constructor(
        private BiblioRelationsService: BiblioRelationsService
    ) { }

    @Get('biblio_id/:biblio_id')
    getBiblioRelationsByBiblioId(@Param('biblio_id') biblio_id: number): Promise<Biblio_Relation[]> {
        return this.BiblioRelationsService.getBiblioRelationsByBiblioId(biblio_id);
    }

    @Post('bulk')
    @ApiBody({ type: [CreateBiblioRelationDto] })
    createBulkBiblioRelation(@Body() createBulkBiblioRelationDto: CreateBiblioRelationDto[]): Promise<Biblio_Relation[]> {
        return this.BiblioRelationsService.createBulkBiblioRelation(createBulkBiblioRelationDto);
    }

    @Delete('biblio_id/:biblio_id/rel_biblio_id/:rel_biblio_id')
    deleteBiblioRelationByBiblioIdAndRelBiblioId(
        @Param('biblio_id', ParseIntPipe) biblio_id: number,
        @Param('rel_biblio_id', ParseIntPipe) rel_biblio_id: number
    ): Promise<void> {
        return this.BiblioRelationsService.deleteBiblioRelationByBiblioIdAndRelBiblioId(
            biblio_id,
            rel_biblio_id
        );
    }
}