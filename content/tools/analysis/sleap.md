---
title: "SLEAP"
description: "An open source deep-learning based framework for multi-animal pose tracking, capable of tracking any type or number of animals with an advanced labeling/training GUI for active learning and proofreading."
category: "behavior-analysis"
image: "/images/tools/sleap/sleap.gif"
source_url: "https://github.com/talmolab/sleap"
docs_url: "https://sleap.ai"
weight: 200
---

## Description

SLEAP is an open source deep-learning based framework for multi-animal pose tracking. It can be used to track any type or number of animals and includes an advanced labeling/training GUI for active learning and proofreading.

![SLEAP Demo](/images/tools/sleap/sleap.gif)

## NWB Integration

SLEAP has developed [NDXPoseAdaptor](https://sleap.ai/api/sleap.io.format.ndx_pose.html#module-sleap.io.format.ndx_pose), an adaptor class within SLEAP for importing and exporting NWB files. Users can either:
- Use the SLEAP GUI to import/export NWB files
- Use the high-level API [Labels.export_nwb](https://sleap.ai/api/sleap.io.dataset.html#sleap.io.dataset.Labels.export_nwb) to programmatically export to the NWB format

This adaptor uses the NWB extension [ndx-pose](https://github.com/rly/ndx-pose), which provides a standardized format for storing pose estimation data in NWB.

## Features

- Multi-animal pose tracking
- Deep learning-based framework
- Support for any type or number of animals
- Advanced labeling/training GUI
- Active learning capabilities
- Proofreading tools
- NWB import/export support

## Resources

* [Source](https://github.com/talmolab/sleap)
* [Docs](https://sleap.ai)
