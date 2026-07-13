---
title: "Integrating Community Software with NWB"
description: "Guide for integrating your tool with NWB and adding it to the community catalog"
---

This guide provides instructions for developers who want to integrate their tools with the NWB ecosystem and add them to the community tools catalog on this website.

## Part 1: NWB Integration Best Practices

Before adding your software tool to the catalog, we recommend ensuring it follows NWB best practices for integration.

### Read/Write Support

**Does your tool support reading and/or writing NWB files?**

- **Read Support**: Does your software open and parse NWB files? Document which neurodata types your tool can read.
- **Write Support**: Does your software create or modify NWB files? Run [NWBInspector](https://nwbinspector.readthedocs.io/) on files written by your tool to ensure they are valid NWB files and follow best practices:

```bash
pip install nwbinspector
nwbinspector path/to/your/file.nwb
```

NWBInspector checks for common issues and ensures your files comply with the NWB schema and follow NWB best practices. Address any warnings or errors in the inspector report.

### Documentation and Examples

**Is your NWB integration well-documented?**

- Provide clear documentation on where and how NWB is integrated in your tool
- Include code examples showing how to use your tool with NWB files
- Document any specific NWB neurodata types your tool works with
- Link to tutorials or example notebooks demonstrating NWB workflows

### Testing and Compatibility

**Does your tool work with different types of NWB data?**

Some software will be data modality specific and other software will want to support multiple data modalities. Test your tool with various data types from different modalities as applicable. Some examples (though not an exhaustive list):
- **Extracellular electrophysiology** (ecephys): Spike times, LFP, electrode information
- **Optical physiology** (ophys): Two-photon imaging, ROI segmentation, fluorescence traces
- **Intracellular electrophysiology** (icephys): Patch clamp recordings, current/voltage traces
- **Behavior**: Behavioral timeseries, spatial tracking, task events

 Several example files can be found on the [DANDI Archive](https://dandiarchive.org/) and we encourage testing with multiple files as they may be structured differently depending on the experiment.

### Robustness Considerations

**Additional factors to ensure robust NWB integration:**

- **Version Requirements**: Document which versions of PyNWB/MatNWB your tool requires or supports
- **Required Fields**: Specify any required NWB fields or data types your tool expects
- **Extension Support**: If your tool uses or requires NWB extensions (NDX), document them clearly
- **Performance**: Consider performance with large NWB files (e.g., streaming, lazy loading)

## Part 2: Adding Your Tool to the Catalog

Once you have documented your integration, follow these steps to add it to the community tools catalog.

### Step 1: Fork and Clone the Repository

Fork the [neurodatawithoutborders.github.io](https://github.com/NeurodataWithoutBorders/neurodatawithoutborders.github.io) repository and clone it to your local machine:

```bash
git clone https://github.com/YOUR-USERNAME/neurodatawithoutborders.github.io.git
cd neurodatawithoutborders.github.io
```

### Step 2: Create Your Tool's Markdown File

Create a new markdown file in the community tools directory:

- **All Community Tools**: `content/tools/community/your-tool-name.md`

### Step 3: Add Metadata and Content

Use the following template for your tool's markdown file:

```markdown
---
title: "Your Software Name"
description: "A brief one-sentence description of the software"
category: "category-name"
image: "/images/tools/your-tool-name/screenshot.png"
source_url: "https://github.com/your-org/your-tool"
docs_url: "https://your-tool.readthedocs.io"
weight: 100
---

## Description

Provide a detailed description of your tool, its purpose, and main functionality.
See some of the existing pages for examples.

## Features

List key features of your tool (including how it integrates with NWB):
- Feature 1
- Feature 2
- Feature 3

## Resources

- [Documentation](https://your-tool.readthedocs.io)
- [Source Code](https://github.com/your-org/your-tool)
- [Tutorial](https://link-to-tutorial)
```

#### Category Options

Choose the appropriate category for your tool:

**Analysis/Visualization Tools:**
- `exploration` - General NWB file exploration and visualization
- `ecephys` - Extracellular electrophysiology analysis
- `ophys` - Optical physiology analysis
- `icephys` - Intracellular electrophysiology analysis
- `behavior-analysis` - Behavioral data analysis
- `analysis` - General data analysis toolbox
- `data-management` - Data archive, publication, and management

**Acquisition/Control Tools:**
- `electrophysiology` - Electrophysiology data acquisition
- `behavior` - Behavioral task control and recording
- `modeling` - Brain data modeling and simulation

### Step 4: Add A Logo

Add your software's logo or a screenshot to the static images directory:

```bash
mkdir -p static/images/tools/your-tool-name/
# Copy your image file to this directory
```

### Step 5: Test Locally

Install Hugo and test your changes locally:

```bash
# Run local development server and open in browser
hugo server -D
```

Navigate to the Community Tools page and verify:
- Your tool appears in the correct category
- The image displays properly
- All links work correctly
- The description is clear and accurate

### Step 6: Submit a Pull Request

Once you've tested your changes, create a pull request on GitHub with a clear title 
(e.g. "Add [Your Tool Name] to community tools") and description.

## Questions or Issues?

If you have questions or need assistance during the development process:

- Visit the [NWB Help Desk](https://github.com/NeurodataWithoutBorders/helpdesk/discussions)
- Join the [NWB Slack workspace](https://nwb-users.slack.com/)
- Contact us through the [Contact Us](/contact-us/) page

We look forward to adding your tool to the growing NWB software ecosystem!
