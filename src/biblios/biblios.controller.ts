import { Controller, Get, UseGuards, Param, ParseIntPipe, Post, Body, Delete } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { BibliosService } from './biblios.service';
import { Biblio } from './biblio.entity';
import { CreateBiblioDto } from './dto/create-biblio.dto';

// @ApiBearerAuth()
@ApiTags('biblios')
@Controller('biblios')
// @UseGuards(AuthGuard())
export class BibliosController {
  constructor(
    private bibliosService: BibliosService
  ) { }

  @Get()
  getBiblios(): Promise<Biblio[]> {
    return this.bibliosService.getBiblios();
  }

  @Get('/:biblio_id')
  getBiblioById(@Param('biblio_id', ParseIntPipe) biblio_id: number): Promise<Biblio> {
    return this.bibliosService.getBiblioById(biblio_id);
  }

  @Delete('/:biblio_id')
  deleteBiblio(@Param('biblio_id', ParseIntPipe) biblio_id: number): Promise<void> {
    return this.bibliosService.deleteBiblio(biblio_id);
  }
}