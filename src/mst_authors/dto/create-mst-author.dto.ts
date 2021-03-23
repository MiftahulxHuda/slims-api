import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AuthorityType } from '../mst_author.entity';
import { CustomDate } from 'src/utils/custom-date';

export class CreateMSTAuthorDto {
    @ApiProperty()
    @IsNotEmpty()
    author_name: string;

    @ApiProperty({ enum: ['p', 'o', 'c']})
    @IsNotEmpty()
    authority_type: AuthorityType;

    @IsNotEmpty()
    input_date: string = new CustomDate().getDate();

    @IsNotEmpty()
    last_update: string = new CustomDate().getDate();
}