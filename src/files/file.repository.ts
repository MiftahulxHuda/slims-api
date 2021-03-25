import { EntityRepository, Repository, Like } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { Files } from './files.entity';
import { CreateFilesDto } from './dto/create-file.dto';

@EntityRepository(Files)
export class FilesRepository extends Repository<Files> {

    async getFilesByFileId(file_id: number): Promise<Files> {
        try {
            const query = await this.findOne({ where: { file_id: file_id }});
            return query;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async createFiles(createFilesDto: CreateFilesDto): Promise<Files> {
        const { 
            file_title, 
            file_name, 
            file_url, 
            file_dir, 
            mime_type, 
            file_desc, 
            uploader_id, 
            input_date, 
            last_update 
        } = createFilesDto;

        const files = new Files();
        files.file_title = file_title;
        files.file_name = file_name;
        files.file_url = file_url;
        files.file_dir = file_dir;
        files.mime_type = mime_type;
        files.file_desc = file_desc;
        files.uploader_id = uploader_id;
        files.input_date = input_date;
        files.last_update = last_update;

        try {
            await this.save(files);
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return files;
    }
}