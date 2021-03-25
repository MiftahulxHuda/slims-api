import { Controller, Get, UseGuards, Post, Body, UsePipes, ValidationPipe, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';

import { FilesService } from './files.service';
import { Files } from './files.entity';
import { CreateFilesDto } from './dto/create-file.dto';

// @ApiBearerAuth()
@ApiTags('files')
@Controller('files')
// @UseGuards(AuthGuard())
export class FilesController {
    constructor(
        private filesService: FilesService
    ) { }

    @Get('/:file_id')
    getFilesByFileId(@Param('file_id') file_id: number): Promise<Files> {
        return this.filesService.getFilesByFileId(file_id);
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    // @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('file_name', { dest: '/opt/lampp/htdocs/slims/repository' }))
    createBiblio(
        @Body() createFilesDto: CreateFilesDto,
        @UploadedFile() file_name
    ): Promise<Files> {
        if (file_name) {
            createFilesDto.file_name = file_name.filename;
            createFilesDto.mime_type = file_name.mimetype;
        }

        return this.filesService.createFiles(createFilesDto);
    }
}