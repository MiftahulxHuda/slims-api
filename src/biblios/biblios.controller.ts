import { Controller, Get, UseGuards, Param, ParseIntPipe, Post, Body, Delete, UseInterceptors, UploadedFile, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiConsumes, ApiBody, ApiQuery } from '@nestjs/swagger';
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { BibliosService } from './biblios.service';
import { Biblio } from './biblio.entity';
import { CreateBiblioDto } from './dto/create-biblio.dto';
import { diskStorage } from 'multer';
import { SortPipe } from 'src/utils/SortPipe.pipe';
import { GetBiblioFilterDto } from './dto/get-biblio-filter.dto';
import { SearchBibliosService } from 'src/search_biblios/search_biblios.service';
import { Like } from 'typeorm';

// @ApiBearerAuth()  
@ApiTags('biblio')
@Controller('biblio')
// @UseGuards(AuthGuard())
export class BibliosController {
  constructor(
    private bibliosService: BibliosService,
    private searchBibliosService: SearchBibliosService
  ) { }

  @Get()
  @ApiQuery({ name: 'take', required: false })
  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'sort', required: false })
  @ApiQuery({ name: 'title', required: false })
  @UsePipes(new SortPipe())
  getBiblios(
    @Query() filterDto: GetBiblioFilterDto,
    @Query('take') take: number,
    @Query('skip') skip: number
  ): Promise<Biblio[]> {
    delete filterDto["take"];
    delete filterDto["skip"];

    const sort = filterDto.sort;

    let filter = {}

    if (filterDto.title) {
      filter["title"] = Like(`%${filterDto.title}%`)
    }

    return this.searchBibliosService.findAll(filter, sort, {
      take: take,
      skip: skip,
    });
  }

  @Get('/:biblio_id')
  getBiblioById(@Param('biblio_id', ParseIntPipe) biblio_id: number): Promise<Biblio> {
    return this.bibliosService.getBiblioById(biblio_id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  // @ApiConsumes('multipart/form-data')  
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: '/opt/lampp/htdocs/slims/images/docs',
      filename: (req, file, cb) => {
        if(file) {
          cb(null, file.originalname)
        }
      }
    })
  }))
  createBiblio(
    @Body() createBiblioDto: CreateBiblioDto,
    @UploadedFile() image
  ): Promise<Biblio> {
    if(image) {
      createBiblioDto.image = image.originalname;
    }

    return this.bibliosService.createBiblio(createBiblioDto);
  }

  @Delete('/:biblio_id')
  deleteBiblio(@Param('biblio_id', ParseIntPipe) biblio_id: number): Promise<void> {
    return this.bibliosService.deleteBiblio(biblio_id);
  }
}