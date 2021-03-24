import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ItemRepository } from './item.repository';
import { Item } from './item.entity';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(ItemRepository)
        private ItemRepository: ItemRepository,
    ) { }

    async getItemByItemId(item_id: number): Promise<Item> {
        return this.ItemRepository.getItemByItemId(item_id);
    }

    async getItemsByBiblioId(biblio_id: number): Promise<Item[]> {
        return this.ItemRepository.getItemsByBiblioId(biblio_id);
    }

    async createBulkItem(createBulkItemDto: CreateItemDto[]): Promise<Item[]> {
        return this.ItemRepository.createBulkItem(createBulkItemDto);
    }

    async deleteItemByItemId(item_id: number): Promise<void> {
        return this.ItemRepository.deleteItemByItemId(item_id);
    }
}