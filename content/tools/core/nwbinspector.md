---
title: "NWB Inspector"
description: "A python library and command-line tool for inspecting NWB files for adherence to NWB best practices"
category: "validation"
image: "/images/nwbinspector_logo_framed.png"
source_url: "https://github.com/NeurodataWithoutBorders/nwbinspector"
docs_url: "https://nwbinspector.readthedocs.io/"
weight: 50
---

## Description

NWB Inspector is a Python library and command-line tool for inspecting NWB files for adherence to NWB best practices. By default, the Inspector also runs the PyNWB validator to check for compliance with the NWB schema.

The Inspector can be easily extended to integrate custom data checks and to configure checks based on specific needs or use cases.

## Installation

```bash
pip install nwbinspector
```

## Usage

### Command Line

```bash
# Basic usage
nwbinspector path/to/file.nwb

# Generate a report
nwbinspector path/to/file.nwb --report-file-path path/to/report.txt
```

### Python API

```python
from nwbinspector import inspect_nwbfile
from pynwb import NWBHDF5IO

# Load an NWB file
with NWBHDF5IO('path/to/file.nwb', 'r') as io:
    nwbfile = io.read()

# Run the inspection and print the issues
for issue in inspect_nwbfile(nwbfile):
    print(f"{issue.severity}: {issue.message}")
```

## Additional Information

NWB Inspector is particularly useful for ensuring that your NWB files not only comply with the schema but also follow best practices that make them more useful and reusable. It helps improve data quality and increases the utility of shared data.

In practice, most users should use the NWB Inspector to validate NWB files, as it helps to check for compliance with both the schema and best practices and provides greater flexibility. Direct use of PyNWB's validator is primarily useful for use cases where schema compliance and performance are of primary concern.

## Resources

* [Source](https://github.com/NeurodataWithoutBorders/nwbinspector)
* [Docs](https://nwbinspector.readthedocs.io/)
