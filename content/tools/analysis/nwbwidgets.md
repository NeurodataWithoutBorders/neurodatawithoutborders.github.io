---
title: "NWB Widgets"
description: "A library of widgets for visualizing NWB data in a Jupyter notebook (or lab). The widgets make it easy to navigate through the hierarchical structure of the NWB file and visualize specific data elements."
category: "exploration"
image: "/images/tools/nwbwidgets/nwbwidgets_logo.png"
source_url: "https://github.com/NeurodataWithoutBorders/nwbwidgets"
docs_url: "https://nwb-widgets.readthedocs.io"
weight: 10
---

## Description

NWB Widgets is a library of widgets for visualization NWB data in a Jupyter notebook (or lab). The widgets make it easy to navigate through the hierarchical structure of the NWB file and visualize specific data elements. It is designed to work out-of-the-box with NWB 2.0 files and to be easy to extend.

## Demo

![NWB Widgets Demo](/images/tools/nwbwidgets/jupyter_widgets_demo.gif)

## Installation

```bash
pip install nwbwidgets
```

## Usage

```python
from pynwb import NWBHDF5IO
from nwbwidgets import nwb2widget

io = NWBHDF5IO('path/to/file.nwb', mode='r')
nwb = io.read()

nwb2widget(nwb)
```

## How it works

All visualizations are controlled by the dictionary neurodata_vis_spec. The keys of this dictionary are pynwb neurodata types, and the values are functions that take as input that neurodata_type and output a visualization. The visualizations may be of type Widget or matplotlib.Figure. 

When you enter a neurodata_type instance into nwb2widget, it searches the neurodata_vis_spec for that instance's neurodata_type, progressing backwards through the parent classes of the neurodata_type to find the most specific neurodata_type in neurodata_vis_spec. 

Some of these types are containers for other types, and create accordian UI elements for its contents, which are then passed into the neurodata_vis_spec and rendered accordingly.

Instead of supplying a function for the value of the neurodata_vis_spec dict, you may provide a dict or OrderedDict with string keys and function values. In this case, a tab structure is rendered, with each of the key/value pairs as an individual tab. All accordian and tab structures are rendered lazily- they are only called with that tab is selected. As a result, you can provide may tabs for a single data type without a worry. They will only be run if they are selected.

## Extending

To extend NWBWidgets, all you need to a function that takes as input an instance of a specific neurodata_type class, and outputs a matplotlib figure or a jupyter widget.

## Resources

* [Source](https://github.com/NeurodataWithoutBorders/nwbwidgets)
* [Docs](https://nwb-widgets.readthedocs.io)
