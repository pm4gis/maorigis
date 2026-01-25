---
title: Māori land
sidebar_position: 20
---

Māori land information sits across whakapapa, law, governance, and place. GIS can help you pull information together, but you need to be clear about what the data represents, what it can be used for, and what should stay private.

This page focuses on practical sources and workflows for working with whenua Māori in a GIS context.

## What you are usually trying to do

Common needs include:

- Find where a block is and what surrounds it
- Understand how a block is managed (trust, incorporation, other structure)
- Support communication with owners and whānau
- Prepare maps for hui, planning, funding, or projects
- Combine whenua information with taiao, hazards, and infrastructure layers
- Build an internal register of whenua interests and responsibilities

## Key places to find Māori land information

Start with sources designed for Māori land records and block context.

Pātaka Whenua is the Māori Land Court online portal for Māori land information.
- https://www.maorilandonline.govt.nz/

Use it when you need:

- Block search by name
- Information about governance and management entities
- Court record context that helps explain what a block is and how it is held

The Māori Land Court also publishes Māori land data pages that link to updates and supporting resources.
- https://www.maorilandcourt.govt.nz/

Te Puni Kōkiri provides tools and guidance that can support Māori land development and land information work.
- https://www.tpk.govt.nz/

## Practical data sources to map context around Māori land

These do not replace Māori Land Court records, but they help you map the surroundings and constraints.

LINZ Data Service (property, hydro, transport, topo, imagery)
- https://data.linz.govt.nz/

LINZ Basemaps (imagery and basemap tiles, useful for QGIS and ArcGIS products)
- https://basemaps.linz.govt.nz/

Stats NZ boundaries (meshblocks, SA2, local government boundaries)
- https://datafinder.stats.govt.nz/

DOC maps and data (public conservation land, tracks, huts, ecological regions)
- https://doc-deptconservation.opendata.arcgis.com/
- https://www.doc.govt.nz/our-work/maps-and-data/

Regional and local council open data portals
Most councils publish planning layers, hazards, and infrastructure context.

To find a portal quickly, search the council name with “open data” or “GIS data”.

## How to think about Māori land boundaries in GIS

Māori land information is often strong on record context but weaker on one single authoritative boundary dataset. Different organisations may hold different versions of boundaries, and some boundaries are indicative rather than legal.

A practical approach is to separate your work into two linked parts:

- Your boundary layer (the geometry you map)
- Your record layer (what you know about the block, its governance, and how it is used)

Link them with an internal identifier you control and maintain.

## Suggested schema for an internal whenua register

Create one internal layer or table for Māori land blocks you work with. Keep it simple.

Suggested fields:

- block_name
- block_reference (whatever reference you can record consistently)
- rohe
- governance_type (trust, incorporation, other)
- governance_name
- source_system (Pātaka Whenua, council, LINZ, internal, other)
- last_checked_date
- sensitivity (public, internal, restricted)
- notes

Keep personal information out of GIS unless you have a clear purpose, permission, and secure storage.

:::note
Treat whenua and owner information as taonga. Keep a clear boundary between public mapping outputs and internal records.
:::

## Step by step: build a Māori land context map in QGIS

This is a practical workflow for creating a map that supports kōrero without exposing sensitive detail.

1. Confirm the block name and record context
- Search the block in Pātaka Whenua
- Record the exact block name you will use internally
- Note the governance entity name if present

2. Create a project folder structure
Use a predictable structure such as:
- 01_source
- 02_working
- 03_outputs
- 04_metadata

3. Add imagery for context
Use LINZ Basemaps for current imagery.
- https://basemaps.linz.govt.nz/

4. Add property and context layers
From LINZ Data Service, add layers such as parcels, roads, waterways, and topo features.
- https://data.linz.govt.nz/

If you need live services, use WFS where available. If you need simple display only, use WMS or WMTS.

5. Add taiao and planning context
- Add hazard and planning layers from the relevant council open data portal
- Add DOC layers for public conservation land if relevant
  - https://doc-deptconservation.opendata.arcgis.com/

6. Create your block layer
- If you have a boundary from a trusted source, store it as a polygon layer
- If you only have a general location, store an indicative point and label it as indicative

7. Create a hui friendly output
Keep the map focused:
- One clear boundary or indicative marker
- Few supporting layers
- Readable labels
- A short note on date checked and limitations

8. Store a short metadata note
In `04_metadata`, create a text file listing:
- sources used
- dates downloaded or checked
- licence notes
- sensitivity or tikanga notes

## Step by step: add LINZ Basemaps imagery into ArcGIS Online

Use this when you want high quality imagery as a basemap layer.

1. Open LINZ Basemaps and create an API key
- https://basemaps.linz.govt.nz/

2. Choose the imagery layer you want and copy the WMTS URL
LINZ Basemaps provides WMTS options and guidance in their documentation pages.
- https://basemaps.linz.govt.nz/docs/

3. In ArcGIS Online Map Viewer
- Add layer
- Add layer from URL
- Paste the WMTS URL
- Confirm the layer draws correctly and set it as the basemap or reference layer

## Common issues and how to avoid them

## Block names do not match other datasets
Block naming can differ across sources and time. Store the source name and the date you checked it.

## Boundaries are treated as exact when they are not
If a boundary is indicative, label it as indicative in the layer name and in the map output.

## Sensitive sites are included in general outputs
Keep sensitive sites in a separate restricted layer with controlled access. Avoid publishing them to public web maps.

## Where to go next

- Principles and responsibilities: /docs/principles
- Taiao layers and care points: /docs/data/taiao
- Sites and sensitivity controls: /docs/data/sites
