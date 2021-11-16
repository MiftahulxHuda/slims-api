import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CustomDate } from 'src/utils/custom-date';
import { TopicType } from '../mst_topic.entity';

export class UpdateMSTTopicDto {
    @ApiProperty()
    @IsNotEmpty()
    topic: string;

    @ApiProperty({ enum: ['t', 'g', 'n', 'tm', 'gr', 'oc'] })
    topic_type: TopicType;

    @ApiProperty()
    auth_list: string;
    
    last_update: string = new CustomDate().getDate();
}