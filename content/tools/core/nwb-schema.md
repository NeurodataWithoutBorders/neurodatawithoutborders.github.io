---
title: "NWB Schema"
description: "The NWB data standard format specification"
category: "extension"
image: "/images/nwbschema_logo_framed.png"
source_url: "https://github.com/NeurodataWithoutBorders/nwb-schema"
docs_url: "https://nwb-schema.readthedocs.io/en/latest/"
weight: 110
---

## Description

The NWB data standard is governed by the NWB Format Specification (a.k.a., the NWB Schema) described using the NWB Specification Language. This schema defines all the neurodata_types available in NWB.

When creating new extensions, developers typically build on and reuse existing neurodata_types already available in NWB. The NWB Format Specification provides a reference definition for all types available in NWB. The NWB schema itself builds on the HDMF Common Schema.

## Installation

The NWB Schema is a documentation resource, not a software package to install. The documentation can be accessed at:

```
https://nwb-schema.readthedocs.io/
```

## Usage

The NWB Schema is primarily used as a reference when creating extensions or when implementing software that needs to understand the structure of NWB files. Below is an example of how the NWB Schema defines a neurodata_type:

```yaml
groups:
- neurodata_type_def: NWBFile
  default_name: root
  doc: An NWB file storing cellular-based neurophysiology data from a single
    session.
  attributes:
  - name: nwb_version
    dtype: text
    value: "2.2.5"
    doc: File version string. Use semantic versioning, e.g. 1.2.3.
  groups:
  - name: acquisition
    doc: Data acquired from the subject.
    groups:
    - neurodata_type_inc: NWBDataInterface
      doc: The base data interface for an acquired data type.
      quantity: '*'
  # ... more definitions ...
```

## Additional Information

The NWB Schema is a living document that evolves through community contributions and feedback. Extensions build on this foundation, allowing researchers to add specialized data types while maintaining compatibility with the core NWB standard.

Understanding the NWB Schema is essential for anyone developing tools for NWB data, creating extensions, or seeking to understand the detailed structure of NWB files.

## Resources

* [Source](https://github.com/NeurodataWithoutBorders/nwb-schema)
* [Docs](https://nwb-schema.readthedocs.io/en/latest/)
