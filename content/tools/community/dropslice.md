---
title: "dropslice"
description: "A static web page, built on h5web, that opens NWB and other HDF5 files in the browser, along with MATLAB, NumPy and Zarr files, with plots, images and tables. Files are read locally and never uploaded."
category: "exploration"
image: "/images/tools/dropslice/dropslice-logo.png"
source_url: "https://github.com/stanczykwyatt/dropslice"
weight: 60
---

## Description

dropslice is a web page for looking inside data files without installing anything. Drop in an NWB or HDF5 file, a MATLAB MAT-file (v5 or v7.3), a NumPy `.npy` or `.npz` file, or a Zarr folder, and browse its groups, datasets and attributes with h5web's line plots, heatmaps, images and tables. Large HDF5 and NWB files are read lazily, a slice at a time. Everything runs in the browser, and files are never uploaded.

Developed by [Wyatt Stanczyk](https://github.com/stanczykwyatt). Free and open source (MIT).

## Features

- Opens NWB files stored as HDF5 through h5wasm, including datasets compressed with Blosc, Zstandard, LZ4 or LZF
- Browses any NWB file generically (groups, datasets, attributes and links); no extensions needed
- Also opens MATLAB v5 and v7.3 MAT-files, NumPy `.npy`/`.npz` files and Zarr folders
- Read-only; pickled NumPy object arrays are refused, never loaded
- Static page on GitHub Pages: nothing to install, nothing uploaded

## Resources

- [Open dropslice](https://stanczykwyatt.github.io/dropslice/)
- [Source Code](https://github.com/stanczykwyatt/dropslice)
