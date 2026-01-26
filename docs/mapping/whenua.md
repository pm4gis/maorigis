---
title: Whenua
sidebar_position: 11
---

Whenua is central to much Māori GIS work. Mapping whenua carries cultural, legal, historical, and relational meaning. It is not only a technical exercise. A good whenua workflow makes boundaries clear, names correct, and sharing safe.

This page focuses on practical ways to organise whenua layers so they can support governance, planning, and kaitiakitanga without creating confusion or risk.

## What whenua mapping is used for

Common uses:
- governance packs and planning discussions
- mapping land interests and responsibilities
- overlaying projects, assets, hazards, and planning rules
- engagement with whānau, hapū, iwi, and partners
- funding applications and reporting
- access planning and on the whenua mahi

## Not all boundaries mean the same thing

A boundary on a map can represent very different things. Treat the boundary type as part of the data, not as an assumption.

| Boundary type | What it usually represents | Common risk |
|---|---|---|
| Legal surveyed boundary | land title or parcel boundary | people assume it is current or complete when it is not |
| Administrative boundary | council, ward, zone, catchment | used as if it reflects Māori rohe |
| Cultural or rohe boundary | shared understandings of rohe | forced into one hard line without context |
| Project boundary | area of work or engagement | reused later as if it is a real boundary |
| Indicative boundary | approximate area | treated as exact and used for decisions |

Practical habit: add a field called `boundary_type` and always fill it.

## Core whenua datasets in Aotearoa

Common public datasets:
- LINZ parcels (NZ Primary Parcels): https://data.linz.govt.nz/
- LINZ basemaps and imagery: https://basemaps.linz.govt.nz/
- Māori Land Court record context (Pātaka Whenua): https://customer.service.maorilandcourt.govt.nz/
- council planning layers (district plan zones, overlays, designations)
- council hazards (flood, erosion, landslide, coastal)
- roads, rivers, and topo context layers (often from LINZ or councils)

Common organisational datasets:
- rohe boundaries (iwi and hapū)
- trust or incorporation planning boundaries
- land use blocks, leases, assets
- access tracks, gates, worksites

## Māori land blocks, parcels, and how they fit together

In practice you will use both:
- Māori land blocks for record context and governance kōrero
- parcels for consistent spatial joins to planning and other property based layers

A good pattern is:
- store blocks and parcels as separate layers
- create a linkage table where needed (block ID to parcel IDs)
- record what source you used and when you checked it

If you are building Māori land workflows, see the dedicated Māori land page in the data section of your guide.

## A simple schema that works

Keep whenua layers simple and clear. You can always add more later.

Recommended minimum fields:
- `id` stable internal ID
- `name` display name
- `boundary_type` legal, cultural, project, indicative
- `source` LINZ, council, Court, digitised, other
- `source_ref` URL, plan number, or document reference
- `checked_date` when it was last confirmed
- `status` draft, confirmed, under review, retired
- `sensitivity` public, internal, restricted, highly restricted
- `notes` short plain language notes

If you need to link whenua to governance structures, add:
- `governance_type` trust, incorporation, other
- `governance_name` (as appropriate)
- `contact_role` (role, not personal names unless required and protected)

## A practical workflow: build a whenua layer you can trust

1. Start with purpose
- Are you mapping for governance, planning, engagement, or field work

2. Choose the best boundary source
- parcel data for legal property context
- your organisation’s rohe layer for cultural context
- council planning layers for rules and overlays
- digitised boundaries from a plan only when needed, with clear notes

3. Validate with local knowledge
- names, places, and meaning should be reviewed by people who know the whenua

4. Store working data in a controlled format
- GeoPackage for QGIS
- geodatabase for ArcGIS
- avoid long term storage in loose shapefiles

5. Produce separate outputs for different audiences
- internal working dataset
- hui maps (PDF)
- partner extracts (minimum data)
- public outputs (generalised and approved)

6. Record decisions
- what was used, why, and what it should not be used for

## Whenua maps for hui

Hui maps work best when they are clear and calm.

Good hui map elements:
- one clear kaupapa per map
- familiar landmarks (roads, awa, coast)
- minimal layers, with readable labels
- a date and version
- a simple note describing boundary type and source

Avoid:
- heavy parcel labels everywhere
- too many overlays on one map
- showing sensitive sites or internal notes

## Sensitivity and permissions

Whenua information can be sensitive when it relates to:
- disputed boundaries or contested kōrero
- wāhi tapu and urupā context
- personal owner information
- internal governance decisions

Practical controls:
- separate sensitive layers from general layers
- control access to folders and online groups
- use “restricted” and “highly restricted” fields and enforce them
- publish only approved versions

## Useful sources

- LINZ Data Service: https://data.linz.govt.nz/
- LINZ Basemaps: https://basemaps.linz.govt.nz/
- Māori Land Court portal: https://customer.service.maorilandcourt.govt.nz/
- Stats NZ Datafinder: https://datafinder.stats.govt.nz/
- data.govt.nz catalogue: https://data.govt.nz/
