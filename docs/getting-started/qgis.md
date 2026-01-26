---
title: QGIS
sidebar_position: 2
---

QGIS is a free, open source desktop GIS tool for viewing, analysing, and making maps. It runs on Windows, macOS, and Linux. In Aotearoa it is widely used by councils, consultants, community groups, and iwi organisations.

QGIS is well suited to Māori contexts because it can work fully offline, supports open formats, and lets you keep control of where files live, who has access, and what gets shared.

:::info
QGIS is commonly said as “Q-gis” or “Q G I S”.
:::

## He aha te painga, why QGIS fits Māori GIS mahi

QGIS is a strong fit when you need to:

- keep a local “kete” of data on your device, shared drive, or server
- work in places with limited internet
- map whenua, taiao, and kaupapa layers without cloud lock in
- share outputs for hui without sending raw datasets around
- build capability across a team without licence barriers

A common pattern is to do the “source of truth” data work in QGIS, then publish lighter outputs for wider viewing (PDFs, images, simple web maps).

## Quick links

- QGIS download: https://qgis.org/en/site/forusers/download.html
- QGIS install guide (all operating systems): https://qgis.org/resources/installation-guide/ :contentReference[oaicite:0]{index=0}
- QGIS documentation: https://docs.qgis.org/
- QGIS plugins directory: https://plugins.qgis.org/ :contentReference[oaicite:1]{index=1}

## Install and updates that work in organisations

Most organisations should install the Long Term Release (LTR). It changes less often, which reduces surprises in training and shared projects. The QGIS install guide also lists the current LTR and latest builds for OSGeo4W on Windows. :contentReference[oaicite:2]{index=2}

### Recommended install choices

| Situation | Recommended |
|---|---|
| You want stability for a team | QGIS LTR |
| You need the newest features | Latest QGIS release |
| You need multiple QGIS versions side by side (Windows) | OSGeo4W installer (advanced) :contentReference[oaicite:3]{index=3} |

### Windows (simple path)

1. Go to the QGIS download page and choose the standard installer, or use OSGeo4W if your team needs it.
2. Install QGIS LTR unless you have a clear reason not to.
3. Open QGIS once, then set up your first project template (steps below). :contentReference[oaicite:4]{index=4}

### macOS and Linux (simple path)

Use the QGIS download page and follow the install guide for your operating system. The install guide includes distribution specific steps for Linux. :contentReference[oaicite:5]{index=5}

## Set up a Māori GIS “kete” folder structure

A tidy structure saves hours later, especially when projects are shared across whānau, hapū, and iwi teams.

### Suggested kete layout (per kaupapa)

| Folder | Purpose |
|---|---|
| `00_readme` | a short “how this kete works” note for others |
| `01_source` | original downloads (do not edit) |
| `02_working` | cleaned data, merged layers, geoprocessing outputs |
| `03_projects` | QGIS project files (`.qgz`) and templates |
| `04_outputs` | PDFs, PNGs, exports for websites, reports |
| `05_icons_styles` | SVG icons, QGIS styles, label rules |
| `06_metadata` | sources, dates, licences, data dictionaries, decisions |

:::tip
Use one GeoPackage (`.gpkg`) in `02_working` as your main working database for the kaupapa. It reduces file clutter and keeps layers together.
:::

## First time QGIS setup (10 minutes)

### 1) Set your default coordinate reference system

For most whenua scale work in Aotearoa, NZTM2000 is a solid default (EPSG:2193). LINZ vector tiles also support NZTM2000 (2193). :contentReference[oaicite:6]{index=6}

- Project ▸ Properties ▸ CRS
- Set to **NZTM2000 / New Zealand Transverse Mercator 2000 (EPSG:2193)**
- Save the project

### 2) Turn on the panels you will use every day

- View ▸ Panels ▸ **Layers**
- View ▸ Panels ▸ **Browser**
- View ▸ Panels ▸ **Processing Toolbox**
- View ▸ Toolbars ▸ **Attributes**, **Label**, **Digitising**, **Advanced Digitising** (as needed)

### 3) Save a simple project template

Create a starter project once, then reuse it.

- Project ▸ Save As…
- Put it in `03_projects` as something like `kete_template.qgz`
- Add your baseline layers and styles (next sections)

## A practical “first map” workflow for Māori projects

This is a reliable pattern for hui maps, reporting maps, and early scoping.

1. Add a clean basemap (imagery or topo)
2. Add reference context layers (roads, rivers, parcels where appropriate)
3. Add your kaupapa layer (rohe boundary, project area, sites)
4. Style for clarity and tikanga
5. Export a PDF for hui and a PNG for slides

You can keep sensitive layers out of the hui export by switching them off before exporting, or by keeping them in a separate GeoPackage.

## Getting data into QGIS

QGIS reads most common GIS formats:

- GeoPackage (`.gpkg`)
- Shapefile (`.shp`)
- GeoJSON (`.geojson`)
- CSV with coordinates
- KML/KMZ
- Raster imagery (GeoTIFF and more)

### Add local files

- Layer ▸ Add Layer ▸ Add Vector Layer (GeoPackage, Shapefile, GeoJSON)
- Layer ▸ Add Layer ▸ Add Raster Layer (imagery, DEMs)
- Layer ▸ Add Layer ▸ Add Delimited Text Layer (CSV)

:::tip
If you receive shapefiles, consider converting them into your working GeoPackage straight away. It keeps filenames and sidecar files under control.
:::

## LINZ Basemaps in QGIS (recommended)

LINZ Basemaps are a fast way to add high quality context. Vector tiles work well for topo style maps and scale smoothly. LINZ provides QGIS steps and a style URL format that uses an API key. :contentReference[oaicite:7]{index=7}

### Add LINZ vector tiles (topographic) in QGIS

LINZ notes that QGIS 3.14+ supports vector tiles natively. :contentReference[oaicite:8]{index=8}

1. Open **Data Source Manager** (Ctrl+L)
2. Choose **Vector Tiles**
3. New Generic Connection
4. Name: `LINZ Topographic`
5. URL example (from LINZ):  
   `https://basemaps.linz.govt.nz/v1/styles/topographic-v2.json?api={api_key}` :contentReference[oaicite:9]{index=9}
6. Add the connection, then double click it to add to your map

### Coordinate systems to know

LINZ lists supported coordinate systems for their vector tiles, including NZTM2000 (2193) and Web Mercator (3857). :contentReference[oaicite:10]{index=10}

| CRS | When to use |
|---|---|
| EPSG:2193 (NZTM2000) | whenua scale work, measurement, analysis |
| EPSG:3857 | many web map contexts |
| EPSG:4326 | lat/long interchange, GPS exports |

## LINZ Data Importer plugin (high value for Aotearoa data)

The LINZ Data Importer plugin is designed to pull WFS and WMTS supported data into QGIS, including LINZ Data Service and LINZ Basemaps. :contentReference[oaicite:11]{index=11}

- Plugin page: https://plugins.qgis.org/plugins/linz-data-importer/ :contentReference[oaicite:12]{index=12}
- Plugin home (code and releases): https://github.com/linz/linz-data-importer :contentReference[oaicite:13]{index=13}

### What it is useful for

- browsing Aotearoa layers from participating agencies in one place (LINZ, Stats NZ, MfE, LRIS, NZDF are listed in the plugin repository) :contentReference[oaicite:14]{index=14}
- adding web services quickly, without manually building connections
- creating a repeatable “add core layers” routine for each kaupapa

### Basic use pattern

1. Plugins ▸ Manage and Install Plugins…
2. Search `LINZ Data Importer`, install
3. Open the plugin from the Plugins menu
4. Sign in or add an API key when prompted (LINZ services require an API key for many uses)
5. Search for a dataset, then add it as WFS (vector) or WMTS (tiles), or download if the plugin provides that option

## Recommended beginner plugins (with Māori use cases)

Install plugins from Plugins ▸ Manage and Install Plugins.

| Plugin | What it helps with | Māori GIS examples |
|---|---|---|
| LINZ Data Importer | Access LINZ and other agency web services :contentReference[oaicite:15]{index=15} | add parcels, hydro, topo layers for a rohe map |
| QuickMapServices | Easy basemap access and search :contentReference[oaicite:16]{index=16} | quick context basemaps during a hui or workshop |
| QuickOSM | Pull OpenStreetMap features into QGIS :contentReference[oaicite:17]{index=17} | bring in buildings, tracks, amenities for planning |
| qgis2web | Export a QGIS map to a simple interactive web map :contentReference[oaicite:18]{index=18} | share a lightweight map on a website or internal page |
| QGIS Resource Sharing | Share styles, symbols, scripts across a team :contentReference[oaicite:19]{index=19} | standard icons for marae, awa, sites, monitoring points |

:::note
The QGIS training manual includes a worked example for QuickMapServices, which is a good first plugin to learn. :contentReference[oaicite:20]{index=20}
:::

## Custom icons for marae, sites, and kaupapa markers (SVG)

Custom icons make maps more readable for Māori audiences, especially when labels are busy or bilingual.

### Best practice: store icons inside the kete

- Put SVG icons in `05_icons_styles/icons/`
- Share the whole kete folder with your team so the paths stay consistent

### Add a shared SVG folder path

QGIS documentation notes you can add an SVG folder to SVG paths via Settings ▸ Options ▸ System. :contentReference[oaicite:21]{index=21}

1. Settings ▸ Options ▸ System
2. Add your kete icon folder to **SVG paths**
3. Your icons will then appear in the symbol selector under SVG markers

### Style Manager for consistent team symbology

The Style Manager supports exporting and sharing symbols, and notes that an exported SVG folder can be added to another user’s SVG paths. :contentReference[oaicite:22]{index=22}

- Settings ▸ Style Manager
- Create a set of symbols (marae, wāhi tapu placeholder, monitoring point, boundary types)
- Export as a style package or SVGs and store in `05_icons_styles`

## Labels, place names, and bilingual maps

QGIS labelling is powerful, and it supports rule based labels, scale based visibility, buffers, and expression driven content.

Practical tips:

- show fewer labels than you think you need
- use scale based visibility so labels appear only when zoomed in
- for bilingual labels, store both fields (for example `name_mi` and `name_en`) and use an expression to choose what displays based on map purpose

For LINZ place names and local hapū names workflows, keep your tikanga decisions close to the dataset, inside `06_metadata`.

## Attributes you will use constantly

### The attribute table and Field Calculator

The QGIS user manual describes the Field Calculator workflow and how it applies expressions to create or update fields. :contentReference[oaicite:23]{index=23}

Use it for:

- cleaning names (trim spaces, standardise macrons if your data pipeline supports it)
- building a single “full address” field for geocoding
- creating categories for symbology and reporting
- generating IDs for sites and observations

### Expressions (the quiet superpower)

QGIS Expressions are used across styling, labels, selections, and calculations. :contentReference[oaicite:24]{index=24}

Good beginner goals:

- build a label like: `name_mi || ' / ' || name_en`
- select features where: `type = 'marae' AND status = 'active'`
- style categories driven by a field like `kaupapa`

## Geocoding addresses (turning addresses into points)

For batch geocoding inside QGIS, the Processing toolbox includes **Batch Nominatim geocoder**, which performs batch geocoding from a string field and outputs point geometry with extra attributes. :contentReference[oaicite:25]{index=25}

A practical approach:

1. Prepare a layer with an address string field (CSV or table)
2. Processing Toolbox ▸ QGIS ▸ Vector general ▸ **Batch Nominatim geocoder**
3. Choose your address field, run, then save the output into your working GeoPackage

If you need other services, plugins like **mmqgis** also list geocoding capability, but start with the built in tool first. :contentReference[oaicite:26]{index=26}

## Historical plans, old maps, and georeferencing (high value for whakapapa of place)

Many Māori GIS projects need scanned plans, historic maps, or imagery aligned to today’s coordinate system. QGIS includes the Georeferencer tool for aligning unreferenced rasters or vectors using ground control points, and it can export GeoTIFFs or write world files. :contentReference[oaicite:27]{index=27}

A practical workflow:

1. Scan or export the plan/map as a clear image
2. Open Raster ▸ Georeferencer
3. Set the target CRS (often EPSG:2193)
4. Add ground control points using known intersections, corners, or mapped marks
5. Choose a transformation and run
6. Save the georeferenced output into `02_working/rasters/`

Once the plan is aligned, you can digitise features into a GeoPackage layer and attach kōrero in attributes.

## Print Layouts for hui packs and reporting

QGIS Print Layout supports legends, scale bars, tables, images, multiple map frames, and export to PDF, PNG, SVG, and more. :contentReference[oaicite:28]{index=28}

### Hui map checklist

- clear title with the kaupapa and date
- sources list (small text, bottom corner)
- north arrow only if needed
- scale bar and map scale
- a simple legend (only layers visible in the map)
- a note about access and sensitivity if relevant

### Atlas for “one map per block / one map per marae / one map per catchment”

If you need a series of maps with the same template, use the Atlas tool. The QGIS training manual has an Atlas lesson, and it is a strong way to produce repeatable outputs. :contentReference[oaicite:29]{index=29}

## Export and share without losing control

### Safer sharing defaults

- Share **PDF** or **PNG** for wide audiences
- Share simplified **GeoPackage** extracts for partners who need data
- Keep sensitive layers separate and access controlled

### Simple web maps without a server

The qgis2web plugin exports your project to a Leaflet or OpenLayers web map and aims to replicate layers, extent, and styles, with no server side software required. :contentReference[oaicite:30]{index=30}

This is useful for:

- embedding a simple map in a website
- sharing an interactive view on an internal SharePoint or intranet page
- sending a zipped web map folder to a comms team

## Field data collection with QGIS projects (offline capable)

If your mahi includes site visits, monitoring points, photos, or inspections, consider QField.

- QField overview: https://qfield.org/ :contentReference[oaicite:31]{index=31}
- QField “get started” notes that it works with local QGIS projects and offline settings, and uses QFieldSync for packaging projects. :contentReference[oaicite:32]{index=32}

A practical setup:

1. Design a clean data entry layer in GeoPackage (sites, observations)
2. Configure attribute forms in QGIS (drop downs, required fields)
3. Package the project for field use
4. Bring edits back into the kete and review

## A Māori GIS starter package you can learn from

The **Matawhenua GIS Mapping** StoryMap is described as a complete Māori GIS mapping “kete”, aimed at helping iwi, hapū, and whānau set up a simple offline GIS on a computer, with real world examples and tools. :contentReference[oaicite:33]{index=33}

- StoryMap link: https://storymaps.arcgis.com/stories/d0d90a0fb60c41af8ea8d59edca04c3d :contentReference[oaicite:34]{index=34}

## Where QGIS fits in this guide

- Start here: [Tools overview](./tools)
- Desktop alternatives: [ArcGIS Pro](./arcgis-pro)
- Web mapping and storytelling: [ArcGIS StoryMaps](./arcgis-storymaps), [Google My Maps](./Google-mymaps), [Google Earth](./google-earth)
- Field data collection: [KoBoToolbox](./kobotoolbox), [ArcGIS Survey123](./arcgis-survey123), [ArcGIS Field Maps](./arcgis-fieldmaps)

QGIS is used across this guide because it is accessible, flexible, and suits many Māori organisational needs, especially when your kaupapa needs offline work, shared kete folders, and local control.
