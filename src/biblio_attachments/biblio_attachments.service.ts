import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BiblioAttachmentRepository } from './biblio_attachment.repository';
import { Biblio_Attachment } from './biblio_attachment.entity';
import { CreateBiblioAttachmentDto } from './dto/create-biblio-attachment.dto';

@Injectable()
export class BiblioAttachmentsService {
    constructor(
        @InjectRepository(BiblioAttachmentRepository)
        private biblioAttachmentRepository: BiblioAttachmentRepository,
    ) { }

    async getBiblioAttachmentsByBiblioId(biblio_id: number): Promise<Biblio_Attachment[]> {
        return this.biblioAttachmentRepository.getBiblioAttachmentsByBiblioId(biblio_id);
    }

    async createBulkBiblioAttachment(createBulkBiblioAttachmentDto: CreateBiblioAttachmentDto[]): Promise<Biblio_Attachment[]> {
        return this.biblioAttachmentRepository.createBulkBiblioAttachment(createBulkBiblioAttachmentDto);
    }

    async deleteBiblioAttachmentByBiblioIdAndFileId(biblio_id: number, file_id: number): Promise<void> {
        return this.biblioAttachmentRepository.deleteBiblioAttachmentByBiblioIdAndFileId(biblio_id, file_id);
    }
}