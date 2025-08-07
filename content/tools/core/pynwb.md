---
title: "PyNWB"
description: "The Python reference API for NWB"
category: "read-write-api"
image: "/images/pynwb_logo_framed.png"
source_url: "https://github.com/NeurodataWithoutBorders/pynwb/"
docs_url: "https://pynwb.readthedocs.io/en/stable/"
weight: 10
---

## Description

PyNWB is the Python reference API for NWB. It provides full support for reading and writing all components of the NWB standard, including support for extensions. The API is interoperable with MatNWB, i.e., files created with PyNWB can be read in MatNWB and vice versa.

PyNWB supports advanced read/write for efficient interaction with very large data files (i.e., data too large for main memory), via lazy data loading, iterative data write, and data compression among others.

## Installation

```bash
pip install pynwb
```

## Usage

```python
from pynwb import NWBFile, NWBHDF5IO
from datetime import datetime
from dateutil.tz import tzlocal

# Create a new NWB file
nwbfile = NWBFile(
    session_description='my first recording',
    identifier='EXAMPLE_ID',
    session_start_time=datetime.now(tzlocal())
)

# Write the file
with NWBHDF5IO('example.nwb', 'w') as io:
    io.write(nwbfile)

# Read the file
with NWBHDF5IO('example.nwb', 'r') as io:
    nwbfile = io.read()
```

## Additional Information

PyNWB also includes classes and command line tools for validating compliance of files with the core NWB schema and the schema of NWB Neurodata Extensions (NDX).

## Resources

* [Source](https://github.com/NeurodataWithoutBorders/pynwb/)
* [Docs](https://pynwb.readthedocs.io/en/stable/)
