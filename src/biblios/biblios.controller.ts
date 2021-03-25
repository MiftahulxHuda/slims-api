import { Controller, Get, UseGuards, Param, ParseIntPipe, Post, Body, Delete, UseInterceptors, UploadedFile, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from "@nestjs/platform-express";

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { BibliosService } from './biblios.service';
import { Biblio } from './biblio.entity';
import { CreateBiblioDto } from './dto/create-biblio.dto';
import { diskStorage } from 'multer';

// @ApiBearerAuth()
@ApiTags('biblio')
@Controller('biblio')
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