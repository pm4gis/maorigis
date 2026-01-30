---
title: Geospatial Data Catalogue

description: A detailed catalogue of geospatial datasets relevant to Māori kaupapa in Aotearoa New Zealand, prioritising national sources and grouping regional datasets by region.
---
Last reviewed: 25 January 2026

## Purpose and scope

This page documents geospatial datasets from Aotearoa New Zealand that are relevant to Māori in a thematic sense. This includes datasets that explicitly reference Māori, iwi, hapū, marae, whenua Māori, Treaty settlements, customary rights, and cultural heritage, as well as datasets that are widely used in Māori decision making even when they are not labelled as Māori datasets. Examples include freshwater monitoring, land cover, coastal management, biodiversity, climate hazards, historic imagery, and survey plans.

The scope includes:
- National, regional, and local datasets
- Current and historical data
- Vector, raster, imagery, plans, and archival records
- Open, semi open, and request access datasets

Personal data is excluded. Highly sensitive cultural data may be referenced but should be treated as public with care or restricted.

## Cultural context and data responsibility

Many datasets listed here intersect with tikanga Māori, mātauranga Māori, and iwi and hapū authority. Even when data is technically open, its use may still require care. Locations of wāhi tapu, wāhi tūpuna, urupā, archaeological sites, and some mahinga kai areas should not be published at full precision without engagement and agreement from mana whenua.

Māori data sovereignty principles apply. Data about Māori should be used in ways that support Māori aspirations, acknowledge provenance, and avoid harm. Engagement with mana whenua is appropriate where maps or analysis will influence planning, investment, public narratives, or resource decisions.

## How to use this page

Use the catalogue tables to:
- Identify authoritative primary data sources
- Understand access methods and licences
- Assess sensitivity before publication
- Locate historical and supporting datasets that add context

Always confirm current licence terms and access conditions on the primary source landing page before use.

## National datasets

**Place names and cultural reference**

| Dataset | Provider | Coverage | Geometry | Access | Formats | Licence | Sensitivity | Notes |
|---|---|---|---|---|---|---|---|---|
| New Zealand Gazetteer of Place Names | New Zealand Geographic Board via LINZ | National | Points | API, download | CSV, GeoJSON | LINZ open terms | Public | Official place names including Māori and dual names. Canonical reference for naming. |
| Tangata Whenua Place Names | LINZ / NZGB | National | Points | Download | GIS formats | LINZ open terms | Public | Māori and Moriori place names published from NZMS mapping work. |
| Topographic place names | LINZ | National | Points, text | Download, services | GIS formats | LINZ open terms | Public | Includes many Māori names embedded in topo layers. |

**Whenua Māori and land tenure**

| Dataset | Provider | Coverage | Geometry | Access | Formats | Licence | Sensitivity | Notes |
|---|---|---|---|---|---|---|---|---|
| Māori Land Court land information | Te Kooti Whenua Māori | National | Tables, reports | Web tools, downloads | Reports | As stated | Public with care | Authoritative source for Māori land blocks, trusts, incorporations, and ownership context. |
| Māori land mapping tools | Te Kooti Whenua Māori | National | Mixed | Web mapping | Web | As stated | Public with care | Visualisation and reporting tools for Māori land. Spatial exports may be limited. |
| Primary parcels with Māori land indicators | LINZ | National | Polygons | Download, services | GIS formats | LINZ open terms | Public | Cadastre with attributes indicating Māori land status. Often used where dedicated Māori land layers are restricted. |
| Historic survey plans index | LINZ | National | Index with spatial reference | Download | Index tables, scanned plans | LINZ open terms | Public with care | Survey plans and field records containing early Māori land context and place names. |

**Imagery and elevation**

| Dataset | Provider | Coverage | Geometry | Access | Formats | Licence | Sensitivity | Notes |
|---|---|---|---|---|---|---|---|---|
| National aerial imagery | LINZ | National | Raster | Download, WMTS | GeoTIFF, tiles | LINZ open terms | Public | Core basemap for whenua, environmental, and planning work. |
| Historical aerial imagery | LINZ | National | Raster | Download | Imagery | LINZ open terms | Public with care | Supports land use change, coastal change, and historical analysis. |
| Retrolens | Crown Aerial Film Archive | National (varies by era) | Raster | Web app, download | Imagery | Published terms | Public with care | Historic aerial photos from 1930s onward. |
| LiDAR derived DEM | LINZ | National | Raster | Download, services | GeoTIFF | LINZ open terms | Public | High resolution elevation supporting flood, coastal, and whenua planning. |

**Environment, freshwater, and moana**

| Dataset | Provider | Coverage | Geometry | Access | Formats | Licence | Sensitivity | Notes |
|---|---|---|---|---|---|---|---|---|
| Land Cover Database | Manaaki Whenua | National | Raster, polygon | Portal, download | GIS formats | Stated per release | Public | Widely used for whenua development and environmental narratives. |
| Freshwater Ecosystems of NZ | Department of Conservation | National | Polygons, networks | Download | GIS formats | Open | Public | Supports freshwater values and restoration planning. |
| River Environment Classification | Ministry for the Environment | National | Lines | Download | GIS formats | Open | Public | River network attributes used in catchment analysis. |
| Water quality monitoring data | MfE and councils | National | Points, grids | Portal, API | CSV, GIS | Open | Public | Supports Te Mana o te Wai implementation. |
| Customary fisheries areas | MPI | National coastal | Polygons | Map services, download | GIS services | As stated | Public with care | Taiāpure, mātaitai, and other customary management areas. |

**Conservation and heritage**

| Dataset | Provider | Coverage | Geometry | Access | Formats | Licence | Sensitivity | Notes |
|---|---|---|---|---|---|---|---|---|
| Public conservation land | Department of Conservation | National | Polygons | Download | GIS formats | As stated | Public | Used alongside Treaty settlement and co management areas. |
| Protected areas | LINZ / DOC | National | Polygons | Download | GIS formats | LINZ open terms | Public | Includes reserves, parks, and protected sites. |
| Archaeological site records | NZ Archaeological Association | National | Points, polygons | Restricted | Web GIS | Controlled | Restricted | Includes many Māori sites. Access controlled due to sensitivity. |

## Regional datasets grouped by region

Regional datasets are typically published via council open data portals using ArcGIS Hub, Koordinates, or bespoke services. Availability and sensitivity vary by agreement with mana whenua.

**Northland**
- Marae locations
- Heritage and archaeological overlays
- Freshwater and coastal monitoring
- Statutory acknowledgement references where published

**Auckland**
- Sites and places of significance to mana whenua
- Marae locations
- Treaty settlement related planning overlays
- Freshwater management units and coastal layers

**Waikato**
- Iwi and Treaty settlement reference layers
- Waikato River co management context
- Freshwater management units
- Marae and cultural overlays

**Bay of Plenty**
- Statutory acknowledgement layers by iwi
- Marae locations
- Lakes and geothermal management layers
- Coastal customary areas

**Taranaki**
- Iwi group layers including marae and rohe references
- Statutory acknowledgements
- Environmental and coastal layers relevant to settlements

**Manawatū Whanganui**
- Freshwater management units
- Cultural values mapping supporting NPS FM
- River catchment datasets

**Hawke’s Bay and Gisborne**
- Cultural overlays developed through Treaty settlements
- Freshwater and coastal hazard data
- Marae locations

**Wellington**
- Iwi engagement overlays
- Cultural heritage sites
- Harbour and freshwater monitoring

**Canterbury**
- Ngāi Tahu related cultural layers
- Customary fisheries and coastal layers
- Freshwater management units

**Otago and Southland**
- Ngāi Tahu cultural context layers
- Freshwater and catchment datasets
- Coastal and hazard layers

## Thematic groupings

**Whenua Māori and tenure**
Māori land block information, cadastre, historic survey plans, and reporting tools that support governance, development, and succession planning.

**Rohe, iwi, and statutory areas**
Indicative rohe, iwi statistical areas, and statutory acknowledgement areas used for planning and engagement triggers.

**Te reo Māori place names**
Gazetteer data, tangata whenua place names, and iwi led naming initiatives that restore and normalise te reo in spatial products.

**Treaty settlement redress and co management**
Areas defined in settlement legislation, including conservation redress land, co governance zones, and statutory acknowledgements.

**Cultural heritage and archaeology**
Marae, pā, wāhi tapu, wāhi tūpuna, and archaeological records. High care required.

**Wai and moana management**
Freshwater and coastal datasets supporting customary rights, environmental restoration, and planning.

**Environmental context for kaupapa decisions**
Land cover, biodiversity, hazards, and climate related datasets that inform Māori led decisions.

**Historical evidence and change**
Historic imagery, survey plans, and archival mapping that support narratives of change and evidence based claims.

## Case studies and practice examples

**Historic imagery in Treaty research**
Historic aerial imagery and survey plans are routinely used to evidence land use change, river modification, and coastal erosion over long timeframes. These datasets support Treaty settlement research and environmental claims when combined with oral history.

**Freshwater co governance mapping**
River authorities and iwi environmental units use national river and water quality datasets alongside iwi values mapping to guide restoration investment and measure outcomes.

**Cultural mapping and place name restoration**
Iwi led mapping of traditional place names demonstrates how open basemap data can be enriched with mātauranga Māori under iwi governance.

**Māori land planning**
Combining Māori land information with soils, land cover, and elevation data supports sustainable development aligned with tikanga and long term aspirations.

## Guidance for respectful use

- Treat wāhi tapu, wāhi tūpuna, urupā, and archaeological data as sensitive even when accessible.
- Reduce precision or generalise geometry where public display could cause harm.
- Engage mana whenua early when work influences decisions or narratives.
- Avoid presenting rohe or iwi boundaries as definitive where they are indicative or overlapping.
- Attribute sources clearly and include retrieval dates.
- Make tikanga and data sovereignty visible in the documentation, not just footnotes.
- Document access conditions and respect request only datasets.
