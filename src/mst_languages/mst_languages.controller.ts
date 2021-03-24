import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTLanguagesService } from './mst_languages.service';
import { MST_Language } from './mst_language.entity';

// @ApiBearerAuth()
@ApiTags('mst-language')
@Controller('mst-language')
// @UseGuards(AuthGuard())
export class MSTLanguagesController {
  constructor(
    private MSTLanguagesService: MSTLanguagesService
  ) { }

  @Get('language_name/:language_name')
  @ApiQuery({ name: 'language_name', required: false })
  getMSTLanguagesByLanguageName(@Query('language_name') language_name: string): Promise<MST_Language[]> {
    return this.MSTLanguagesService.getMSTLanguagesByLanguageName(language_name);
  }
}