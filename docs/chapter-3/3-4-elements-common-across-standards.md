# 3.4 Elements Common Across Standards 

A designated metadata standard is implemented for each primary data
type—microdata, indicators and databases, geographic datasets,
documents, images, videos, audio, and scripts—to ensure the capture of
the most pertinent information. In order to promote consistency and
interoperability, all standards pertaining to development data
incorporate a common set of fundamental metadata elements. In instances
where these essential elements are missing from the international
metadata standards adopted by the Bank, they have been incorporated by
the Bank into its standards. These additions pertain to metadata
provenance, tags, and version control.

## 3.4.1 Information on Standard Used

Metadata files (JSON or XML) produced by the Bank for development data
are required to include a header section specifying the metadata
standard and its version. This practice enables automated systems to
accurately parse, validate, and process the metadata. A clearly defined
header enhances usability, consistency, and interoperability of
metadata. By explicitly indicating the standard, the header enables
systems to:

- ***Interpret structure and semantics***: Machines can reliably
  understand metadata elements, their relationships, and the expected
  data types in accordance with the defined standard.

- ***Ensure compatibility and interoperability***: Knowledge of the
  standard and version facilitates seamless integration with other
  platforms and tools adhering to the same standards.

- ***Enable automated processing and validation***: Systems can assess
  compliance with the specified standard, confirming that metadata
  adheres to prescribed formats and rules.

- ***Facilitate version control and updates***: Explicit versioning in
  the header allows for smooth transitions when metadata standards
  evolve, preventing compatibility issues and ensuring metadata
  integrity over time.

## 3.4.2 Unique Dataset Identifiers 

Every data resource—be it a micro-dataset, an indicator, a geographic
dataset, or another type—needs a persistent and unique identifier to set
it apart from others. All metadata standards include a mandatory
element, *idno*, used to capture the unique internal identifier for each
documented resource. This is vital both for accurately cataloguing
datasets within the Bank’s repositories and for allowing users to cite
them properly.

Beyond the *idno* identifier, the Bank’s metadata standards allow for
capturing various other identifiers, such as Digital Object Identifiers
(DOIs) and original identifiers from external sources. Keeping these
original identifiers helps maintain data traceability and verify its
origins.

## 3.4.3 Version Statement for the Data

Datasets are subject to periodic updates or revisions, making effective
data versioning essential. [^13] All metadata standards implemented by
the Bank contain components to record the dataset version (Figure 5).

<figure>
<img src="/media/image8.png"
style="width:3.17377in;height:1.39591in"
alt="A screenshot of a computer program Description automatically generated" />
<figcaption><p>Figure 5 - Versioning data</p></figcaption>
</figure>

Semantic versioning is recommended for datasets to clearly communicate
changes. It uses a three-part format: MAJOR.MINOR.PATCH (e.g., 1.4.2).

- **MAJOR**: Indicates breaking changes that are incompatible with
  previous versions. For datasets, this may involve:

  - Significant changes to the data file structure (e.g., new variables
    added, variable names changed, or format alterations).

  - Removal of key data elements.

  - A shift in methodology or classification that affects continuity.

- **MINOR**: Denotes backward-compatible enhancements, such as:

  - Adding new rows, columns, variables, or fields that do not disrupt
    existing workflows.

  - Extending the dataset with new metadata.

  - Incorporating data for additional periods or geographies.

- **PATCH**: Reflects backward-compatible fixes, including:

  - Corrections to data errors (e.g., fixing typos or recalculating
    values).

  - Minor updates to metadata that clarify existing information without
    altering its meaning.

Workflow example:

- ***Initial release***: A dataset released as 1.0.0 signifies the first
  stable version.

- ***Patch updates***: A typo is fixed in some records without changing
  the structure. The version becomes 1.0.1.

- ***Minor updates***: A new variable (or column) is added to the
  dataset. The version updates to 1.1.0.

- ***Major update***: The dataset's structure is redesigned, and some
  variables are removed. The version updates to 2.0.0.

The benefits of semantic versioning are:

- **Clarity**: Users can easily understand the scope of changes.

- **Predictability**: Clear guidelines ensure consistent communication
  with dataset users.

- **Compatibility management**: Data users can evaluate whether their
  workflows require adaptation based on the change of the version.

When applying semantic versioning, it is recommended to provide thorough
documentation for all updates. This process should involve explicitly
stating the version number in the dataset's metadata (*version*),
recording the version date in ISO 8601 format (*version\_date*), and
maintaining an exhaustive version history within the documentation
(*version\_notes*). The version notes ought to present a detailed
summary of each change, specifying both the date and a description of
the modifications made.

## 3.4.4 Metadata Information and Version Statement 

It is essential to document both the version of the data and the
associated metadata. All metadata standards utilized by the Bank include
a designated section for recording details of metadata elements. For
instance, the DDI Codebook standard labels this section as "document
description," whereas other standards may refer to it as "metadata
information" (Figure 6). Additionally, the implementation of semantic
versioning for metadata is strongly recommended.

<figure>
<img src="/media/image9.png"
style="width:3.15294in;height:4.52801in"
alt="A screenshot of a computer code Description automatically generated" />
<figcaption><p>Figure 6 - Metadata on metadata in a Bank metadata
standard</p></figcaption>
</figure>

## 3.4.5 DataCite Elements

All metadata standards implemented by the Bank include a *datacite*
section (Figure 7). This section contains metadata elements necessary
for the automated generation of Digital Object Identifiers (DOIs) using
DataCite.[^14] DataCite, a DOI and metadata management service to which
the Bank subscribes, facilitates the registration and management of DOIs
for its datasets. The Development Data Group within the Bank oversees
this service. Through DataCite, the Bank assigns DOIs to its data
products, maintains accurate metadata in accordance with FAIR
principles, and ensures persistent links for long-term accessibility and
citation.[^15] Additionally, DataCite provides an API that enables
programmatic DOI creation, thereby increasing the flexibility and
scalability of DOI management within the Bank*’s data* workflows. The
datacite metadata elements are structured for compatibility with this
API.

<figure>
<img src="/media/image10.png"
style="width:3.18942in;height:2.71691in"
alt="A screen shot of a computer program Description automatically generated" />
<figcaption><p>Figure 7 - Metadata elements for DataCite (for creation
of DOIs)</p></figcaption>
</figure>

## 3.4.6 Provenance of the Data Resource

All metadata standards incorporate a *provenance* section (Figure 8),
which serves to document the source of both the data and its associated
metadata, especially when collected programmatically from external
platforms. The elements within this section are designed to provide
transparency and enhance the traceability of the data's lineage.

<figure>
<img src="/media/image11.png"
style="width:4.51638in;height:4.34167in"
alt="A screen shot of a computer program AI-generated content may be incorrect." />
<figcaption><p>Figure 8 - Metadata on data and metadata
provenance</p></figcaption>
</figure>

## 3.4.7 Tags

All metadata standards include a "tags" section (see Figure 9). Tags are
user-defined textual elements that may be grouped to support functions
such as facilitating filters within data catalogs.

<figure>
<img src="/media/image12.png"
style="width:4.56968in;height:1.47924in"
alt="A black background with white text Description automatically generated" />
<figcaption><p>Figure 9 - Tags and tag groups</p></figcaption>
</figure>

For instance, a data catalog may encompass both open-access resources
and those that require payment. To facilitate user navigation, the
catalog interface should provide a filter (facet) enabling users to
select datasets according to their pricing model (see Figure 10).
Although the Bank’s metadata standards presently lack a dedicated
element for indicating resource cost status, this information can be
efficiently documented through a user-defined tag group, such as
“pricing,” utilizing tags like "Free" or "For a Fee."

Employing controlled vocabularies for tags and tag groups is often
beneficial, as it ensures consistency, reduces ambiguity, and improves
searchability across the catalog. These structured tags can then be
leveraged to create intuitive facets in the data catalog, enhancing the
user experience and supporting more precise data discovery.

<figure>
<img src="/media/image13.jpeg"
style="width:6.5in;height:3.15972in"
alt="A screenshot of a computer Description automatically generated" />
<figcaption><p>Figure 10 - Use of tags and tag groups for faceting in a
data catalog</p></figcaption>
</figure>

[^13]: The instructions provided here on versioning data do not apply to data that are updated on a continuous basis. For such data, versioning applies only when a derived dataset is generated at a fixed time.

[^14]: <https://datacite.org/create-dois/>

[^15]: The Bank does not assign DOIs to third party data products.
