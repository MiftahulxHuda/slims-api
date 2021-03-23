import { Controller, Get, UseGuards, Param, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { MST_Author } from './mst_author.entity';
import { CreateMSTAuthorDto } from './dto/create-mst-author.dto';
import { MSTAuthorsService } from './mst_authors.service';

// @ApiBearerAuth()
@ApiTags('mst-author')
@Controller('mst-author')
// @UseGuards(AuthGuard())
export class MSTAuthorsController {
  constructor(
    private MSTAuthorsService: MSTAuthorsService
  ) { }

  @Get('/:author_name')
  getMSTAuthorsByName(@Param('author_name') author_name: string): Promise<MST_Author[]> {
    return this.MSTAuthorsService.getMSTAuthorsByName(author_name);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createMSTAuthor(@Body() createMSTAuthorDto: CreateMSTAuthorDto): Promise<MST_Author> {
    return this.MSTAuthorsService.createMSTAuthor(createMSTAuthorDto);
  }
}