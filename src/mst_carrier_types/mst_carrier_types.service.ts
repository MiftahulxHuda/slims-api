import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTCarrierTypeRepository } from './mst_carrier_type.repository';
import { MST_Carrier_Type } from './mst_carrier_type.entity';

@Injectable()
export class MSTCarrierTypesService {
    constructor(
        @InjectRepository(MSTCarrierTypeRepository)
        private MSTCarrierTypeRepository: MSTCarrierTypeRepository,
    ) { }

    async getMSTCarrierTypesByCarrierType(carrier_type: string): Promise<MST_Carrier_Type[]> {
        return this.MSTCarrierTypeRepository.getMSTCarrierTypesByCarrierType(carrier_type);
    }
}