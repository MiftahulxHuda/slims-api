import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTMediaTypeRepository } from './mst_media_type.repository';
import { MST_Media_Type } from './mst_media_type.entity';

@Injectable()
export class MSTMediaTypesService {
    constructor(
        @InjectRepository(MSTMediaTypeRepository)
        private MSTMediaTypeRepository: MSTMediaTypeRepository,
    ) { }

    async getMSTMediaTypesByMediaType(media_type: string): Promise<MST_Media_Type[]> {
        return this.MSTMediaTypeRepository.getMSTMediaTypesByMediaType(media_type);
    }
}