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
import { MSTFrequenciesModule } from './mst_frequencies/mst_frequencies.module';
import { MSTPublishersModule } from './mst_publishers/mst_publishers.module';
import { MSTLanguagesModule } from './mst_languages/mst_languages.module';
import { MSTTopicsModule } from './mst_topics/mst_topics.module';
import { BiblioAuthorsModule } from './biblio_authors/biblio_authors.module';
import { BiblioTopicsModule } from './biblio_topics/biblio_topics.module';
import { MSTLocationsModule } from './mst_locations/mst_locations.module';
import { MSTCollTypesModule } from './mst_coll_types/mst_coll_types.module';
import { MSTItemStatusesModule } from './mst_item_statuses/mst_item_statuses.module';
import { MSTSuppliersModule } from './mst_suppliers/mst_suppliers.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    BibliosModule,
    MSTAuthorsModule,
    MSTGMDsModule,
    MSTContentTypesModule,
    MSTMediaTypesModule,
    MSTCarrierTypesModule,
    MSTFrequenciesModule,
    MSTPublishersModule,
    MSTLanguagesModule,
    MSTTopicsModule,
    BiblioAuthorsModule,
    BiblioTopicsModule,
    MSTLocationsModule,
    MSTCollTypesModule,
    MSTItemStatusesModule,
    MSTSuppliersModule,
    ItemsModule
  ]
})
export class AppModule {}
