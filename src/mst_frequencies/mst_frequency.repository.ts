import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Frequency } from './mst_frequency.entity';

@EntityRepository(MST_Frequency)
export class MSTFrequencyRepository extends Repository<MST_Frequency> {

    async getMSTFrequenciesByFrequency(frequency: string): Promise<MST_Frequency[]> {
        try {
            const query = await this.find({
                where: {
                    frequency: Like(`%${frequency ? frequency : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}