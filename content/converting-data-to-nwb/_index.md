---
title: "Converting Data To NWB"

### What is NWB?
about_nwb:
    enable: true
    content: "The goal of NWB is to package experiment data with the metadata necessary to analyze the data. All of the data in a particular session goes into a single file. This includes the neurophysiology data itself, but also includes other data such as information about the data acquisition, experiment design, experimental subject, and behavior of that subject. The NWB core schema defines data containers for common data objects in neurophysiology data, including: intracellular electrophysiology (e.g. patch clamping), extracellular electrophysiology (e.g. Neuropixel probes), and optical physiology (e.g. two-photon imaging), and behavior."
    additional_info: "All of these data types and relationships are defined in the [NWB Schema](https://nwb-schema.readthedocs.io/) using the [HDMF specification language](https://hdmf-schema-language.readthedocs.io/en/latest/). NWB is faced with the challenge of supporting a large variety of different experiment types, so the data types and relationships can get quite complex. For this reason the NWB development team provides APIs to help users easily and efficiently read and write NWB files."

### List 
list:
    enable: true
    title: "Neurodata Without Borders (NWB) is a data standard for neurophysiology. Converting data to NWB involves:"
    items:
        - item: "Reading data and metadata from source files"
        - item: "Adding necessary metadata"
        - item: "Writing data and metadata to NWB following best practices"
        - item: "Packaging large datasets for optimal cloud deployment"
    content: "The NWB ecosystem offers various solutions, ranging from automated no-code tools to fine-grained programmatic options. Below we provide an overview of the main tools. For a more detailed introduction to data conversion please see the [data conversion user guide](https://nwb-overview.readthedocs.io/en/latest/conversion_tutorial/user_guide.html)."

### Conversion Approaches
conversion_approaches:
    enable: true
    content: "The following sections start with the most automated and convenient approaches and proceed to more involved and customizable solutions. Each tool offers different levels of flexibility and control, allowing you to choose the right approach for your specific needs."

### Available Tools
available_tools_section:
    enable: true
    boxes: 
        - icon: "/images/nwb-guide.png"
          title: "NWB GUIDE (GUI for Data Entry)"
          type: "Downloadable application"
          features:
            - feature: "Guides users through data conversion process"
            - feature: "Supports 40+ common data formats"
            - feature: "Allows metadata entry"
            - feature: "Offers NWB file inspection via NWB Inspector"
            - feature: "Offers data visualization via Neurosift"
            - feature: "Facilitates uploading to DANDI Archive"
          limitations: "May require manual addition of lab-specific data"
          resources:
            - text: "Text Tutorials"
              url: "https://nwb-guide.readthedocs.io/en/latest/tutorials/index.html"
            - text: "YouTube Walkthrough"
              url: "https://www.youtube.com/watch?v=EhhdDVuHAZ0"

        - icon: "/images/neuroconv.png"
          title: "NeuroConv"
          type: "Python library (underlies NWB GUIDE)"
          features:
            - feature: "Supports 45+ neurophysiology data formats"
            - feature: "Offers more flexibility than NWB GUIDE"
            - feature: "Provides tools for post-hoc time alignment of multiple data streams"
            - feature: "Supports cloud deployment"
          resources:
            - text: "GitHub Repository"
              url: "https://github.com/catalystneuro/neuroconv"
            - text: "Documentation"
              url: "https://neuroconv.readthedocs.io"

        - icon: "/images/pynwb.png"
          title: "PyNWB"
          type: "Python library (underlies NeuroConv)"
          features:
            - feature: "Building NWB files from scratch"
            - feature: "Working with unsupported data formats"
            - feature: "Developing custom NWB extensions"
          resources:
            - text: "GitHub Repository"
              url: "https://github.com/NeurodataWithoutBorders/pynwb"
            - text: "Documentation"
              url: "https://pynwb.readthedocs.io"
            - text: "Tutorials"
              url: "https://pynwb.readthedocs.io/en/latest/tutorials/index.html"
            - text: "NWB YouTube Channel"
              url: "https://www.youtube.com/@NeurodataWithoutBorders"

        - icon: "/images/matnwb.png"
          title: "MatNWB"
          type: "MATLAB library"
          features:
            - feature: "Building NWB files from scratch"
            - feature: "Working with unsupported data formats"
          resources:
            - text: "GitHub Repository"
              url: "https://github.com/NeurodataWithoutBorders/matnwb"
            - text: "Documentation"
              url: "https://matnwb.readthedocs.io"
            - text: "Tutorials"
              url: "https://github.com/NeurodataWithoutBorders/matnwb?tab=readme-ov-file#tutorials"
            - text: "NWB YouTube Channel"
              url: "https://www.youtube.com/@NeurodataWithoutBorders"

### Choosing Tools
choosing_tools:
    enable: true
    title: "Choosing the Right Tool"
    items:
        - item: "For most common data formats and straightforward conversions, start with NWB GUIDE."
        - item: "If you need more flexibility or are comfortable with Python, consider NeuroConv"
        - item: "For custom data formats, complex conversions, or when developing NWB extensions, use PyNWB or MatNWB."
    content: "Remember to consult the provided documentation and tutorials for detailed guidance on using each tool"
---
