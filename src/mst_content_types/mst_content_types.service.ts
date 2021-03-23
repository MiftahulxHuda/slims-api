import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTContentTypeRepository } from './mst_content_type.repository';
import { MST_Content_Type } from './mst_content_type.entity';

@Injectable()
export class MSTContentTypesService {
    constructor(
        @InjectRepository(MSTContentTypeRepository)
        private MSTContentTypeRepository: MSTContentTypeRepository,
    ) { }

    async getMSTContentTypesByContentType(content_type: string): Promise<MST_Content_Type[]> {
        return this.MSTContentTypeRepository.getMSTContentTypesByContentType(content_type);
    }
}