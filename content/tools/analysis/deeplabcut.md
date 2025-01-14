---
title: "DeepLabCut"
description: "An efficient method for 2D and 3D markerless pose estimation based on transfer learning with deep neural networks that achieves excellent results with minimal training data."
category: "behavior-analysis"
image: "/images/tools/deeplabcut/deeplabcut.gif"
source_url: "https://github.com/DeepLabCut/DeepLabCut"
docs_url: "http://www.mackenziemathislab.org/deeplabcut"
weight: 190
---

## Description

DeepLabCut is an efficient method for 2D and 3D markerless pose estimation based on transfer learning with deep neural networks. It achieves excellent results (matching human labeling accuracy) with minimal training data (typically 50-200 frames). The framework has been proven versatile in tracking various body parts in multiple species across a broad collection of behaviors.

![DeepLabCut Demo](/images/tools/deeplabcut/deeplabcut.gif)

## NWB Integration

DeepLabCut has developed [DLC2NWB](https://github.com/DeepLabCut/DLC2NWB), a Python package for converting from their native output format to NWB. This library uses the NWB extension [ndx-pose](https://github.com/rly/ndx-pose), which provides a standardized format for storing pose estimation data in NWB.

While ndx-pose was developed initially to store the output of DeepLabCut in NWB, it is also designed to store the output of general pose estimation tools.

## Features

- 2D and 3D markerless pose estimation
- Transfer learning with deep neural networks
- Excellent accuracy with minimal training data (50-200 frames)
- Versatile tracking of body parts across species
- NWB export support through DLC2NWB
- Integration with ndx-pose extension for standardized data storage
