import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CustomDate } from 'src/utils/custom-date';

export class CreateFilesDto {
    @ApiProperty()
    @IsNotEmpty()
    file_title: string;

    @ApiProperty({ type: 'string', format: 'binary', required: false })
    file_name: string;

    @ApiProperty({ required: false })
    file_url: string;
    
    @ApiProperty({ required: false })
    file_dir: string;

    @ApiProperty({ required: false })
    mime_type: string;

    @ApiProperty({ required: false })
    file_desc: string;

    @ApiProperty({ required: false })
    uploader_id: number;

    input_date: string = new CustomDate().getDateTime();

    last_update: string = new CustomDate().getDateTime();
}