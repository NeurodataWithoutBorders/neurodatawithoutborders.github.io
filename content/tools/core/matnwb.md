---
title: "MatNWB"
description: "A MATLAB library for reading and writing NWB files"
category: "read-write-api"
image: "/images/matnwb_logo_framed.png"
source_url: "https://github.com/NeurodataWithoutBorders/matnwb/"
docs_url: "https://matnwb.readthedocs.io/"
weight: 20
---

## Description

MatNWB is a MATLAB library for reading and writing NWB files. It provides full support for all components of the NWB standard, including support for extensions. The API is interoperable with PyNWB, i.e., files created with MatNWB can be read in PyNWB and vice versa.

MatNWB supports advanced read/write for efficient interaction with very large data files (i.e., data too large for main memory), via lazy data loading, iterative data write, and data compression among others.

## Installation

```bash
# Clone the repository
git clone https://github.com/NeurodataWithoutBorders/matnwb.git

# Add to MATLAB path
addpath(genpath('/path/to/matnwb'));
```

## Usage

```matlab
% Create a new NWB file
nwb = NwbFile( ...
    'session_description', 'a test NWB File', ...
    'identifier', 'mouse001', ...
    'session_start_time', datetime('now'));

% Write the file
nwbExport(nwb, 'test_file.nwb');

% Read the file
nwb = nwbRead('test_file.nwb');
```

## Additional Information

MatNWB allows MATLAB users to work with NWB data in their preferred environment, using familiar MATLAB data structures and methods.

## Resources

* [Source](https://github.com/NeurodataWithoutBorders/matnwb/)
* [Docs](https://matnwb.readthedocs.io/)
