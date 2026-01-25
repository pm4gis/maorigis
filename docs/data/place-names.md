---
title: Place names
sidebar_position: 22
---

Place names are not just labels. In Aotearoa, place names often carry whakapapa, history, and ongoing relationships between people and whenua. Good place name practice improves map quality, supports te reo Māori, and reduces confusion in governance and engagement.

This page focuses on practical ways to use official place names, Māori names, and local naming in GIS.

## Why place names matter in Māori GIS

Common needs include:

- Labelling maps correctly for hui and reports
- Using macrons consistently
- Handling dual names and alternative names
- Aligning with official names used by councils and government
- Supporting kōrero about local history and identity

## Official place name sources

The main authoritative source for official place names is the New Zealand Gazetteer.

- NZ Gazetteer web: https://gazetteer.linz.govt.nz/
- Gazetteer CSV download: https://gazetteer.linz.govt.nz/gaz.csv

LINZ Data Service also provides place names layers.

- LINZ Data Service: https://data.linz.govt.nz/
Search for “place names” and choose the layer that fits your need.

## A practical taxonomy for place names in your GIS

Place name work becomes easier if you separate official naming from local and organisational naming.

Suggested categories:

- Official name (from Gazetteer or NZGB layers)
- Official alternative name (includes dual naming where present)
- Local Māori name used by hapū or iwi (when you have permission and context)
- Local English name in common use
- Historical name (add a date range if known)
- Internal operational name (projects, assets, working labels)

Keep these in separate fields. Do not mix them into one field.

## Suggested schema for a place names layer you maintain

If you create an internal place names layer that includes local names, keep it simple:

- display_name
- official_name
- alternative_names
- name_language (mi, en, mixed)
- name_type (official, dual, local, historical, operational)
- source
- source_link
- notes
- sensitivity (public, internal, restricted)
- last_checked_date

:::note
If a local name is shared by whānau or hapū for internal use, treat it as taonga and apply access controls.
:::

## Step by step: load the Gazetteer CSV into QGIS

1. Download the CSV
- Open https://gazetteer.linz.govt.nz/gaz.csv
- Save it into your `01_source` folder

2. Add it in QGIS
- Layer
- Add Layer
- Add Delimited Text Layer
- Select the CSV file

3. Confirm encoding
Set encoding to UTF-8 so macrons display correctly.

4. Set geometry fields
Choose the coordinate fields from the CSV and load as points.

5. Save as GeoPackage
- Right click the loaded layer
- Export
- Save Features As
- Format: GeoPackage
- CRS: NZTM2000 is a good default for most work in Aotearoa

## Step by step: label maps with macrons and dual names

1. Use a font that supports macrons
Most modern fonts do. If labels display incorrectly, change the label font.

2. Choose a default labelling rule
For many maps, use the official name field.

3. Add a dual name rule when appropriate
If a feature has an alternative name and it is suitable for your audience, show:
- official name on the first line
- alternative name on the second line

4. Keep the map audience in mind
For hui, you may use local Māori names where it is tika, but do this with permission and context.

## Step by step: use place names in ArcGIS Online

1. Add place name layers
You can add LINZ place name layers as hosted layers if you download them first, or add them as services where available.

2. Style labels for readability
Use a clear font, sufficient label halo, and label priority rules so names remain readable on imagery.

3. Keep public maps conservative
For public StoryMaps or web maps, default to official names unless you have permission and a clear purpose.

## Supporting sources for Māori context

These are not official place name authorities, but they can support kaupapa and engagement.

- Te Kāhui Māngai: https://www.tkm.govt.nz/
- Māori Maps: https://maorimaps.com/

Use these as supporting references, not as replacements for official naming.

## Where to go next

- NZ data sources: /docs/data/nz-data
- Māori land workflows: /docs/data/maori-land
- Sites and sensitivity controls: /docs/data/sites
