---

disclaimer: Reference herein to any specific product, process, or service by its trade name, trademark, manufacturer, or otherwise, does not constitute or imply its endorsement, recommendation, or favoring by the NWB development team, United States Government or any agency thereof, or The Regents of the University of California. Use of the NeurodataWithoutBorders name for endorsements is prohibited.
# NWB Tools Section Added
community_tools:
  enable: true
  title: Community Tools
  content: Listed below are tools for working with NWB data. This is not a comprehensive list of NWB tools. Many of these tools are built and supported by other groups, and are in active development.
  image: /images/nwb-tools-arch.png
  categories:
    - title: Core NWB Tools
      description: Key software packages of the core NWB software stack
      url: "/tools/core/"
    - title: Community Tools
      description: Tools for data acquisition, analysis, visualization, and exploration
      url: "/tools/analysis/"
title: The NWB Software <br> Ecosystem
software_types:
  enable: true
  title: Areas of Concern and Types of Software in the NWB Ecosystem
  content: NWB is more than just a file format; it defines an ecosystem of tools,
    methods, and standards for storing, sharing, and analyzing complex
    neurophysiology data. The following provides a high-level overview of the
    main components for the NWB data standardization ecosystem. For each
    component we provide an overview of the problem, its function, and a
    description.
  boxes:
    - icon: /images/code.png
      title: Specification Language
      content: How to formally define neuroscience data standards?
    - icon: /images/api.png
      title: Data API(s)
      content: How to efficiently interact with (read, write, query, analyze...)
        neuroscience data?
    - icon: /images/database.png
      title: Data Storage
      content: How to store large collections of neuroscience data?
    - icon: /images/schema.png
      title: Data Standard Schema
      content: How to organize complex collections of neuroscience data?
sections:
  - title: Specification Language
    image: /images/specsImg.png
    problem: Definition of neuroscience data standards.
    approach: To support the formal and verifiable specification of neurodata file
      formats,<br> NWB relies on the NWB specification language.
    function: The specification language provides mechanism to formally specify
      the  <br> organization of data.
    upper_description: The specification language is defined in YAML (or JSON). The
      specification language defines formal structures for describing the
      organization of complex data using basic concepts, e.g., Groups, Datasets,
      Attributes, and Links. The specification language is used to extend the
      format, which is necessary to store types of data that are not currently
      managed by the format <br> <a href='https://schema-language.readthedocs.io/en/latest/'>Specification Language
      Documentation</a>
  - title: Data API(s)
    image: /images/apiBox.png
    problem: Efficient interaction with neuroscience data.
    approach: Develop APIs that provide easy-to-use representations of NWB
      neurodata types for programmatic use and enable the mapping of these
      representations to/from data storage based on the NWB format
      specification.
    function: The role of data API(s) is to facilitate efficient interaction with
      neuroscience data stored in the NWB data format (e.g,. for reading,
      writing, querying, and analyzing neuroscience data). An API provides a
      stable and usable interface for programmatic use and development of new
      applications. The API should insulate developers and users from
      implementation details related to the specification language, format
      specification, and data storage.
    description: NWB currently provides the following APIs
    list:
      - title: "PyNWB"
        content: "Python reference API for NWB 2  to read, write, use, extend, and
          analyze data stored in NWB. <a href='https://pynwb.readthedocs.io/en/stable/'>Documentation</a> <a href='https://github.com/NeurodataWithoutBorders/pynwb'>Source
          (GitHub)</a>"
      - title: MatNWB
        content: Matlab API for NWB. <a href='https://github.com/NeurodataWithoutBorders/matnwb'> Documentation & Source (GitHub)</a>
    community_software: In addition to the core APIs developed by the NWB team,
      there is a growing collection of software tools and libraries that support
      NWB. See our Analysis and Visualization Tools page for a list of tools
      that support NWB.
  - title: Data Storage
    image: /images/storageImg.png
    problem: Storage of large collections of neuroscience data.
    approach: The NWB format currently uses the <a href='https://www.hdfgroup.org/solutions/hdf5/'> Hierarchical Data
      Format (HDF5)</a> as primary storage mechanism.
    function: Data storage maps NWB primitives (Groups, Datasets, Attributes,
      Links etc.) to storage. In the case of HDF5 this is currently mostly a
      1-to-1 mapping as the NWB primitives largely match HDF5 primitives.
    description: HDF5 was selected for the NWB format because it meets several key
      requirements. First, HDF5 it is a mature data format standard with
      libraries available in multiple programming languages. Second, HDF5’s
      hierarchical structure allows data to be grouped into logical
      self-documenting sections. The HDF5 structure is analogous to a file
      system in which its “groups” and “datasets” correspond to directories and
      files. Groups and datasets can have attributes that provide additional
      details, such as authorities’ identifiers. Third, the HDF5 linking feature
      enables data stored in one location to be transparently accessed from
      multiple locations in the hierarchy. The linked data can be external to
      the file. Fourth, HDF5 is widely supported across programming languages
      (e.g., C, C++, Python, MATLAB, R among others) and tools, such as,
      HDFView, a free, cross-platform application, can be used to open a file
      and browse data. Fifth, the HDF Group, a nonprofit group, ensures the
      ongoing accessibility of HDF-stored data. <br><br> <a href='https://nwb-storage.readthedocs.io/en/stable/'>Data Storage
      Documentation</a>
  - title: Data Standard Schema
    image: /images/schemaImg.png
    problem: Organization of complex collections of neuroscience data.
    approach: Organize data hierarchically using easy-to-use primitives, e.g.,
      Groups (similar to Folders), Datasets (n-D Arrays), Attributes (Metadata
      objects on Groups and Datasets), and Links (links to Groups and Datasets).
    function: The format specification formally specifies the organization of
      neuroscience data. The format specification provides a verifiable,
      computer and human readable document that governs the NWB format. The
      format specification is, hence, central to support development of API’s
      and codes compliant with the NWB format and extension of the NWB format.
    upper_description: he NWB format standard is governed by a formal format
      specification, the NWB schema that is formally specified using the NWB
      specification language. A new schema file will be published for each
      revision of the NWB format standard. Developers can use the schema to
      validate NWB files or create advanced APIs for NWB data. <br><br><a
      href='http://nwb-schema.readthedocs.io/en/stable'>Data Standard Schema Documentation</a> <br><br> <a href='https://github.com/NeurodataWithoutBorders/nwb-schema'>
      Sources (GitHub)</a>
---
