---
title: "HDMF"
description: "Hierarchical Data Modeling Framework for working with hierarchical data"
category: "core-development"
image: "/images/hdmf_logo_framed.png"
source_url: "https://github.com/hdmf-dev/hdmf"
docs_url: "https://hdmf.readthedocs.io/en/stable/"
weight: 130
---

## Description

The Hierarchical Data Modeling Framework (HDMF) is a Python package for working with hierarchical data. It provides APIs for specifying data models, reading and writing data to different storage backends, and representing data with Python objects.

HDMF builds the foundation for the PyNWB Python API for NWB. It offers a flexible, extensible approach to data modeling that allows for the creation of self-describing, structured data formats like NWB.

## Installation

```bash
pip install hdmf
```

## Usage

HDMF provides low-level functionality for working with hierarchical data, typically used by developers creating APIs like PyNWB:

```python
from hdmf.spec import GroupSpec, DatasetSpec, NamespaceBuilder
from hdmf.common import DynamicTable

# Define a new data type specification
spec = GroupSpec(
    doc='A custom data type',
    data_type_def='MyType',
    datasets=[
        DatasetSpec(
            doc='An example dataset',
            name='data',
            dtype='float'
        )
    ]
)

# Create a namespace for your specification
namespace_builder = NamespaceBuilder(
    doc='My extension',
    name='my_extension',
    full_name='My Custom Extension',
    version='0.1.0'
)
namespace_builder.add_spec('my_extension.yaml', spec)

# Working with DynamicTable
table = DynamicTable(
    name='example_table',
    description='An example table'
)
table.add_column('column1', 'A string column', dtype='text')
table.add_row(column1='example data')
```

## Additional Information

HDMF is primarily of interest to developers who need to:

1. Create or extend data APIs like PyNWB
2. Implement new storage backends
3. Support new serialization formats
4. Develop data conversion tools
5. Create validation tools

Understanding HDMF is helpful for advanced NWB users who want to contribute to the core NWB ecosystem or develop sophisticated extensions and tools.
