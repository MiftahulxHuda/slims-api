import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Supplier } from './mst_supplier.entity';

@EntityRepository(MST_Supplier)
export class MSTSupplierRepository extends Repository<MST_Supplier> {

    async getMSTSuppliersBySupplierName(supplier_name: string): Promise<MST_Supplier[]> {
        try {
            const query = await this.find({
                where: {
                    supplier_name: Like(`%${supplier_name ? supplier_name : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}