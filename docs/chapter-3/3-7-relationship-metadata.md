# 3.7 Relationship Metadata

Relationship metadata captures the associations between datasets and
related digital assets, including additional datasets, analytical
scripts, publications, and derivative data products. To facilitate
thorough navigation and improved resource discovery, expressing these
relationships bidirectionally is advisable whenever feasible. The
adoption of persistent identifiers (such as DOIs or handles) is highly
recommended to ensure reliable and long-term connections. Additionally,
leveraging artificial intelligence for automated extraction and
maintenance of these links can further enhance efficiency and accuracy.

There are several main types of relationships to consider:

- **Between datasets** – For instance, a survey might be the source for
  an indicator, or an anonymized version of a dataset could be derived
  from raw data.[^23] While current metadata standards allow
  documentation of such links, they are often recorded in only one
  direction. Keeping such connections updated takes effort and isn't
  usually prioritized.

- **Between data and publications** – Metadata should show which
  datasets are cited in publications and which publications mention
  specific datasets. The Office of the Chief Statistician develops and
  maintains an AI-based solution to automatically extract data
  citations, helping build a structured and up-to-date database linking
  datasets and World Bank publications. The use of persistent
  identifiers like DOIs greatly improves precision, especially given
  inconsistent citation practices.

- **Between datasets, scripts, and analytical outputs** – Scripts used
  for data processing and analysis connect datasets to the results they
  produce. Metadata about these relationships can link scripts,
  datasets, and outputs like tables, figures, visualizations, and
  reports. The metadata standard used to document data processing and
  analysis scripts provides the elements needed to establish such
  relationships.[^24]

Creating and maintaining metadata that captures relationships between
data resources is resource-intensive and time-consuming. Given ongoing
needs to strengthen core metadata—descriptive and structural—by
improving completeness, accuracy, quality control, and alignment with
standards, relationship metadata is not currently prioritized.

[^23]: In time series, where each value may have a different source, the identification of the source may be included as a text variable in the time series database instead of being provided in the metadata.

[^24]: For an example of implementation, see the Bank’s reproducibility platform at <http://reproducibility.worldbank.org>
