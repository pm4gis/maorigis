---
title: Basemaps in Aotearoa
slug: basemaps-in-aotearoa
date: 2026-01-31
authors: [duane]
tags:
  - basemaps
  - imagery
  - linz
  - qgis
  - arcgis
  - wmts
---
Basemaps are the background layers that help you read your data in context. In Māori GIS work, basemaps often sit behind decisions about whenua, taiao, access, planning, and change over time. They can also carry risk, because high detail imagery can reveal more than you intended to share.

This post covers the main basemap options used in Aotearoa, how WMTS tiles work, how imagery is updated, and how to add these basemaps into QGIS, ArcGIS Online, and other tools.

:::note
A basemap is context, not truth. It helps you see patterns and locate features, but it is not a legal boundary, and it is not always perfectly aligned everywhere.
:::

## The main basemap options in Aotearoa

### LINZ Basemaps
[LINZ Basemaps](https://basemaps.linz.govt.nz/) is the main public source for national imagery basemaps and LINZ topographic vector tiles. It is built to work in GIS tools and web maps, and it supports both NZTM2000 and Web Mercator for imagery.

Common Māori GIS uses (especially outside cities) include:
- orienting rural whenua blocks when cadastral lines do not match visible features
- understanding catchments, wetlands, slips, river change, and coastal movement
- supporting whenua and taiao discussions with marae, trustees, kaitiaki, and whānau
- checking land cover change with historical imagery layers

Start here:
- [LINZ Basemaps site](https://basemaps.linz.govt.nz/)
- [How to use LINZ Basemaps APIs (LINZ guidance)](https://www.linz.govt.nz/guidance/data-service/linz-basemaps-guide/how-use-linz-basemaps-apis)
- [Technical documentation and specifications (LINZ Basemaps)](https://basemaps.linz.govt.nz/docs/user-guide/technical-documentation/)

### Esri basemaps in ArcGIS Online
ArcGIS Online includes Esri global basemaps (imagery, streets, terrain, dark canvas). In Aotearoa, you will also often see local “NZ Imagery” style basemaps published for the ArcGIS platform.

Two practical points:
- Web maps usually default to Web Mercator (EPSG:3857).
- If you are doing measurement, digitising, or analysis, keep your working projection in NZTM2000 (EPSG:2193) and let the basemap reproject as background.

### Eagle Technology “NZ Imagery” basemaps for ArcGIS
Eagle Technology publishes “NZ Imagery” basemaps for the ArcGIS platform that use the best available publicly owned imagery. These are commonly used by councils and ArcGIS organisations that want an Aotearoa focused basemap set.

Useful starting points:
- [NZ Imagery (ArcGIS item page)](https://www.arcgis.com/home/item.html?id=d284729222d04a3cb548cfe27716ea43)
- [Eagle Technology Content Hub NZ](https://content.eagle.co.nz/)
- [Eagle Technology basemaps overview](https://content.eagle.co.nz/pages/basemaps)

### Council imagery services
Many councils publish aerial imagery (sometimes many years of it) through public map viewers or open data portals. Auckland Council is a strong example, with public access to multiple historical aerial photography services via GeoMaps.

Examples:
- [Auckland Council GeoMaps](https://geomapspublic.aucklandcouncil.govt.nz/viewer/)
- [Auckland Council Open Data (imagery and LiDAR category)](https://data-aucklandcouncil.opendata.arcgis.com/search?categories=%252Fcategories%252Fimagery%2520and%2520lidar)

Council imagery is very useful for rural fringe areas, harbours, coastal margins, and local projects where LINZ imagery may be older or lower resolution.

:::tip
If you can see an imagery layer clearly in a council web viewer, it is often being served as a WMTS, WMS, XYZ tiles, or an ArcGIS REST service. In many cases you can add the same service into your own GIS project, if the terms of use allow it.
:::

## How LINZ imagery flows into other basemaps
LINZ coordinates and publishes a large amount of publicly owned aerial and satellite imagery. LINZ Basemaps serves that imagery as fast map tiles. Eagle Technology’s ArcGIS basemap layers also draw on publicly owned imagery and commonly reference LINZ as a key source.

In practice, this means:
- LINZ is a primary source for national imagery coverage.
- LINZ Basemaps is the most direct way to use that coverage in GIS tools.
- ArcGIS users often access similar imagery through Eagle Technology “NZ Imagery” items or LINZ published ArcGIS items.

## How WMTS tiles work
WMTS is a map tiling standard. Instead of downloading one huge image, your GIS app requests many small images called tiles. Each tile represents a fixed area at a fixed zoom level.

Key ideas:
- A tile grid is defined by a “tile matrix set”.
- Your app requests tiles by zoom and tile coordinates.
- Tiles are cached, so the same areas load quickly for many users.
- WMTS is predictable and efficient, which is why it is common for basemaps.

LINZ Basemaps imagery supports two common tile matrix sets:
- Web Mercator (EPSG:3857), typical for web maps
- NZTM2000 (EPSG:2193), very useful for New Zealand GIS work

LINZ Basemaps technical information:
- [Technical documentation and specifications](https://basemaps.linz.govt.nz/docs/user-guide/technical-documentation/)
- [LINZ Basemaps documentation (LINZ guidance)](https://www.linz.govt.nz/guidance/data-service/linz-basemaps-guide/linz-basemaps-documentation)

:::caution
Tiles are made for fast display, not for high precision digitising. If you are drawing boundaries that matter, use authoritative layers (cadastral, surveyed lines, legal descriptions) and treat imagery as supporting evidence only.
:::

## How often imagery is updated (and why dates vary by area)
Aotearoa does not get re-flown as one single national update. Imagery is updated region by region, project by project, and the “best available” layer is often a mosaic of different surveys and dates.

What you will see in real use:
- one rohe may have new rural imagery this year
- another may still be using older imagery until a new flying season is published
- urban areas are often updated more often than remote rural areas
- different resolutions can exist side by side

LINZ imagery capture is commonly described in “flying seasons”, and those are often the summer period to reduce low sun angle problems and to improve clarity.

Examples of imagery described by flying season:
- [Auckland 0.075m Urban Aerial Photos (2024-2025)](https://data.linz.govt.nz/layer/121752-auckland-0075m-urban-aerial-photos-2024-2025/)
- [Wellington 0.2m Rural Aerial Photos (2025)](https://data.linz.govt.nz/layer/122831-wellington-02m-rural-aerial-photos-2025/)
- [Auckland 0.075m Urban Aerial Photos (2017) (flying season summer period)](https://data.linz.govt.nz/x/UPLhtK)

How to check dates for your area:
1. Open [LINZ Basemaps](https://basemaps.linz.govt.nz/).
2. Use the layer search and type your region name, a year, or a keyword like “rural”.
3. Turn layers on and off and check the layer title and details.
4. For deeper metadata, open the matching dataset in [LINZ Data Service](https://data.linz.govt.nz/).

## When satellite imagery is used
In places where high resolution aerial imagery is not available, LINZ Basemaps can use satellite imagery to provide coverage.

Examples:
- [New Zealand 10m Satellite Imagery (2024-2025)](https://data.linz.govt.nz/layer/123125-new-zealand-10m-satellite-imagery-2024-2025/)
- [Chatham Islands 0.5m Satellite Imagery (2014-2019)](https://data.linz.govt.nz/layer/104485-chatham-islands-05m-satellite-imagery-2014-2019/)

Satellite imagery is often cloud managed mosaics across a time window, so the “date” can be a range.

## Why terrain affects imagery alignment
Even when imagery is orthorectified, rugged terrain can still create visible issues:
- steep hill country, cliffs, and gullies can cause local shifts
- tall vegetation and buildings can lean or smear slightly at edges
- seamlines can be obvious where different flights meet
- shadows can hide fence lines, tracks, and small waterways

Rural Aotearoa is a good test case: ridgelines, bush margins, slips, and braided riverbeds can look different between dates and surveys. For tikanga aligned work, it is worth saying clearly when an interpretation is uncertain.

Practical ways to reduce problems:
- use a recent DEM or LiDAR hillshade alongside imagery for reading landform
- cross-check with authoritative layers (parcels, roads, hydrology)
- compare multiple basemaps and dates before digitising

## Historical imagery basemaps (pre 1990 and post 1989)
Historical imagery is often where Māori GIS becomes very powerful: land cover change, coastline change, river movement, forestry history, wāhi tūpuna context, and long-term planning.

LINZ Basemaps includes scanned historical imagery layers split around the 31 December 1989 line:
- [Scanned Aerial Imagery pre 1 January 1990 (LINZ Basemaps layer)](https://basemaps.linz.govt.nz/?i=scanned-aerial-imagery-pre-1990-01-01)
- [Scanned Aerial Imagery post 31 December 1989 (LINZ Basemaps layer)](https://basemaps.linz.govt.nz/?i=scanned-aerial-imagery-post-1989-12-31)

That date matters for several land use and forestry contexts, and it is also a practical divider for “before and after” comparisons in rural landscapes.

For broader discovery of older photo frames and metadata, LINZ also publishes historical footprints:
- [Historical aerial imagery (LINZ)](https://www.linz.govt.nz/products-services/data/types-linz-data/aerial-imagery/historical-aerial-imagery)
- [NZ Aerial Photo Footprints, Mainland NZ (1936-2008) polygons](https://data.linz.govt.nz/layer/51002-nz-aerial-photo-footprints-mainland-nz-1936-2008-polygons/)

:::note
Not all historical imagery is perfect. Some older imagery can be softer, greyscale, or less spatially precise. It is still very useful for patterns and change, especially when paired with local knowledge and mātauranga.
:::

## Adding these basemaps to your GIS projects

### QGIS
You can add LINZ imagery basemaps using WMTS. The simplest approach is to copy a WMTS capabilities URL from LINZ Basemaps, then add it as a WMS/WMTS connection in QGIS.

Guides:
- [Using LDS WMTS in QGIS (LINZ guidance)](https://www.linz.govt.nz/guidance/data-service/linz-data-service-guide/map-tile-services/using-lds-wmts-qgis)
- [LINZ Basemaps technical documentation (WMTS and XYZ)](https://basemaps.linz.govt.nz/docs/user-guide/technical-documentation/)

LINZ topographic vector tiles can also be added to QGIS using a style JSON endpoint:
- [How to use LINZ vector tiles in QGIS (LINZ Basemaps docs)](https://basemaps.linz.govt.nz/docs/user-guide/working-with-vector-tiles/usage/)

Projection advice:
- Use NZTM2000 (EPSG:2193) for most analysis and editing in Aotearoa.
- Let QGIS reproject web basemaps as background if needed.

### ArcGIS Online and ArcGIS Pro
ArcGIS Online can add LINZ basemaps through published groups or by adding WMTS services directly.

Guides:
- [How to add LINZ Imagery Basemaps to your AGOL basemaps (LINZ Basemaps docs)](https://basemaps.linz.govt.nz/docs/user-guide/use-in-esri-software/how-to-add-linz-basemaps-to-arcgis-online-basemaps/)
- [How to add an individual LINZ Basemaps layer to ArcGIS (WMTS) (LINZ Basemaps docs)](https://basemaps.linz.govt.nz/docs/user-guide/use-in-esri-software/how-to-add-individual-linz-basemaps-layers-to-arcgis/)

If you are using Eagle Technology “NZ Imagery” items, check the item’s details page for terms of use and attribution.

## Council imagery and the “where did this come from?” problem
A council viewer can show several historical years of imagery, but the source is not always obvious.

Ways to identify the source:
- look for an “About”, “Layers”, or “Attribution” panel in the viewer
- if it is an ArcGIS viewer, look for an item details link or a REST service link
- search the council open data portal for “aerial” or “imagery”
- check if the layer name includes a contractor, year, or survey code

Auckland examples:
- [Auckland Council GeoMaps (historical imagery available)](https://geomapspublic.aucklandcouncil.govt.nz/viewer/)
- [Auckland Council Open Data imagery search](https://data-aucklandcouncil.opendata.arcgis.com/search?tags=aerial)

:::caution
Seeing imagery in a public viewer does not always mean you can reuse it anywhere. Check the licence and terms of use before you embed it in your own public maps or publications.
:::

## Creating your own local basemap
Creating a national basemap is a big technical job: storage, processing, caching, rate limiting, attribution, and long-term hosting. Even so, creating a local basemap for one valley, catchment, pā site area, or coastline section is realistic.

Local options include:
- georeferenced aerial photos (scanned prints, farm photos, project imagery)
- drone orthomosaics (straight down imagery processed into an orthomosaic)
- local council imagery where reuse is permitted
- your own site imagery, captured for your kaupapa with clear consent

A practical workflow:
1. Georeference or orthorectify the imagery (use good control points).
2. Save as a GeoTIFF and keep the original metadata.
3. Use it in QGIS or ArcGIS as a raster layer for local context.
4. If you need fast display, build an MBTiles package or a cached tile layer for internal use.

## Choosing a basemap for Māori GIS work
Some simple tikanga aligned choices help:
- For sensitive sites, avoid high resolution imagery in public maps.
- Use topo or terrain style basemaps when detail is not needed.
- If you must show imagery, clip to the smallest practical extent and keep labels and overlays careful.
- Record provenance: what basemap, what date range, what licence, what limitations.

He iti te kōrero, he nui te whakaaro. Keep the map clear, and keep control of what it reveals.
