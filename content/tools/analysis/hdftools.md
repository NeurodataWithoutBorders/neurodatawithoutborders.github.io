---
title: "HDF Tools"
description: "A broad range of useful tools for inspecting and browsing HDF5 files, including HDFView, HDF5 plugins for Jupyter or VSCode, and command-line tools."
category: "exploration"
image: "/images/tools/hdftools/jupyterlab_h5web_nwb_example.png"
weight: 50
---

## Description

There are a broad range of useful tools for inspecting and browsing HDF5 files. For example, HDFView and HDF5 plugins for Jupyter or VSCode provide general visual tools for browsing HDF5 files. In addition, the HDF5 library ships with a range of command line tools that can be useful for developers (e.g., *h5ls* and *h5dump* to introspect, *h5diff* to compare, or *h5copy* and *h5repack* to copy HDF5 files).

> **Note:** The tools listed here are generic HDF5 tools and as such are not aware of the NWB schema. Modifying NWB files using generic HDF5 tools can result in invalid NWB files. Use of these tools is, hence, primarily useful for developers, e.g., for debugging and visual inspection of NWB files.

## HDFView

![HDFView Screenshot](/images/tools/hdftools/hdfview-sample2.jpg)

[HDFView](https://www.hdfgroup.org/downloads/hdfview/) is a visual tool written in Java for browsing and editing HDF (HDF5 and HDF4) files. Using HDFView, you can:
- View a file hierarchy in a tree structure
- Create new files, add or delete groups and datasets
- View and modify the content of a dataset
- Add, delete and modify attributes

HDFView uses the Java HDF Object Package, which implements HDF4 and HDF5 data objects in an object-oriented form.

- [Download HDFView](https://www.hdfgroup.org/downloads/hdfview/)
- [Source Code](https://github.com/HDFGroup/hdfview)

## HDF5 Command-line Tools

The HDF5 software distribution ships with a broad range of [HDF5 command-line utilities](https://docs.hdfgroup.org/hdf5/v1_14/_view_tools_command.html) that cover various tasks useful for debugging and inspecting HDF5 files.

### CLI tools for inspecting HDF5 files:

- **h5ls**: Lists selected information about file objects in the specified format
  > **Tip:** *h5ls* can also be used with remote files on S3 via `h5ls --vfd=ros3 -r <s3path>` or on Windows via `h5ls --vfd=ros3 --s3-cred="(,,)" <s3path>`
- **h5dump**: Examines the contents of an HDF5 file and dumps those contents to an ASCII file
- **h5diff**: Compares two HDF5 files and reports the differences
- **h5check**: Verifies that an HDF5 file is encoded according to the HDF5 specification
- **h5stat**: Displays object and metadata information for an HDF5 file
- **h5watch**: Outputs new records appended to a dataset as the dataset grows (similar to Unix `tail`)
- **h5debug**: Debugs an existing HDF5 file at a low level

### CLI tools to copy, clean, and edit HDF5 files:

- **h5repack**: Copies an HDF5 file to a new file with or without compression/chunking
- **h5copy**: Copies an HDF5 object from an input file to an output file
- **h5repart**: Repartitions a file or family of files
- **h5clear**: Clears superblock status flags field and performs other maintenance tasks

## Jupyter HDF5 Plugins

![JupyterLab H5Web Example](/images/tools/hdftools/jupyterlab_h5web_nwb_example.png)

[JupyterLab](https://jupyter.org/) offers several extensions for browsing and visualizing HDF5 files:

- [jupyterlab-h5web](https://github.com/silx-kit/jupyterlab-h5web): Shows both the tree and visualizations in a single tab
- [jupyterlab-hdf5](https://github.com/jupyterlab/jupyterlab-hdf5): Shows the tree in the left sidebar with visualizations in separate tabs
- [h5glance](https://github.com/European-XFEL/h5glance): Displays an interactive hierarchy inline in Python notebooks

> **Tip:** Some extensions expect the `.h5` file extension. You may need to create custom file associations or rename NWB files to use the `.h5` extension.

## VSCode HDF5 Plugin

![VSCode H5Web Example](/images/tools/hdftools/vscode_h5web_nwb_example.png)

The [H5Web VSCode plugin](https://marketplace.visualstudio.com/items?itemName=h5web.vscode-h5web) provides an H5Web Viewer to browse HDF5 files in VSCode.

> **Note:** To open NWB files with the H5Web plugin, either:
> - Use `right click -> Open with... -> H5Web (any extension)`
> - Add this to VS Code's settings:
>   ```json
>   "workbench.editorAssociations": {
>     "*.nwb": "h5web.viewer"
>   }
>   ```
