import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { Biblio_Attachment } from './biblio_attachment.entity';
import { CreateBiblioAttachmentDto } from './dto/create-biblio-attachment.dto';

@EntityRepository(Biblio_Attachment)
export class BiblioAttachmentRepository extends Repository<Biblio_Attachment> {

    async getBiblioAttachmentsByBiblioId(biblio_id: number): Promise<Biblio_Attachment[]> {
        try {
            const query = await this.find({ where: { biblio_id: biblio_id } });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async createBulkBiblioAttachment(createBulkBiblioAttachmentDto: CreateBiblioAttachmentDto[]): Promise<Biblio_Attachment[]> {
        let bulkBiblioAttachment: Biblio_Attachment[] = createBulkBiblioAttachmentDto.map(item => {
            const biblioAttachment = new Biblio_Attachment();
            biblioAttachment.biblio_id = item.biblio_id;
            biblioAttachment.file_id = item.file_id;
            biblioAttachment.placement = item.placement;
            biblioAttachment.access_type = item.access_type;
            biblioAttachment.access_limit = item.access_limit;
            return biblioAttachment;
        });

        try {
            await this.save(bulkBiblioAttachment);
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return bulkBiblioAttachment;
    }

    async deleteBiblioAttachmentByBiblioIdAndFileId(biblio_id, file_id): Promise<void> {
        try {
            await this.delete({ biblio_id: biblio_id, file_id: file_id });
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}