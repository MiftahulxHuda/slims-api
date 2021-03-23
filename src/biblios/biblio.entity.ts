import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { MST_GMD } from 'src/mst_gmds/mst_gmd.entity';
import { MST_Publisher } from 'src/mst_publishers/mst-publisher.entity';
import { MST_Language } from 'src/mst_languages/mst_language.entity';
import { MST_Place } from 'src/mst_places/mst_place.entity';
import { MST_Frequency } from 'src/mst_frequencies/mst_frequency.entity';
import { MST_Content_Type } from 'src/mst_content_types/mst_content_type.entity';
import { MST_Media_Type } from 'src/mst_media_types/mst_media_type.entity';
import { MST_Carrier_Type } from 'src/mst_carrier_types/mst_carrier_type.entity';

@Entity('biblio')
export class Biblio extends BaseEntity {
  @PrimaryGeneratedColumn()
  biblio_id: number;

  @ManyToOne(() => MST_GMD, mst_gmd => mst_gmd.gmd_id, { eager: false })
  mst_gmd: MST_GMD;

  @Column()
  title: string;

  @Column()
  sor: string;

  @Column()
  edition: string;

  @Column()
  isbn_issn: string;

  @ManyToOne(() => MST_Publisher, mst_publisher => mst_publisher.publisher_id, { eager: false })
  mst_publisher: MST_Publisher;

  @Column()
  publish_year: string;

  @Column()
  collation: string;

  @Column()
  series_title: string;

  @Column()
  call_number: string;

  @ManyToOne(() => MST_Language, mst_language => mst_language.language_id, { eager: false })
  mst_language: MST_Language;

  @Column()
  source: string;

  @ManyToOne(() => MST_Place, mst_place => mst_place.place_id, { eager: false })
  mst_place: MST_Place;

  @Column()
  classification: string;

  @Column()
  notes: string;

  @Column()
  image: string;

  @Column()
  file_att: string;

  @Column()
  opac_hide: number;

  @Column()
  promoted: number;

  @Column()
  labels: string;

  @ManyToOne(() => MST_Frequency, mst_frequency => mst_frequency.frequency_id, { eager: false })
  mst_frequency: MST_Frequency;

  @Column()
  spec_detail_info: string;

  @ManyToOne(() => MST_Content_Type, mst_content_type => mst_content_type.id, { eager: false })
  mst_content_type: MST_Content_Type;

  @ManyToOne(() => MST_Media_Type, mst_media_type => mst_media_type.id, { eager: false })
  mst_media_type: MST_Media_Type;

  @ManyToOne(() => MST_Carrier_Type, mst_carrier_type => mst_carrier_type.id, { eager: false })
  mst_carrier_type: MST_Carrier_Type;

  @Column({ select: false })
  input_date: string;

  @Column({ select: false })
  last_update: string;

  @Column()
  uid: number;
}
