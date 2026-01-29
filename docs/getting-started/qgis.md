---
title: QGIS

---

QGIS is a free, open source desktop GIS tool for viewing, analysing, and making maps. It runs on Windows, macOS, and Linux. In Aotearoa it is widely used by councils, consultants, community groups, and iwi organisations.

QGIS suits Māori contexts because it can work fully offline, supports open formats, and lets you keep control of where files live, who has access, and what gets shared.

:::info
QGIS is commonly said as “Q-gis” or “Q G I S”.
:::

## He aha te painga, why QGIS fits Māori GIS mahi

QGIS is a strong fit when you need to:

- keep a local kete of data on your device, shared drive, or server
- work in places with limited internet
- map whenua, taiao, and kaupapa layers without cloud lock in
- share outputs for hui without sending raw datasets around
- build capability across a team without licence barriers

A common pattern is to do source data work in QGIS, then publish lighter outputs for wider viewing (PDFs, images, simple web maps).

## Useful links

- QGIS download: https://qgis.org/en/site/forusers/download.html
- QGIS installation guide: https://qgis.org/resources/installation-guide/
- QGIS documentation: https://docs.qgis.org/
- QGIS plugins directory: https://plugins.qgis.org/

## Install and updates that work in organisations

Most organisations should install the Long Term Release (LTR). It changes less often, which reduces surprises in training and shared projects.

### Recommended install choices

| Situation | Recommended |
|---|---|
| You want stability for a team | QGIS LTR |
| You need the newest features | Latest QGIS release |
| You need multiple QGIS versions side by side (Windows) | OSGeo4W installer (advanced) |

### Windows (simple path)

1. Go to the QGIS download page and choose the standard installer, or use OSGeo4W if your team needs it.
2. Install QGIS LTR unless you have a clear reason not to.
3. Open QGIS once, then set up a starter project template (steps below).

### macOS and Linux (simple path)

Use the QGIS download page and follow the installation guide for your operating system. The guide includes distribution specific steps for Linux.

## Set up a Māori GIS kete folder structure

A tidy structure saves hours later, especially when projects are shared across whānau, hapū, and iwi teams.

### Suggested kete layout (per kaupapa)

| Folder | Purpose |
|---|---|
| `00_readme` | a short “how this kete works” note for others |
| `01_source` | original downloads (do not edit) |
| `02_working` | cleaned data, merged layers, processing outputs |
| `03_projects` | QGIS project files (`.qgz`) and templates |
| `04_outputs` | PDFs, PNGs, exports for websites and reports |
| `05_icons_styles` | SVG icons, QGIS styles, label rules |
| `06_metadata` | sources, dates, licences, data dictionaries, decisions |

:::tip
Use one GeoPackage (`.gpkg`) in `02_working` as your main working database for the kaupapa. It reduces file clutter and keeps layers together.
:::

## First time QGIS setup (10 minutes)

### 1) Set your default coordinate reference system

For most whenua scale work in Aotearoa, NZTM2000 is a solid default (EPSG:2193).

- Project ▸ Properties ▸ CRS
- Set to **NZTM2000 / New Zealand Transverse Mercator 2000 (EPSG:2193)**
- Save the project

### 2) Turn on the panels you will use every day

- View ▸ Panels ▸ Layers
- View ▸ Panels ▸ Browser
- View ▸ Panels ▸ Processing Toolbox
- View ▸ Toolbars ▸ Attributes, Label, Digitising, Advanced Digitising (as needed)

### 3) Save a simple project template

Create a starter project once, then reuse it.

- Project ▸ Save As…
- Put it in `03_projects` as something like `kete_template.qgz`
- Add baseline layers and styles (next sections)

## A practical first map workflow for Māori projects

This is a reliable pattern for hui maps, reporting maps, and early scoping.

1. Add a clean basemap (imagery or topo)
2. Add reference context layers (roads, rivers, parcels where appropriate)
3. Add your kaupapa layer (rohe boundary, project area, sites)
4. Style for clarity and tikanga
5. Export a PDF for hui and a PNG for slides

You can keep sensitive layers out of exports by switching them off before exporting, or by keeping them in a separate GeoPackage.

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

LINZ Basemaps are a fast way to add high quality context. Vector tiles work well for topo style maps and scale smoothly.

### Add LINZ vector tiles (topographic) in QGIS

1. Open Data Source Manager (Ctrl+L)
2. Choose Vector Tiles
3. New Generic Connection
4. Name: `LINZ Topographic`
5. URL example:  
   `https://basemaps.linz.govt.nz/v1/styles/topographic-v2.json?api={api_key}`
6. Add the connection, then double click it to add to your map

### Coordinate systems to know

| CRS | When to use |
|---|---|
| EPSG:2193 (NZTM2000) | whenua scale work, measurement, analysis |
| EPSG:3857 | many web map contexts |
| EPSG:4326 | lat and long interchange, GPS exports |

## LINZ Data Importer plugin

The LINZ Data Importer plugin helps you add web services and data into QGIS, including LINZ Data Service layers and LINZ Basemaps.

- Plugin page: https://plugins.qgis.org/plugins/linz-data-importer/
- Plugin home: https://github.com/linz/linz-data-importer

### What it is useful for

- browsing layers from multiple agencies in one place (as supported by the plugin)
- adding web services quickly without manual connection setup
- creating a repeatable add core layers routine for each kaupapa

### Basic use pattern

1. Plugins ▸ Manage and Install Plugins…
2. Search `LINZ Data Importer`, install
3. Open the plugin from the Plugins menu
4. Sign in or add an API key when prompted
5. Search for a dataset, then add it as WFS (vector) or WMTS (tiles), or download if available

## Recommended beginner plugins (with Māori use cases)

Install plugins from Plugins ▸ Manage and Install Plugins.

| Plugin | What it helps with | Māori GIS examples |
|---|---|---|
| LINZ Data Importer | Access agency web services | add parcels, hydro, topo layers for a rohe map |
| QuickMapServices | Easy basemap access and search | quick context basemaps during a hui or workshop |
| QuickOSM | Pull OpenStreetMap features into QGIS | bring in buildings, tracks, amenities for planning |
| qgis2web | Export a QGIS map to a simple interactive web map | share a lightweight map on a website or internal page |
| QGIS Resource Sharing | Share styles, symbols, scripts across a team | standard icons for marae, awa, sites, monitoring points |

## Custom icons for marae, sites, and kaupapa markers (SVG)

Custom icons make maps more readable for Māori audiences, especially when labels are busy or bilingual.

### Best practice: store icons inside the kete

- Put SVG icons in `05_icons_styles/icons/`
- Share the whole kete folder with your team so the paths stay consistent

### Add a shared SVG folder path

1. Settings ▸ Options ▸ System
2. Add your kete icon folder to SVG paths
3. Your icons will then appear in the symbol selector under SVG markers

### Style Manager for consistent team symbology

- Settings ▸ Style Manager
- Create a set of symbols (marae, wāhi tapu placeholder, monitoring point, boundary types)
- Export a style package and store it in `05_icons_styles`

## Labels, place names, and bilingual maps

QGIS labelling supports rules, scale based visibility, buffers, and expression driven content.

Practical tips:

- show fewer labels than you think you need
- use scale based visibility so labels appear only when zoomed in
- for bilingual labels, store both fields (for example `name_mi` and `name_en`) and use an expression to choose what displays based on map purpose

For place names workflows, keep your tikanga decisions close to the dataset, inside `06_metadata`.

## Attributes you will use constantly

### The attribute table and Field Calculator

Use it for:

- cleaning names (trim spaces, standardise spelling)
- building a single full address field for geocoding
- creating categories for symbology and reporting
- generating IDs for sites and observations

### Expressions (quiet but powerful)

Expressions are used across styling, labels, selections, and calculations.

Good beginner goals:

- build a label like `name_mi || ' / ' || name_en`
- select features where `type = 'marae' AND status = 'active'`
- style categories driven by a field like `kaupapa`

## Geocoding addresses (turning addresses into points)

A practical approach:

1. Prepare a layer with an address string field (CSV or table)
2. Use a geocoding tool or plugin suited to your organisation’s rules and privacy needs
3. Save the output into your working GeoPackage and check match quality

If addresses are sensitive, treat geocoded points as sensitive too.

## Historical plans, old maps, and georeferencing

Many Māori GIS projects need scanned plans, historic maps, or imagery aligned to today’s coordinate system. QGIS includes a Georeferencer tool for aligning rasters using control points.

A practical workflow:

1. Scan or export the plan or map as a clear image
2. Open Raster ▸ Georeferencer
3. Set the target CRS (often EPSG:2193)
4. Add control points using known intersections, corners, or mapped marks
5. Run the transformation
6. Save outputs into `02_working/rasters/`

Once aligned, you can digitise features into a GeoPackage layer and attach kōrero in attributes.

## Print layouts for hui packs and reporting

Print Layout supports legends, scale bars, tables, images, multiple map frames, and export to PDF and image formats.

### Hui map checklist

- clear title with the kaupapa and date
- sources list (small text, bottom corner)
- scale bar
- a simple legend (only layers visible in the map)
- a note about access and sensitivity if relevant

### Atlas for one map per feature

If you need a series of maps with the same template, use Atlas. It is a strong way to produce repeatable outputs for blocks, marae catchments, or monitoring zones.

## Export and share without losing control

### Safer sharing defaults

- Share PDF or PNG for wide audiences
- Share simplified GeoPackage extracts for partners who need data
- Keep sensitive layers separate and access controlled

### Simple web maps without a server

The qgis2web plugin can export your project to a Leaflet or OpenLayers web map, which can be hosted as static files.

This is useful for:

- embedding a simple map in a website
- sharing an interactive view on an internal page
- handing a zipped web map folder to a comms team

## Field data collection with QGIS projects (offline capable)

If your mahi includes site visits, monitoring points, photos, or inspections, consider QField.

- QField overview: https://qfield.org/

A practical setup:

1. Design a clean data entry layer in GeoPackage (sites, observations)
2. Configure attribute forms in QGIS (drop downs, required fields)
3. Package the project for field use
4. Bring edits back into the kete and review

## Example resource

If you want a Māori focused walkthrough that combines practical mapping with storytelling, this StoryMap is a useful example:

- https://storymaps.arcgis.com/stories/d0d90a0fb60c41af8ea8d59edca04c3d
