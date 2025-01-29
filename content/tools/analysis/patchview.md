---
title: "PatchView"
description: "A GUI tool to perform data analysis and visualization on multi channel whole-cell recording (multi-patch) data, including firing pattern analysis, mini-event analysis, synaptic connection detection, and morphological analysis."
category: "icephys"
image: "/images/tools/patchview/patchview.png"
source_url: "https://github.com/ZeitgeberH/patchview"
docs_url: "https://patchview.readthedocs.io/en/latest/?badge=latest"
weight: 180
---

## Description

PatchView is a GUI tool to perform data analysis and visualization on multi channel whole-cell recording (multi-patch) data. It provides comprehensive functionality for analyzing patch-clamp data, including firing pattern analysis, mini-event analysis, synaptic connection detection, and morphological analysis.

![PatchView Interface](/images/tools/patchview/patchview.png)

## NWB Integration

PatchView reads Heka or Axon format files for patch-clamp data, and uses [PyNWB](https://github.com/NeurodataWithoutBorders/pynwb) to export to NWB files.

Here's an example of converting data from a Heka .dat file to an NWB file:

```python
from patchview.utilitis.PVdat2NWB import dat2NWB

nwbData = dat2NWB('test_singleFP.dat', [0,0]) # extract group 0, series 0 from the file
print(nwbData.fields.keys())

## get number of sweeps
print(f'Number of sweeps: {nwbData.getNumberOfSweeps()}')

## nwbData is an extended pynwb NWB object 
stim, resp = nwbData.getSweep(0) # get one sweep's stimulus and responses

## with additional plotting functions.
nwbData.plotSweep([0, 5, 20]) #  plot sweep number 0, 5, 20
```

Example output:
![PatchView Example](/images/tools/patchview/fp.png)

## Resources

- [Documentation](https://patchview.readthedocs.io/en/latest/?badge=latest)
- [Source Code](https://github.com/ZeitgeberH/patchview)
- [Publication](https://joss.theoj.org/papers/10.21105/joss.04706)
