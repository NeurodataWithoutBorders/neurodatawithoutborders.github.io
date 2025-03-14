---
title: "HDMF Specification Language"
description: "Formal structures for describing the organization of complex data"
category: "extension"
image: "/images/specification_language_logo_framed.png"
source_url: "https://github.com/hdmf-dev/hdmf-schema-language"
docs_url: "https://hdmf-schema-language.readthedocs.io/en/latest/"
weight: 100
---

## Description

The HDMF Specification Language defines formal structures for describing the organization of complex data using basic concepts, e.g., Groups, Datasets, Attributes, and Links. It provides a standardized way to define data structures and relationships.

The HDMF specification language is defined by the Hierarchical Data Modeling Framework (HDMF). The NWB Specification Language is a derivative of the HDMF Specification Language with minor modifications for NWB (e.g., to use the term neurodata_type).

## Installation

The HDMF Specification Language is a documentation resource, not a software package to install. The documentation can be accessed at:

```
https://hdmf-schema-language.readthedocs.io/
```

## Usage

When creating NWB extensions, you'll use the NWB Specification Language (which builds on HDMF) to define new data types. Here's an example of a simple extension definition in YAML format:

```yaml
groups:
- neurodata_type_def: ElectricalSeries
  neurodata_type_inc: TimeSeries
  doc: A time series of electrical measurements.
  datasets:
  - name: data
    dtype: numeric
    shape:
    - null
    - null
    doc: The recorded voltage data.
  - name: electrodes
    neurodata_type_inc: DynamicTableRegion
    doc: The electrodes that this electrical series was recorded from.
```

## Additional Information

Understanding the HDMF Specification Language is essential for developers who want to create extensions to the NWB format. It provides the foundation for defining structured, self-describing data models that can be used across different programming languages and storage backends.
