# 3.5 World Bank Group Metadata Standards by Data Type

This section outlines the metadata standards chosen by the WBG Chief
Statistician and formally implemented by the Bank for documenting
development data and associated resources. For a detailed description of
each standard, consult the online documentation of the standards.[^16]
For guidance on their use and a description of the elements they
contain, refer to the Metadata Editor User Guide,[^17] which also serves
as a reference guide for data curators.

## 3.5.1 Microdata

**Microdata** refers to electronic datasets that contain detailed
observations at the unit level, including individuals, households,
facilities, or enterprises. These datasets are commonly presented in
tabular format, with rows corresponding to observational units and
columns representing variables. A micro-dataset may comprise multiple
related files, which can exhibit hierarchical relationships (such as a
household file linked to individual-level files). Microdata is typically
sourced from surveys, censuses, administrative records, transactional
databases, or sensors.

The Bank has adopted the Data Documentation Initiative (DDI) metadata
standard—created and maintained by the DDI Alliance under the GNU
General Public License—for microdata documentation.[^18] The DDI standard
is extensively implemented by data archives, national statistical
authorities, and international organizations to facilitate systematic
preservation, distribution, and reuse of microdata.

The DDI standard has two main branches: LifeCycle and Codebook. The Bank
uses DDI Codebook (version 2.5 or above) to manage, present, exchange,
and preserve metadata in social and behavioral sciences. Metadata is
organized into five sections:

- **Document Description** – Metadata about the documentation itself,
  like creation date, version, authorship, and cataloging information.

- **Study Description** – Information about the study, including title,
  producer or principal investigator, objectives, data version, sampling
  design, geographic and temporal coverage, and thematic topics.

- **Data Files Description** – A concise description of each data file
  included in the dataset.

- **Variables Description** – Detailed information on each variable,
  such as names and labels, value categories, formats and types,
  interviewer notes, and summary statistics.

- **Variables Groups** – Virtual organization of variables into thematic
  or other groups. This is optional and not systematically implemented,
  but adds value for data discovery.

To improve usability and consistency throughout the Bank’s metadata
systems, several cross-cutting sections have been added to complement
the standard, such as “Additional,” “Provenance,” “Tags,” “DataCite,”
and “Administrative metadata.”

File- and variable-level sections create a data dictionary, which is
essential structural metadata for microdata assets. Building these
manually is time-consuming, but the Bank’s metadata editor simplifies
the process by importing datasets from formats like Stata or SPSS and
automatically extracting file names, variable details, labels, and
summary statistics from the data files. Curators can then add more
information, such as question text or skip patterns.

## 3.5.2 Indicators and Databases of Indicators

Two distinct metadata standards are implemented for documenting
indicators and their associated databases. The first standard is
designed to document each indicator individually, while the second
standard pertains to the documentation of databases or datasets
containing collections of indicators.

### Indicators 

**Indicators** are summary measures related to key issues or phenomena,
derived (and possibly modelled) from observed facts. Indicators form
*time series* when they are provided for a specific geography and with a
temporal ordering, i.e. when their values are provided with an ordered
annual, quarterly, monthly, daily, or other time reference.

The Bank developed a bespoke metadata standard for documenting
indicators by consolidating and structuring metadata elements utilized
by various organizations, including the Bank itself, United Nations
agencies, the International Monetary Fund (IMF), the Organisation for
Economic Co-operation and Development (OECD), and others. The standard
includes elements such as a unique identifier, label, definition,
methodology information, details about the data producer and source,
geographic and temporal coverage, a list of relevant keywords or topics,
and information on known data limitations, among others.

The standard is compatible with the Statistical Data and Metadata
Exchange (SDMX) framework. SDMX serves as a data exchange protocol
designed to streamline machine-to-machine transfers. It offers a
methodology for organizing metadata via *Metadata Structure Definitions*
(MSDs), while not governing MSD content. Accordingly, the Bank’s
metadata standard augments and integrates seamlessly within the SDMX
environment. Metadata templates developed by the Bank may be exported as
MSDs, and metadata describing indicators may be presented as
meta-datasets. This approach allows descriptive and reference metadata
produced by the Bank to be incorporated into systems that comply with
SDMX-based data management and dissemination requirements.

The indicator metadata must also include **structural metadata** that
describes how the data are stored and organized in data files.
Structural metadata is closely linked to **data modeling** which
establishes both the logical and physical architecture of data by
defining entity relationships, associated attributes, and integrity
rules.[^19] This form of metadata transposes the data model into a
machine-readable format, thereby facilitating accurate processing and
interpretation by information systems. Clearly articulating the data
model and structure is critical for effective data dissemination through
APIs. APIs (Application Programming Interfaces) enable standardized
requests and exchanges of data between systems.

The Bank metadata standard for documenting indicators has a designated
section for outlining an indicator's data structure (Figure 11). This
structure follows the SDMX Data Structure Definition (DSD) and is based
on the assumption that data are kept in a tabular long format.

<figure>
<img src="/media/image14.png"
style="width:3.07513in;height:2.6867in"
alt="A screen shot of a computer code Description automatically generated" />
<figcaption><p>Figure 11 - Data structure definition</p></figcaption>
</figure>

A crucial part of describing data structures is specifying the
*column\_type* metadata element. This element defines the function of
each column in a long-format data file and includes options such as:

- **Indicator ID**: The indicator unique identifier.

- **Indicator name**: Holds the main title or name of an indicator;
  there should be only one primary name (alternative names may be
  documented as *aliases* in the indicator metadata).

- **Geography**: Identifies the geographical area for each value,
  typically holding a geographic code, with corresponding names
  available in a code list or an attribute-type column.

- **Time period**: Specifies the time frame, like year, quarter, or
  month, applicable to each observation.

- **Dimension**: Used for additional breakdowns of an indicator, with
  one or several columns serving as dimensions—or potentially none at
  all. When combined with indicator ID, geography, and time period,
  these create unique identifiers for each observation. Dimensions
  typically use code lists to list possible values.

- **Periodicity**: The column indicates the (optional) periodicity of
  the indicator. Periodicity refers to the frequency or time interval at
  which data is collected, reported, or made available in a dataset. In
  the context of a Data Structure Definition (DSD), periodicity
  indicates how often the data for a particular observation is updated
  or recorded. SDMX provides a standard code list for periodicities.

- **Attribute**: An attribute is information associated with the data
  that describes a specific characteristic or property of the
  observation value but is not a geography or dimension. Attributes can
  have code lists associated with them.

- **Observation value**: The observation value. An indicator must have
  one and only one column identified as containing the information value
  (when data are stored in long format).

- **Annotation**: The column contains an annotation for the indicator.
  An indicator can have more than one annotation. An annotation is a
  piece of supplementary information or metadata that provides
  additional context or clarification about specific data or structures
  within the DSD. Annotations are typically used to provide
  non-technical explanations, clarifications, or other details that help
  users understand or interpret the data or metadata more accurately.

Let’s consider an indicator "Population by Sex (Thousands)", which
provides the population of Belgium for years 2010 and 2020 disaggregated
by sex (male/female/total) and is stored as follows in the data file.

<table>
<colgroup>
<col style="width: 8%" />
<col style="width: 16%" />
<col style="width: 13%" />
<col style="width: 14%" />
<col style="width: 9%" />
<col style="width: 5%" />
<col style="width: 11%" />
<col style="width: 13%" />
<col style="width: 7%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><strong>ID</strong></th>
<th style="text-align: center;"><strong>Indicator</strong></th>
<th style="text-align: center;"><strong>Country_code</strong></th>
<th style="text-align: center;"><strong>Country_name</strong></th>
<th style="text-align: center;"><strong>Year</strong></th>
<th style="text-align: center;"><strong>Sex</strong></th>
<th style="text-align: center;"><strong>Population</strong></th>
<th style="text-align: center;"><strong>Source</strong></th>
<th style="text-align: center;"><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>POP_SX</td>
<td>Population by sex</td>
<td style="text-align: center;">BEL</td>
<td style="text-align: center;">Belgium</td>
<td style="text-align: center;">2010</td>
<td style="text-align: center;">M</td>
<td style="text-align: right;">5312221</td>
<td>Census 2010</td>
<td>Statbel</td>
</tr>
<tr>
<td>POP_SX</td>
<td>Population by sex</td>
<td style="text-align: center;">BEL</td>
<td style="text-align: center;">Belgium</td>
<td style="text-align: center;">2010</td>
<td style="text-align: center;">F</td>
<td style="text-align: right;">5527684</td>
<td>Census 2010</td>
<td>Statbel</td>
</tr>
<tr>
<td>POP_SX</td>
<td>Population by sex</td>
<td style="text-align: center;">BEL</td>
<td style="text-align: center;">Belgium</td>
<td style="text-align: center;">2010</td>
<td style="text-align: center;">T</td>
<td style="text-align: right;">10839905</td>
<td>Census 2010</td>
<td>Statbel</td>
</tr>
<tr>
<td>POP_SX</td>
<td>Population by sex</td>
<td style="text-align: center;">BEL</td>
<td style="text-align: center;">Belgium</td>
<td style="text-align: center;">2020</td>
<td style="text-align: center;">M</td>
<td style="text-align: right;">5660064</td>
<td>Census 2020</td>
<td>Statbel</td>
</tr>
<tr>
<td>POP_SX</td>
<td>Population by sex</td>
<td style="text-align: center;">BEL</td>
<td style="text-align: center;">Belgium</td>
<td style="text-align: center;">2020</td>
<td style="text-align: center;">F</td>
<td style="text-align: right;">5832577</td>
<td>Census 2020</td>
<td>Statbel</td>
</tr>
<tr>
<td>POP_SX</td>
<td>Population by sex</td>
<td style="text-align: center;">BEL</td>
<td style="text-align: center;">Belgium</td>
<td style="text-align: center;">2020</td>
<td style="text-align: center;">T</td>
<td style="text-align: right;">11492641</td>
<td>Census 2020</td>
<td>Statbel</td>
</tr>
</tbody>
</table>

The data structure definition for this indicator would be defined as
follows using the *data structure definition* of the metadata standard:

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">Column name in the data file</th>
<th style="text-align: left;">Information entered in the data structure
definition</th>
</tr>
</thead>
<tbody>
<tr>
<td>ID</td>
<td><p>Label: Indicator ID</p>
<p>Description: Unique identifier of the indicator</p>
<p>Data type: String</p>
<p>Column type: Indicator ID</p></td>
</tr>
<tr>
<td>Indicator</td>
<td><p>Label: Indicator name</p>
<p>Description: Title of the indicator</p>
<p>Data type: String</p>
<p>Column type: Indicator name</p></td>
</tr>
<tr>
<td>Country_code</td>
<td><p>Label: Country code</p>
<p>Description: ISO country code</p>
<p>Data type: String</p>
<p>Column type: Geography ; Codelist: BEL = Belgium</p></td>
</tr>
<tr>
<td>Country_name</td>
<td><p>Label: Country name</p>
<p>Description: Country name</p>
<p>Data type: String</p>
<p>Column type: Attribute</p></td>
</tr>
<tr>
<td>Year</td>
<td><p>Label: Year</p>
<p>Description: Year</p>
<p>Data type: Date</p>
<p>Column type: Time period</p>
<p>Time period format: YYYY</p></td>
</tr>
<tr>
<td>Sex</td>
<td><p>Label: Sex</p>
<p>Description: Sex</p>
<p>Data type: String</p>
<p>Column type: Dimension ; Codelist: F = Female, M = Male, T =
Total</p></td>
</tr>
<tr>
<td>Population</td>
<td><p>Label: Population</p>
<p>Description: Resident population, mid-year</p>
<p>Data type: Integer</p>
<p>Column type: Observation value</p></td>
</tr>
<tr>
<td>Source</td>
<td><p>Label: Data source</p>
<p>Description: Source of the data</p>
<p>Data type: String</p>
<p>Column type: Attribute</p></td>
</tr>
<tr>
<td>Note</td>
<td><p>Label: Note</p>
<p>Description: Additional note</p>
<p>Data type: String</p>
<p>Column type: Annotation</p></td>
</tr>
</tbody>
</table>

### Databases of Indicators

Indicators are typically organized and maintained within databases that
aggregate multiple indicators, such as the World Bank’s World
Development Indicators. To facilitate this, the World Bank has
established a customized metadata standard designed to describe each
**database** or dataset associated with individual indicators. A
component of this indicator metadata standard records the unique
identifier for each database, thereby ensuring a clear link between an
indicator and its relevant database(s).

## 3.5.3 Geographic Datasets and Services

**Geographic datasets** comprise data that specify and depict geographic
locations, boundaries, and the physical or administrative attributes of
features found on the Earth's surface. These datasets incorporate
explicit geographic coordinates, such as latitude and longitude,
alongside attribute information associated with particular spatial
entities. Geographic datasets can consist of *vector data*, which model
features as points, lines, or polygons organized into thematic layers,
as well as *raster data*, which illustrate continuous phenomena or
imagery through a grid of pixels, including sources like satellite and
remote sensing imagery.

**Geographic data services** refer to the technologies employed for
accessing, analyzing, and distributing geographic information. These
services are commonly provided via interactive, web-based platforms.

The ISO Technical Committee on Geographic Information/Geomatics (ISO/TC
211) has created several metadata standards to help make geospatial
datasets and services easier to find, use together, and understand.
These include standards like ISO 19115-1 for describing vector
geographic datasets, ISO 19115-2 for raster data, ISO 19110 for
detailing feature-level characteristics, and ISO 19119 for geographic
data services. Together, these are known as the ISO 19100 series. They
serve as a foundation for major global geospatial metadata efforts,
including those by the Open Geospatial Consortium (OGC), the U.S.
Federal Geographic Data Committee (FGDC), the European INSPIRE
Directive, the U.K.'s GEMINI profile, and, more recently, the Research
Data Alliance (RDA).

Due to the comprehensive and intricate nature of ISO 19100, the Bank
uses a streamlined implementation profile to document its geographic
datasets and services. This approach maintains consistency with ISO
standards, ensuring that metadata generated within the Bank's systems
can be exported as ISO-compliant records whenever external users or
platforms need them.

To promote consistency in the Bank’s metadata standards and improve
feature descriptions, several new metadata elements have been added
beyond those in ISO 19100. These additions were thoughtfully developed
to maintain ISO compatibility, providing greater functionality while
supporting interoperability with metadata standards used for other data
types.

Core metadata elements included in ISO 19115 encompass the dataset
title, unique identifier, originator and data source, geographic and
temporal extent, data type, as well as the purpose or context of the
dataset. For vector datasets, feature-level descriptions—addressed
primarily by ISO 19110—are critical for both data discovery and
usability; in contrast, for raster datasets, it is essential that
metadata records band-level properties to ensure accurate
interpretation. Recognizing that generating feature-level metadata can
be a time-consuming process, the Bank has developed a Python library
that automatically extracts key metadata components from widely used
geospatial file formats and aligns these elements with ISO 19100
standards.[^20]

## 3.5.4 Documents

The Bank developed a bespoke metadata standard for the documentation of
documents. This metadata standard borrows elements from three
international standards:

- **Dublin Core.** A widely recognized set of 15 elements that enables
  simple, interoperable description of resources across libraries and
  digital repositories.

- **MARC21** (Machine-Readable Cataloging). A widely recognized set of
  15 elements that enables simple, interoperable description of
  resources across libraries and digital repositories.

- **BibTeX.** A reference tool for LaTeX users that automates citation
  and bibliography formatting in academic writing.

The standard also includes a set of core elements common to all its
standards to ensure interoperability.

## 3.5.5 Images

In this Guide, **images** are defined as digital files meant for use in
online catalogs or visual repositories. The most common file types are
JPEG (JPG), PNG, and TIFF.

Digital cameras and devices usually add technical metadata to image
files automatically. For instance, many cameras and smartphones generate
EXIF (Exchangeable Image File Format) metadata, which includes details
like when the photo was taken, what camera model was used, exposure
settings, image size, and, if turned on, GPS location. Although EXIF
metadata provides helpful technical information, it doesn’t explain what
the image depicts, why it was created, or how it can be reused. To
enhance discoverability, accessibility, and rights management, it is
important to include standard descriptive and reference metadata as
well.

To meet this need, the Bank adopts two well-established international
standards:

- **IPTC Photo Metadata Standard.** Developed by the International Press
  Telecommunications Council, the IPTC standard is widely used across
  media, cultural heritage institutions, and digital asset management
  systems. The Bank applies version 2019.1, which consists of two
  complementary standards:

<!-- -->

- IPTC Core – general descriptive and administrative information (e.g.,
  title, creator, copyright, locations, dates)

- IPTC Extension – enhanced semantic description (e.g., depicted people,
  objects, events, controlled vocabularies, and rights metadata)

> The richness of IPTC metadata enables sophisticated search, rights
> tracking, and attribute-based filtering, even though only a focused
> subset of fields is typically required for development-related
> imagery.

- **Dublin Core (DCMI).** The Dublin Core Metadata Initiative
  specification provides a simpler, highly interoperable set of 15 core
  elements applicable across many resource types. The Bank complements
  Dublin Core with selected schema.org *ImageObject* elements to improve
  indexing. The lightweight DCMI option is appropriate when resources
  are limited, or when broad cross-platform compatibility is
  prioritized.

AI-assisted metadata generation presents expanding possibilities within
this field. Methods such as object and scene identification, optical
character recognition for text extraction from images, facial detection,
and automated keyword generation can greatly enhance the efficiency of
metadata production. Nevertheless, rigorous human expertise remains
vital to guarantee that semantic descriptions are accurate, pertinent,
and unbiased.

## 3.5.6 Videos

The Bank documents videos (when considered as development data) using a
hybrid metadata standard that combines elements from the **Dublin Core**
Metadata Initiative (DCMI), the **IPTC** **Video Metadata Standard**,
and **schema.org *VideoObject***. This approach aligns with the approach
used for audio resources, ensuring consistent metadata practices across
multimedia content.

Dublin Core’s 15 core elements provide a simple and highly interoperable
foundation, complemented by the IPTC standard, while selected
*VideoObject* fields enable the description of audiovisual-specific
technical characteristics—such as duration, encoding format, resolution,
and frame size. These are complemented by additional descriptive
elements commonly used in the Bank’s metadata ecosystem (e.g., keywords,
tags, topics, provenance, and administrative metadata).

Videos often contain only minimal embedded metadata, meaning that
essential context resides within the spoken narrative or visual
components. To expose this information for cataloging and search, the
Bank’s standard includes a *transcription* metadata element, allowing
curators to incorporate human- or machine-generated transcripts of
spoken content, and automatically translated versions when appropriate
for multilingual access. Affordable speech-to-text technologies exist
for many major languages, enabling scalable and automated metadata
generation. Once transcripts are available in the metadata, natural
language processing methods—such as keyword extraction, topic modeling,
and semantic search—can further enrich descriptive metadata.

## 3.5.7 Audio Recordings

The Bank documents audio files (when considered as development data)
using a hybrid metadata standard that combines elements from the
**Dublin Core** Metadata Initiative (DCMI), **schema.org** /
*audioObject,* and **PBCore**. This approach aligns with the methodology
used for images and video resources, ensuring consistent metadata
practices across multimedia content. The Dublin Core and audioObject
provide descriptive metadata elements. PBCore and audioObject provide
metadata elements needed to document technical aspects of the audio
files, such as sound quality, which are required for using audio files
as input to AI model training. Metadata elements extracted from these
standards are complemented by additional descriptive elements commonly
used in the Bank’s metadata ecosystem (e.g., keywords, tags, topics,
provenance, and administrative metadata).

Artificial intelligence solutions facilitate the extraction of essential
metadata from audio recordings, thereby enhancing documentation
efficiency and consistency. These technologies can autonomously identify
the languages present within an audio file, evaluate technical quality
using established metrics such as signal-to-noise ratio, and often
produce accurate transcriptions of spoken content. Leveraging advanced
models capable of analyzing speech attributes and semantic information,
AI enables thorough metadata collection with minimal need for manual
input.

## 3.5.8 Data Processing and Analysis Scripts

The Bank operates an extensive empirical research program, generating a
comprehensive and varied knowledge base on development through flagship
publications, the Policy Research Working Papers series, and others.
Recognizing the value of systematically documenting, cataloging, and
disseminating programs and scripts used for data processing and
analysis, the Bank has launched a reproducibility initiative and a
dedicated reproducibility website.[^21] This effort reinforces the Bank’s
commitment to openness and transparency and aligns with the core
principle of verifiability outlined in the Policy on Development Data
Quality.

Integrating reproducibility, replicability, and auditability into the
Bank’s research and data dissemination framework serves multiple
purposes:

- **Enhancing research quality**: Public scrutiny encourages
  contestability and independent verification, promoting rigor and
  robustness in data analysis.

- **Facilitating reuse and extension**: Researchers can build upon
  Bank-conducted analyses, increasing the relevance, utility, and impact
  of both the data and analytical outputs.

- **Strengthening credibility**: Transparent methods bolster confidence
  in the Bank’s research findings.

- **Supporting education**: Students and peers can access real-world
  examples of analytical workflows.

Technological platforms such as GitHub provide infrastructure for code
preservation, sharing, and collaborative development. To produce and
publish structured, comprehensive metadata for analytical programs and
scripts, and to enhance the discoverability of these resources, the
Office of the WBG Chief Statistician has developed a metadata standard
for documenting research projects and scripts. It applies both to
comprehensive research projects and to individual scripts associated
with datasets, regardless of output type—whether publications,
visualizations, tabulations, data transformations, or derived datasets
and indicators. It underpins the Bank’s catalog of reproducible
research.

## 3.5.9 External Resources

**External resources** refer to various digital materials—such as data
files, documents, web pages, images, and scripts—that can be attached as
additional reference materials to data of any type.

When compiling metadata for any type of data, information is often
gathered from several external sources. For example, when documenting a
survey or a census, metadata will often be extracted from
questionnaires, interviewer guides, data processing scripts, analytical
reports, and other materials. These resources offer important background
and should be maintained and published in their original form alongside
both the main data and its structured metadata. To keep these
supplementary materials properly referenced, accessible, and usable,
they must be described using suitable metadata elements.

For documenting external resources, the Bank uses a simple standard
based on Dublin Core metadata. Metadata for external resources is used
alongside one of the data-type-specific metadata standards described in
this Guide.

[^16]: Available at <https://worldbank.github.io/metadata-schemas/>

[^17]: Available at <https://worldbank.github.io/metadata-editor-docs/>

[^18]: See <https://ddialliance.org/>

[^19]: The Bank uses a more specialized and advanced tool, the Fusion Metadata Registry, to create and maintain DSDs and the related code lists.

[^20]: Available at <https://github.com/worldbank/geometadatatools>

[^21]: See <https://reproducibility.worldbank.org/>
