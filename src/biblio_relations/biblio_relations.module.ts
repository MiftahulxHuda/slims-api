import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { BiblioRelationRepository } from './biblio_relation.repository';
import { BiblioRelationsController } from './biblio_relations.controller';
import { BiblioRelationsService } from './biblio_relations.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([BiblioRelationRepository]),
        AuthModule
    ],
    controllers: [BiblioRelationsController],
    providers: [BiblioRelationsService],
})
export class BiblioRelationsModule { }
