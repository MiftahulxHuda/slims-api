import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { BibliosModule } from './biblios/biblios.module';
import { MSTAuthorsModule } from './mst_authors/mst_authors.module';
import { MSTGMDsModule } from './mst_gmds/mst_gmds.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    BibliosModule,
    MSTAuthorsModule,
    MSTGMDsModule
  ]
})
export class AppModule {}
