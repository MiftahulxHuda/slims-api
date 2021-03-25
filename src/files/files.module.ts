import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { FilesRepository } from './file.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([FilesRepository]),
        AuthModule
    ],
    controllers: [FilesController],
    providers: [FilesService],
})
export class FilesModule { }
