import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTFrequencyRepository } from './mst_frequency.repository';
import { MST_Frequency } from './mst_frequency.entity';

@Injectable()
export class MSTFrequenciesService {
    constructor(
        @InjectRepository(MSTFrequencyRepository)
        private MSTFrequencyRepository: MSTFrequencyRepository,
    ) { }

    async getMSTFrequenciesByFrequency(frequency: string): Promise<MST_Frequency[]> {
        return this.MSTFrequencyRepository.getMSTFrequenciesByFrequency(frequency);
    }
}