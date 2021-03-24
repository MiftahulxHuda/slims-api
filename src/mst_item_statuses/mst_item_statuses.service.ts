import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTItemStatusRepository } from './mst_item_status.repository';
import { MST_Item_Status } from './mst_item_status.entity';

@Injectable()
export class MSTItemStatusesService {
    constructor(
        @InjectRepository(MSTItemStatusRepository)
        private MSTItemStatusRepository: MSTItemStatusRepository,
    ) { }

    async getMSTItemStatusesByItemStatusName(ItemStatus_name: string): Promise<MST_Item_Status[]> {
        return this.MSTItemStatusRepository.getMSTItemStatusesByItemStatusName(ItemStatus_name);
    }
}