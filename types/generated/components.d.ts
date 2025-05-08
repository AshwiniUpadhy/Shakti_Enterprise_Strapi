import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContentComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_components';
  info: {
    displayName: 'ContentComponent';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMediaBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_blocks';
  info: {
    description: '';
    displayName: 'MediaBlock';
  };
  attributes: {
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Blocks;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTable extends Struct.ComponentSchema {
  collectionName: 'components_shared_tables';
  info: {
    description: '';
    displayName: 'Table';
  };
  attributes: {
    row: Schema.Attribute.Component<'table.row', true>;
  };
}

export interface TableRow extends Struct.ComponentSchema {
  collectionName: 'components_table_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    Data: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.content-component': SharedContentComponent;
      'shared.media': SharedMedia;
      'shared.media-block': SharedMediaBlock;
      'shared.paragraph': SharedParagraph;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.table': SharedTable;
      'table.row': TableRow;
    }
  }
}
