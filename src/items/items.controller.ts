import { Controller, Get, UseGuards, Post, Body, UsePipes, ValidationPipe, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { ItemsService } from './items.service';
import { Item } from './item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemValidationPipe } from './item-validation.pipe';

// @ApiBearerAuth()
@ApiTags('item')
@Controller('item')
// @UseGuards(AuthGuard())
export class ItemsController {
    constructor(
        private ItemsService: ItemsService
    ) { }

    @Get('/:item_id')
    getItemByItemId(@Param('item_id') item_id: number): Promise<Item> {
        return this.ItemsService.getItemByItemId(item_id);
    }

    @Get('biblio_id/:biblio_id')
    getItemsByBiblioId(@Param('biblio_id') biblio_id: number): Promise<Item[]> {
        return this.ItemsService.getItemsByBiblioId(biblio_id);
    }

    @Post('bulk')
    @ApiBody({ type: [CreateItemDto] })
    @UsePipes(new ItemValidationPipe())
    createBulkItem(@Body() createBulkItemDto: CreateItemDto[]): Promise<Item[]> {
        return this.ItemsService.createBulkItem(createBulkItemDto);
    }

    @Delete('/:item_id')
    deleteItemByItemId(@Param('item_id', ParseIntPipe) item_id: number): Promise<void> {
        return this.ItemsService.deleteItemByItemId(item_id);
    }
}