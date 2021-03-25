import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CustomDate } from 'src/utils/custom-date';

export class CreateSearchBiblioDto {
    @ApiProperty()
    @IsNotEmpty()
    biblio_id: number;
  
    @ApiProperty()
    @IsNotEmpty()
    title: string;
  
    @ApiProperty({ required: false, default: null })
    edition: string;

    @ApiProperty({ required: false, default: null })
    isbn_issn: string;
  
    @ApiProperty({ required: false, default: null })
    author: string;
  
    @ApiProperty({ required: false, default: null })
    gmd: string;
  
    @ApiProperty({ required: false, default: null })
    publisher: string;
  
    @ApiProperty({ required: false, default: null })
    publish_place: string;
  
    @ApiProperty({ required: false, default: null })
    language: string;
  
    @ApiProperty({ required: false, default: null })
    classification: string;
    
    @ApiProperty({ required: false, default: null })
    spec_detail_info: string;
  
    @ApiProperty({ required: false, default: '' })
    carrier_type: string;
  
    @ApiProperty({ required: false, default: '' })
    content_type: string;
  
    @ApiProperty({ required: false, default: '' })
    media_type: string;
  
    @ApiProperty({ required: false, default: null })
    location: string;
  
    @ApiProperty({ required: false, default: null })
    publish_year: string;
  
    @ApiProperty({ required: false, default: null })
    notes: string;
  
    @ApiProperty({ required: false, default: null })
    series_title: string;
  
    @ApiProperty({ required: false, default: null })
    items: string;
  
    @ApiProperty({ required: false, default: null })
    collection_types: string;
  
    @ApiProperty({ required: false, default: null })
    call_number: string;
  
    @ApiProperty({ required: false, default: 0 })
    opac_hide: string;
  
    @ApiProperty({ required: false, default: 0 })
    promoted: string;
  
    @ApiProperty({ required: false, default: null })
    labels: string;
  
    @ApiProperty({ required: false, default: null })
    collation: string;
  
    @ApiProperty({ required: false, default: null })
    image: string;
  
    input_date: string = new CustomDate().getDateTime();
  
    last_update: string = new CustomDate().getDateTime();
}