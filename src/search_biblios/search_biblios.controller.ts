import { Controller, Get, UseGuards, Param, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { SearchBibliosService } from './search_biblios.service';
import { CreateSearchBiblioDto } from './dto/create-search-biblio.dto';
import { Search_Biblio } from './search_biblio.entity';

// @ApiBearerAuth()
@ApiTags('search-biblio')
@Controller('search-biblio')
// @UseGuards(AuthGuard())
export class SearchBibliosController {
    constructor(
        private searchBibliosService: SearchBibliosService
    ) { }

    @Post()
    createSearchBiblio(@Body() createSearchBiblioDto: CreateSearchBiblioDto)/* : Promise<Search_Biblio> */ {
        return this.searchBibliosService.createSearchBiblio(createSearchBiblioDto);
    }
}