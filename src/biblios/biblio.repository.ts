import { EntityRepository, Repository, getConnection } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

import { Biblio } from './biblio.entity';
import { MST_GMD } from 'src/mst_gmds/mst_gmd.entity';
import { MST_Publisher } from 'src/mst_publishers/mst-publisher.entity';
import { MST_Language } from 'src/mst_languages/mst_language.entity';
import { MST_Place } from 'src/mst_places/mst_place.entity';
import { MST_Frequency } from 'src/mst_frequencies/mst_frequency.entity';
import { MST_Content_Type } from 'src/mst_content_types/mst_content_type.entity';
import { MST_Media_Type } from 'src/mst_media_types/mst_media_type.entity';
import { MST_Carrier_Type } from 'src/mst_carrier_types/mst_carrier_type.entity';

@EntityRepository(Biblio)
export class BiblioRepository extends Repository<Biblio> {

  async getBiblios(): Promise<Biblio[]> {
    const query = await this.createQueryBuilder("biblio")
      .select("biblio.*")
      .addSelect("mst_gmd.gmd_name AS gmd_name")
      .addSelect("mst_publisher.publisher_name AS publisher_name")
      .addSelect("mst_language.language_name AS language_name")
      .addSelect("mst_place.place_name AS place_name")
      .addSelect("mst_frequency.frequency AS frequency")
      .addSelect("mst_content_type.content_type AS content_type")
      .addSelect("mst_media_type.media_type AS media_type")
      .addSelect("mst_carrier_type.carrier_type AS carrier_type")
      .leftJoin(MST_GMD, "mst_gmd", "biblio.gmd_id = mst_gmd.gmd_id")
      .leftJoin(MST_Publisher, "mst_publisher", "biblio.publisher_id = mst_publisher.publisher_id")
      .leftJoin(MST_Language, "mst_language", "biblio.language_id = mst_language.language_id")
      .leftJoin(MST_Place, "mst_place", "biblio.publish_place_id = mst_place.place_id")
      .leftJoin(MST_Frequency, "mst_frequency", "biblio.frequency_id = mst_frequency.frequency_id")
      .leftJoin(MST_Content_Type, "mst_content_type", "biblio.content_type_id = mst_content_type.id")
      .leftJoin(MST_Media_Type, "mst_media_type", "biblio.media_type_id = mst_media_type.id")
      .leftJoin(MST_Carrier_Type, "mst_carrier_type", "biblio.carrier_type_id = mst_carrier_type.id")

    try {
      const tasks = await query.getRawMany();
      return tasks;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async getBiblioById(biblio_id: number): Promise<Biblio> {
    const query = await this.createQueryBuilder("biblio")
      .select("biblio.*")
      .addSelect("mst_gmd.gmd_name AS gmd_name")
      .addSelect("mst_publisher.publisher_name AS publisher_name")
      .addSelect("mst_language.language_name AS language_name")
      .addSelect("mst_place.place_name AS place_name")
      .addSelect("mst_frequency.frequency AS frequency")
      .addSelect("mst_content_type.content_type AS content_type")
      .addSelect("mst_media_type.media_type AS media_type")
      .addSelect("mst_carrier_type.carrier_type AS carrier_type")
      .leftJoin(MST_GMD, "mst_gmd", "biblio.gmd_id = mst_gmd.gmd_id")
      .leftJoin(MST_Publisher, "mst_publisher", "biblio.publisher_id = mst_publisher.publisher_id")
      .leftJoin(MST_Language, "mst_language", "biblio.language_id = mst_language.language_id")
      .leftJoin(MST_Place, "mst_place", "biblio.publish_place_id = mst_place.place_id")
      .leftJoin(MST_Frequency, "mst_frequency", "biblio.frequency_id = mst_frequency.frequency_id")
      .leftJoin(MST_Content_Type, "mst_content_type", "biblio.content_type_id = mst_content_type.id")
      .leftJoin(MST_Media_Type, "mst_media_type", "biblio.media_type_id = mst_media_type.id")
      .leftJoin(MST_Carrier_Type, "mst_carrier_type", "biblio.carrier_type_id = mst_carrier_type.id")
      .where("biblio.biblio_id = :biblio_id", { biblio_id: biblio_id })

    try {
      const tasks = await query.getRawOne();
      return tasks;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteQueryBuilder(entity, fields) {
    let query = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(entity)

    for (const key in fields) {
      await query.andWhere(`${key} = :${key}`, { [key]: fields[key] })
    }

    try {
      await query.execute();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}