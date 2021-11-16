import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { BibliosController } from './biblios.controller';
import { BibliosService } from './biblios.service';
import { BiblioRepository } from './biblio.repository';
import { SearchBibliosService } from 'src/search_biblios/search_biblios.service';
import { SearchBiblioRepository } from 'src/search_biblios/search_biblio.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([BiblioRepository, SearchBiblioRepository]),
        AuthModule
    ],
    controllers: [BibliosController],
    providers: [BibliosService, SearchBibliosService],
})
export class BibliosModule { }
