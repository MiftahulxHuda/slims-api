import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item')
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    item_id: number;

    @Column()
    biblio_id: number;

    @Column()
    call_number: string;

    @Column()
    coll_type_id: number;

    @Column()
    item_code: string;

    @Column()
    inventory_code: string;

    @Column()
    received_date: string;

    @Column()
    order_no: string;

    @Column()
    location_id: string;

    @Column()
    order_date: string;

    @Column()
    item_status_id: string;

    @Column()
    site: string;

    @Column()
    source: string;

    @Column()
    invoice: string;

    @Column()
    price: number;

    @Column()
    price_currency: number;

    @Column()
    invoice_date: string;

    @Column()
    input_date: string;

    @Column()
    last_update: string;

    @Column()
    uid: string;
}
