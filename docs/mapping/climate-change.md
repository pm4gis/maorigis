---
title: Climate change impacts

sidebar\_position: 40
---
Climate change (huringa āhuarangi) is already reshaping the taiao across Aotearoa. For iwi, hapū, and Māori organisations, GIS can support kaitiakitanga, planning for marae and papakāinga, protecting wāhi tapu and urupā, and sustaining mahinga kai and customary fisheries. This page is a practical guide to mapping climate impacts and using the best public data that is available.



## What impacts to map first



If you are starting out, map what matters most to people and places in your rohe, then add the hazards and climate scenarios.



Common Māori priorities to map include:



- Marae, papakāinga, urupā, wāhi tapu, pā sites, and access routes

- Whenua Māori blocks, land uses, forestry, and farm systems

- Awa, puna, repo, roto, moana, and mahinga kai areas

- Community assets: water supplies, kāinga, roads, bridges, wharves, health centres, and schools

- Taonga species and habitat, restoration sites, riparian planting, and wetlands



## Aotearoa climate impact themes



The table below links common impacts to practical datasets and mapping approaches.



| Impact theme | What changes | Useful datasets and tools | Typical GIS outputs |

|---|---|---|---|

| Sea level rise | Higher mean sea level, more frequent storm-tide flooding, rising groundwater in some areas | NZ SeaRise projections; NIWA extreme coastal flood maps; council coastal hazard layers; LiDAR DEM | Exposure maps for marae, urupā, roads, and low-lying papakāinga; adaptation pathway maps |

| Coastal erosion | Shoreline retreat and dune or cliff instability | Council coastal erosion layers; historic aerial imagery; local monitoring | Change maps through time; priority sites for protection or retreat |

| River flooding | More intense rainfall and higher flood peaks in many catchments | Council flood hazard maps; NIWA HIRDS rainfall estimates; LiDAR and catchments | Flood exposure maps; floor level advice support; evacuation access |

| Surface water flooding | Overland flow paths, ponding, stormwater capacity issues | Council overland flow layers; local stormwater models | Neighbourhood risk maps; stormwater upgrade priorities |

| Landslides | Slope failures after heavy rain, especially where land is steep and soils are weak | Council landslide susceptibility; DEM-derived slope and terrain | Landslide-prone slope maps; asset exposure and access isolation |

| Drought and water stress | Lower soil moisture, reduced flows, higher water temperatures | NIWA drought indicators and NZ Drought Index; LAWA water quantity; climate projections | Catchment stress dashboards; water restriction planning; riparian priority areas |

| Heat | Higher average temperatures, more hot days | MfE/NIWA climate projections; Our Atmosphere and Climate indicators | Heat exposure maps for kāinga and kaumātua facilities; urban tree cover priorities |

| Wildfire | Longer fire seasons and more extreme fire weather | Fire and Emergency guidance; NIWA fire weather; local fuel and exposure layers | Fire exposure maps for kāinga and forestry; access and water points |

| Ecosystems and taonga species | Shifts in habitat ranges, pests and disease pressure, marine heatwaves | DOC and council biodiversity layers; land cover; climate variables | Habitat change maps; restoration planning; monitoring site design |



## National climate data and mapping portals



These are the core national sources that are most useful for climate impact mapping.



| Source | What you get | Link |

|---|---|---|

| MfE climate projections hub | Guidance, map, and dashboards for updated NZ climate projections | https://environment.govt.nz/facts-and-science/climate-change/climate-change-projections/ |

| Climate Projections Data (MfE/NIWA) | GIS-ready downloads including NetCDF rasters and vector data | https://climatedata.environment.govt.nz/ |

| NZ SeaRise maps | Location specific relative sea-level rise projections for every 2 km of coast | https://searise.nz/maps/ |

| MfE coastal hazards guidance | National guidance for coastal hazards and climate change in planning | https://environment.govt.nz/publications/coastal-hazards-and-climate-change-guidance/ |

| NIWA extreme coastal flood maps | Nationwide coastal flood exposure scenarios plus data downloads | https://niwa.co.nz/hazards/coastal-hazards/extreme-coastal-flood-maps-aotearoa-new-zealand |

| NIWA HIRDS rainfall | High intensity rainfall depth-duration-frequency estimates | https://niwa.co.nz/climate-and-weather/high-intensity-rainfall-design-system-hirds |

| NIWA drought monitoring | NZ Drought Index maps and drought indicators | https://niwa.co.nz/hazards/weather-hazards/new-zealand-drought-monitor |

| LAWA | Water quality, quantity, air quality, estuary health, land cover | https://www.lawa.org.nz/ |

| National Climate Change Risk Assessment | National view of key risks and information gaps | https://environment.govt.nz/publications/national-climate-change-risk-assessment-for-new-zealand-main-report/ |

| Our Atmosphere and Climate 2023 | Environmental indicators and climate trends for Aotearoa | https://environment.govt.nz/publications/our-atmosphere-and-climate-2023/ |

| Natural Hazards Portal | Central catalogue of hazards and risk information | https://www.naturalhazardsportal.govt.nz/ |



## Basemap and elevation data for modelling



Most climate impact mapping needs a strong base of parcels, buildings, roads, rivers, and elevation.



| Dataset (LINZ Data Service) | Why it matters for climate work | Link |

|---|---|---|

| New Zealand LiDAR 1m DEM | Best national elevation surface for coastal and flood analysis | https://data.linz.govt.nz/layer/121859-new-zealand-lidar-1m-dem/ |

| New Zealand LiDAR 1m DEM Survey Index | Shows where LiDAR is available and its survey dates | https://data.linz.govt.nz/layer/121943-new-zealand-lidar-1m-dem-survey-index/ |

| NZ 8m Digital Elevation Model | National fallback DEM where LiDAR is not available | https://data.linz.govt.nz/layer/51768-nz-8m-digital-elevation-model-2012/ |

| NZ Building Outlines | Useful for exposure mapping and asset counts | https://data.linz.govt.nz/layer/101290-nz-building-outlines/ |

| NZ Primary Parcels | A clean parcels layer for joining property attributes and reporting | https://data.linz.govt.nz/layer/50772-nz-primary-parcels/ |



Tip: NZTM2000 (EPSG:2193) is the safest default projection for local analysis. Keep your hazard rasters and vectors in the same CRS before running spatial analysis.



## Local council hazard layers and viewers



Council datasets are often more detailed than national datasets. Many councils publish hazard layers, open data, or web viewers.



Examples to look at:



- Auckland Council Flood Viewer: https://experience.arcgis.com/experience/cbde7f2134404f4d90adce5396a0a630

- Greater Wellington flood hazard viewer: https://experience.arcgis.com/experience/9729c62312a849749455ec862169a76f

- Greater Wellington regional flood hazard assessment (context and methods): https://www.gw.govt.nz/your-region/emergency-and-hazard-management/flood-protection/flood-hazard-advice/regional-flood-hazard-assessment/

- Hawke’s Bay Hazard Portal: https://gis.hbrc.govt.nz/hazards/

- Christchurch coastal hazards viewer: https://gis.ccc.govt.nz/hazard-viewer/

- Environment Canterbury coastal hazard monitoring map: https://canterburymaps.govt.nz/map?webmap=117b9d3b75cb422da15b9d1b6698c8c3





## Using climate projections in GIS



MfE and NIWA provide the updated climate projections dataset in a format built for GIS. The Core Public Dataset includes NetCDF raster files and vector point data that can be joined to station locations. The dataset supports both baseline values and future change values, with time periods and warming levels.



Key places to start:



- Core Public Dataset: https://climatedata.environment.govt.nz/core-public-dataset.html

- Variable info: https://climatedata.environment.govt.nz/variable-info.html

- MfE projections map and dashboards are linked from: https://climatedata.environment.govt.nz/



Practical workflow:



1. Choose a variable that matches your kaupapa, such as rainfall (PR), hot days (TX25 or TX30), drought indicators (PED), or heavy rainfall (R99pVAL).

2. Decide a scenario and period to talk about, such as 2021–2040, 2041–2060, 2081–2100, or a warming level like 2°C.

3. In QGIS, add the NetCDF file as a raster layer, then select the variable band you need.

4. Clip the raster to your rohe boundary, then summarise values by catchment, land block, or community area.

5. Use simple categories for kōrero at hui, like low, medium, high change, and include the baseline period in your map notes.



## Sea level rise and coastal flooding



Two national sources work well together:



- NZ SeaRise gives location specific relative sea-level rise projections, including vertical land movement. Use it to understand how fast sea level rise may occur in your rohe. https://searise.nz/maps/

- NIWA extreme coastal flood maps give a nationwide view of 1% annual exceedance probability coastal flooding, plus sea-level rise increments up to 2 m. https://niwa.co.nz/hazards/coastal-hazards/extreme-coastal-flood-maps-aotearoa-new-zealand



How to use them together in GIS:



1. Use NZ SeaRise to pick an amount of relative sea-level rise to plan around, such as 0.3 m, 0.5 m, 1.0 m.

2. In the NIWA tool, view the matching increment to see potential flood exposure at a national scale.

3. If your council has higher resolution coastal hazard layers, use those for property scale decisions, and use NIWA for national comparisons and early scoping.

4. For local modelling, use LiDAR DEM data where available, and record the sea level rise scenario and storm-tide assumptions in your metadata.



Good practice references:



- MfE Coastal hazards and climate change guidance (2024): https://environment.govt.nz/publications/coastal-hazards-and-climate-change-guidance/

- NZ SeaRise programme context and resources: https://searise.nz/

- NIWA coastal flood mapping methodology report is linked from the NIWA coastal flood maps page.



## Rainfall extremes and flood design inputs



Flood risk is often driven by short, intense rainfall. NIWA HIRDS provides rainfall depth-duration-frequency tables for any location in Aotearoa.



Key links:



- HIRDS overview: https://niwa.co.nz/climate-and-weather/high-intensity-rainfall-design-system-hirds

- HIRDS tool: https://hirds.niwa.co.nz/

- HIRDS rainfall depth surfaces dataset (ArcGIS Hub): https://hub.arcgis.com/datasets/NIWA::hirds-v4-rainfall-depth-surfaces-new-zealand/about



Practical GIS uses:



- Compare rainfall depths for a 10 minute, 1 hour, and 24 hour event in your rohe.

- Use HIRDS outputs to inform flood models, culvert sizing, and stormwater upgrades.

- Map “design storm” rainfall gradients across a catchment to support prioritisation.



## Drought, low flows, and freshwater stress



Drought can affect drinking water, irrigation, mahinga kai, and the health of awa and roto.



Useful links:



- NZ Drought Monitor: https://niwa.co.nz/hazards/weather-hazards/new-zealand-drought-monitor

- Drought indicator maps: https://niwa.co.nz/climate-and-weather/nz-drought-indicator-products-and-information/drought-indicator-maps

- LAWA water quantity and river quality: https://www.lawa.org.nz/explore-data/



Practical GIS uses:



- Build a “catchment stress” map combining drought indicators, water takes, low flow sites, and key mahinga kai reaches.

- Track drought conditions over time for reporting to trustees and rūnanga.

- Overlay drought and land cover to target riparian planting, wetland restoration, and shade for waterways.



## Wildfire and heat exposure



Heat and wildfire risk can impact kāinga, forestry assets, and community safety.



Useful links:



- Fire and Emergency climate and wildfire context: https://www.fireandemergency.nz/about-us/our-commitments/our-climate-is-changing/

- NIWA fire weather portal: https://fireweather.niwa.co.nz/

- MfE climate projections to map hot days and extreme temperature: https://environment.govt.nz/facts-and-science/climate-change/climate-change-projections/



Practical GIS uses:



- Map hot days (TX25 or TX30) for settlement areas and compare future periods.

- Combine heat exposure with shade, tree cover, and social vulnerability indicators.

- Map wildfire exposure by combining vegetation, slope, access routes, water points, and nearby assets.



## Change detection with historic imagery



Climate impacts often show up as slow change: coastal erosion, river migration, wetland loss, and land use shifts. Historic imagery helps communities see change with their own eyes.



Useful links:



- Retrolens historic aerial imagery: https://retrolens.co.nz/

- LINZ aerial imagery overview: https://www.linz.govt.nz/products-services/data/types-linz-data/aerial-imagery



Simple workflow:



1. Use Retrolens to view older imagery at a site and note the photo year.

2. In GIS, add current aerial imagery (LINZ Basemaps or council imagery), then compare with digitised shorelines, riverbanks, or wetland extents from older years.

3. Store “year captured” as an attribute so you can make time sliders and change graphs later.



## A practical workflow for iwi and hapū projects



This pattern works for many climate adaptation projects, from a quick scan to detailed planning.



1. Build a rohe base layer set: boundaries, place names, whenua Māori blocks, parcels, buildings, roads, rivers, coast.

2. Add a kaupapa asset layer: marae, urupā, wāhi tapu, mahinga kai, taonga species sites, infrastructure.

3. Add hazard layers: coastal inundation, erosion, river flooding, landslides, drought, wildfire.

4. Add climate scenario layers: sea-level rise increments, projected rainfall change, hot days, drought indices.

5. Run exposure summaries: counts and lengths by asset type, by catchment, by land block, by community area.

6. Produce hui-ready maps: simple categories, clear legends, and narrative notes that match local kōrero.

7. Package outputs for sharing: PDF maps for governance, web maps for operational teams, and a data dictionary for future staff.



## Protecting sensitive information



A lot of Māori climate work touches sensitive locations and mātauranga Māori. GIS can support mana whakahaere if you design your data model and sharing rules early.



Practical approaches:



- Separate public layers from restricted layers. Use a “view layer” for sharing that removes sensitive attributes and generalises locations.

- Store permissions in attributes, such as “share_with”, “use_limitations”, and “contact_kaitiaki”.

- Keep local place names as a first-class dataset, with fields for preferred spelling, dialect, sources, and usage notes.

- Record provenance for every layer: source, date, licence, processing steps, and who to contact.



## Suggested starter layer pack



If you want a simple starter set for climate work, these are high value layers to collect for your rohe:



- Rohe boundaries and local community areas

- Marae and key community assets

- Whenua Māori blocks and/or land trust boundaries

- Parcels, buildings, roads, rivers, coastline

- LiDAR DEM where available, else NZ 8m DEM

- Council flood and coastal hazard layers

- NZ SeaRise projections summaries for your coast

- NIWA coastal flood scenarios for a quick national baseline

- HIRDS rainfall outputs for key catchments

- LAWA catchment water quality and quantity context



## Further reading and planning support



- National Climate Change Risk Assessment (MfE): https://environment.govt.nz/publications/national-climate-change-risk-assessment-for-new-zealand-main-report/

- Coastal hazards and climate change guidance (MfE): https://environment.govt.nz/publications/coastal-hazards-and-climate-change-guidance/

- Updated climate projections and dataset access (MfE/NIWA): https://climatedata.environment.govt.nz/

- NZ SeaRise resources and factsheets: https://searise.nz/resources/
