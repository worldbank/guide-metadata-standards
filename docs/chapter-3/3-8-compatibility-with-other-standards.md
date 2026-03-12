# 3.8 Compatibility with Other Metadata Standards

The metadata standards outlined in this section are not utilized by the
Bank for development data documentation (with the exception of SDMX for
indicators’ structural metadata). Nonetheless, these standards are
related and contribute to the broader metadata ecosystem for development
data. Where appropriate and applicable, the Bank aligns its
implementation of the metadata standards defined by the Chief
Statistician with these other standards to maintain consistency.

## 3.8.1 Statistical Data and Metadata Exchange (SDMX)

The Statistical Data and Metadata eXchange (SDMX) [^25], published as an
ISO International Standard (ISO 17369), establishes a framework for
exchanging statistical data and metadata using modern information
technology. As one of the sponsoring organizations of SDMX, the World
Bank is implementing SDMX for selected indicator datasets, with a
strategic goal of ensuring SDMX compliance in the dissemination of all
its time series data.

SDMX is primarily designed for machine-to-machine exchange of
statistical data and metadata. Its core artefacts include:

- **Data Structure Definitions (DSDs)**: templates that specify the
  dimensions, attributes, and measures for a dataset (i.e., the
  structural metadata required for data exchange).

- **Metadata Structure Definitions (MSDs)**: templates that define the
  structure of metadata reports which contain descriptive and reference
  metadata.

- **Concepts and Code Lists**: Concepts (e.g., “reference area,” “time
  period,” “unit,” “obs value”) are reusable semantic definitions that
  give meaning to dataset components; they are referenced in DSDs and
  MSDs. Code lists provide the permissible coded values for those
  concepts.

SDMX allows users to define MSDs as needed but does not dictate their
exact content. To support thorough and useful descriptive and reference
metadata for indicators, the Bank’s metadata standard offers a
well-organized collection of suggested elements. As a result, SDMX and
the Bank’s metadata standard work together in a complementary way,
rather than duplicating efforts.

To facilitate SDMX integration, the Bank’s metadata standard and the
Metadata Editor application have been designed with interoperability in
mind:

- The “data structure definition” section of the Bank’s indicator
  metadata standard allows for the export of SDMX-compliant DSDs.

- The templates and controlled vocabularies developed in the Metadata
  Editor can be exported as SDMX-compliant MSDs.

- Metadata generated using the Metadata Editor can be exported as
  SDMX-compliant metadatasets and reports.

## 3.8.2 DCAT, Schema.org, and Croissant 

To improve how data can be discovered, shared, and accessed online, the
Bank aligns its development data documentation with three complementary,
widely adopted metadata standards: DCAT, Schema.org, and Croissant.
While these are not used for managing metadata internally, they enhance
interoperability with external applications and increase visibility
through internet search engines and data catalogs. Ensuring
compatibility with these generic standards keeps the Bank’s metadata
ecosystem aligned with global data networks, making it easier for
external users to find, access, and integrate Bank data across web
platforms and search tools.”

- **DCAT (Data Catalog Vocabulary)**[^26] is a widely used vocabulary for
  publishing data catalogs on the Web, originally developed for
  government open data portals.

- **Schema.org**[^27] is a community-driven initiative founded by Google,
  Microsoft, Yahoo, and Yandex to develop a collection of schemas for
  structured data of any type published on the Internet. These schemas
  cover descriptive and metadata intended to improve search engine
  discoverability and facilitate metadata use and exchange.

- **Croissant**[^28] is a metadata format for machine learning datasets,
  developed as part of the MLCommons initiative by a collaboration of
  industry and academic partners. It extends Schema.org and provides a
  standardized, machine-readable structural metadata format for
  machine-learning (ML) datasets that makes datasets easier to discover,
  load across ML frameworks, and reuse with consistency.

The generation of metadata compliant with these additional, generic
standards is automated. A defined subset of fields from the Bank’s
specialized metadata standards is programmatically extracted and mapped
to DCAT, Schema.org, and Croissant profiles as appropriate, producing
compliant metadata artifacts without manual intervention by data
curators. This approach minimizes burden on teams, ensures consistency,
and enables continuous synchronization as source metadata evolves. Since
DCAT, Schema.org, and Croissant metadata include only part of the
canonical metadata, it is essential to maintain a clear connection to
the definitive metadata records.

## 3.8.3 Open Archives Initiative - Protocol for Metadata Harvesting (OAI-PMH)

The Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH)
is a simple mechanism for repository interoperability. Data Providers
are repositories that expose structured metadata via OAI-PMH. Service
Providers then make OAI-PMH service requests to harvest that metadata.
OAI-PMH is a set of six verbs or services that are invoked within
HTTP.[^29] The Bank seeks to develop data catalogs that comply with the
OAI protocol. The metadata standards used by the Bank provide all
necessary elements for compliance with OAI-PMH.

[^25]: <https://sdmx.org/>

[^26]: <https://www.w3.org/TR/vocab-dcat-3/>

[^27]: <https://schema.org> and <https://schema.org/Dataset>

[^28]: <https://mlcommons.org/2024/03/croissant_metadata_announce/> and <https://research.google/blog/croissant-a-metadata-format-for-ml-ready-datasets/>

[^29]: <https://www.openarchives.org/pmh/>
