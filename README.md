# NeurodataWithoutBorders: Neurophysiology

This repo is for development projects related to the NWB:N project. For more information about NWB:N see our main website at [nwb.org](https://www.nwb.org/).

**NOTE:** All original content from this webstie has been moved to [nwb.org](https://www.nwb.org/). This website is intended for project pages only. For details about NWB itself, user/developer documentation, event information, news, publications etc., and everything else NWB please see [nwb.org](https://www.nwb.org/).

## Updating Content
* **Submitting changes** Use GitHub pull requests to submit changes.
* **Page Content** All page content is defined in the markdown files located in the ``_pages`` folder
* **Main Menu** The main menu is defined in ``_includes/header.html``
* **Publications** Publications files can be added to the ``publications/`` folder and publication entries can be added to the ``_pages/publications.md`` markdown file.

## Repository Content

* **Page content**
  * ``_pages``: Markdown files with the contents of the website
  * ``images`` : Image files shown in the website
  * ``publications`` : Files related to publications shown on the website
* **Page layout and styling**
  * ``_includes`` : HTML files included in the layout (e.g., page header, footer, main menu etc.)
  * ``_layouts`` : HTML page layouts used for the site. Most pages use ``_layouts/default.html``
  * ``_sass`` : Bootstrap
  * ``css`` : Custom CSS for the page
  * ``js`` : Java script sources
* **Build configuration**
  * ``Gemfile``: Ruby gem dependencies for building the website
  * ``_config.yml``: Jekyll setup for building the website
* **Others**
  * ``README.md`` : This file

## Adding a news item

``_pages/news.md`` is the markdown file for the full news releases. To add a short item to the front page you will
need edit ``_includes/news.html``.

## Changing the main menu bar

The main menu is defined ``_includes/header.html``

## Updating existing pages

All page content is defined via corresponding markdown files in the ``_pages`` folder and can be edited there.

