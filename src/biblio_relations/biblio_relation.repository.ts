import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { Biblio_Relation } from './biblio_relation.entity';
import { CreateBiblioRelationDto } from './dto/create-biblio-relation.dto';

@EntityRepository(Biblio_Relation)
export class BiblioRelationRepository extends Repository<Biblio_Relation> {

    async getBiblioRelationsByBiblioId(biblio_id: number): Promise<Biblio_Relation[]> {
        try {
            const query = await this.find({ where: { biblio_id: biblio_id } });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async createBulkBiblioRelation(createBulkBiblioRelationDto: CreateBiblioRelationDto[]): Promise<Biblio_Relation[]> {
        let bulkBiblioRelation: Biblio_Relation[] = createBulkBiblioRelationDto.map(item => {
            const biblioRelation = new Biblio_Relation();
            biblioRelation.biblio_id = item.biblio_id;
            biblioRelation.rel_biblio_id = item.rel_biblio_id;
            biblioRelation.rel_type = item.rel_type;
            return biblioRelation;
        });

        try {
            await this.save(bulkBiblioRelation);
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return bulkBiblioRelation;
    }

    async deleteBiblioRelationByBiblioIdAndRelBiblioId(biblio_id, rel_biblio_id): Promise<void> {
        try {
            await this.delete({ biblio_id: biblio_id, rel_biblio_id: rel_biblio_id });
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}