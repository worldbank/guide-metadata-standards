# 2.5 Choosing the Right Level of Metadata Production

Metadata can be created at various levels depending on the dataset's
nature and its intended use.

- For **microdata** like surveys or census data, metadata is generated
  at the dataset level. It covers details about each specific survey or
  census, including files, variables, and methods. When surveys are part
  of a series, such as monthly labor force reports, each dataset has
  separate metadata that reflects both shared series elements and unique
  dataset features.

- **Geographic datasets** require metadata that may account for multiple
  layers or images within a dataset. The unit of data being documented
  is the dataset, but metadata specific to each data file included in
  the dataset can be generated.

  - For ***vector data*** metadata is compiled at the dataset level
    using the ISO 19115-1 standard, complemented with information at the
    data file level, compiled using the ISO 19110 feature catalog
    standard.

  - For ***raster data***, where a dataset may contain multiple images
    (e.g., different time periods, spectral bands, or tiles), the
    metadata is typically generated at the dataset level using the ISO
    19115-2 metadata standard.

  - Some datasets may include both ***vector and raster data***. Both
    types will be documented together but distinguished in the same
    record, using respectively the ISO 19115-1 and ISO 19115-2, with ISO
    19110 supporting the documentation of vector features.

- For **indicators**, metadata granularity becomes more complex.
  Indicators often reside within larger databases and have several time
  series. For example, the Bank’s World Development Indicators (WDI)
  database includes over 1,400 indicators for approximately 200
  countries, resulting in more than 280,000 time series. Metadata can be
  available at several levels:

<!-- -->

- ***Database level***: Summarizes the entire database, outlining its
  scope, purpose, and key attributes.

- ***Indicator level***: Defines methodologies, sources, and definitions
  applicable across all countries and periods.

- ***Time series level***: Adds context for a country or region within
  an indicator, including any adjustments specific to that time series.

- ***Value level***: Contains notes for individual data points,
  detailing sources, collection methods, or caveats.

> The primary emphasis is placed on indicator-level and dataset-level
> metadata. Time series or period-specific notes can be included within
> the indicator metadata. Metadata related to observation values should
> be recorded directly as annotations within the dataset.

- **Data processing and analysis scripts** have metadata created at the
  research project or process workflow level. Research projects document
  script roles, objectives, authors, dates, and context; data processing
  workflows group related scripts under one metadata record, describing
  the overall process and technical dependencies.

- **Documents**, such as papers, books, or reports, are generally
  documented individually. Multi-volume works may have collective
  metadata, but the recommended practice is to document each volume
  separately, especially if there are differences in authorship,
  publication date, or content.

- **Images** receive individual metadata records covering content,
  creator, date, format, and technical details. All versions of an image
  count as a single item, with one metadata file. Albums or collections
  to which an image belongs are referenced in each image’s metadata.

- **Videos** are documented individually, with metadata for title,
  creator, creation date, duration, format, and resolution. Multiple
  formats or resolutions are logged as versions within a same metadata
  record. Series or collections to which a video belongs are referenced
  in the individual video metadata.

- **Audio recordings** get metadata either as single files or as part of
  a group or collection. When documented as a group, each recording is
  documented within the collection metadata. Different formats or
  resolutions of a same recording are noted as versions of the same
  audio file within the same metadata record.
