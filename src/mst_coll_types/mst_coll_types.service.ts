import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTCollTypeRepository } from './mst_coll_type.repository';
import { MST_Coll_Type } from './mst_coll_type.entity';

@Injectable()
export class MSTCollTypesService {
    constructor(
        @InjectRepository(MSTCollTypeRepository)
        private MSTCollTypeRepository: MSTCollTypeRepository,
    ) { }

    async getMSTCollTypesByCollTypeName(CollType_name: string): Promise<MST_Coll_Type[]> {
        return this.MSTCollTypeRepository.getMSTCollTypesByCollTypeName(CollType_name);
    }
}