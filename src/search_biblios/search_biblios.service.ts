import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SearchBiblioRepository } from './search_biblio.repository';
import { CreateSearchBiblioDto } from './dto/create-search-biblio.dto';
import { Search_Biblio } from './search_biblio.entity';
import { DbGenService } from 'src/utils/DbGenService';

@Injectable()
export class SearchBibliosService extends DbGenService<Search_Biblio> {
  constructor(
    @InjectRepository(SearchBiblioRepository)
    private searchbiblioRepository: SearchBiblioRepository,
  ) {
    super(searchbiblioRepository);
  }

  async createSearchBiblio(createSearchBiblioDto: CreateSearchBiblioDto): Promise<Search_Biblio> {
    return this.searchbiblioRepository.createSearchBiblio(createSearchBiblioDto);
  }
}