import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Placement, AccessType } from '../biblio_attachment.entity';

export class CreateBiblioAttachmentDto {
    @ApiProperty()
    @IsNotEmpty()
    biblio_id: number;

    @ApiProperty()
    @IsNotEmpty()
    file_id: number;

    @ApiProperty({ default: Placement.LINK })
    @IsNotEmpty()
    placement: Placement;

    @ApiProperty({ default: AccessType.PUBLIC })
    @IsNotEmpty()
    access_type: AccessType;

    @ApiProperty({ default: null })
    access_limit: string;
}