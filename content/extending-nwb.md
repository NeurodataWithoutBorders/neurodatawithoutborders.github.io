---
title: "Extending NWB"
date: 2025-08-07
---

# Extending NWB

NWB supports two complementary mechanisms for extending and evolving the NWB data standard.

- **NWB Extensions (NDX)** enable users to quickly prototype, share, or use new data types or structures that are not yet part of the core NWB standard, especially for lab- or project-specific needs. 
- **NWB Enhancement Proposals (NWBEP)** support enhancement of the official NWB data standard to integrate new feature or data types that should be adopted by the entire NWB community.

---

## NWB Extension (NDX)

NDXs are community-driven extensions that allow users, labs, or consortia to define new data types and structures tailored to their specific scientific needs, without requiring changes to the core NWB standard. NDX are ideal when you need to capture new experimental modalities, data types, or metadata that are not yet part of the official NWB schema. NDX can be rapidly developed, shared, and iterated on by the community, and are cataloged for reuse by others. See the below resources to learn more about how to create and share extensions:

- [**Detailed step-by-step guide for creating and publishing NDX**](https://nwb-overview.readthedocs.io/en/latest/extensions_tutorial/extensions_tutorial_home.html)
- [**Short tutorial on extensions using PyNWB**](https://pynwb.readthedocs.io/en/stable/tutorials/general/extensions.html#sphx-glr-tutorials-general-extensions-py)
- [**NDX Catalog** (index of publicly shared extensions)](https://nwb-extensions.github.io)
- [**Policies and guidelines for NDXs**](https://nwb.org/policies/)

---

## NWB Enhancement Proposal (NWBEP)

NWB Enhancement Proposals (NWBEP) are the official, formal way to propose major additions or changes to the NWB standard. They are used when a new feature, data type, or change is broadly useful to the community and should become part of the official NWB specification. NWBEPs undergo a structured review and approval process facilitated by the NWB Technical Advisory Board (TAB) to ensure quality, consensus, and long-term maintainability. NWBEPs often leverage NWB extensions (NDX) as a testing ground, to implement and evaluate proposed changes first as an NDX to allow the community to use, test, and refine the extension in real-world scenarios. This process helps ensure that proposals meet community needs and are robust before being considered for inclusion in the core NWB standard. See the below resources to learn more about NWBEPs:

- [**Policies and guidelines for NWBEPs**](https://nwb.org/policies/)
- [**How to create an NWBEP**](https://github.com/nwb-extensions/nwbep-review/blob/main/README.md)
- [**NWBEP reviews repository**](https://github.com/nwb-extensions/nwbep-review/) with list and reviews of current and pending NWBEPs (see both the main repo and issues pages).
