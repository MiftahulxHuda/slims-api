import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { SearchBiblioRepository } from './search_biblio.repository';
import { SearchBibliosController } from './search_biblios.controller';
import { SearchBibliosService } from './search_biblios.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([SearchBiblioRepository]),
        AuthModule
    ],
    controllers: [SearchBibliosController],
    providers: [SearchBibliosService],
})
export class SearchBibliosModule { }
