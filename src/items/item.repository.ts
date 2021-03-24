import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { Item } from './item.entity';
import { CreateItemDto } from './dto/create-item.dto';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {

    async getItemByItemId(item_id: number): Promise<Item> {
        try {
            const query = await this.findOne({ where: { item_id: item_id } });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
    
    async getItemsByBiblioId(biblio_id: number): Promise<Item[]> {
        try {
            const query = await this.find({ where: { biblio_id: biblio_id } });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async createBulkItem(createBulkItemDto: CreateItemDto[]): Promise<Item[]> {
        let bulkItem: Item[] = createBulkItemDto.map(data => {
            const item = new Item();
            item.biblio_id = data.biblio_id;
            item.call_number = data.call_number;
            item.coll_type_id = data.coll_type_id;
            item.item_code = data.item_code;
            item.inventory_code = data.inventory_code;
            item.received_date = data.received_date;
            item.supplier_id = data.supplier_id;
            item.order_no = data.order_no;
            item.location_id = data.location_id;
            item.order_date = data.order_date;
            item.item_status_id = data.item_status_id;
            item.site = data.site;
            item.source = data.source;
            item.invoice = data.invoice;
            item.price = data.price;
            item.price_currency = data.price_currency;
            item.invoice_date = data.invoice_date;
            item.input_date = data.input_date;
            item.last_update = data.last_update;
            item.uid = data.uid;
            return item;
        });

        try {
            await this.save(bulkItem);
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return bulkItem;
    }

    async deleteItemByItemId(item_id): Promise<void> {
        try {
            await this.delete({ item_id: item_id });
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}