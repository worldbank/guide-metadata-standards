# 2.4 Metadata Templates

## 2.4.1 Definition and Purpose

Metadata standards contain numerous components to accommodate a wide
range of use cases, providing more detail than is necessary for the
documentation of a particular dataset or for a given organization's
needs. To improve usability and ensure contextual relevance, **metadata
templates** are developed. These templates represent carefully selected
subsets of elements from the broader standard, crafted for specific
applications, while ensuring ongoing compliance with the original
standard. Metadata templates allow for customization in several
dimensions:

- ***Sub-setting***: Templates extract relevant metadata elements from
  the broader standard, enabling users to focus solely on those most
  pertinent to their specific context.

- ***Groupings***: Templates allow for the creation of custom clusters
  of metadata elements, facilitating the design of intuitive structures
  and entry tools that align with user preferences and operational
  requirements.

- ***Label***: Standard-provided labels may be replaced with
  organization-specific terminology in accordance with institutional
  lexicon or protocols.

- ***Status***: Although few elements are deemed *required* within the
  standards themselves, templates may designate additional elements as
  *mandatory* for quality assurance purposes. However, it is recommended
  to refrain from designating an excessive number as mandatory; elements
  vital but not essential should be classified as *recommended*.

- ***Description/Instructions***: Each metadata element is accompanied
  by a default description, which organizations may tailor for greater
  relevance and clarity. Customized descriptions and instructions
  support consistent and context-sensitive metadata creation and can be
  compiled into practical guidelines for data curators.

- ***Controlled vocabularies***: Certain elements can reference
  controlled vocabularies, which must conform to standardized code lists
  established by the organization.

- ***Default values***: Predefined default values can be assigned to
  select elements to streamline metadata entry.

- ***Validation rules***: Custom validation rules—such as regular
  expressions or value ranges—can be specified to enforce consistency
  and integrity across metadata records.

- ***Flexibility***: Templates may introduce additional metadata
  elements not found in the base standard, addressing unique
  organizational requirements.

- ***Translation***: Since labels, groupings, and instructions are
  editable, templates can be translated into any language, supporting
  multilingual environments.

These customization mechanisms enable the adaptation of standards to
specialized use cases without compromising compliance.

Templates are created using metadata editor applications and stored as
JSON files, facilitating easy distribution and reuse organization-wide,
thereby promoting standardization and interoperability.

To maintain uniformity in metadata practices across the institution,
template development must adhere to a structured governance process. Ad
hoc modifications or template creation by individual data curators are
discouraged. Instead, templates should be strategically designed and
managed by an appointed administrator or the data documentation team.
While multiple templates per standard may exist to address diverse
needs, limiting their overall number is advisable to foster consistency,
reduce complexity, and ease ongoing maintenance.

## 2.4.2 Controlled Vocabularies

A **controlled vocabulary**, or **code list**, refers to a predefined,
systematically organized collection of terms (with corresponding codes)
consistently utilized to populate designated metadata elements. Examples
include widely adopted national and international classifications, such
as ISO 3166 for country codes and names, or the International Standard
Industrial Classification (ISIC). Organization-specific vocabularies may
also be employed, such as keyword taxonomies or custom code lists
tailored for particular domains or purposes.

Controlled vocabularies are selectively applied to certain elements
within a metadata standard to promote uniformity and precision. Their
use ensures that identical concepts are consistently represented by the
same term across multiple records, thereby minimizing ambiguity and
improving searchability and interoperability. Controlled vocabularies
are integral to effective data discovery. By assigning standardized
terms to metadata elements, data catalogs can offer these terms as
filtering options (facets), enabling users to refine their searches
based on specific attributes or categories.

## 2.4.3 Development and Documentation of Metadata Templates

Metadata templates offer both flexibility and efficiency in designing
metadata, helping to ensure organizational consistency when adhering to
established metadata standards. To promote coherence, it is recommended
that each data type be assigned a single standardized template; however,
in certain specialized scenarios, multiple templates per data type may
be justified, though these should be kept to a minimum to avoid
fragmentation and inefficiency. At the Bank, the Office of the Chief
Statistician, in collaboration with various departments, has developed a
curated set of templates accessible to all staff via the Metadata
Editor.[^7] While specialized templates may be created for particular
requirements, their use will be restricted to authorized user groups.

Templates are distinguished by essential attributes such as name,
custodian, version, language, and description. Users developing or
updating templates must provide a precise and informative name, version
information (including date, version number, and a summary of
modifications), language designation, and custodian details to guarantee
comprehensive documentation and traceability.

Metadata templates are saved in JSON format to facilitate seamless
sharing among teams or with external partners. Templates may be exported
as PDF or HTML documents to serve as reference material for data
curators.

## 2.4.4 Templates as SDMX Metadata and Data Structure Definitions 

The metadata standards and templates used by the Bank for the
documentation of indicators are designed to be compatible with
SDMX-based applications.

The set of ***descriptive and reference metadata*** elements included in
a template for documenting indicators, together with their respective
code lists, aligns with the concept of a ***Metadata Structure
Definition*** (MSD) as outlined in the Statistical Data and Metadata
Exchange (SDMX) standard. An MSD establishes the organization and
content of both reference and descriptive metadata by specifying
metadata concepts, their arrangement, the code lists used, and how they
relate to the corresponding data. SDMX does not prescribe any
pre-defined MSDs, allowing flexibility for customization.

Similarly, the list of ***structural metadata*** elements contained in a
template, along with their associated code lists, corresponds to a
***Data Structure Definition*** (DSD) under the SDMX standard.

[^7]: The [Metadata Editor](https://worldbank.github.io/metadata-editor-docs/) is a multi-standard metadata editor for development data that runs on the World Bank’s intranet, enabling collaborative production and maintenance of metadata across multiple data types. Developed by the World Bank Group and released as open source, it is intended for other organizations to install on their own intranets to promote wider adoption of metadata standards. The application is provided with a set of recommended templates.
