import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBiblioDto {
    @ApiProperty()
    gmd_id: number;

    @ApiProperty()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    sor: string;

    @ApiProperty()
    edition: string;

    @ApiProperty()
    isbn_issn: string;

    @ApiProperty()
    publisher_id: number;

    @ApiProperty()
    publisher_year: string;

    @ApiProperty()
    collation: string;

    @ApiProperty()
    series_title: string;

    @ApiProperty()
    call_number: string;

    @ApiProperty()
    language_id: string;

    @ApiProperty()
    source: string;

    @ApiProperty()
    publish_place_id: number;

    @ApiProperty()
    classification: string;

    @ApiProperty()
    notes: string;

    @ApiProperty()
    images: string;

    @ApiProperty()
    file_att: string;

    @ApiProperty()
    opac_hide: number;

    @ApiProperty()
    promoted: number;

    @ApiProperty()
    labels: string;

    @ApiProperty()
    frequency_id: number;

    @ApiProperty()
    spec_detail_info: string;

    @ApiProperty()
    content_type_id: number;

    @ApiProperty()
    media_type_id: number;
    
    @ApiProperty()
    carrier_type_id: number;

    @ApiProperty()
    input_date: string;

    @ApiProperty()
    last_update: string;
}