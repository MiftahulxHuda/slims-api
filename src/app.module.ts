import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { BibliosModule } from './biblios/biblios.module';
import { MSTAuthorsModule } from './mst_authors/mst_authors.module';
import { MSTGMDsModule } from './mst_gmds/mst_gmds.module';
import { MSTContentTypesModule } from './mst_content_types/mst_content_types.module';
import { MSTMediaTypesModule } from './mst_media_types/mst_media_types.module';
import { MSTCarrierTypesModule } from './mst_carrier_types/mst_carrier_types.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    BibliosModule,
    MSTAuthorsModule,
    MSTGMDsModule,
    MSTContentTypesModule,
    MSTMediaTypesModule,
    MSTCarrierTypesModule
  ]
})
export class AppModule {}
