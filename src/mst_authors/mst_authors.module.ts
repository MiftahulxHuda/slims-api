import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { MSTAuthorRepository } from './mst_author.repository';
import { MSTAuthorsController } from './mst_authors.controller';
import { MSTAuthorsService } from './mst_authors.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([MSTAuthorRepository]),
        AuthModule
    ],
    controllers: [MSTAuthorsController],
    providers: [MSTAuthorsService],
})
export class MSTAuthorsModule { }
