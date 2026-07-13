---
title: "NDX Template"
description: "A template for creating Neurodata Extensions (NDX) for the NWB data standard"
category: "extension"
image: "/images/ndxtemplate_logo_framed.png"
source_url: "https://github.com/nwb-extensions/ndx-template"
docs_url: ""
weight: 70
---

## Description

The NDX Template provides a template for creating Neurodata Extensions (NDX) for the NWB data standard. When creating a new extension, the NDX-template will create a detailed NEXTSTEPS.md file describing how to create an extension and how to submit it to the NDX catalog.

The template helps developers by providing a standardized structure for NWB extensions, including:

- Directory structure for extension code
- Template files for extension specification
- Documentation templates
- Setup and configuration files
- Example code

## Installation

```bash
# Install the cookiecutter package
pip install cookiecutter

# Create a new extension using the template
cookiecutter https://github.com/nwb-extensions/ndx-template
```

## Usage

When you run the cookiecutter command, you'll be prompted to enter details about your extension:

```
namespace [ndx]: mylab
extension_name [template]: electrode_array
description [Template NWB extension]: Extension for custom electrode array data
author [My Name]: Jane Scientist
email [my.name@example.com]: jane.scientist@university.edu
github_username [myname]: j-scientist
copyright [2023, My Name]: 2023, Jane Scientist and Lab
version [0.1.0]:
```

This will create a new directory with the structure needed for your extension.

## Additional Information

After creating your extension using the template, follow the instructions in the generated NEXTSTEPS.md file to:

1. Set up your development environment
2. Define your extension
3. Build and test your extension
4. Create documentation
5. Publish your extension to the NDX Catalog

The NDX Template is essential for maintaining consistency across the NWB extension ecosystem and making it easier for researchers to develop and share extensions.

## Resources

* [Source](https://github.com/nwb-extensions/ndx-template)
