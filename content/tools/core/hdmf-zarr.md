---
title: "HDMF-Zarr"
description: "Zarr backend for HDMF and PyNWB"
category: "core-development"
image: "/images/hdmf_zarr_logo_framed.png"
source_url: "https://github.com/hdmf-dev/hdmf-zarr"
docs_url: "https://hdmf-zarr.readthedocs.io/en/stable/"
weight: 140
---

## Description

The HDMF Zarr (HDMF-Z) library implements a Zarr backend for HDMF. Zarr is a format for the storage of chunked, compressed, N-dimensional arrays. HDMF-Z also provides convenience classes for integrating Zarr with the PyNWB Python API for NWB to support writing of NWB files to Zarr.

Using Zarr as a storage backend for NWB can provide benefits like:

- Cloud-friendly data access
- Parallel read/write operations
- Efficient access to data chunks
- Flexible compression options

## Installation

```bash
pip install hdmf-zarr
```

## Usage

```python
from pynwb import NWBFile, NWBHDF5IO
from datetime import datetime
from dateutil.tz import tzlocal
from hdmf_zarr import NWBZarrIO

# Create a new NWB file
nwbfile = NWBFile(
    session_description='my first recording',
    identifier='EXAMPLE_ID',
    session_start_time=datetime.now(tzlocal())
)

# Write the file to Zarr format
with NWBZarrIO('example.zarr', mode='w') as io:
    io.write(nwbfile)

# Read the file from Zarr format
with NWBZarrIO('example.zarr', mode='r') as io:
    nwbfile = io.read()
```

## Additional Information

HDMF-Zarr is particularly useful for working with very large datasets, especially in cloud environments or when parallel data access is needed. It provides an alternative storage format to the traditional HDF5 backend, offering different performance characteristics that may be beneficial for certain use cases.

The library is designed to be a drop-in replacement for the HDF5 backend, making it easy to integrate into existing workflows that use PyNWB.
