# 2.8 Metadata Governance

## 2.8.1 Information on Metadata 

Metadata must consistently correspond with the associated dataset; any
modifications to the data should be promptly reflected in the metadata
to ensure ongoing accuracy and consistency. Consequently, it is common
practice to maintain multiple versions of metadata.

The metadata standards used by the Bank for documenting development data
include a dedicated section for documenting metadata itself (Figure 3).
This section is labeled "Document Description" in the DDI Codebook
metadata standard and as "Metadata Information" in other metadata
standards. It contains key elements to describe metadata versions, such
as an identifier, details of the metadata producer(s), production date,
and a version statement. The version statement should include both a
version description and date, ideally stored in ISO 8601 format
(YYYY-MM-DD HH:MM:SS.sss). It is recommended to include a note in the
version statement to describe changes compared to previous iterations.

<figure>
<img src="/media/image6.png"
style="width:5.02153in;height:4.01098in"
alt="A screen shot of a computer program Description automatically generated" />
<figcaption><p>Figure 3 - Metadata information and
versioning</p></figcaption>
</figure>

## 2.8.2 Recording the Provenance of Metadata for Traceability

Metadata may be generated within the Bank or obtained from external
sources, such as metadata catalogs managed by other organizations. When
using external metadata, it is important to document provenance details
for traceability and transparency. The Bank’s metadata standards feature
a specific *provenance* section intended to record both the source of
imported metadata and its original repository.

## 2.8.3 Locking and Versioning Metadata 

The Bank’s metadata editor incorporates a versioning mechanism that
enables users with reviewer privileges to lock project-specific
metadata. Upon review and endorsement, locking renders the metadata
read-only, thereby safeguarding it against unauthorized modifications.

When metadata is locked:

- The system assigns a **version number** consistent with semantic
  versioning (distinguishing major, minor, or patch updates).

- The reviewer supplies a **concise summary** of significant changes
  introduced in the new release (applicable to versions subsequent to
  1.0.0).

- The system logs both the **reviewer’s credentials** and the
  **timestamp** associated with the lock action.

Subsequent to locking, the metadata editor automatically generates a new
editable project copy, which allows continued enhancements while
preserving the integrity of the locked version. All version information
is documented within the *version\_statement* section of the metadata,
and the editor maintains and displays a comprehensive version history,
ensuring transparency and accountability.

To guarantee metadata integrity, the editor generates a checksum—a
unique string calculated using a cryptographic hash algorithm. Checksums
provide:

- **Integrity assurance** – Any inadvertent alterations or corruption
  (e.g., from storage or transmission errors) result in a changed
  checksum, promptly identifying unauthorized changes.

- **Automated monitoring** – Even minimal updates generate a distinct
  checksum, facilitating automatic comparison without the need for
  manual intervention.

- **Workflow automation** – Checksums support critical downstream
  operations in the Bank’s data management and dissemination frameworks
  by:

<!-- -->

- Flagging metadata modifications.

- Enabling reversion to earlier versions should inconsistencies arise.

- Synchronizing metadata repositories efficiently.

This approach ensures that metadata versioning remains comprehensive,
transparent, and auditable, effectively supporting internal governance
requirements and operational processes.
