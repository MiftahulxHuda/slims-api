import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CustomDate } from 'src/utils/custom-date';
import { TimeUnit } from '../mst_frequency.entity';

export class UpdateMSTFrequencyDto {
    @ApiProperty()
    @IsNotEmpty()
    frequency: string;

    @ApiProperty()
    @IsNotEmpty()
    language_prefix: string;

    @ApiProperty()
    @IsNotEmpty()
    time_increment: string;

    @ApiProperty({ enum: ['day', 'week', 'month', 'year'] })
    time_unit: TimeUnit;
    
    last_update: string = new CustomDate().getDate();
}