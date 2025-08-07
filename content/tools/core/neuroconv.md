---
title: "NeuroConv"
description: "A Python library for automatic conversion from proprietary data formats to NWB"
category: "data-conversion"
image: "/images/nwbconversiontools_logo_framed.png"
source_url: "https://github.com/catalystneuro/neuroconv"
docs_url: "https://neuroconv.readthedocs.io/en/main/index.html"
weight: 30
---

## Description

NeuroConv is a Python library for automatic conversion from proprietary data formats to NWB. It provides a standardized way to convert data from various acquisition systems and file formats to NWB, making it easier to adopt the NWB standard.

NeuroConv supports a wide range of neurophysiology data types and acquisition systems, including extracellular electrophysiology, calcium imaging, intracellular electrophysiology, and behavior data.

## Installation

```bash
pip install neuroconv
```

## Usage

```python
from neuroconv.converters import SpikeGLXRecordingConverter
from dateutil import parser
import numpy as np

# Point to data
file_path = "path/to/spikeglx/file.bin"

# Initialize the converter
converter = SpikeGLXRecordingConverter(file_path=file_path)

# Extract metadata from the source files
metadata = converter.get_metadata()

# Customize metadata
metadata["NWBFile"].update(
    experimenter=["experimenter1", "experimenter2"],
    experiment_description="Simple SpikeGLX recording",
    session_description="A test NWB file from SpikeGLX data.",
    identifier="SpikeGLX_example",
    session_start_time=parser.parse("2020-10-09T14:35:00+00:00"),
)

# Run the conversion
converter.run_conversion(
    nwbfile_path="output.nwb",
    metadata=metadata
)
```

## Additional Information

NeuroConv is developed by CatalystNeuro and the NWB community to streamline the process of standardizing neurophysiology data to NWB format. It is designed to be modular and extensible, allowing for easy integration of new data formats.

## Resources

* [Source](https://github.com/catalystneuro/neuroconv)
* [Resources](https://neuroconv.readthedocs.io/en/main/index.html")
