import { Controller, Get, UseGuards, Post, Body, UsePipes, ValidationPipe, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { BiblioAttachmentsService } from './biblio_attachments.service';
import { Biblio_Attachment } from './biblio_attachment.entity';
import { CreateBiblioAttachmentDto } from './dto/create-biblio-attachment.dto';

// @ApiBearerAuth()
@ApiTags('biblio-attachment')
@Controller('biblio-attachment')
// @UseGuards(AuthGuard())
export class BiblioAttachmentsController {
    constructor(
        private biblioAttachmentsService: BiblioAttachmentsService
    ) { }

    @Get('biblio_id/:biblio_id')
    getBiblioAttachmentsByBiblioId(@Param('biblio_id') biblio_id: number): Promise<Biblio_Attachment[]> {
        return this.biblioAttachmentsService.getBiblioAttachmentsByBiblioId(biblio_id);
    }

    @Post('bulk')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiBody({ type: [CreateBiblioAttachmentDto] })
    createBulkBiblioAttachment(@Body() createBulkBiblioAttachmentDto: CreateBiblioAttachmentDto[]): Promise<Biblio_Attachment[]> {
        return this.biblioAttachmentsService.createBulkBiblioAttachment(createBulkBiblioAttachmentDto);
    }

    @Delete('biblio_id/:biblio_id/file_id/:file_id')
    deleteBiblioAttachmentByBiblioIdAndFileId(
        @Param('biblio_id', ParseIntPipe) biblio_id: number,
        @Param('file_id', ParseIntPipe) file_id: number
    ): Promise<void> {
        return this.biblioAttachmentsService.deleteBiblioAttachmentByBiblioIdAndFileId(
            biblio_id,
            file_id
        );
    }
}