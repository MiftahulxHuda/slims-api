import { Controller, Get, UseGuards, Post, Body, UsePipes, ValidationPipe, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { BiblioAuthorsService } from './biblio_authors.service';
import { Biblio_Author } from './biblio_author.entity';
import { CreateBiblioAuthorDto } from './dto/create-biblio-author.dto';

// @ApiBearerAuth()
@ApiTags('biblio-author')
@Controller('biblio-author')
// @UseGuards(AuthGuard())
export class BiblioAuthorsController {
    constructor(
        private BiblioAuthorsService: BiblioAuthorsService
    ) { }

    @Get('/:biblio_id')
    getBiblioAuthorsByBiblioId(@Param('biblio_id') biblio_id: number): Promise<Biblio_Author[]> {
        return this.BiblioAuthorsService.getBiblioAuthorsByBiblioId(biblio_id);
    }

    @Post('bulk')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiBody({ type: [CreateBiblioAuthorDto] })
    createBulkBiblioAuthor(@Body() createBulkBiblioAuthorDto: CreateBiblioAuthorDto[]): Promise<Biblio_Author[]> {
        return this.BiblioAuthorsService.createBulkBiblioAuthor(createBulkBiblioAuthorDto);
    }

    @Delete('/:biblio_id/:author_id')
    deleteBiblioAuthorByBiblioIdAndAuthorId(
        @Param('biblio_id', ParseIntPipe) biblio_id: number,
        @Param('author_id', ParseIntPipe) author_id: number
    ): Promise<void> {
        return this.BiblioAuthorsService.deleteBiblioAuthorByBiblioIdAndAuthorId(
            biblio_id,
            author_id
        );
    }
}