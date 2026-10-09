---
title: "AqNWB 0.4.0 Released"
weight: 1
date: "2026-09-03"
subtitle: "A major release enhancing support for NWB 2.11 and table data types."
image: "/images/aqnwb_0.4_release_banner.png"
tags: announcement, software, aqnwb, release
---

We are excited to announce the release of [**AqNWB 0.4.0**](https://github.com/NeurodataWithoutBorders/aqnwb/releases/tag/0.4.0), the latest version of the open C++ API for enabling direct data acquisition in the Neurodata Without Borders (NWB) data standard. AqNWB fills a critical gap in the NWB software ecosystem by allowing researchers and hardware developers to acquire data directly into the NWB format.

This release brings significant new capabilities, including streaming data read and major enhancements to support tabular data types via the `DynamicTable` class. With the release of NWB 2.11, this version of AqNWB now adds support for the new `EventsTable` for recording events data, `MeaningsTable` for adding machine-readable semantic meanings to `DynamicTable` columns, and support for annotating time intervals via `TimeIntervals`.


## Support more NWB 2.11 neurodata types

AqNWB now writes NWB files using the latest NWB 2.11 schema. AqNWB continues to expand its capabilities to grow coverage of key NWB data types, focusing in this release on adding support for event and time interval data types. Key additions include:

- **EventsTable**: A dedicated, standardized way to represent event data, including support for the new `TimestampVectorData` and `DurationVectorData` types.
- **TimeIntervals**: Support for annotating time intervals, enabling standard tables like `trials`, `invalid_times`, and `epochs`.
- **MeaningsTable**: Support for adding machine-readable semantic meanings to `DynamicTable` columns.
- **VectorIndex**: Support for single-ragged array columns via the new `VectorIndex` type. `TimeIntervals` uses `VectorIndex` for its `tags` column to support arbitrary numbers of tags per time interval.
- **Subject**: Support for handling subject metadata.

## Enhanced DynamicTable Capabilities

Working with tabular data is now significantly easier and more flexible:

- **Row-based Read and Write**: New `addRow`, `addRows`, and `readRows` methods allow for row-based data insertion and extraction using a `RowData` map, enabling type-safe, column-keyed operations without managing per-column buffers directly.

- **Spec-based Configuration**: By separating configuration from initialization, AqNWB now allows users to fully configure all columns of a table before the table is initialized, providing a more flexible and user-friendly way to define table structures.

## Streaming Data Read of Remote NWB Files

AqNWB 0.4.0 introduces support for streaming read of remote NWB files, e.g., to access data stored in cloud storage or on remote servers. This is supported via two new methods:

- **HDF5 ROS3 Driver**: The new `HDF5IO::openS3()` method supports opening existing remote files in S3 in read-only mode via HDF5's ROS3 driver.
- **remfile-cpp**: The new `HDF5IO::openRemote()` method reads remote NWB files over HTTP(S) using the `remfile-cpp` virtual file driver. 

## Zero-copy Interleaved Multichannel Writes

For high-channel-count recordings, AqNWB now supports zero-copy interleaved multichannel writes via the new `ElectricalSeries::writeAllChannels` method. This provides a more efficient way to write data directly from acquisition hardware buffers to disk.

## Enhanced Management of Recording Objects

As part of maturing the API, this release introduces key improvements to the management of recording objects. `RegisteredType` objects representing NWB data types and 
`BaseRecordingData` representing individual recording datasets are now managed centrally in the I/O object, allowing for more efficient memory usage, avoiding duplicate object creation, and providing a more consistent interface for managing recording state.

## Get Started

To get started with AqNWB, please refer to the [AqNWB documentation](https://nwb.org/aqnwb/). This release includes several breaking changes. If you are upgrading from a previous version, please review the [AqNWB release notes](https://github.com/NeurodataWithoutBorders/aqnwb/blob/main/CHANGELOG.md) for details.

We are actively looking for new users and collaborators! If you are interested in integrating AqNWB with your acquisition system, please create an issue on the [AqNWB GitHub repository](https://github.com/NeurodataWithoutBorders/aqnwb/issues) or reach out on the [NWB Helpdesk](https://github.com/NeurodataWithoutBorders/helpdesk/discussions).

## Acknowledgements

AqNWB development is supported by the National Institute Of Neurological Disorders And Stroke of the National Institutes of Health under Award Number R03NS145401. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health. Initial development of AqNWB was supported by The Kavli Foundation. We thank all contributors to the AqNWB software.
