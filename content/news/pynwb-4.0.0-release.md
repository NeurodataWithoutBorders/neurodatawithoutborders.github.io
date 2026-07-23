---
title: "PyNWB 4.0.0 Released"
weight: 1
date: "2026-06-30"
subtitle: "A major release bringing HERD external resource annotations, the NWBEP001 EventsTable, and the NWB 2.10.0 schema to the Python reference API"
image: "/images/pynwb_4.0.0_banner.png"
tags: announcement, software, pynwb, release
---

We're excited to announce the release of [**PyNWB 4.0.0**](https://github.com/NeurodataWithoutBorders/pynwb/releases/tag/4.0.0), the latest major version of the Python reference API for reading and writing Neurodata Without Borders files. This release pairs two long-anticipated capabilities, **HERD** external resource annotations and the **NWBEP001 EventsTable**, with the new NWB **2.10.0** schema, alongside expanded Python support and a round of cleanup that removes long-deprecated functionality.

## HERD: linking NWB data to external resources

A headline feature of PyNWB 4.0.0 is support for **HERD** (the HDMF External Resources Data structure), exposed as the new `external_resources` field on `NWBFile`.

HERD provides a standardized way to associate **external resource annotations** with the contents of your NWB file. The most common use case is mapping entries in your data, such as species, brain regions, genotypes, or behavioral conditions, to terms in external ontologies and controlled vocabularies. Instead of recording a free-text label like "mouse," you can link that value to a precise, globally resolvable identifier (for example, an NCBI Taxonomy term), making your data more **machine-readable, interoperable, and [FAIR](https://www.go-fair.org/fair-principles/)**.

To get started, see the new tutorials: [Linking to External Resources (HERD)](https://pynwb.readthedocs.io/en/stable/tutorials/general/plot_external_resources.html) and [Annotating Multiple Streamed NWB Files with a Single HERD](https://pynwb.readthedocs.io/en/stable/tutorials/general/resources_streaming.html).

## NWBEP001 and the EventsTable

PyNWB 4.0.0 also integrates [**NWBEP001**](https://github.com/nwb-extensions/nwbep-review/issues/4), the first [NWB Enhancement Proposal](/enhancement-proposals/) to graduate into the core standard. NWB Enhancement Proposals are the formal mechanism for proposing broadly useful additions to the NWB specification; they are typically prototyped and refined as NWB extensions (NDX) before being folded into the core schema. NWBEP001 followed exactly this path, and its acceptance brings a dedicated, standardized way to represent **events** in NWB.

This release adds the new neurodata types defined by the proposal:

- **`EventsTable`**: a table for storing events, including a `source_description` attribute documenting where the events came from
- **`TimestampVectorData`** and **`DurationVectorData`**: column types for event timing and durations
- A new **`events`** group on `NWBFile` to hold event tables
- **`MeaningsTable`**: a table for documenting the meaning of categorical column values of another table, such as the events table

`NWBFile` also gains convenience methods for managing multiple event tables, including `merge_events_tables()` to combine event tables and `get_all_events()` to retrieve all events across the file.

## More new capabilities

Beyond the two headline features, PyNWB 4.0.0 adds several quality-of-life improvements:

- New `get_starting_time()` and `get_duration()` methods on `TimeSeries`, `TimeIntervals`, and `Units`
- **Python 3.14** support, and a bump to **HDMF ≥ 6.1.0**
- **pandas 3.0** compatibility

It also resolves a number of bugs, including fixes to `TimeSeries.get_timestamps()` for numpy arrays, round-tripping of `Units` waveform metadata, and parsing of legacy `Device.model` strings.

## Breaking changes

As a major release, PyNWB 4.0.0 removes functionality that has been deprecated for some time. Highlights include:

- Removal of the deprecated `ProcessingModule` methods `add_container`, `get_container`, `add_data_interface`, and `get_data_interface`
- Removal of the `extensions` argument from `get_type_map`, `get_manager`, and `NWBHDF5IO`
- Removal of the `notes` argument and property from `ScratchData`
- Removal of the `ic_electrodes` argument from `NWBFile`
- Removal of the `paths` argument from `pynwb.validate`
- `NWBFile.icephys_filtering` is now read-only
- **Python 3.9** is now deprecated

If your code relies on any of these, review the [full release notes](https://github.com/NeurodataWithoutBorders/pynwb/releases/tag/4.0.0) before upgrading.

## Get started

You can upgrade today:

```bash
pip install --upgrade pynwb
```

For complete details, see the [PyNWB 4.0.0 release notes](https://github.com/NeurodataWithoutBorders/pynwb/releases/tag/4.0.0) and the [PyNWB documentation](https://pynwb.readthedocs.io/). Questions and feedback are always welcome on the [NWB Helpdesk](https://github.com/NeurodataWithoutBorders/helpdesk/discussions).

Subscribe to our [mailing list](https://mailchi.mp/fe2a9bc55a1a/nwb-signup) to stay up to date on PyNWB releases and other NWB news.
