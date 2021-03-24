import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CustomDate } from 'src/utils/custom-date';
import { TopicType } from '../mst_topic.entity';

export class CreateMSTTopicDto {
    @ApiProperty()
    @IsNotEmpty()
    topic: string;

    @ApiProperty({ enum: ['t', 'g', 'n', 'tm', 'gr', 'oc'] })
    @IsNotEmpty()
    topic_type: TopicType;

    classification: string = '';

    @IsNotEmpty()
    input_date: string = new CustomDate().getDate();

    @IsNotEmpty()
    last_update: string = new CustomDate().getDate();
}