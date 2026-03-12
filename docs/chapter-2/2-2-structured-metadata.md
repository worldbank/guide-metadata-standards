# 2.2 Structured Metadata

## 2.2.1 Definition

To ensure maximum utility, metadata should be generated and maintained
in a structured format. **Structured metadata** comprises an organized
set of elements, each representing a distinct characteristic of a
dataset—such as the dataset title, geographic coverage, temporal scope,
producer information, or details for each variable including names and
labels. For metadata to be effectively leveraged by computer
applications, every element should include the following attributes:

- **Key**: The unique identifier assigned to each metadata element.

- **Type**: Elements may take various forms such as text (string),
  numbers (numeric), arrays, or Booleans (logical values).

- **Label**: A succinct descriptor for the element.

- **Description**: A detailed description of the metadata element, which
  can serve as guidance or instructions for data curators.

- **Repeatable status*:*** Indicates whether an element can support
  multiple entries.

- **Required status**: Clarifies if the element is "required"
  (mandatory), "optional," or possibly "recommended."

- **Controlled vocabularies**: These provide predetermined lists of
  permissible values to promote consistency and uniformity within
  metadata. Controlled vocabularies apply exclusively to selected
  metadata elements.

The types of metadata used to describe a dataset vary based on the type
of data. This guide looks at several primary data types: **microdata**
(individual-level data from surveys, censuses, administrative records,
or sensors), **indicators**, **geographic datasets**, **documents**,
**images**, **videos**, **audio recordings**, and **scripts**. Every
type has unique metadata requirements and a specific metadata structure,
though some overlap exists. For instance, microdata metadata often
includes information about sample design or data collection methods,
which are important for survey and census data but not for other kinds.
On the other hand, geographic datasets need details like coordinate
systems and spatial resolution, which aren’t relevant elsewhere. By
defining metadata specific to each type of data, users can better
understand, interpret, and make use of the datasets.

The range of metadata elements applicable for documenting any dataset
can be extensive. To promote clarity and enhance usability, these
elements are organized into logical categories and subcategories, either
for practical purposes or because they reflect different facets of the
dataset, such as descriptive, structural, or administrative metadata.
For instance, when documenting a survey dataset, metadata elements are
typically arranged into groups that delineate the survey’s attributes
(*study description*, including title, objective, scope, coverage,
timeframe, and sampling methodology), the data files (such as file
architecture and format), and the individual variables (including names,
definitions, value labels, and coding schemes).

## 2.2.2 File Formats

Structured metadata is generally maintained in a metadata file produced
in either JSON (JavaScript Object Notation) or XML (Extensible Markup
Language) format. The selected format should be open, adaptable, and
specifically designed to support usability and interoperability across
various platforms. It must accommodate both machine and database
processing while enabling seamless transformation into human-readable
formats such as HTML, PDF, or formatted text. Furthermore, structured
metadata should be accessible and functional via APIs to foster
integration and reuse. For metadata associated with development data,
the Bank prefers the JSON format due to its enhanced usability,
lightweight design, and robust interoperability. JSON offers the
following advantages:

- It is lightweight and human-readable, as JSON uses a plain text format
  that is straightforward to review and modify.

<!-- -->

- Its hierarchical structure supports flexible representation of complex
  metadata schemas through key-value pairs.

- JSON is extensively supported across programming languages, ensuring
  broad compatibility.

- It can be easily parsed by software applications, promoting automation
  as well as efficient publishing and indexing within databases;
  moreover, JSON is readily ingested by both SQL and NoSQL databases.

- The format facilitates uncomplicated conversion into other file types,
  such as HTML or PDF.

The following is an example of core metadata describing a book, in JSON
format.

```json
{
  "document_description": {
    "title_statement": {
      "title": "The Analysis of Household Surveys",
      "subtitle": "A Microeconometric Approach to Development Policy",
      "idno": "10.1596/978-1-4648-1331-3"
    },
    "date_published": "2010/07/01",
    "authors": [
      {
        "first_name": "Angus",
        "last_name": "Deaton"
      }
    ],
    "type": "Book",
    "languages": [
      {
        "name": "English",
        "code": "EN"
      }
    ],
    "abstract": "This book reviews the analysis of household survey data, including the construction of household surveys, the econometric tools useful for such analysis, and a range of problems in development policy for which this survey analysis can be applied."
  }
}
```

## 2.2.3 Benefits 

Effective data management and quality assurance depend heavily on
high-quality metadata, and aligns with the FAIR principles: Findability,
Accessibility, Interoperability, and Reusability. [^3] Well-organized and
detailed metadata allows users to handle data responsibly and
accurately. Additionally, it strengthens systems for discovering and
sharing data. By enriching metadata, traditional keyword searches become
more effective, and more advanced search methods like semantic and
hybrid search are enabled—turning data catalogs into smart data
recommendation tools.

The increasing adoption of generative AI technologies underscores the
critical role of high-quality metadata. As methods for accessing and
utilizing data evolve, users are increasingly interacting directly with
AI-enabled systems, including internet search engines, chatbots, and
advanced data platforms. In order to produce reliable outcomes, metadata
must provide AI systems with comprehensive context, incorporating
elements such as definitions, limitations, sources, and methodologies.
Metadata should be semantically robust, machine-readable, and
machine-understandable to ensure accurate interpretation and effective
utilization by AI technologies. Furthermore, AI can play a pivotal role
in enhancing metadata quality through processes such as metadata
augmentation and evaluation.

Structured metadata serves a critical role in numerous aspects of data
management and dissemination:

1.  **Enhancing Data Quality:** Metadata fosters superior data quality
    by ensuring accuracy, consistency, and interpretability. Through
    clear definitions and documentation of collection and analysis
    methods, it supports validation, facilitates effective auditing, and
    enables the resolution of errors.

2.  **Promoting Metadata Completeness:** Well-defined metadata
    structures function as comprehensive checklists encompassing
    required, recommended, and optional elements for dataset
    documentation. Compliance with these standards guarantees systematic
    inclusion of essential information, thereby minimizing omissions.

3.  **Strengthening Metadata Quality Assurance Processes:** Standardized
    metadata contributes to more effective quality assurance by
    establishing uniform criteria for evaluating consistency, and
    accuracy in data descriptions.

4.  **Facilitating Data Discoverability:** The use of standardized
    terminology and structures within metadata enhances discoverability,
    optimizing data indexing across catalogs and dissemination
    platforms. Detailed metadata additionally supports the advanced
    capabilities of artificial intelligence systems, and the creation
    and optimization of sophisticated search functionalities.

5.  **Supporting Data Harmonization and Integration:** High-quality
    metadata is indispensable for addressing inconsistencies and
    enabling harmonization efforts—both ex-ante (during data design) and
    ex-post (after data creation).[^4] It provides foundational
    frameworks and resources to standardize concepts, methods, and
    formats, as well as retrospective reconciliation and integration,
    thus improving utility for longitudinal, comparative, and
    multi-source analyses.

6.  **Improving Data Usability and Reusability:** Comprehensive metadata
    facilitates understanding, sharing, and repurposing of datasets by
    elucidating data relationships, hierarchies, and context. Detailed
    documentation reduces dependency on original data teams,
    streamlining secondary usage and reducing the burden of data
    dissemination.

7.  **Enabling Effective Data Governance:** Metadata underpins robust
    governance by recording provenance, lineage, and modifications,
    which supports auditability and ensures compliance with
    organizational standards and policies.

8.  **Increasing Credibility and Transparency:** Thorough metadata
    bolsters credibility and transparency, providing stakeholders with
    clear insights into data sources, methodologies, and quality for
    informed reliability assessments.

9.  **Supporting Reproducibility and Verifiability:** Extensive metadata
    documentation fosters reproducibility and verifiability by detailing
    the origins, processing, and structural attributes of datasets.

10. **Advancing Efficiency and Cost-Effectiveness:** By organizing and
    simplifying access to datasets, metadata expedites information
    retrieval and analysis, contributing to operational efficiencies.

11. **Empowering AI and Automation Initiatives:** Structured metadata
    facilitates the efficient processing and utilization of data by AI
    systems and supports algorithm training through provision of clearly
    defined datasets.

12. **Preserving Longevity and Institutional Memory:** Metadata
    safeguards the long-term usability and value of datasets by
    documenting their context, structure, and purpose, thereby enabling
    future and legacy applications.

[^3]: <https://www.go-fair.org/fair-principles/>

[^4]: See Gordon Priest, 2010, [The Struggle for Integration and Harmonization of Social Statistics in a Statistical Agency](https://www.ihsn.org/sites/default/files/resources/IHSN-WP004.pdf)
