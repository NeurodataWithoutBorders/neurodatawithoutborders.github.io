---
title: "Staged Extensions"
description: "GitHub repository for registering new extensions for publication in the NDX Catalog"
category: "extension"
image: "/images/publishing_ndx_logo_framed.png"
source_url: "https://github.com/nwb-extensions/staged-extensions"
docs_url: ""
weight: 80
---

## Description

The staged-extensions GitHub repository is used to register new extensions for publication in the Neurodata Extensions Catalog (NDX Catalog). It serves as the mechanism for reviewing and accepting new extensions into the official catalog.

The staged-extensions repository provides a standardized process for:
- Submitting extensions for review
- Conducting community peer review of extensions
- Testing extensions for compliance with NDX standards
- Publishing approved extensions to the NDX Catalog

## Usage

To submit an extension for inclusion in the NDX Catalog:

1. Fork the staged-extensions repository
2. Create a YAML file describing your extension in the `staged-extensions` folder:

```yaml
name: ndx-my-extension
version: 0.1.0
src: https://github.com/username/ndx-my-extension
pip: ndx-my-extension
license: BSD-3
maintainer: Your Name
maintainer_email: your.email@example.com
description: Brief description of your extension
```

3. Submit a pull request to the staged-extensions repository
4. Address any feedback from the review process
5. Once approved, your extension will be added to the NDX Catalog

## Additional Information

The staged-extensions repository is a key part of the NWB extension ecosystem, ensuring that all extensions in the NDX Catalog meet community standards for quality, documentation, and usability. This review process helps maintain the integrity and usefulness of the extension ecosystem.

## Resources

* [Source](https://github.com/nwb-extensions/staged-extensions)
