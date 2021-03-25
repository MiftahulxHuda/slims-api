import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FilesRepository } from './file.repository';
import { Files } from './files.entity';
import { CreateFilesDto } from './dto/create-file.dto';

@Injectable()
export class FilesService {
    constructor(
        @InjectRepository(FilesRepository)
        private filesRepository: FilesRepository,
    ) { }

    async getFilesByFileId(file_id: number): Promise<Files> {
        return this.filesRepository.getFilesByFileId(file_id);
    }

    async createFiles(createFilesDto: CreateFilesDto): Promise<Files> {
        return this.filesRepository.createFiles(createFilesDto);
    }
}