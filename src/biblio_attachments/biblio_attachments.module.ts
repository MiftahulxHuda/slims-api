import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { BiblioAttachmentRepository } from './biblio_attachment.repository';
import { BiblioAttachmentsController } from './biblio_attachments.controller';
import { BiblioAttachmentsService } from './biblio_attachments.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([BiblioAttachmentRepository]),
        AuthModule
    ],
    controllers: [BiblioAttachmentsController],
    providers: [BiblioAttachmentsService],
})
export class BiblioAttachmentsModule { }
