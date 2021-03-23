import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { BiblioAuthorRepository } from './biblio_author.repository';
import { BiblioAuthorsController } from './biblio_authors.controller';
import { BiblioAuthorsService } from './biblio_authors.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([BiblioAuthorRepository]),
        AuthModule
    ],
    controllers: [BiblioAuthorsController],
    providers: [BiblioAuthorsService],
})
export class BiblioAuthorsModule { }
