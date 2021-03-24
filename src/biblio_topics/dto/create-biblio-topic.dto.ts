import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { LevelBiblioTopic } from '../level-biblio-topic.enum';

export class CreateBiblioTopicDto {
    @ApiProperty()
    @IsNotEmpty()
    biblio_id: number;

    @ApiProperty()
    @IsNotEmpty()
    topic_id: number;

    @ApiProperty({ default: LevelBiblioTopic.PRIMARY })
    @IsNotEmpty()
    level: number;
}