---
title: "Core NWB Tools"
description: "Glossary of Core NWB Tools"
page_nav:
  - name: "Start here"
    anchor: "start-here"
  - name: "Extending NWB"
    anchor: "extending-nwb"
  - name: "Schemas & specification"
    anchor: "schemas-specification"
  - name: "Core development"
    anchor: "core-development"
---

The core NWB tools are the software packages maintained by the NWB team for reading, writing, converting, validating, and extending NWB data. For how the pieces fit together, see the [NWB Software Ecosystem](/nwb-software/) overview.

## Start here {#start-here}

Most people need only these. Pick the API for your language to read and write NWB files, use NeuroConv or NWB GUIDE to convert existing data, and run NWB Inspector before you share a file.

{{< tool-grid category="read-write-api,data-conversion,validation" variant="featured" >}}

## For extension authors and developers {#advanced}

Tools for extending the NWB standard, the schemas that define it, and the libraries the core APIs are built on.

{{< tool-columns >}}
{{< tool-grid category="extension" variant="compact" title="Extending NWB" id="extending-nwb" >}}
{{< tool-grid category="schema" variant="compact" title="Schemas & specification" id="schemas-specification" >}}
{{< tool-grid category="core-development" variant="compact" title="Core development" id="core-development" >}}
{{< /tool-columns >}}
