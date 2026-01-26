---
title: Māori land
sidebar_position: 20
---

Māori land information sits across whakapapa, law, governance, and place. GIS can help you pull kōrero, boundaries, and context into one view, but you need to be clear about what each dataset represents and what must stay restricted. This page focuses on practical sources and workflows for working with whenua Māori in a GIS context, written for iwi and hapū staff, trust managers, kaitiaki, and practitioners.

## What people usually need from a whenua map

- Find where a block is, and what surrounds it
- Confirm the registered block name and Māori Land Court district
- Understand management structures (trust, incorporation, reservation, other)
- Prepare maps for hui, planning, funding, or on the whenua mahi
- Combine whenua with taiao, hazards, infrastructure, and planning layers
- Build an internal register of whenua interests, responsibilities, and contacts
- Share useful context without exposing owners or sensitive sites

## Start with the right concepts

You will often work with two different concepts that do not always line up one to one.

Māori land block (Māori Land Court context)
- A block is a Court record concept tied to land status and Court record context.

Parcel (LINZ cadastre context)
- A parcel is a cadastral mapping unit used nationwide (roads, fee simple, Crown land, Māori land parcels, and more). Parcels are often the best spatial index for joining to other datasets.

Practical tip: use blocks for whenua context and governance kōrero, and use parcels to link to planning, rates context, services, and other property based layers.

## Where to find Māori land record context

### Pātaka Whenua (Māori Land Court)
Pātaka Whenua is the Māori Land Court portal for searching and accessing Māori land information, including minutes and orders. It replaced the older Māori Land Online experience for most day to day use.  
https://customer.service.maorilandcourt.govt.nz/  
Guidance on searching the Court record is here:  
https://www.xn--morilandcourt-wqb.govt.nz/en/the-court-record/our-record  
Find your land guidance is here:  
https://www.xn--morilandcourt-wqb.govt.nz/en/maori-land/find-your-land

Use Pātaka Whenua when you need:
- a confirmed block name and block record context
- minutes and orders behind decisions
- trusted Court record references to support governance discussions

### Māori Land Court published data pages
The Māori Land Court publishes regular documents and registers, including:
- Māori Land Update reports
- Māori Land Blocks in New Zealand (National List)
- Māori Incorporation Register  
https://www.xn--morilandcourt-wqb.govt.nz/en/the-court-record/m%C4%81ori-land-data

Important scope note from the Court: the national lists cover customary and freehold Māori land blocks and aggregated blocks, and exclude some categories such as Crown land reserved for Māori, general land owned by Māori, and blocks under internal review. Always check the notes on the document you download.

### Tōku Whenua reports (Te Puni Kōkiri)
Useful for high level environmental and land characteristic context when scoping options.  
https://www.tupu.nz/

### Whenua Māori Visualisation Tool (Manaaki Whenua)
Useful for quick context and early kōrero. Note that the site states the land block information used was last updated in February 2017, so treat it as a guide, not a current source of record.  
https://whenuaviz.landcareresearch.co.nz/

## Where to find surrounding context layers

LINZ Data Service (topo, hydro, transport, parcels, many national layers)  
https://data.linz.govt.nz/

LINZ Basemaps (imagery and basemap tiles)  
https://basemaps.linz.govt.nz/

Stats NZ boundary layers (meshblocks, SA2, local government boundaries)  
https://datafinder.stats.govt.nz/

DOC open data (public conservation land and related layers)  
https://doc-deptconservation.opendata.arcgis.com/

Regional and local council open data portals
- Most councils publish district plan layers, hazards, and infrastructure context.
- Search the council name plus “open data” or “GIS data”.

## Māori land boundaries in GIS

Māori land record context is often strong, but boundaries are not always available as one single current authoritative dataset. Different organisations hold different versions, and some boundaries are indicative rather than legal.

A practical approach is to separate your work into two linked parts:
- Boundary layer (the geometry you map, with source and date)
- Record layer (what you know about the block, governance, and use, with links back to Court record context)

Link them with an internal identifier you control and maintain.

## Māori Land Spatial Dataset (MLC May 2017)

A widely used boundary dataset is commonly referred to as the Māori Land Spatial Dataset (MLC_2017_05). It is often served by councils and agencies as an ArcGIS layer and used as a practical baseline for mapping and analysis.

If you are trying to obtain the original files, a current request exists on data.govt.nz listing:
- MLC_2017_05-Shapefile.zip
- MLC_2017_05-Geodatabase.zip
- MLC-2017-05-Fact-Sheet-Maori-Land-Dataset.pdf  
https://data.govt.nz/datasetrequest/show/1283

## Common attributes in the Māori land dataset

Field names can vary by publisher. The table below reflects a published “Maori Land - MLC (May 2017)” feature service and is a good guide to what you are likely to see.

| Field | What it usually means | Practical use |
|---|---|---|
| BLOCK_ID | Block identifier | Use for internal linking and stable references |
| BLOCK_NAME | Registered block name | Best for labels and searching |
| LAND_STATU | Land status (as recorded) | Useful for high level summaries and filters |
| DISTRICT | Māori Land Court district | Useful for reporting and validation |
| AGGREGATED | Aggregation flag (often 0 or 1) | Flag blocks that are aggregated or combined |
| BLOCK_AREA | Area value in dataset | Use as a quick check, confirm units and compare with Shape_Area |
| TOTAL_OWNE | Count of owners (summary) | Treat carefully, avoid publishing for small communities |
| TOTAL_SHAR | Count of shares (summary) | Treat carefully, avoid publishing for small communities |
| Mgmt_NAME | ManagementStructure_Name | Useful for governance context maps |
| Mgmt_DESC | ManagementStructure_Description | Useful for explaining management types |
| Mgmt_Count17 | Count of management structures in this dataset version | Quick indicator of complexity |
| PLAN_REF | Plan reference | Useful for record linkage and audits |
| MINUTE_BK_ | Minute book reference | Useful for Court record linkage work |
| TITLE_NOTI | Title notification reference | Record context linkage |
| TITLE_ORDE | Title order reference | Record context linkage |
| TITLE_ORD0 | Date field associated with orders (publisher dependent) | Use for sorting and checks |
| TITLE_ORD1 | Another title order reference field | Record context linkage |
| MLOL_URI | Link field to older Māori Land Online patterns | Treat as legacy, use Pātaka Whenua for current portal use |
| Shape_Area / Shape_Length | Geometry measures | Technical checks and QA |

Treat these as supporting context fields, not legal proof. If you are producing maps for formal processes, keep a clear note about sources and limitations.

## LINZ parcels and how they relate to Māori land blocks

### NZ Primary Parcels
NZ Primary Parcels is widely used as the base cadastral parcel layer for mapping and analysis. It provides current primary parcel polygons plus descriptive attributes such as legal description (appellation), purpose, and size.  
https://data.linz.govt.nz/layer/50772-nz-primary-parcels/

### NZ Primary Land Parcels
NZ Primary Land Parcels is provided for users who want land parcels separated from road parcels.  
https://data.linz.govt.nz/layer/50823-nz-primary-land-parcels/

Why this matters for whenua Māori:
- A Māori land block polygon can overlap multiple parcels.
- A single parcel can be associated with different record contexts over time.
- Use parcels as a spatial index, not as your only whenua definition.

## Practical workflow: link Māori land blocks to parcels

This is the simplest way to connect “block context” to “parcel index” so you can join in other layers.

1. Load your Māori land layer (MLC May 2017, council service, or your own maintained layer).
2. Load NZ Primary Parcels or NZ Primary Land Parcels from LINZ Data Service.
3. Run a spatial join:
   - QGIS: Join attributes by location (intersects)
   - ArcGIS Pro: Spatial Join (intersects)
4. Export a table of parcel IDs linked to each block, and store it as a related table for your internal whenua register.
5. Record:
   - source of the Māori land boundary
   - date checked
   - any known issues (indicative boundary, overlaps, missing area)

Practical tip: keep the linkage table as a living thing. Re-run it when parcels update or when you receive a better block boundary.

## Suggested schema for an internal whenua register

Create one internal table or layer for the blocks you actively work with. Keep it searchable, and keep sensitive details out unless you have a secure system and clear permission.

Suggested fields:
- block_name
- block_id (if available)
- mlc_district
- land_status
- rohe
- governance_type (trust, incorporation, reservation, other)
- governance_name
- parcels_linked (or a related table)
- boundary_source (MLC 2017, council service, digitised, survey plan, other)
- boundary_quality (exact, indicative, under review)
- last_checked_date
- sensitivity (public, internal, restricted)
- tikanga_notes
- contact_role (role only, not personal names unless required and protected)
- notes

## QGIS: build a hui-friendly whenua context map

1. Confirm the block record context
   - Search in Pātaka Whenua and confirm the block name and district.
2. Create a predictable project structure
   - 01_source
   - 02_working
   - 03_outputs
   - 04_metadata
3. Add imagery for context
   - LINZ Basemaps is usually the quickest.
   - https://basemaps.linz.govt.nz/
4. Add parcels and core context layers
   - From LINZ Data Service: parcels, roads, waterways, and topo.
   - https://data.linz.govt.nz/
5. Add planning and hazards only if they support the kaupapa
   - District plan zones and overlays (council)
   - Flood, coastal, landslide, liquefaction (council or national)
   - DOC public conservation land if relevant
6. Make the output readable for hui
   - One clear block boundary or an indicative marker
   - Minimal layers
   - Labels that can be read on paper
   - A note on the boundary source and checked date
7. Store metadata alongside the output
   - sources used
   - dates downloaded or checked
   - licensing notes
   - sensitivity notes
   - who approved distribution (if relevant)

## ArcGIS Online: add LINZ Basemaps imagery correctly

LINZ Basemaps provides a step by step guide for ArcGIS Online WMTS setup, including how to handle the API key parameter.  
https://basemaps.linz.govt.nz/docs/user-guide/use-in-esri-software/how-to-add-individual-linz-basemaps-layers-to-arcgis/

A practical tip from the LINZ guidance: create your own ArcGIS Online item for each imagery layer you use regularly, and share those items with your internal group so they are easy to reuse.

## Combining whenua with other datasets

Common join patterns that work well:
- Whenua + hazards: prioritise resilience work (flood, coastal erosion, landslide)
- Whenua + infrastructure: understand servicing constraints (water, wastewater, roads)
- Whenua + environment: support taiao planning (wetlands, rivers, land cover)
- Whenua + planning rules: understand zoning and overlays (district plan)
- Whenua + imagery: support kōrero and ground truth planning

Practical tip: keep “analysis layers” separate from “published layers”. Your working model can be complex. Your hui map should be simple.

## Privacy and safety basics for Māori land mapping

- Avoid storing owner lists in GIS unless you have a secure system, clear permission, and a clear purpose.
- Treat summary counts (owners, shares) carefully in small communities.
- Keep wāhi tapu and other sensitive layers in restricted datasets, not in general map projects.
- Do not publish exact site locations publicly unless there is a clear mandate and approval.

## Common issues and fixes

Block names do not match across sources
- Store the source name and the date you checked it.
- Keep alternative names as separate fields, not overwritten labels.

Boundaries treated as exact when they are not
- Label “indicative” in the layer name and in the map output notes.
- Keep a boundary quality field in your internal register.

Assuming one block equals one parcel
- Use spatial joins and keep a linkage table.

Out of date context tools
- Some tools and datasets lag updates. Use Pātaka Whenua and the Māori Land Court data page for current record context, and record your “checked date”.

## Useful links

Māori Land Court
- Pātaka Whenua portal: https://customer.service.maorilandcourt.govt.nz/
- Guidance to search the Court record: https://www.xn--morilandcourt-wqb.govt.nz/en/the-court-record/our-record
- Māori land data page: https://www.xn--morilandcourt-wqb.govt.nz/en/the-court-record/m%C4%81ori-land-data
- Find your land: https://www.xn--morilandcourt-wqb.govt.nz/en/maori-land/find-your-land

LINZ
- LINZ Data Service: https://data.linz.govt.nz/
- NZ Primary Parcels: https://data.linz.govt.nz/layer/50772-nz-primary-parcels/
- NZ Primary Land Parcels: https://data.linz.govt.nz/layer/50823-nz-primary-land-parcels/
- LINZ Basemaps: https://basemaps.linz.govt.nz/

Other
- Whenua Māori Visualisation Tool: https://whenuaviz.landcareresearch.co.nz/
- Tōku Whenua reports: https://www.tupu.nz/
- data.govt.nz request for MLC_2017_05 files: https://data.govt.nz/datasetrequest/show/1283
