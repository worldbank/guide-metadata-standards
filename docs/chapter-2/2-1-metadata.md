# 2.1 Metadata

## 2.1.1 Definition

**Metadata** refers to information that describes, explains, locates, or
otherwise makes it easier to retrieve, interpret, use, or manage
data.[^2] It may also include information that describes how data should
be published, managed, and displayed. Metadata must be made accessible
in forms and formats that are convenient for both users and machines.

It is essential that metadata accurately matches the dataset it
represents and gets updated anytime the data changes. This makes keeping
versions of data and metadata files important, with semantic versioning
being the suggested approach.

## 2.1.2 Types

Metadata encompasses several categories, each fulfilling a distinct
role. Certain types of metadata facilitate data users in locating,
evaluating, interpreting, and utilizing datasets efficiently, whereas
others are intended to assist administrators of data repositories in the
management and distribution of data.

***Metadata relevant to data users***

- **Descriptive metadata** identifies and describes a dataset, typically
  including elements such as the dataset title, abstract or summary,
  relevant keywords and topics, information on producers and publishers,
  geographic and temporal coverage, and versioning details. Descriptive
  metadata encompasses **cataloguing metadata**, a subset used
  specifically to register and manage datasets within catalogs or
  repositories, which is vital for ensuring datasets are both findable
  and citable.

- **Reference metadata** offers contextual and methodological details
  about the dataset. Common components include conceptual definitions,
  sources of data, methodologies employed, sampling and processing
  procedures, quality assessments, and known limitations.

- **Structural metadata** specifies the format and organization of the
  dataset, as well as relationships among its elements, facilitating
  effective analysis and integration into workflows. For microdata,
  structural metadata may consist of a *data dictionary* detailing files
  and variables; for indicators, it involves a *data structure
  definition* describing the data model and structure; and for
  geographic datasets, it takes the form of a *feature catalog*.

Collectively, descriptive, reference, and structural metadata empower
data users to evaluate a dataset’s suitability for their needs,
comprehend its scope and coverage, and utilize it appropriately. These
metadata types are indispensable for data producers and curators, as
they underpin the usability, reliability, and discoverability of
datasets. The creation and maintenance of such metadata is mandated by
the Development Data Quality Policy and constitutes a primary focus of
the standards detailed in this guide.

***Metadata intended for catalog and systems administrators***

Metadata relevant to catalog and systems administrators is tailored to
the specific IT environments in which catalogs and systems function. As
such, no universal standard applies to these metadata types; however, it
remains essential that they are structured and formatted consistently
alongside descriptive, reference, and structural metadata.

- **Administrative metadata** encompasses information supporting dataset
  management, security, and governance by catalog and system
  administrators. This includes details regarding dataset origin,
  acquisition date, and access rights, such as licensing terms and
  permissions. Administrative metadata defines conditions for publishing
  or accessing datasets, specifying authorized users, permitted
  purposes, and applicable constraints. Additionally, it captures
  operational and technical requirements necessary for effective dataset
  administration—including file formats, storage needs, and system
  dependencies. Proper documentation of administrative metadata ensures
  secure, efficient, and compliant management in accordance with
  institutional policies and procedures. Its context-specific nature
  means the structure and content will vary among organizations, and no
  standard is mandated.

- **Presentation and portrayal metadata** establish protocols for the
  visual representation of data, promoting clarity, consistency, and
  accurate interpretation within dissemination platforms and data
  catalogs. As optional elements—since many systems default to preset
  presentation and portrayal parameters—presentation metadata (sometimes
  referred to as *display or visualization metadata*) describes general
  rules for non-spatial data displays, such as chart types, color
  schemes, symbols, axis labels, legends, and formatting conventions.
  These components facilitate adherence to organizational standards and
  visualization style guides and consistent rendering across platforms.
  Portrayal metadata, conversely, focuses on the visualization of
  geographic or spatial datasets by providing specific cartographic
  instructions, including symbology, feature styling, color palettes,
  scale-dependent rendering, and related elements. Collectively,
  presentation and portrayal metadata ensure statistical and spatial
  data are presented in a clear, standardized, and comprehensible
  manner.

- **Usage and impact metadata** serve distinct functions in
  understanding dataset engagement and influence. Usage metadata tracks
  how datasets are accessed and utilized, gathering metrics such as
  download counts, API usage, page views, and geographic patterns of
  user activity. Impact metadata documents instances where datasets
  contribute to research, policy formation, or decision-making,
  reflected in citations, references, or indicators of user engagement
  and reach. Combined, these metadata dimensions offer valuable insights
  into dataset relevance and effectiveness. For institutions such as the
  Bank, this supports trend analysis, user experience optimization, and
  enhances visibility and credibility in the global data environment.
  They further contribute to catalog ranking and resource discovery
  strategies. Usage data should be collected via appropriately
  configured web analytics tools for real-time reporting, and while
  integration into records is optional, automated dynamic updates are
  recommended for accuracy. Impact metadata generally requires ongoing
  monitoring of external dissemination channels, such as publication
  databases.

<!-- -->

- **Relationship metadata** articulate links between datasets and
  associated resources, playing a critical role in documenting data
  lineage and dependency. This metadata identifies source datasets,
  derivative outputs, and connections to supplementary materials (e.g.,
  publications, methodological documents, code repositories). For
  example, relationship metadata may associate a working paper with its
  referenced original dataset, derived analytical datasets, and
  reproducible scripts used in processing. Maintaining these connections
  enables catalog administrators and repository managers to develop
  integrated, interoperable systems that foster discoverability,
  traceability, and data reuse. Relationship metadata facilitating data
  interpretation and supporting reproducibility should be made
  accessible to end users.

[^2]: Definition adapted from *Understanding Metadata*, National Information Standards Organization, 2004.
