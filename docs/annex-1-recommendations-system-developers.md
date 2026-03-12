# Annex 1 – Recommendations to System Developers

Adopting metadata standards from the outset in the design and
development of data management and dissemination systems is essential to
ensuring that information can be seamlessly shared, understood, and
reused across platforms. Standards enable interoperability, improve
discoverability, and support accurate interpretation and meaningful use
of data by both humans and machines. To realize these benefits,
applications for processing, managing, and disseminating data must be
architected to generate, store, and expose standardized metadata
throughout the data lifecycle.

Storage and Indexing of Metadata

Adopting metadata standards from the outset in the design and
development of data management and dissemination systems is essential to
ensuring that information can be seamlessly shared, understood, and
reused across platforms. Standards enable interoperability, improve
discoverability, and support accurate interpretation and meaningful use
of data by both humans and machines. Realizing these benefits requires
that applications be architected to generate, store, and expose
standardized metadata throughout the data lifecycle. This includes the
ability to manage metadata in its structured, standardized form
(typically provided as JSON) and to integrate with APIs for acquiring,
processing, and republishing metadata as part of automated workflows.

JSON Metadata in SQL-based Systems

The adoption of structured and comprehensive metadata compliant with the
Bank’s standards and stored in JSON format provides significant
advantages for developers of SQL-based data management and dissemination
systems. Modern relational database management systems (RDBMS) offer
extensive support for JSON data, enabling efficient storage, querying,
and manipulation of metadata while maintaining the flexibility required
to accommodate diverse data structures.

The advantages of JSON metadata in SQL systems are:

- **Efficient storage and retrieval**: SQL databases, such as
  PostgreSQL, MySQL, and SQL Server, provide native JSON data types and
  indexing mechanisms that allow for fast storage and retrieval of
  metadata. JSON documents can be stored in dedicated columns, enabling
  developers to efficiently query and extract relevant metadata elements
  without the need for complex joins or schema modifications.

- **Flexible and schema-agnostic structure**: Unlike traditional
  relational schema constraints, JSON metadata offers a flexible
  structure that can accommodate evolving metadata standards and custom
  extensions. This flexibility allows SQL-based systems to ingest and
  process metadata with varying structures while maintaining consistency
  and compliance with established standards.

- **Advanced query capabilities**: SQL databases provide powerful
  functions for processing JSON data, including path-based queries,
  filtering, and aggregation. Features such as PostgreSQL's jsonb
  indexing, MySQL's JSON\_TABLE, and SQL Server's OPENJSON allow
  developers to efficiently navigate hierarchical metadata structures
  and extract insights without compromising performance.

- **Integration with relational data**: JSON metadata can be seamlessly
  integrated with structured relational data within the same SQL
  environment. Developers can create hybrid solutions that leverage the
  strengths of relational modeling while embedding rich, nested metadata
  structures that do not fit traditional table designs.

- **Ease of updates and versioning**: JSON's self-describing nature
  allows for easier updates and versioning of metadata, supporting the
  evolution of data documentation without necessitating database schema
  modifications. This adaptability ensures long-term maintainability and
  scalability of metadata management within SQL systems.

- **Interoperability and data exchange**: The widespread adoption of
  JSON as a data interchange format facilitates seamless integration
  with external applications, APIs, and web-based platforms. Developers
  can leverage standardized JSON metadata files for interoperability
  across diverse systems while maintaining consistency in metadata
  representation.

To maximize the benefits of JSON metadata in SQL-based systems,
developers should consider the following best practices:

- Use appropriate **indexing strategies**, such as JSONB indexing in
  PostgreSQL, to optimize query performance.

- **Validate JSON metadata** against predefined schemas to ensure
  compliance with metadata standards.

- Leverage SQL functions to **perform partial updates and efficient
  querying** without extracting entire JSON documents.

- Implement appropriate **security measures** to protect sensitive
  metadata information stored in JSON format.

JSON Metadata in NoSQL-based Systems

NoSQL databases are inherently well-suited for storing and managing JSON
metadata, offering high flexibility, scalability, and performance for
unstructured and semi-structured data. Developers and administrators of
NoSQL-based systems can take full advantage of JSON metadata to enhance
their data management and dissemination capabilities.

The advantages of JSON metadata in NoSQL systems are:

- **Native JSON storage and querying**: NoSQL databases such as MongoDB
  store JSON natively, allowing for seamless ingestion, querying, and
  retrieval of metadata without the need for transformation. This direct
  support enhances system performance and reduces data processing
  overhead.

- **Schema flexibility and adaptability**: Unlike SQL databases, NoSQL
  systems do not enforce rigid schemas, making them ideal for storing
  metadata with evolving structures. This flexibility allows
  organizations to continuously update their metadata standards without
  the need for schema alterations or migrations.

- **High scalability and performance**: NoSQL databases are designed to
  scale horizontally, handling large volumes of JSON metadata
  efficiently. This scalability ensures that metadata management systems
  can accommodate growing datasets and user demands without degradation
  in performance.

- **Complex hierarchical data handling**: JSON's hierarchical structure
  aligns naturally with the document-based model of NoSQL databases,
  making it easier to store, retrieve, and manipulate nested metadata
  elements without requiring complex joins or transformations.

- **Integration with cloud and big data technologies**: Many NoSQL
  databases provide seamless integration with cloud platforms and big
  data ecosystems, enabling efficient metadata dissemination across
  distributed environments and enhancing interoperability with data
  lakes and processing frameworks.

- **Real-time processing and analytics**: NoSQL systems support
  real-time data processing, allowing to analyze and act on metadata
  insights dynamically. This capability is critical for applications
  requiring up-to-the-minute metadata updates and rapid decision-making.

To fully leverage JSON metadata in NoSQL-based systems, developers and
administrators should consider the following best practices:

- Design metadata structures that take advantage of NoSQL's flexible
  schema model while maintaining consistency.

- Utilize indexing and aggregation features to optimize query
  performance and retrieval times.

- Implement backup and replication strategies to ensure metadata
  availability and durability.

- Leverage API-driven architectures to facilitate seamless metadata
  sharing across applications.

Development of Data Dissemination Platforms

Data and metadata stored in back-end (or front end) systems may serve as
input for multiple front-end data dissemination systems. The WBG has
decentralized systems within, and permissive licensing for outside.

Ensuring that metadata standards are consistently implemented across all
systems is critical to maintaining data integrity, interoperability, and
usability. One essential aspect of this implementation is making
metadata available in back-end systems through well-defined APIs.
Providing API access to metadata enables developers of front-end systems
and applications, including dashboards and data dissemination user
interfaces (UIs), to build solutions that enhance data discoverability
and interpretability for end-users.

By offering API access, both internal and external developers can
retrieve standardized metadata in real time, ensuring that their
applications accurately reflect the most up-to-date descriptions,
classifications, and contextual information about the data. This
capability empowers developers to create intuitive and user-friendly
interfaces that facilitate efficient data navigation and comprehension,
ultimately improving the overall user experience.

Furthermore, third-party developers who redistribute the Bank's open
data should have the same opportunity to leverage metadata through API
access. Providing these stakeholders with standardized and
machine-readable metadata allows them to incorporate the data into their
platforms and services in the most efficient and cost-effective manner.
This not only enhances the visibility and reach of the Bank's data
products but also promotes innovation and broader utilization of the
data for diverse applications.

API-based access to metadata fosters interoperability by enabling
different systems and applications to integrate seamlessly with the
Bank's data infrastructure. This ensures consistency in how data is
presented and interpreted across various platforms, minimizing
discrepancies and enhancing trust among data users.

To maximize the benefits of API access to metadata, the Bank should
ensure that:

- **APIs are well-documented and adhere to industry best practices**,
  providing clear guidance on how to query, retrieve, and utilize
  metadata effectively.

- **Metadata APIs support commonly used formats**, such as JSON and XML,
  to accommodate different technical environments and preferences.

- **Authentication and access controls are appropriately implemented**,
  balancing open access with necessary security measures for sensitive
  metadata elements.

- **Version control mechanisms are in place**, allowing developers to
  adapt to updates without disrupting existing integrations.

Development of Other Types of Applications

The integration of the Bank’s metadata standards into software
applications fosters the efficiency, interoperability, and long-term
usability of data. When software developers embed metadata standards
within their applications, they facilitate seamless data documentation,
sharing, and reuse across different platforms and organizations.

Software applications that support metadata standards, such as the Data
Documentation Initiative (DDI), automate the generation of comprehensive
metadata, reducing the need for manual documentation and minimizing the
risk of errors. For example, data entry tools like Survey Solutions by
the World Bank and CsPro by the U.S. Census Bureau incorporate
DDI-compliant metadata generation capabilities.[^30] This built-in
functionality allows users to capture essential metadata elements such
as survey structure, variable definitions, and data collection
methodologies in a standardized format. By automating metadata creation,
these tools streamline data management processes, improve data accuracy,
and enhance operational efficiency.

Embedding metadata standards into software applications promotes
interoperability by ensuring that data can be seamlessly exchanged and
integrated across different systems and institutions. Standardized
metadata formats enable compatibility with other applications and
repositories, facilitating collaboration and data sharing. When
applications adhere to widely accepted metadata standards, they can
easily interface with data dissemination platforms, statistical systems,
and analytical tools, enhancing the overall data ecosystem's
cohesiveness. This interoperability is particularly crucial in
multi-stakeholder environments, where diverse organizations contribute
to and consume data.

[^30]: Another example is QGIS which exports metadata compliant with the ISO 19139 metadata standard for geographic datasets.
