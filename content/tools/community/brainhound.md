---
title: "brainhound"
description: "A command line tool and MCP server for finding and reading public neuroscience data. It searches DANDI, OpenNeuro and NeuroMorpho, and reads slices of NWB files on DANDI remotely with HTTP range requests, with each dataset's license and citation."
category: "exploration"
image: "/images/tools/brainhound/brainhound-logo.png"
source_url: "https://github.com/stanczykwyatt/brainhound"
weight: 70
---

## Description

brainhound finds and reads public neuroscience data from a terminal or a coding agent. One search covers DANDI, OpenNeuro and NeuroMorpho. For NWB files on DANDI, it summarizes, browses and reads slices remotely with HTTP range requests through its own read-only HDF5 reader, so a multi-gigabyte recording can be explored without downloading it (a real 8.4 GB session was summarized by reading 1.3 MB). Every result includes the dataset's license and citation.

Developed by [Wyatt Stanczyk](https://github.com/stanczykwyatt). Free and open source (MIT).

## Features

- Summarizes an NWB file's session, subject, acquisition and processing contents
- Lists units and electrodes tables, and reads slices of time series and table columns
- Reads NWB stored as HDF5; Blosc, Zstandard or LZF compression and NWB stored as Zarr are not supported yet
- Command line tool and MCP server (Node.js 20+, no dependencies), plus agent skills
- Read-only: it never writes files, and connects only to the archives' public APIs

## Resources

- [Website](https://stanczykwyatt.github.io/brainhound/)
- [Source Code](https://github.com/stanczykwyatt/brainhound)
