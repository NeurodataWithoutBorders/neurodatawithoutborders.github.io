---
title: "NWB Data Conversion Workshop 2025"
date: 2025-05-12
endDate: 2025-05-13
location: "Virtual"
eventType: "Workshop"
image: "/images/events/hck22-2025-dataconversion-remote/logo_brain_text_white_hor.png"
weight: 20250512
summary: "The NWB Data Conversion Workshop will train members of the neuroscience community on how to convert their data to NWB and publish it on the DANDI Archive, from basic to advanced techniques."
draft: false
organizers:
  - "Steph Prince"
  - "Oliver Rübel"
registration: "Register for the event [here](https://forms.gle/5Sewge3qpozxnrATA)."
resources:
  "NWB GUIDE": "https://nwb-guide.readthedocs.io/en/latest/installation.html"
  "PyNWB (Python)": "https://pynwb.readthedocs.io/en/stable/install_users.html"
  "MatNWB (Matlab)": "https://matnwb.readthedocs.io/en/latest/pages/getting_started/installation_users.html"
  "NWB Overview Docs": "https://nwb-overview.readthedocs.io"
aliases:
  - /nwb_hackathons/hck22_2025_dataconversion_remote
---

## Objective

The [Neurodata Without Borders](https://nwb.org) project is an effort to standardize the description and storage of neurophysiology
data and metadata. NWB enables data sharing and reuse and reduces the energy barrier to applying data analytics both within
and across labs. NWB has seen wide adoption in the neurophysiology community, and there are now over 100 datasets on the
DANDI Archive in NWB, including data from the Allen Institute and the International Brain Laboratory.

The NWB Data Conversion Workshop will train members of the neuroscience community on how to convert their data to NWB and
publish it on the DANDI Archive. We will train attendees starting from the basics of the NWB format and proceeding to
domain-specific tutorials and advanced data engineering techniques to maximally utilize the features of the HDF5 and Zarr
backends. During this workshop, we will introduce multiple sets of tools with varying levels of flexibility for converting
your data, including NWB GUIDE, a new no-code user interface for data conversion.

**Note:** All levels of experience are welcome! We will have tutorials ranging from no-code, automated data conversion to
more advanced, custom code conversion.

## Report

The combined report for the NWB Data Conversion Workshop 2025 and the Open Neurodata and Tools Showcase 2025 is available online at [[PDF](https://drive.google.com/file/d/13S7hgWwk2QgcwMpNh-VeFU0JJcN2lxKa/view?usp=sharing)].

## Logistics

We will be using Gather and Zoom for the meeting and will send an email in the days before the workshop with links.

## What to Bring

* Please bring any example datasets you would like to convert. For lab-specific data (i.e., data not in these [supported formats](https://nwb-guide.readthedocs.io/en/latest/format_support.html)), you should ideally have scripts for reading the data using Python or MATLAB.
* Bring your laptop with appropriate software installed. For installation instructions see:
  * [**NWB GUIDE**](https://nwb-guide.readthedocs.io/en/latest/installation.html)
  * [**PyNWB (Python)**](https://pynwb.readthedocs.io/en/stable/install_users.html)
  * [**MatNWB (Matlab)**](https://matnwb.readthedocs.io/en/latest/pages/getting_started/installation_users.html)
* For an overview of NWB software, see also: 
  * [**Glossary of Core NWB Tools**](https://nwb-overview.readthedocs.io/en/latest/core_tools/core_tools_home.html) 
  * [**Glossary of Analysis and Visualization Tools**](https://nwb-overview.readthedocs.io/en/latest/tools/analysis_tools_home.html)

## Agenda

Below is the tentative agenda. All times are in Pacific Time (PT, UTC-7). 

### Day 1 (Monday, May 12)

<table class="table table-bordered table-hover">
  <thead>
    <tr>
      <th style="width: 10%">Time</th>
      <th style="width: 10%">Duration</th>
      <th style="width: 35%">Topic</th>
      <th style="width: 15%">Type</th>
      <th style="width: 15%">Speaker(s)</th>
      <th style="width: 15%">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00 - 9:15 AM</td>
      <td>15 min</td>
      <td>Welcome to the Data Conversion Workshop</td>
      <td><kbd style="background-color: #F75C81; color: white; border-radius: 4px; padding: 3px 6px;">Talk</kbd></td>
      <td>Steph Prince</td>
      <td>Gather</td>
    </tr>
    <tr>
      <td>9:15 - 10:00 AM</td>
      <td>45 min</td>
      <td>Overview of NWB</td>
      <td><kbd style="background-color: #F75C81; color: white; border-radius: 4px; padding: 3px 6px;">Talk</kbd></td>
      <td>Oliver Ruebel</td>
      <td>Zoom</td>
    </tr>
    <tr>
      <td>10:00 - 10:45 AM</td>
      <td>45 min</td>
      <td>NWB GUIDE</td>
      <td><kbd style="background-color: #64C0FF; color: white; border-radius: 4px; padding: 3px 6px;">Tutorial</kbd></td>
      <td>Ryan Ly</td>
      <td>Zoom</td>
    </tr>
    <tr>
      <td>10:45 - 11:45 AM</td>
      <td>1 hour</td>
      <td>NeuroConv, PyNWB, MatNWB</td>
      <td><kbd style="background-color: #64C0FF; color: white; border-radius: 4px; padding: 3px 6px;">Tutorial</kbd></td>
      <td>Ben Dichter</td>
      <td>Zoom</td>
    </tr>
    <tr>
      <td>11:45 AM - 12:15 PM</td>
      <td>30 min</td>
      <td>Project sharing</td>
      <td><kbd style="background-color: #8974D6; color: white; border-radius: 4px; padding: 3px 6px;">Discussion</kbd></td>
      <td>Steph Prince</td>
      <td>Zoom</td>
    </tr>
    <tr>
      <td>12:15 - 5:00 PM</td>
      <td>4.75 hours</td>
      <td>Data conversion hacking</td>
      <td><kbd style="background-color: #59D382; color: white; border-radius: 4px; padding: 3px 6px;">Hack</kbd></td>
      <td></td>
      <td>Gather</td>
    </tr>
  </tbody>
</table>

### Day 2 (Tuesday, May 13)

<table class="table table-bordered table-hover">
  <thead>
    <tr>
      <th style="width: 10%">Time</th>
      <th style="width: 10%">Duration</th>
      <th style="width: 35%">Topic</th>
      <th style="width: 15%">Type</th>
      <th style="width: 15%">Speaker(s)</th>
      <th style="width: 15%">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00 - 9:10 AM</td>
      <td>10 min</td>
      <td>Welcome to the workshop</td>
      <td><kbd style="background-color: #F75C81; color: white; border-radius: 4px; padding: 3px 6px;">Talk</kbd></td>
      <td>Steph Prince, Oliver Ruebel</td>
      <td>Gather</td>
    </tr>
    <tr>
      <td>9:10 - 10:40 AM</td>
      <td>1.5 hours</td>
      <td>Tools and data showcase</td>
      <td><kbd style="background-color: #8974D6; color: white; border-radius: 4px; padding: 3px 6px;">Discussion</kbd></td>
      <td>Alessandra Trapani, Steph Prince</td>
      <td>Gather</td>
    </tr>
    <tr>
      <td>10:45 - 11:15 AM</td>
      <td>30 min</td>
      <td>Extensions and TAB discussion</td>
      <td><kbd style="background-color: #8974D6; color: white; border-radius: 4px; padding: 3px 6px;">Discussion</kbd></td>
      <td>Alessio Buccino, Yaroslav Halchenko</td>
      <td>Zoom</td>
    </tr>
    <tr>
      <td>11:15 AM - 12:00 PM</td>
      <td>45 min</td>
      <td>Publishing data and using the DANDI Archive</td>
      <td><kbd style="background-color: #64C0FF; color: white; border-radius: 4px; padding: 3px 6px;">Tutorial</kbd></td>
      <td>Ben Dichter</td>
      <td>Zoom</td>
    </tr>
    <tr>
      <td>12:00 - 12:45 PM</td>
      <td>45 min</td>
      <td>How to organize community NWB events</td>
      <td><kbd style="background-color: #64C0FF; color: white; border-radius: 4px; padding: 3px 6px;">Tutorial</kbd></td>
      <td>Steph Prince</td>
      <td>Zoom</td>
    </tr>
    <tr>
      <td>12:45 - 4:00 PM</td>
      <td>3.25 hours</td>
      <td>Data conversion hacking</td>
      <td><kbd style="background-color: #59D382; color: white; border-radius: 4px; padding: 3px 6px;">Hack</kbd></td>
      <td></td>
      <td>Gather</td>
    </tr>
  </tbody>
</table>

### Legend
<kbd style="background-color:#F75C81; color: white; border-radius: 4px; padding: 3px 6px; margin: 0 3px;">Talk</kbd> Presentation sessions  
<kbd style="background-color: #59D382; color: white; border-radius: 4px; padding: 3px 6px; margin: 0 3px;">Hack</kbd> Hands-on coding sessions  
<kbd style="background-color: #64C0FF; color: white; border-radius: 4px; padding: 3px 6px; margin: 0 3px;">Tutorial</kbd> Tutorials with hacking exercises  
<kbd style="background-color: #8974D6; color: white; border-radius: 4px; padding: 3px 6px; margin: 0 3px;">Discussion</kbd> Group conversations and networking

## Code of Conduct

Please see the [Code of Conduct](/code_of_conduct) for all NWB events.
