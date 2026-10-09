---
title: "HDMF-Zarr 0.14.0 Released"
weight: 1
date: "2026-09-18"
subtitle: "A major release adopting Zarr v3 and a unified storage convention for NWB Zarr data."
image: "/images/hdmf_zarr_0_14_release_banner.png"
tags: announcement, software, hdmf, hdmf-zarr, zarr, release
---

We are excited to announce the release of [**HDMF-Zarr 0.14.0**](https://github.com/hdmf-dev/hdmf-zarr/releases/tag/0.14.0), a major update to the HDMF Zarr backend for storing Hierarchical Data Modeling Framework (HDMF) and Neurodata Without Borders (NWB) data using [Zarr](https://zarr.dev/).

This release marks a major transition for HDMF-Zarr: the primary `ZarrIO` and `NWBZarrIO` classes now write and read the new **Zarr v3** format exclusively using `zarr-python` v3. HDMF-Zarr 0.14.0 also adopts the unified Zarr v3 storage convention developed in collaboration with [Zindi](https://github.com/bendichter/zindi) and [LINDI](https://github.com/NeurodataWithoutBorders/lindi), improving interoperability across tools that work with cloud-native NWB data. With the transition to Zarr v3, `ZarrDataIO` has been updated to align with the new Zarr v3 codec API, and now supports dataset sharding for improved performance on large datasets.

## Transition to Zarr v3

- **Zarr v3 by default:** `ZarrIO` and `NWBZarrIO` now write and read Zarr v3 format exclusively, using `zarr-python` v3.
- **Legacy Zarr V2 Support:** Legacy Zarr v2 files cannot be read by `ZarrIO` directly. Instead, use the newly added `ZarrV2IO` and `NWBZarrV2IO` backends to read them. Attempting to open a v2 file with `ZarrIO` will now raise a clear error directing users to the v2 classes.
- **Convert files to Zarr v3:**  Use `NWBZarrV2IO.export_to_v3(...)` or the one-shot `NWBZarrV2IO.convert_to_v3(...)` static helper to efficiently convert NWB Zarr v2 files to Zarr v3.

## Get Started

To get started with HDMF-Zarr, please visit the [HDMF-Zarr documentation](https://hdmf-zarr.readthedocs.io/en/stable/). For questions, bug reports, or feature requests, please open an issue on the [HDMF-Zarr GitHub repository](https://github.com/hdmf-dev/hdmf-zarr) or reach out through the [NWB Helpdesk](https://github.com/NeurodataWithoutBorders/helpdesk/discussions).

## Acknowledgements

HDMF development is supported by the National Library Of Medicine of the National Institutes of Health under Award Number R03LM014996. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.”

This release was made possible by the efforts of [@bendichter](https://github.com/bendichter), [@alejoe91](https://github.com/alejoe91), [@h-mayorquin](https://github.com/h-mayorquin), [@ehennestad](https://github.com/ehennestad), [@rly](https://github.com/rly), and [@oruebel](https://github.com/oruebel). We thank all contributors and collaborators who helped make the transition to Zarr v3 possible.
