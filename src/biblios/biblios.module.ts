import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { BibliosController } from './biblios.controller';
import { BibliosService } from './biblios.service';
import { BiblioRepository } from './biblio.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([BiblioRepository]),
        AuthModule
    ],
    controllers: [BibliosController],
    providers: [BibliosService],
})
export class BibliosModule { }
