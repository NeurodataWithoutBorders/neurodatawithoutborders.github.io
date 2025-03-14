---
title: "HDMF Documentation Utilities"
description: "Utility tools for creating documentation for extension schema"
category: "extension"
image: "/images/documenting_ndx_logo_framed.png"
source_url: "https://github.com/hdmf-dev/hdmf-docutils"
docs_url: ""
weight: 90
---

## Description

The HDMF Documentation Utilities (hdmf-docutils) provide utility tools for creating documentation for extension schema defined using the NWB Schema Language. These tools help developers create clear, comprehensive documentation for their extensions.

The NDX Template automatically sets up the documentation for extensions via the hdmf-docutils, making them part of most NDX code repositories without requiring direct interaction with the tools.

## Installation

```bash
pip install hdmf-docutils
```

## Usage

The HDMF Documentation Utilities are typically used behind the scenes by the NDX Template, but can also be used directly for more customized documentation generation:

```python
from hdmf_docutils.doctools import rst_to_html, set_figure_dirpath

# Set the directory path for figures
set_figure_dirpath('path/to/figures')

# Convert RST documentation to HTML
html_content = rst_to_html('my_documentation.rst')
```

## Additional Information

HDMF Documentation Utilities help ensure that extension documentation follows consistent formatting and includes all necessary information. This consistency improves the usability of extensions and helps users understand how to properly use them in their workflows.

The tools can generate documentation from YAML schema files, create diagrams of data structures, and produce HTML and PDF documentation outputs.
