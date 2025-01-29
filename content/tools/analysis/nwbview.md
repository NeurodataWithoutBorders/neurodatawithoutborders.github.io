[1;36m"/Users/bendichter/dev/neurodatawithoutborders.github.io/layouts/shortcodes/tool-grid.html:29:1"[0m: parse failed unexpected EOF Error getting the Hugo object: parse failed unexpected EOF 
/Users/bendichter/dev/neurodatawithoutborders.github.io/layouts/shortcodes/tool-grid.html:29:1:
  </div>
</div>---
title: "NWBView"
description: "A cross-platform software with a graphical user interface to display the contents of the binary NWB file format. Written in Rust for high-performance, memory safety and ease of deployment."
category: "exploration"
image: "/images/tools/nwbview/nwbview-icon.png"
source_url: "https://github.com/brainhack-ch/nwbview"
docs_url: "https://crates.io/crates/nwbview"
weight: 40
---

## Description

NWBView is a cross-platform software with a graphical user interface to display the contents of the binary NWB file format. It is written in Rust for high-performance, memory safety and ease of deployment.

Features include:
- Display contents of NWB files in a tree structure
- Interactive plots for voltage and current recordings data
- Scalable window display for tabular and text data
- Built with egui Rust GUI library for rendering

![NWBView Screenshot](/images/tools/nwbview/nwbview-screenshot.png)

The screenshot above shows the NWBView GUI. The left panel shows the contents of the NWB file in a tree structure. The right panel shows the details of the selected item, which can be a plot, a table or a text.

## Installation

### Using Cargo

Cargo is the package manager for Rust, and NWBView is listed as a package there. You can find it on [crates.io](https://crates.io/crates/nwbview).

**Note:** HDF5 needs to be installed in your system as cargo will try to locate the HDF5 root directory and/or headers.

1. Install the `cargo` package manager
2. Run:
```bash
cargo install nwbview
```

3. Launch NWBView:
```bash
nwbview
```

### Building from Source

The Rust library dependencies are provided in the `cargo.toml` file.

System dependencies (package names may differ between systems):
- `libgtk-3-dev`
- `librust-atk-dev`
- `libhdf5-serial-dev`

Once all dependencies are satisfied:
```bash
cargo run --release
```

The release flag builds the artifacts with optimizations. Do not specify it when you need to debug.
