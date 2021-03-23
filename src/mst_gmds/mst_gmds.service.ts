import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTGMDRepository } from './mst_gmd.repository';
import { MST_GMD } from './mst_gmd.entity';

@Injectable()
export class MSTGMDsService {
    constructor(
        @InjectRepository(MSTGMDRepository)
        private MSTGMDRepository: MSTGMDRepository,
    ) { }

    async getMSTGMDsByName(gmd_name: string): Promise<MST_GMD[]> {
        return this.MSTGMDRepository.getMSTGMDsByName(gmd_name);
    }
}