import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BiblioRelationRepository } from './biblio_relation.repository';
import { Biblio_Relation } from './biblio_relation.entity';
import { CreateBiblioRelationDto } from './dto/create-biblio-relation.dto';

@Injectable()
export class BiblioRelationsService {
    constructor(
        @InjectRepository(BiblioRelationRepository)
        private BiblioRelationRepository: BiblioRelationRepository,
    ) { }

    async getBiblioRelationsByBiblioId(biblio_id: number): Promise<Biblio_Relation[]> {
        return this.BiblioRelationRepository.getBiblioRelationsByBiblioId(biblio_id);
    }

    async createBulkBiblioRelation(createBulkBiblioRelationDto: CreateBiblioRelationDto[]): Promise<Biblio_Relation[]> {
        return this.BiblioRelationRepository.createBulkBiblioRelation(createBulkBiblioRelationDto);
    }

    async deleteBiblioRelationByBiblioIdAndRelBiblioId(biblio_id: number, rel_biblio_id: number): Promise<void> {
        return this.BiblioRelationRepository.deleteBiblioRelationByBiblioIdAndRelBiblioId(biblio_id, rel_biblio_id);
    }
}