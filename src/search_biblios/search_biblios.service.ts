import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SearchBiblioRepository } from './search_biblio.repository';
import { CreateSearchBiblioDto } from './dto/create-search-biblio.dto';
import { Search_Biblio } from './search_biblio.entity';

@Injectable()
export class SearchBibliosService {
  constructor(
    @InjectRepository(SearchBiblioRepository)
    private searchbiblioRepository: SearchBiblioRepository,
  ) { }

  async createSearchBiblio(createSearchBiblioDto: CreateSearchBiblioDto): Promise<Search_Biblio> {
    return this.searchbiblioRepository.createSearchBiblio(createSearchBiblioDto);
  }
}