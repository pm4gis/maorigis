---
title: QGIS
sidebar_position: 2
---

QGIS is a free, open source desktop GIS application used to view, analyse, and create maps using spatial data. It runs on Windows, Mac, and Linux and is widely used in Aotearoa New Zealand by councils, consultants, community groups, and iwi organisations.

QGIS is well suited to Māori contexts because it can work fully offline, supports open data formats, and allows you to keep control of where files live and who can access them.

:::info
QGIS is pronounced “Q G I S”. Some people say “Q-gis”, others say “Q-G-I-S”. Both are common.
:::

## He aha te painga, why QGIS is useful in Māori contexts

QGIS is a good fit when you need to:

- Work with whenua and taiao layers without relying on cloud platforms
- Store data on your own device or network drives
- Share outputs for hui without exposing source datasets
- Use open formats that are easy to move between organisations
- Build capability across a small team without licence barriers

QGIS is often used alongside other tools. A common pattern is to prepare and manage data in QGIS, then publish simplified outputs to a web platform if needed.

## Download and install

Official download page:
- https://qgis.org/en/site/forusers/download.html

Practical install guidance:

- Install the current Long Term Release (LTR) if you want stability for an organisation
- Use the latest release if you need the newest features and you can handle more frequent change

After installing, set up a default folder structure for each kaupapa:

- 01_source
- 02_working
- 03_outputs
- 04_metadata

## Core tasks you will use most

Most everyday mahi in QGIS sits in these areas:

- Add layers and explore data
- Style layers and label features
- Select, filter, and summarise
- Basic spatial analysis such as buffers and overlays
- Produce a simple, readable map output

## Working with Aotearoa data in QGIS

The highest value public sources you will use most often:

LINZ Data Service:
- https://data.linz.govt.nz/

LINZ Basemaps:
- https://basemaps.linz.govt.nz/
- https://basemaps.linz.govt.nz/docs/

Stats NZ Data Finder:
- https://datafinder.stats.govt.nz/

DOC Open Spatial Data:
- https://doc-deptconservation.opendata.arcgis.com/

## Step by step, add LINZ Basemaps imagery in QGIS

Use this for a clean imagery background for hui maps and context.

1. Open the LINZ Basemaps docs
- https://basemaps.linz.govt.nz/docs/

2. Copy a WMTS URL for the imagery or basemap you want

3. In QGIS
- Layer
- Data Source Manager
- WMS / WMTS
- New
- Paste the WMTS URL
- Connect
- Select the layer
- Add

4. Save your project once it is drawing correctly

## Step by step, add LINZ Data Service layers

Use download for stability and offline use.

1. Open LINZ Data Service
- https://data.linz.govt.nz/

2. Search for the layer you need and open the dataset page

3. Download in GeoPackage if available
If not available, download and then export to GeoPackage in QGIS

4. Add in QGIS
- Layer
- Add Layer
- Add Vector Layer

5. Store the downloaded file in `01_source` and your edited outputs in `02_working`

## He tauira mahi, a simple whenua and taiao map workflow

This is a common pattern for hui outputs.

1. Add imagery (LINZ Basemaps)

2. Add key context layers
- parcels or property context where appropriate
- roads
- rivers and water bodies
- place names for labels

3. Add your kaupapa layer
- rohe boundary, project area, or sites layer

4. Style for clarity
- reduce clutter
- label only what matters
- use a clear hierarchy

5. Export a map for hui
- Project
- New Print Layout
- Add map
- Add scale bar and north arrow if needed
- Add a small note: sources and date checked
- Export as PDF to `03_outputs`

## Data management and kaitiakitanga

Practical ways to protect mana and reduce risk:

- Keep sensitive sites in a separate dataset and separate folder
- Use access controlled storage for restricted layers
- Do not email source datasets unless it is required and approved
- Use outputs (PDF, PNG) for wide sharing, keep sources internal
- Record sources and dates in `04_metadata`

:::note
If a layer includes wāhi tapu, sensitive kōrero, or restricted locations, keep it out of shared drives and out of web maps unless there is clear permission and controls.
:::

## Common limitations and how to handle them

- QGIS does not provide automatic access control, your file storage does
- Collaboration needs agreed naming, folder structure, and version control
- Copies can spread easily, reduce sharing of raw files and use outputs instead

## Where this fits in the guide

QGIS is used as the main example tool in this guide because it is accessible, flexible, and fits common Māori organisational needs. The same ideas apply to other GIS tools.
