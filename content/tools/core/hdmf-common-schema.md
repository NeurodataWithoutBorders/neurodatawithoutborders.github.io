---
title: "HDMF Common Schema"
description: "Schema of common, general data structures used throughout the NWB Standard Schema"
category: "extension"
image: "/images/hdmf_common_schema_logo_framed.png"
source_url: "https://github.com/hdmf-dev/hdmf-common-schema"
docs_url: "https://hdmf-common-schema.readthedocs.io/en/stable/"
weight: 120
---

## Description

The HDMF Common Schema defines the schema of common, general data structures, which are used throughout the NWB Standard Schema but which are not specific to neurophysiology. 

Example types defined in the HDMF common schema include all types related to `DynamicTable` for defining data tables, along with other common data structures that can be reused across different domains.

## Installation

The HDMF Common Schema is a documentation resource, not a software package to install. The documentation can be accessed at:

```
https://hdmf-common-schema.readthedocs.io/
```

## Usage

The HDMF Common Schema is primarily used by the NWB schema and by extension developers. For example, when creating an extension that needs to store tabular data, you'd typically extend or use the `DynamicTable` type from HDMF Common Schema:

```yaml
groups:
- neurodata_type_def: MyCustomTable
  neurodata_type_inc: DynamicTable
  doc: A custom table for storing specific experiment data.
  datasets:
  - name: custom_column
    neurodata_type_inc: VectorData
    doc: Custom column for my specific data.
    dtype: text
```

## Additional Information

The HDMF Common Schema is particularly important because it defines general-purpose data structures that enable efficient and flexible representation of complex data. For example, the `DynamicTable` type provides a way to represent tabular data with columns of different data types and potentially varying numbers of rows, making it suitable for storing experimental metadata, subject information, and other tabular data.

Understanding this schema is helpful for developers creating extensions, especially when they need to represent structured data like tables, which are common in scientific datasets.

## Resources

* [Source](https://github.com/hdmf-dev/hdmf-common-schema)
* [Documentation](https://hdmf-common-schema.readthedocs.io/en/stable/)