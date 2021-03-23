import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { MST_Publisher } from './mst-publisher.entity';
import { CreateMSTPublisherDto } from './dto/create-mst-publisher.dto';

@EntityRepository(MST_Publisher)
export class MSTPublisherRepository extends Repository<MST_Publisher> {

    async getMSTPublishersByName(publisher_name: string): Promise<MST_Publisher[]> {
        try {
            const query = await this.find({
                where: {
                    publisher_name: Like(`%${publisher_name ? publisher_name : ''}%`)
                }
            });
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async createMSTPublisher(createMSTPublisherDto: CreateMSTPublisherDto): Promise<MST_Publisher> {
        const { publisher_name, input_date, last_update } = createMSTPublisherDto;

        const mst_publisher = new MST_Publisher();
        mst_publisher.publisher_name = publisher_name;
        mst_publisher.input_date = input_date;
        mst_publisher.last_update = last_update;

        try {
            await this.save(mst_publisher);
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return mst_publisher;
    }
}