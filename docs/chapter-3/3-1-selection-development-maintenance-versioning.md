# 3.1 Selection, Development, Maintenance, and Versioning 

In line with the Development Data Quality Policy, the WBG Chief
Statistician is responsible for choosing, managing, and updating the
standards and templates used to document development data. An advisory
team provides guidance to the Chief Statistician regarding the selection
and maintenance of metadata standards.

Whenever possible, the Bank adopts internationally accepted metadata
standards, modifying them as needed to fit its operational and strategic
needs. If these standards do not fully meet the Bank's requirements,
they are further adjusted or, when necessary, new metadata standards are
created in close cooperation with both relevant business units and
external partners. Any customized standards go through thorough
evaluation to ensure they match global best practices in data
documentation and compatibility.

To guarantee consistency and machine-readability, all metadata standards
at the Bank are implemented using JSON schemas. The Bank uses the
following standards to document development data:

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 30%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;"><strong>Data type</strong></th>
<th style="text-align: left;"><strong>Standards</strong></th>
<th style="text-align: left;"><strong>Use</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">Microdata</td>
<td style="text-align: left;">DDI Codebook version 2.5 (or latest)
complemented by a set of Bank-specific metadata elements.</td>
<td style="text-align: left;">DDI is used for documenting
microdata—covering surveys (households, individuals, facilities,
enterprises), censuses, administrative records, transactions, and
sensor-captured data. It underpins the World Bank Microdata Library
(internal and external).</td>
</tr>
<tr>
<td style="text-align: left;">Indicators</td>
<td style="text-align: left;">WBG bespoke standard. The standard was
created by consolidating metadata elements found in multiple WB and
external data management and dissemination systems.</td>
<td style="text-align: left;">The standard is used to document
statistical indicators—capturing definition, units,
methodology/computation, coverage and disaggregation, source/provenance,
quality notes, and revision history. It underpins multiple indicator
database and dissemination systems including Data360.</td>
</tr>
<tr>
<td style="text-align: left;">Database (dataset) of indicators</td>
<td style="text-align: left;">WBG bespoke standard.</td>
<td style="text-align: left;">The standard is used to document datasets
that house indicators (e.g., the World Development Indicators database),
providing metadata about scope and purpose, thematic coverage,
geographic and temporal extent, and others. It complements the Indicator
Metadata standard by contextualizing indicator collections.</td>
</tr>
<tr>
<td style="text-align: left;">Geographic data and services</td>
<td style="text-align: left;">ISO 19115, 19110, 19119 series,
complemented by a set of Bank-specific metadata elements.</td>
<td style="text-align: left;">The ISO 19100 suite is used to document
raster and vector geographic datasets, and geographic data
services.</td>
</tr>
<tr>
<td style="text-align: left;">Documents</td>
<td style="text-align: left;">WBG bespoke standard, based on metadata
elements extracted from the Dublin Core, MARC21, and BibTex metadata
standards, complemented by a set of Bank-specific metadata
elements.</td>
<td style="text-align: left;">This standard is used to document
documents of any type (publications, reports, books, manuals, and
others) related to development data. This includes documents that form
corpora intended to be used as input for training AI models. Note that
another standard is used to document documents used as external
resources associated with another data type.</td>
</tr>
<tr>
<td style="text-align: left;">Images</td>
<td style="text-align: left;">Two options are supported: DCMI (light
option) and IPTC (for more advanced use), complemented by a set of
Bank-specific metadata elements.</td>
<td style="text-align: left;">The standards are used to document digital
images. These can be image files used as input for training AI models
related to development data, or photos related to statistical
events.</td>
</tr>
<tr>
<td style="text-align: left;">Video</td>
<td style="text-align: left;">WBG bespoke standard, based on metadata
elements extracted from the Dublin Core and schema.org (videoObject)
standards, complemented by a set of Bank-specific metadata
elements.</td>
<td style="text-align: left;">The standard is used to document videos,
typically videos used as input for training AI models, or whose topic is
directly related to development data.</td>
</tr>
<tr>
<td style="text-align: left;">Audio recordings</td>
<td style="text-align: left;">WBG bespoke standard, based on metadata
elements extracted from the Dublin Core, schema.org (audioObject), and
PBCore metadata standards, complemented by a set of Bank-specific
metadata elements.</td>
<td style="text-align: left;">The standard is used to document audio
recordings, typically audio files used as input for training AI models,
or whose topic is directly related to development data.</td>
</tr>
<tr>
<td style="text-align: left;">Data processing and analysis scripts</td>
<td style="text-align: left;">WBG bespoke standard.</td>
<td style="text-align: left;">The standard is used to document data
processing or analysis scripts, as well as machine learning and
statistical models. The purpose is to support reproducibility and
replicability of research work, and verifiability of data processing and
analysis. This standard enables the WB reproducibility catalog (<a
href="https://reproducibility.worldbank.org/">https://reproducibility.worldbank.org/</a>).</td>
</tr>
<tr>
<td style="text-align: left;">External resources</td>
<td style="text-align: left;">WBG bespoke standard, based on the Dublin
Core standard.</td>
<td style="text-align: left;">This standard is a complement to each of
the above-mentioned standards. It is used to document any digital
resource associated with one of the above data types; this could be used
for example to document survey questionnaires or reports, attach videos
or images to datasets, etc.</td>
</tr>
</tbody>
</table>

The standards also have spaces for additional elements, which can be
added through templates (see section 2.4). The Bank has created at least
one recommended template for each metadata standard.

If there are important metadata elements not already included in current
standards, they should be added to future versions of the relevant
standards. These updates are made collaboratively, with input from the
Office of the Chief Statistician and external organizations like the DDI
Alliance as relevant, so that consistency and broad applicability are
maintained. Creating custom metadata elements outside official standards
should only occur in rare cases where existing options do not meet
specific needs.

Because metadata standards evolve over time, it is essential to record
the specific version used for documenting a dataset. This information on
version must be explicitly included in the metadata header. To ensure
transparency and interoperability, all metadata standard versions used
by the Bank must be maintained in an openly accessible registry with a
complete version history. Providing machine-readable access to these
versions allows applications to accurately interpret metadata
structures. Linking metadata to its corresponding standard ensures that
its format and meaning remain clear and consistent over time.

The metadata standards adopted by the Bank are used to generate and
maintain cataloging, referential, and structural metadata. No predefined
standard is imposed for administrative metadata, usage and impact
metadata, or display metadata. Instead, custom schemas are developed on
a case-by-case basis, tailored to the specific requirements of the
applications that use them (see section 2.6).

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 30%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">Administrative metadata</th>
<th style="text-align: left;">Structure and content defined based on
needs.</th>
<th style="text-align: left;">Optional; used to provide dissemination
systems with instructions related to access, metadata display, etc.</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">Usage and impact metadata</td>
<td style="text-align: left;">Structure and content defined based on
needs.</td>
<td style="text-align: left;">Optional; used to store information
(dynamically generated) on web usage and impact of the datasets.</td>
</tr>
<tr>
<td style="text-align: left;">Presentation and portrayal metadata</td>
<td style="text-align: left;">Structure and content defined based on
needs, except for geographic data for which the “portrayal” metadata
elements of the ISO19139 are used.</td>
<td style="text-align: left;">Optional; used to provide dissemination
systems with instructions on how to display the data (e.g., the type of
chart, color palette, font sizes, axis labels, etc. for an
indicator).</td>
</tr>
</tbody>
</table>
