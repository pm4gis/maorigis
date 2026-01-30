---
title: Taiao
sidebar_position: 12
---
Taiao data supports understanding of environmental systems connected to whenua. This includes land, water, ecosystems, and change over time. For many Māori organisations, taiao mapping supports kaitiakitanga, restoration planning, and long term stewardship.

This page focuses on practical taiao datasets, how to use them safely, and how to keep context so maps support kōrero rather than flatten it.

## Common taiao questions Māori organisations ask

- What is happening in our catchments and along our awa
- Where are erosion, flooding, or coastal risks likely to affect our whenua
- Where should we prioritise restoration (riparian, wetlands, ngahere)
- What has changed over time (land cover, water quality, shoreline change)
- Where are taonga species at risk and what should be protected
- What evidence supports funding, planning, or submissions

## Typical taiao datasets

These datasets usually come from councils, government agencies, or research providers.

| Theme | Examples | Common use |
|---|---|---|
| Water | rivers, lakes, catchments, water quality sites | catchment planning, monitoring, engagement |
| Coastal and marine | coastline, coastal hazards, marine habitats | resilience, restoration, planning |
| Land cover | LCDB style land cover, vegetation | restoration priorities, change over time |
| Soils and land use | soil types, LUC style data | suitability and constraints, erosion risk |
| Hazards | flood zones, landslide, erosion | risk screening and planning |
| Biodiversity | habitats, species observations (managed carefully) | protection and planning |
| Climate | rainfall, temperature, drought indicators | long term planning and resilience |

## Scale, accuracy, and uncertainty

Taiao layers are created at different scales and for different purposes. The same map can be useful for kōrero but not safe for site level decisions.

Practical rules:
- do not use regional model layers as if they are site surveys
- treat modelled outputs as indicators, not measurements
- record the scale and intended use in your metadata
- avoid “false precision” in labels and numbers

A good practice is a simple field called `confidence` or `use_note` that reminds future users what the layer is for.

## A simple schema for taiao layers

Minimum useful fields:
- `name` or `feature_name`
- `feature_type`
- `source_org`
- `source_ref` URL or document reference
- `data_date` or `published_date`
- `checked_date`
- `confidence` or `notes`
- `sensitivity` where relevant (especially for species and cultural monitoring)

## Integrating mātauranga Māori with taiao layers

Not all knowledge fits as points and polygons. Some knowledge is seasonal, relational, and context dependent.

Practical approaches that work better than forcing everything into geometry:
- keep narrative text linked by IDs, not embedded in public layers
- store tikanga notes and restrictions as fields
- separate public indicators from restricted detail
- publish summaries, keep raw observations controlled
- treat local kōrero as a source that needs provenance and review

## A practical taiao workflow that works

1. Define the kaupapa and the decision
- restoration priority, risk screening, monitoring plan, reporting, other

2. Choose the right base layers
- catchments and rivers
- land cover
- hazards
- access and infrastructure for planning

3. Add local monitoring and observations
- collect with a consistent schema
- include dates, who recorded it, and a review status

4. Build outputs for the audience
- governance: summary maps and trends
- kaitiaki: operational maps with actions and schedules
- hui: clear maps that support kōrero
- partners: extracts that include only what is needed

5. Review and store
- record sources and “checked dates”
- store working data separately from outputs

## Where to find taiao data in Aotearoa

Common public entry points:
- data.govt.nz catalogue: https://data.govt.nz/
- LINZ Data Service (base layers): https://data.linz.govt.nz/
- DOC open data: https://doc-deptconservation.opendata.arcgis.com/
- regional and local council open data portals (hazards, rivers, monitoring, planning layers)

Research and sector sources vary by kaupapa. If you are working on water, climate, and hazards, your local regional council is often the most practical source.

## Publishing taiao maps safely

Publishing taiao maps can cause harm if it exposes:
- exact locations of taonga species at risk
- sensitive sites linked to cultural practice
- monitoring results that could shame communities without context

Safer publishing patterns:
- generalise locations (grid, wider polygons, or summary areas)
- publish trends and categories, not raw values where that is sensitive
- include context text explaining uncertainty and purpose
- publish at a scale that reduces misuse

## Useful sources list

- data.govt.nz: https://data.govt.nz/
- LINZ: https://data.linz.govt.nz/
- LINZ Basemaps: https://basemaps.linz.govt.nz/
- DOC open data: https://doc-deptconservation.opendata.arcgis.com/
- Stats NZ boundaries: https://datafinder.stats.govt.nz/
