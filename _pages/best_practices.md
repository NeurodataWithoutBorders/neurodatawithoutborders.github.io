---
title: "NWB:N Best Practices"
layout: default
excerpt: "NWB:N Best Practices"
sitemap: false
permalink: /best_practices
---



# Best Practices

The goal of the following document is to provide users of the NWB:N with additional guidelines on common best practices
to facilitate consistent use of the standard and help avoid common problems and most effectively leverage the NWB:N data standard and
its ecosystem of software tools.

### Authors
Oliver Ruebel, Andrew Tritt, Ryan Ly, Benjamin Dichter, ...

* [Preamble](#preamble)
* [NWBFiles](#nwb-files)
  * [identifiers](#identifiers)
* [DynamicTables](DynamicTables)
  * [bools](#bools)
  * [times](#times)
  * [location](#location)
* [Naming of neurodata_types](#naming-of-neurodata_types)
  * [Naming of processing modules](#naming-of-processing-modules)
* [Unit (of measurement)](#unit-of-measurement)
* [Extensions](#extensions)
* [Simulated data](#simulated-data)


## Preamble
To enable NWB:N to accommodate the needs of the diverse neuroscience community, NWB:N provides a great degree of
flexibility. In particular, the number of instances of a particular ``neurodata_type`` and corresponding names are often
not fixed, to enable, e.g., storage of data from arbitrary numbers of devices withing the same file. While this
flexibility is essential to enable coverage of a broad range of use-cases, it can also lead to ambiguity.  At the same
time, we ultimately have the desire to have the schema as strict-as-possible to provide users and tool builders with a
consistent organization of data. As such, we need to strike a fine balance between flexibility to enable support
for varying experiments and use-cases and strictness in the schema to enforce standard organization of data. The
following "best practices" provide  advice from developers and experienced users that outline some of the pitfalls to
avoid and common usage patterns to emulate.

## NWB Files
An `NWBFile` object generally contains data from a single experimental session.

### identifiers
`NWBFile` has two distinct places for ids: `session_id` and `identifier`.

* **The `sesison_id` field marks unique experimental sessions.** The `session_id` should have a one-to-one
relationship with a recording session. Sometimes you may find yourself having multiple NWB files that correspond to
the same session. This can happen for instance if you separate out processing steps into multiple files or if you want
to compare different processing systems. In this case, the `session_id` should be the same for each file. Each lab
should use a standard for `session_id` so that sessions have unique names within the lab and the sessions ids are
human-readable.

* **The `identifier` tag should be a globally unique value for the `NWBFile.`** Two different `NWBFile`s from the same
session should have different `identifier` values if they differ in any way. It is recommended that you use a unique id
generator like uuid to ensure its uniqueness and it is not important that the `identifier` field is human readable.

## DynamicTables
[`DynamicTable`](https://nwb-schema.readthedocs.io/en/latest/format.html#dynamictable) allow you to define custom columns,
which offer a high degree of flexibility.

* **Store data with long columns rather than long rows.** When constructing dynamic tables, keep in mind that the data
is stored by column, so it will be inefficient to store data in a table with many columns.

### bools
* **Use boolean values where appropriate.** Although boolean values (`True`/`False`) are not used in the core schema,
they are a supported data type, and we encourage the use of `DynamicTable` columns with boolean values. For instance,
boolean values would be appropriate for a `correct` custom column to the trials table.

### times
* **Times are always stored in seconds in NWB:N.** This rule applies to times in ``TimeSeries``, ``TimeIntervals`` and
across NWB:N in general. E.g., in
[`TimeInterval`](https://nwb-schema.readthedocs.io/en/latest/format.html#timeintervals) objects such as the trials and
epochs table, `start_time` and `stop_time` should both be in seconds with respect to the `timestamps_reference_time`
(which by default is set to the `session_start_time`).

* **Additional time columns in ``TimeInterval`` tables (e.g., trials) should have ``_time`` as name suffix.** E.g., if
you add more times in the trials table, for instance a subject response time, name it with `_time` at the end (e.g.
`response_time`) and store the time values in seconds from the `timestamps_reference_time`, just like `start_time` and
`stop_time`.

* **Set the `timestamps_reference_time` if you need to use a different reference time.**  Rather than relative times,
it can in practice be useful to use a common global reference time across files (e.g., Posix time). To do so, NWB:N
allows users to set the `timestamps_reference_time` which serves as reference for all timestamps in a file. By default,
 `timestamp_reference_time` is usually set to the `session_start_time` to use relative times.

### electrodes: 'location'
* **The 'location' field should reflect your best estimate of the recorded brain area.** The `'location'` column of the
electrodes table is meant to store the brain region that the electrode as in. Different
labs have different standards for electrode localization. Some use atlases and coordinate maps to precisely place an
electrode, and use physiological measures to confirm its placement. Others use histology or imaging processing
algorithms to identify regions after-the-fact. You fill this column with localization results from your most accurate
method. For instance, if you target electrodes using physiology, and later use histology to confirm placement, we would
recommend that you add a new column to the electrodes table called `'location_target'`, set those values to the original
intended target, and alter the values of `'location'` to match the histology results.

* **Use established ontologies for naming areas** It is preferable to use established ontologies instead of lab
conventions for indicating anatomical region. We recommend
the Allen Brain Atlas terms for mice, and you may use either the full name or the abbreviation (do not make up your own
terms.)

The location column of the electrodes table is required. If you do not know the location of an electrode, use `'unknown'`.

## Naming of neurodata_types
* **As a default, name class instances with the same name as the class.** Many of the
[neurodata_types](https://nwb-schema.readthedocs.io/en/latest/format_description.html#neurodata-type-assigning-types-to-specifications)
in NWB:N allow you to set their name to something other than the default name. This allows multiple objects of the same type to be stored
side-by-side and allows data writers to provide human-readable information about the contents of the neurodata_type. If
appropriate, simply use the name of the neurodata_type as the name of that object. For instance, if you are
placing an [`ElectricalSeries`](https://nwb-schema.readthedocs.io/en/latest/format.html#electricalseries) object in
`/acquisition` that holds voltage traces for a multichannel recording, consider
simply naming that object `"ElectricalSeries"`. This is the `default_name` for that object, and naming it like this will increase
your chances that analysis and visualization tools will operate seamlessly with you data.

* **Names are not for storing meta-data.** If you need to place other data of the same neurodata_type, you will need to
choose another name. Keep in mind that meta-data should not be stored solely in the name of objects. It is OK to name an
object something like "ElectricalSeries_large_array" however the name alone is not sufficient documentation. In this
case, the source of the signal will be clear from the device of the rows from the linked electrodes table region, and you should also include
any important distinguishing information in the `description` field of the object. Make an effort to make meta-data as
explicit as possible. Good names help users but do not help applications parse your file.

* **'/' is not allowed in names.** When creating a custom name, using the forward slash (`/`) is not allowed, as this
can confuse `h5py` and lead to the creation of an additional group. Instead of including a forward slash in the name,
please use "`Over`" like in [`DfOverF`](https://nwb-schema.readthedocs.io/en/latest/format.html#dfoverf).

### Naming of processing modules
* **Give preference to default processing module names.** In NWB:N version [ver], optional
[ProcessingModules](https://nwb-schema.readthedocs.io/en/latest/format.html#sec-processingmodule) will be added to
increase standardization of processing module names.
These names mirror the extension module names: "ecephys", "icephys", "behavior", "ophys", "misc". We encourage the use of
these defaults, but there may be some cases when deviating from this pattern is appropriate. For
instance, if there is a processing step that involves data from multiple modalities, or if the user wants to compare two
processing pipelines for a single modality (e.g. different spike sorters), you should create `ProcessingModules` with custom
names. `ProcessingModules` are themselves neurodata_types, and the other rules for neurodata_types also apply here.


## Unit of measurement
* **Use SI units where possible.** Every [`TimeSeries`](https://nwb-schema.readthedocs.io/en/latest/format.html#timeseries-types)
instance has a `unit` as an
attribute of the `data` Dataset, which is meant to indicate the unit of measurement of that data. We advise using SI units.
Time is always in units of seconds.

## Extenions
* **Extend only when necessary** Extensions are an essential mechanism to integrate data with NWB:N that is otherwise not supported. However, we here need to consider that there are certain cost associated with extensions, e.g., cost for creating, supporting, documenting, and maintaining new extensions and effort for users to use and learn extensions. As such, we should create new extensions only when necessary and use existing neurodata_types as much as possible. DynamicTables used in NWB:N, e.g., to store information about time intervals and electrodes, provide the ability to dynamically add columns without the need for extensions and, as such, can help avoid the need for custom extensions in many cases.
* **Use/Reuse existing neurodata_types** When possible, use existing types when creating extensions either by creating new neurodata_types that inherit from existing ones, or by creating neurodata_types that contain existing ones. Building on existing types facilitates the reuse of existing functionality and interpretation of the data. If a community extension already exists that has a similar scope, it is preferable to use that extension rather than creating a new one.
* **Provide meaningful docs** When creating extensions be sure to provide as part of the extension specification, meaningful documentation of all fields (groups, datasets, attributes, links etc.) to describe what they store and how they are used.

## Simulated data
**The output of a simulation should be stored in NWB, but not the settings of the simulation.** You may store the result
 of simulations in NWB files. NWB:N allows you to store data as if it were recorded
**in vivo** to facilitate comparison between simulated results and **in vivo** results. Core components of the NWB:N
schema and HDF5 backend have been engineered to handle data from hundreds of thousands of units, and natively support
parallel data access via MPI, so much of the NWB:N format should work for large-scale simulations out-of-the-box. The
neurodata extension "simulation_output" provides a neurodata_type for storing continuous recordings from multiple cells
and multiple compartments per cell. The extension only supports storing the output data of a simulation and does not
support parameters for simulation configuration. This is out-of-scope for NWB:N, since it does not facilitate
side-by-side comparison between simulated and **in vivo** results, and is quite difficult to generalize given the
diversity of ways one can parametrize a simulation. That said, if you would benefit from storing such data in your
NWB:N file, you might consider creating your own custom extension.
