import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTLocationRepository } from './mst_location.repository';
import { MST_Location } from './mst_location.entity';

@Injectable()
export class MSTLocationsService {
    constructor(
        @InjectRepository(MSTLocationRepository)
        private MSTLocationRepository: MSTLocationRepository,
    ) { }

    async getMSTLocationsByLocationName(location_name: string): Promise<MST_Location[]> {
        return this.MSTLocationRepository.getMSTLocationsByLocationName(location_name);
    }
}