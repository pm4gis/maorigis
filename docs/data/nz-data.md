---
title: NZ data sources
sidebar_position: 21
---

Most Māori GIS work uses a mix of your own data and public datasets from government, councils, and research organisations. This page lists high value sources for Aotearoa and practical ways to use them.

## A practical way to organise your dataset library

Use categories that match everyday mahi:

- Basemaps and imagery
- Boundaries and admin areas
- Property and land information
- Taiao and environmental layers
- Hazards and risk
- Infrastructure and assets
- Place names and community places
- Statistics by area

This keeps your library usable and avoids random one off downloads.

## National catalogues and services

LINZ Data Service and LINZ Basemaps

- LINZ Data Service: https://data.linz.govt.nz/
- LINZ Basemaps: https://basemaps.linz.govt.nz/

Stats NZ boundaries and geographies

- Stats NZ geographic data and maps: https://www.stats.govt.nz/geographic-data-and-maps/
- Stats NZ Data Finder: https://datafinder.stats.govt.nz/

Ministry for the Environment

- MfE data portal: https://data.mfe.govt.nz/
- Environment Aotearoa (context and reporting): https://environment.govt.nz/

Department of Conservation

- DOC Open Spatial Data portal: https://doc-deptconservation.opendata.arcgis.com/
- DOC maps and data overview: https://www.doc.govt.nz/our-work/maps-and-data/

Cross agency catalogue

- data.govt.nz: https://www.data.govt.nz/

## Choosing the right access method

Download once when:

- You need offline use
- You will edit or clean the data
- You need stable repeatable outputs

Use WMS or WMTS when:

- You need display only layers like imagery and basemaps
- You want the latest view without managing downloads

Use WFS when:

- You need vector features you can query and filter
- You want a live service connection and can manage performance

## Step by step: add LINZ Data Service layers into QGIS

1. Find the dataset in LINZ Data Service
- Open https://data.linz.govt.nz/
- Search for the dataset
- Open the dataset page and review details

2. Choose a download or a service
For a first pass, download is usually easiest.

3. Download GeoPackage if available
GeoPackage is a good default for modern GIS work. If you need Shapefile, be aware of text length limits.

4. Add to QGIS
- Layer
- Add Layer
- Add Vector Layer
- Browse to the file and load it

5. Save into your working GeoPackage
Keep source downloads separate from working outputs.

## Step by step: add LINZ Basemaps imagery in QGIS

1. Open LINZ Basemaps
- https://basemaps.linz.govt.nz/

2. Copy a WMTS link from the documentation
- https://basemaps.linz.govt.nz/docs/

3. Add to QGIS
- Layer
- Data Source Manager
- WMS / WMTS
- New
- Paste the WMTS URL
- Connect and choose the layer

## Step by step: download Stats NZ boundaries for reporting maps

1. Open Stats NZ Data Finder
- https://datafinder.stats.govt.nz/

2. Choose a geography layer
Useful layers often include:
- meshblocks
- Statistical Area 2
- territorial authority and regional council boundaries

3. Download and load into GIS
Choose GeoPackage where possible.

4. Join your own data
Use consistent IDs and confirm the geography version year.

## Suggested schema for an internal dataset register

If you want a tidy internal catalogue, store this as a spreadsheet or table:

- dataset_name
- category
- source_agency
- source_link
- licence
- update_frequency
- access_method (download, WFS, WMS, WMTS, REST)
- coordinate_system
- sensitivity (public, internal, restricted)
- internal_notes

## High value datasets for Māori GIS work

Basemaps and imagery

- LINZ Basemaps: https://basemaps.linz.govt.nz/
- LINZ imagery datasets: https://data.linz.govt.nz/

Taiao and land cover

- MfE data portal: https://data.mfe.govt.nz/
- Land cover and land use datasets can also be found through data.govt.nz: https://www.data.govt.nz/

Conservation and ecological context

- DOC Open Spatial Data: https://doc-deptconservation.opendata.arcgis.com/

Hazards and planning

- Use your regional or city council open data portal
- Key layers often include flood extents, coastal hazards, slopes, zoning, and designations

## Care points for Māori organisations

## Keep a boundary between public and internal layers
If a layer is sensitive, do not publish it to public web maps. Separate datasets and control access.

## Store source and date with every dataset
A map without dates becomes hard to trust.

## Record licence terms
Keep a short licence note in your dataset register for every dataset you use.

