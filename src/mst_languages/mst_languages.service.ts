import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTLanguageRepository } from './mst_language.repository';
import { MST_Language } from './mst_language.entity';

@Injectable()
export class MSTLanguagesService {
    constructor(
        @InjectRepository(MSTLanguageRepository)
        private MSTLanguageRepository: MSTLanguageRepository,
    ) { }

    async getMSTLanguagesByLanguageName(language_name: string): Promise<MST_Language[]> {
        return this.MSTLanguageRepository.getMSTLanguagesByLanguageName(language_name);
    }
}