---
title: NZ data sources
sidebar_position: 21
---

Most Māori GIS work relies on a mix of your own data and public datasets from government, councils, and research organisations. This page focuses on practical, high value sources for Aotearoa and how to use them in common GIS tools.

## A practical way to think about NZ data

Organise data sources into a few categories that match everyday mahi:

- Basemaps and imagery
- Boundaries and admin areas
- Property and land information
- Taiao and environmental layers
- Hazards and risk
- Infrastructure and assets
- Place names and community places
- Statistics by area

This keeps your dataset library usable and avoids random one off downloads.

## Core national sources

These are the main national catalogues and services most teams use.

LINZ Data Service and Basemaps

- LINZ Data Service (download, WFS, WMTS): https://data.linz.govt.nz/ :contentReference[oaicite:20]{index=20}
- LINZ Basemaps (imagery and basemap tiles): https://basemaps.linz.govt.nz/ :contentReference[oaicite:21]{index=21}

Stats NZ geographic boundaries and tools

- Stats NZ geographic data and maps: https://www.stats.govt.nz/geographic-data-and-maps/ :contentReference[oaicite:22]{index=22}
- Stats NZ Geographic Data Service (downloads and boundary viewer): https://datafinder.stats.govt.nz/ :contentReference[oaicite:23]{index=23}

Ministry for the Environment

- MfE Data Service: https://data.mfe.govt.nz/ :contentReference[oaicite:24]{index=24}
- LUCAS Land Use Map information and access: https://environment.govt.nz/facts-and-science/science-and-data/new-zealand-land-use-map/ :contentReference[oaicite:25]{index=25}

Department of Conservation

- DOC maps and data overview: https://www.doc.govt.nz/our-work/maps-and-data/ :contentReference[oaicite:26]{index=26}
- DOC Open Spatial Data portal: https://doc-deptconservation.opendata.arcgis.com/ :contentReference[oaicite:27]{index=27}

Data catalogue for finding datasets across agencies

- data.govt.nz: https://www.data.govt.nz/ :contentReference[oaicite:28]{index=28}

## How to choose the right access method

Pick the access method that matches how you will use the data.

Download once when:

- You need offline use
- You will edit or clean the data
- You need repeatable outputs and version control

Stream (WMS, WMTS) when:

- You need a background layer or reference layer
- You want the latest view without managing downloads

Use WFS when:

- You need vector features you can query and filter
- You want near real time access and can manage performance

LINZ and other services support OGC web services and provide guidance and patterns for WFS and WMTS access, including the use of web service keys. :contentReference[oaicite:29]{index=29}

## Step by step: add LINZ Data Service WFS to QGIS

Use this when you want a live connection you can filter.

1. Create a LINZ Data Service account
- Open https://data.linz.govt.nz/
- Sign in and create an API key or web services key in your account :contentReference[oaicite:30]{index=30}

2. Get a WFS URL
LINZ provides WFS request patterns that include your key, using a base form like `https://data.linz.govt.nz/services;key=YOUR_API_KEY/wfs?` :contentReference[oaicite:31]{index=31}

3. Add to QGIS
- Layer menu
- Data Source Manager
- WFS / OGC API Features
- New
- Paste your WFS URL
- Connect
- Choose the layer you need

4. Filter what you load
Large layers can be heavy. Use filtering by attributes or by area when available. LINZ provides guidance on WFS filtering methods. :contentReference[oaicite:32]{index=32}

## Step by step: add LINZ Basemaps imagery to ArcGIS Online

LINZ Basemaps provides imagery via WMTS and shows the WMTS URL format that includes an API key. :contentReference[oaicite:33]{index=33}

1. Get your API key
- Open https://basemaps.linz.govt.nz/
- Copy your key :contentReference[oaicite:34]{index=34}

2. Copy a WMTS capabilities URL
LINZ provides an example WMTS URL pattern, including the tileset name and the API key. :contentReference[oaicite:35]{index=35}

3. Add the layer in ArcGIS Online
- Map Viewer
- Add layer
- Add layer from URL
- Paste the WMTS URL
- Follow the LINZ guidance about removing the `?api=` part if ArcGIS Online needs it to recognise WMTS :contentReference[oaicite:36]{index=36}

## Step by step: download Stats NZ boundaries for mapping and reporting

Stats NZ provides boundary files for admin and statistical geographies such as meshblocks and Statistical Area 2. :contentReference[oaicite:37]{index=37}

1. Open Stats NZ Data Finder
- https://datafinder.stats.govt.nz/ :contentReference[oaicite:38]{index=38}

2. Choose the boundary layer you need
Useful starting layers:
- Meshblock higher geographies
- Statistical Area 2
- Territorial authority and regional council layers :contentReference[oaicite:39]{index=39}

3. Download in a GIS friendly format
- GeoPackage is a good default
- Shapefile is widely supported but has limitations

4. Join your own data
- Make sure your join field is consistent
- Use a concordance layer where available if you need to map across multiple geography types

## Suggested schema for a shared dataset register

If you want a tidy internal catalogue, create a simple dataset register as a spreadsheet or table with these fields:

- dataset_name
- category (imagery, boundaries, taiao, hazards, infrastructure, place names, other)
- source_agency
- source_link
- licence
- update_frequency
- access_method (download, WFS, WMS, WMTS, REST)
- coordinate_system
- sensitivity (public, internal, restricted)
- internal_notes

This helps whānau, staff, and partners understand what you are using and why.

## High value datasets for Māori GIS work

Basemaps and imagery

- LINZ Basemaps imagery (WMTS): https://basemaps.linz.govt.nz/ :contentReference[oaicite:40]{index=40}
- LINZ Data Service imagery and topo layers: https://data.linz.govt.nz/ :contentReference[oaicite:41]{index=41}

Taiao and land cover

- LUCAS Land Use Map (MfE access and guidance): https://environment.govt.nz/facts-and-science/science-and-data/new-zealand-land-use-map/ :contentReference[oaicite:42]{index=42}
- MfE Data Service (LUCAS layers and downloads): https://data.mfe.govt.nz/ :contentReference[oaicite:43]{index=43}
- Land Cover Database (LCDB overview): https://data.govt.nz/catalogue-guide/showcase/land-cover-database :contentReference[oaicite:44]{index=44}

Conservation and ecological context

- DOC Open Spatial Data (PCA, tracks, huts, ecological regions): https://doc-deptconservation.opendata.arcgis.com/ :contentReference[oaicite:45]{index=45}

Council data portals

Councils publish many local layers, often as ArcGIS Hub or Koordinates portals. Use these when your kaupapa is place specific.

Example portal (Auckland Council Open Data):
- https://data-aucklandcouncil.opendata.arcgis.com/ :contentReference[oaicite:46]{index=46}

## Care points for Māori organisations

## Keep a boundary between public and internal layers
If a layer is sensitive, do not publish it to public web maps. Separate datasets and control access.

## Store the source and date with every dataset
A map without dates becomes hard to trust.

## Check licence terms before reuse
Most government open data is permissive, but some sources have conditions. Record licence notes in your dataset register.

## Where to go next

- Use Place names for official naming and macrons: /docs/place-names
- Use Māori land for land record and whenua workflows: /docs/maori-land
- Use Taiao for environmental layers and care points: /docs/taiao
