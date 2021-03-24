import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MSTSupplierRepository } from './mst_supplier.repository';
import { MST_Supplier } from './mst_supplier.entity';

@Injectable()
export class MSTSuppliersService {
    constructor(
        @InjectRepository(MSTSupplierRepository)
        private MSTSupplierRepository: MSTSupplierRepository,
    ) { }

    async getMSTSuppliersBySupplierName(supplier_name: string): Promise<MST_Supplier[]> {
        return this.MSTSupplierRepository.getMSTSuppliersBySupplierName(supplier_name);
    }
}