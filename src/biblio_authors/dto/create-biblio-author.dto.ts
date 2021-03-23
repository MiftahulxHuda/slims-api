import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { LevelBiblioAuthor } from '../level-biblio-author.enum';

export class CreateBiblioAuthorDto {
    @ApiProperty()
    @IsNotEmpty()
    biblio_id: number;

    @ApiProperty()
    @IsNotEmpty()
    author_id: number;

    @ApiProperty({ default: LevelBiblioAuthor.PRIMARY })
    @IsNotEmpty()
    level: number;
}