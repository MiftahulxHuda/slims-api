import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BiblioRepository } from './biblio.repository';
import { Biblio } from './biblio.entity';
import { Biblio_Attachment } from 'src/biblio_attachments/biblio_attachment.entity';
import { Biblio_Author } from 'src/biblio_authors/biblio_author.entity';
import { Biblio_Custom } from 'src/biblio_customs/biblio_custom.entity';
import { Biblio_Log } from 'src/biblio_logs/biblio_log.entity';
import { Biblio_Topic } from 'src/biblio_topics/biblio_topic.entity';
import { Comment } from 'src/comments/comments.entity';
import { Item } from 'src/items/item.entity';
import { Loan_History } from 'src/loan_histories/loan_history.entity';
import { Search_Biblio } from 'src/search_biblios/search_biblio.entity';
import { Serial } from 'src/serials/serial.entity';
import { CreateBiblioDto } from './dto/create-biblio.dto';

@Injectable()
export class BibliosService {
  constructor(
    @InjectRepository(BiblioRepository)
    private biblioRepository: BiblioRepository,
  ) { }

  async getBiblios(): Promise<Biblio[]> {
    return this.biblioRepository.getBiblios();
  }

  async getBiblioById(biblio_id: number): Promise<Biblio> {
    return this.biblioRepository.getBiblioById(biblio_id);
  }

  async createBiblio(createBiblioDto: CreateBiblioDto): Promise<Biblio> {
    return this.biblioRepository.createBiblio(createBiblioDto);
  }

  async deleteBiblio(id: number): Promise<void> {
    await this.biblioRepository.deleteQueryBuilder(Biblio_Attachment, { biblio_id: id });
    await this.biblioRepository.deleteQueryBuilder(Biblio_Author, { biblio_id: id });
    await this.biblioRepository.deleteQueryBuilder(Biblio_Custom, { biblio_id: id });
    await this.biblioRepository.deleteQueryBuilder(Biblio_Log, { biblio_id: id });
    await this.biblioRepository.deleteQueryBuilder(Biblio_Topic, { biblio_id: id });
    await this.biblioRepository.deleteQueryBuilder(Comment, { biblio_id: id });
    await this.biblioRepository.deleteQueryBuilder(Item, { biblio_id: id });
    await this.biblioRepository.deleteQueryBuilder(Loan_History, { biblio_id: id });
    await this.biblioRepository.deleteQueryBuilder(Search_Biblio, { biblio_id: id });
    await this.biblioRepository.deleteQueryBuilder(Serial, { biblio_id: id });
    await this.biblioRepository.deleteQueryBuilder(Biblio, { biblio_id: id });
  }
}