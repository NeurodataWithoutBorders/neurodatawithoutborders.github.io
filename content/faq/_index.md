---
title: "Frequently Asked Questions"
weight: 5
---

## Using NWB


### Is NWB 2 stable? {#is-nwb-2-stable}

Yes! NWB 2.0 was officially released in January 2019, and the schema is stable. A key goal of the NWB endavour is to ensure that NWB 2 remains accessible. As NWB evolves we strive to ensure that any changes we make do not break backwards compatiblility.

### I would like to use NWB. How do I get started? {#how-to-get-started}

See the [Converting neurophysiology data to NWB](/converting-data-to-nwb/) page for more information.

### How do I cite NWB 2 in my research? {#how-to-cite}

Oliver Rübel, Andrew Tritt, Ryan Ly, Benjamin K. Dichter, Satrajit Ghosh, Lawrence Niu, Pamela Baker, Ivan Soltesz, Lydia Ng, Karel Svoboda, Loren Frank, Kristofer E. Bouchard, The Neurodata Without Borders ecosystem for neurophysiological data science, Oct. 2022, eLife 11:e78362. [https://doi.org/10.7554/eLife.78362](https://doi.org/10.7554/eLife.78362)

### How do I install PyNWB? {#install-pynwb}

See the [Installing PyNWB](https://pynwb.readthedocs.io/en/stable/install_users.html) for details.

### How do I install MatNWB? {#install-matnwb}

See the [MatNWB documentation](https://matnwb.readthedocs.io/en/latest/pages/getting_started/installation_users.html) for details.

### What is the difference between PyNWB and nwb-schema? {#pynwb-vs-schema}

[PyNWB](https://pynwb.readthedocs.io/en/stable/) is the Python reference read/write API for the current NWB 2.x format. The [nwb-schema](https://github.com/NeurodataWithoutBorders/nwb-schema/) is used to manage development of the data standard schema. End-users who want to use NWB typically do not need to worry about the nwb-schema repo as the current schema is always installed with the corresponding API (whether it is [PyNWB](https://pynwb.readthedocs.io/en/stable/) for Python or [MatNWB](https://matnwb.readthedocs.io/en/latest/) for Matlab).

### How do I read NWB files in different programming languages? {#read-nwb-files}

For Python and Matlab we recommend using the [PyNWB](https://pynwb.readthedocs.io/en/stable/) and [MatNWB](https://matnwb.readthedocs.io/en/latest/) reference APIs. For C++ you can use [AqNWB](https://neurodatawithoutborders.github.io/aqnwb/read_page.html). To get started see also the [Reading NWB Files](https://nwb-overview.readthedocs.io/en/latest/file_read/file_read.html) page.

If you are using other programming languages (such as R, Julia, Java, or Javascript) you can use the standard HDF5 readers that are available for these languages. In contrast to the NWB native API (PyNWB, MatNWB, AqNWB), the HDF5 readers are not aware of NWB schema details. This can make writing valid NWB files in other languages (without PyNWB, MatNWB, or AqNWB) tricky, but for read they nonetheless provide access to the full data. For write, applications (e.g., MIES written in Igor) often chose to implement only the parts of the NWB standard that are relevant to the particular application.

### Where should I publish my NWB files? {#publish-nwb-files}

You can publish NWB files in many different archives. Funding or publishing requirements may require you to publish your data in a particular archive. Many such archives already support NWB. If not, please let us know and we will be happy to assist you and the archive developers with supporting the NWB standard.

If you are free to publish data wherever, we would recommend [DANDI](https://dandiarchive.org/). DANDI has built-in support for NWB that validates NWB files, automatically extracts key metadata to enable search, and provides tools for interactively exploring and analyzing NWB files. Furthermore, it provides an efficient interface for publishing neuroscience datasets on the TB scale, and can do so for free.

### Who can I contact for questions?

- **General questions:** For general questions, use the [NWB Helpdesk](https://github.com/dandi/helpdesk/discussions/).
- **Bugs and issues:** To contribute, or to report a bug, create an issue on the appropriate GitHub repository. To find relevant repositories see the [Glossary of Core NWB Tools](/tools/core/) and [Accessing NWB Sources](https://nwb-overview.readthedocs.io/en/latest/nwb_source_codes.html) pages.
- **Stay tuned:** To receive updates about NWB at large, sign up for the [NWB mailing list](https://mailchi.mp/fe2a9bc55a1a/nwb-signup/).

For details, please also review our Contributing Guidelines.

## Alternative data standards and formats

### How does NWB 2.0 compare to other standards?

See page: [How does NWB 2.0 compare to other neurodata standards?](/faq/comparison_to_other_standards/)

### Why use HDF5 as the primary backend for NWB?

See page: [Why use HDF5 as the primary backend for NWB?](/faq/why_hdf5/)

### Are you aware of the Rossant blog posts about moving away from HDF5?

Yes. See above for our motivations for using HDF5. Many of the technical issues raised in the blog post have been addressed and in our experience HDF5 is reliable and is performing well for NWB users.

### Why not just use HDF5 on its own?

The goal of NWB is to package neurophysiology data with metadata sufficient for reuse and reanalysis of the data by other researchers. HDF5 enables users to provide very rich metadata, sufficient for describing neuroscience data for this purpose. The problem with HDF5 on its own is that it is just too flexible. Without a schema, files could be missing key metadata like the sampling rate of a time series. Furthermore, different labs that use HDF5 would use completely different methods for organizing and annotating experiment data. It would be quite difficult to aggregate data across labs or build common tools without imposing structure on the HDF5 file. This is the purpose of the NWB schema. The NWB schema formalizes requirements that ensure reusability of the data and provides a common structure that enables interoperability across the global neurophysiology community. Users can use extensions to build from schema and describe new types of neurophysiology data.

### Why is it discouraged to write videos from lossy formats (mpg, mp4) to internal NWB datasets?

The NWB team strongly encourages that users do NOT package videos of natural behavior or other videos that are stored in lossy compressed formats, such as MP4, in the NWB file. Instead, these data can be included in the NWB file as an `ImageSeries` that has an external file reference to the relative path of the MP4 file. An MP4 file is significantly smaller in file size compared to both the uncompressed frame-by-frame video data (often by about 10X) and such data compressed using algorithms available in HDF5 (e.g., gzip, blosc). Users _could_ store the binary data read from an MP4 file in the `data` array of an `ImageSeries`, but this data cannot be read as a video directly from the HDF5 file. The binary data can only be read as a video by first writing the data into a new MP4 file and then using a software tool like FFmpeg to read the MP4 file. This creates a burden on the data user to have enough space on their filesystem to write the MP4 file and have an appropriate decompression tool installed to decode and read the MP4 file. As a result, putting compressed video data inside an HDF5 file reduces the accessibility of that data and limits its reuse.

## NWB 1 vs 2

### What has changed between NWB 1 and 2?

See the [release notes of the NWB format schema](http://nwb-schema.readthedocs.io/en/latest/format_release_notes.html) for details about changes to the format schema. For details about changes to the specification language see the specification language release notes. With regard to software, NWB 2 marks a full reboot and introduced with [PyNWB](https://pynwb.readthedocs.io/en/stable/), [MatNWB](https://matnwb.readthedocs.io/en/latest/), [HDMF docutils](https://github.com/hdmf-dev/hdmf-docutils/), [nwb-schema](https://nwb-schema.readthedocs.io/en/latest/) etc. several new packages and repositories while tools, e.g., [api-python](https://neurodatawithoutborders.github.io/api-python/build/html/api_usage.html), that were created for NWB:N 1.x have been deprecated.

### Does PyNWB support NWB:N 1.0.x files?

[PyNWB](https://pynwb.readthedocs.io/en/stable/) includes the pynwb/legacy module which supports reading of NWB:N 1.0.x files from popular data repositories, such as the [Allen Cell Types Atlas](http://celltypes.brain-map.org/). For NWB:N 1.0.x files from other sources the millage may vary in particular when files are not fully format compliant, e.g., include arbitrary custom data or are missing required data fields.

### What is the difference between NWB and NWB:N?

Neurodata Without Borders (NWB) started as a project by the Kavli Foundation with the goal to enhance accessibility of neuroscience data across the community. The intent was to have a broad range of projects under the NWB umbrella. The Neurodata Without Borders: Neurophysiology (NWB:N) data standard was intended to be the first among many such projects. As NWB:N is currently the only project under the NWB umbrella, the terms "NWB" and "NWB:N" are often used interchangeably.

### What is the difference between PyNWB and api-python?

[PyNWB](https://pynwb.readthedocs.io/en/stable/) is the Python reference read/write API for the current NWB 2.x format. [api-python](https://neurodatawithoutborders.github.io/api-python/build/html/api_usage.html) is a deprecated write-only API designed for NWB:N 1.0.x files. [PyNWB](https://pynwb.readthedocs.io/en/stable/) also provides support for reading some NWB:N 1.0.x files from popular data repositories, such as the [Allen Cell Types Atlas](http://celltypes.brain-map.org/) via the pynwb/legacy module.
