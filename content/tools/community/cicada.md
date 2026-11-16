---
title: "CICADA"
description: "Open-source Python pipeline to analyse NWB neurophysiology data (calcium imaging, electrophysiology, widefield imaging, behavior), from a GUI or headless, on local or DANDI files."
category: "analysis"
image: "/images/tools/cicada/cicada_screenshot.png"
source_url: "https://gitlab.com/cossartlab/cicada_analysis"
docs_url: "https://cicada-analysis.readthedocs.io/"
weight: 150
---

## Description

CICADA is an open-source Python pipeline to analyse neurophysiology data stored in NWB files: two-photon calcium imaging, extracellular electrophysiology, widefield imaging and behavior. You pick the NWB files (on your disk or on DANDI), choose an analysis plugin, set its parameters and run it, from the CICADA GUI or headless from configuration files or a Python script. Each run saves its figures, its result tables, a record of its inputs and parameters and the installed libraries, so it can be replayed.

![CICADA Screenshot](/images/tools/cicada/cicada_screenshot.png)

## Features

- **Ready-made analysis plugins:** activity rasters, cell maps, peri-event time histograms (calcium, spikes, behavior), activity statistics, connectivity analysis, cell assemblies and sequences.
- **Any standard NWB file:** analyses read the data through standard NWB types, so they work on files from any lab, including public datasets.
- **GUI or headless, same results:** the GUI and the command-line runner use the same plugins and parameter files.
- **DANDI support:** files are streamed or downloaded from the DANDI Archive by their address.
- **Replayable runs:** every run writes one YAML file with the input files, the analysis and every parameter value; passing it back to the runner reproduces the run.
- **Extendable:** new analyses are Python plugins; lab-specific plugins and data conventions go in separate lab packages, discovered through Python entry points.
- **Three pip-installable packages:** `cicada-gui` (desktop application), `cicada-analysis` (analysis engine and plugins) and `cicada-nwb` (read-only access to NWB files, usable on its own).

## Resources

- [Documentation](https://cicada-analysis.readthedocs.io/)
- [Source code](https://gitlab.com/cossartlab/cicada_analysis) (also [cicada_gui](https://gitlab.com/cossartlab/cicada_gui) and [cicada_nwb](https://gitlab.com/cossartlab/cicada_nwb))
- [PyPI](https://pypi.org/project/cicada-analysis/)
- [Video demo](https://www.youtube.com/watch?v=xgf2RmrGVx0)
- [Publication (bioRxiv preprint)](https://www.biorxiv.org/content/10.64898/2026.07.03.736318v1)
- Lab-specific packages: [cicada-petersen](https://github.com/LSENS-BMI-EPFL/cicada_petersen) and [cicada-cossart](https://gitlab.com/cossartlab/cicada_cossart)
