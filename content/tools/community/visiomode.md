---
title: "Visiomode"
description: "An open-source platform for building touchscreen-based behavioral tasks for rodents, leveraging Raspberry Pi and offering a web-based interface with a powerful plug-in system."
category: "behavior"
image: "/images/tools/visiomode/visiomode_graphical_abstract.png"
source_url: "https://github.com/DuguidLab/visiomode"
docs_url: "https://www.visiomode.org"
weight: 30
---

## Description

Visiomode is an open-source platform for building touchscreen-based behavioral tasks for rodents. It leverages the inherent flexibility of touchscreens to offer a simple yet adaptable software and hardware platform. Built on the Raspberry Pi computer, it combines a web-based interface and powerful plug-in system with an operant chamber that can be adapted to generate a wide range of behavioral tasks.

![Visiomode Graphical Abstract](/images/tools/visiomode/visiomode_graphical_abstract.png)

## NWB Integration

Visiomode session data can be exported to the NWB format directly from the web interface. Navigate to the "History" tab, choose the session you wish to export and select "NWB" from the "Download" dropdown menu.

![Visiomode NWB Export](/images/tools/visiomode/visiomode-nwb-export.gif)

### Data Structure

Visiomode stores behavioral data under `trials` with the following columns:
- `start_time`: Trial start time
- `stop_time`: Trial end time
- `stimulus`: Stimulus identifier
- `cue_onset`: Cue presentation time
- `response`: Response type (e.g., touch on left/right)
- `response_time`: Touch time
- `pos_x`: Touch x-coordinate
- `pos_y`: Touch y-coordinate
- `dist_x`: Touch drag distance (x)
- `dist_y`: Touch drag distance (y)
- `outcome`: Trial outcome
- `correction`: Correction trial indicator
- `sdt_type`: Signal detection theory classification

## Resources

- [Documentation](https://www.visiomode.org)
- [Source Code](https://github.com/DuguidLab/visiomode)
- [Publication](https://doi.org/10.1016/j.jneumeth.2022.109779)

## Example Code

```python
from pynwb import NWBHDF5IO, TimeSeries 

# Load the Visiomode NWB file
io_behavior = NWBHDF5IO("/path/to/visiomode-behavior.nwb", "r")
nwbfile_behavior = io_behavior.read()

# Load an NWB file with neurophysiological data
io_neurophys = NWBHDF5IO("/path/to/neurophys.nwb", "r")
nwbfile_neurophys = io_neurophys.read()

# Recalculate timestamps relative to behavior file
timestamp_offset = (
    nwbfile_neurophys.session_start_time - nwbfile_behavior.session_start_time
).total_seconds()

recalc_timestamps = [
    timestamp - timestamp_offset
    for timestamp in nwbfile_neurophys.acquisition["DataTimeSeries"].timestamps
]

# Link neurophysiological data
neurophys_timeseries = TimeSeries(
    name="DataTimeSeries",
    data=nwbfile_neurophys.acquisition["DataTimeSeries"].data,
    timestamps=recalc_timestamps,
    description="Neurophysiological data"
)

nwbfile_behavior.add_acquisition(neurophys_timeseries)

# Export to new NWB file
io_linker = NWBHDF5IO("/path/to/linker-behavior+phys.nwb", "w")
io_linker.write(nwbfile_behavior, link_data=True)

# Clean up
io_behavior.close()
io_neurophys.close()
io_linker.close()
