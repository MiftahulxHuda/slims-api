import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { BiblioTopicRepository } from './biblio_topic.repository';
import { BiblioTopicsController } from './biblio_topics.controller';
import { BiblioTopicsService } from './biblio_topics.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([BiblioTopicRepository]),
        AuthModule
    ],
    controllers: [BiblioTopicsController],
    providers: [BiblioTopicsService],
})
export class BiblioTopicsModule { }
