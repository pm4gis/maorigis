---
title: Place names
sidebar_position: 22
---

Place names, ingoa wāhi, are not just labels. In Aotearoa they often carry whakapapa, history, rights, responsibilities, and ongoing relationships between people and whenua. Good naming practice improves map quality, supports te reo Māori, and reduces confusion in governance, engagement, planning, and taiao mahi.

This page focuses on practical ways to use:
- the LINZ New Zealand Gazetteer and NZGB place name layers
- historical Māori land plans and related records to identify older names and places
- hapū and iwi local names, including how to capture, validate, store, and share them safely

## Quick starting points

Official names search and downloads (LINZ New Zealand Gazetteer):
- https://gazetteer.linz.govt.nz/
- https://gazetteer.linz.govt.nz/gaz.csv :contentReference[oaicite:1]{index=1}

LINZ guidance on Gazetteer use and downloads:
- https://www.linz.govt.nz/guidance/place-naming/how-use-new-zealand-gazetteer :contentReference[oaicite:2]{index=2}
- https://www.linz.govt.nz/products-services/place-names/place-names-new-zealand :contentReference[oaicite:3]{index=3}

LINZ Data Service NZGB layers (GIS ready):
- NZ Place Names (NZGB): https://data.linz.govt.nz/layer/51681-nz-place-names-nzgb/ :contentReference[oaicite:4]{index=4}
- NZ Place Names Lines (NZGB): https://data.linz.govt.nz/layer/52423-nz-place-names-lines-nzgb/ :contentReference[oaicite:5]{index=5}

## Why place names matter in Māori GIS

Place names often do at least one of these jobs:
- orientation and wayfinding for whānau and visitors
- evidence of occupation and use over time
- support for kōrero tuku iho, including events and pūrākau
- markers for rohe, customary areas, and shared boundaries
- practical references for on the whenua work (tracks, springs, ridges, bends in an awa)
- anchors for governance decision making (clear, consistent identification of places)

If names are wrong, missing macrons, or inconsistent, trust drops fast. If names are right and well sourced, maps become easier to use in hui and easier to defend in formal processes.

## The LINZ Gazetteer is more than a list

The LINZ New Zealand Gazetteer is the central public place name record for Aotearoa, maintained by the New Zealand Geographic Board Ngā Pou Taunaha o Aotearoa (NZGB). It includes official names and also records some unofficial names that appear on official mapping products. :contentReference[oaicite:6]{index=6}

Practical value in GIS:
- you can label maps with consistent spellings and macrons
- you can use stable identifiers (name_id) to avoid confusion when display names change
- you can support search and find workflows in web maps and dashboards
- you can store official names alongside local names without mixing them up

### Gazetteer CSV fields you should understand

The Gazetteer CSV header includes fields like:
- name_id (use this as the stable key)
- name
- status
- feat_type
- nzgb_ref
- land_district
- crd_north, crd_east, crd_projection, crd_datum
- crd_latitude, crd_longitude
- info_ref :contentReference[oaicite:7]{index=7}

Practical notes:
- Use name_id as your join key when you build internal name tables.
- Use status to filter what you present to different audiences.
- Use feat_type to separate rivers, mountains, localities, islands, and more.
- Use the coordinate fields that best fit your workflow. Latitude and longitude are often simplest for quick loading.

### NZGB place name layers in LINZ Data Service

If you want GIS layers rather than a CSV, the LINZ Data Service provides NZGB place name layers, including points and lines. These are useful for direct use in QGIS and ArcGIS Pro and for building web services. :contentReference[oaicite:8]{index=8}

## A naming taxonomy that works in Māori organisations

Naming becomes easier if you separate official naming from local and operational naming. Do not store all names in one field.

Recommended categories:
- official_name (Gazetteer or NZGB layer)
- official_alternative_names (if present)
- local_maori_name (hapū or iwi usage, with permission)
- local_english_name (common usage)
- historical_name (older name, include approximate date range where possible)
- operational_name (project labels, asset labels, working names)

Keep local and historical names in separate fields with strong provenance, so you can use them with confidence and avoid accidental publishing.

## Capturing local hapū and iwi place names

Local names are often held in kōrero, waiata, pepeha, and lived practice. They may not be in official systems, and some should not be made public. Treat local names as taonga and apply clear rules.

### A practical process for collecting local names

1. Prepare
- Define the kaupapa for collecting names.
- Decide who holds mana to approve what is stored and what is shared.
- Decide what you will not collect or publish, such as sensitive sites or names tied to restricted kōrero.

2. Collect
- Use hui, wānanga, field visits, and kōrero sessions.
- Use printed maps for marking and note taking.
- Capture pronunciation notes where appropriate.
- Capture the story carefully, but do not force detail that people do not want recorded.

3. Validate
- Bring drafts back to the group for checking.
- Confirm spelling, macrons, and correct association to the right place.
- Record different viewpoints as separate records if needed, with clear notes.

4. Store
- Store local names in a controlled layer or table.
- Store sensitivity and access rules with the data, not in someone’s memory.
- Keep attachments (audio, scans, photos) in a controlled repository linked by ID.

5. Share
- Share internal maps for kaitiaki and governance.
- Publish only what has explicit approval, at the right level of detail.

### Suggested schema for a local place names layer

Keep it simple and consistent:

- local_name_id (your internal unique ID)
- display_name (what you show on maps)
- official_name_id (Gazetteer name_id if applicable)
- official_name (snapshot for convenience)
- name_language (mi, en, mixed)
- name_type (local, historical, alternative, operational)
- feature_type (river, spring, ridge, pā site area, bay, flat, track, other)
- geometry_type (point, line, polygon)
- rohe_hapu (text or reference to a hapū layer)
- source_type (hui, kōrero, plan, minute book, archive, field)
- source_reference (URL, plan number, minute book ref, interview ref)
- source_date (when collected or when the source was created)
- contributor_role (kaitiaki, kaumātua, researcher, whānau, other)
- validation_status (draft, reviewed, confirmed, retired)
- sensitivity (public, internal, restricted, highly restricted)
- sharing_notes (plain language conditions)
- last_reviewed_date
- notes

If you store narratives, store them separately and link with IDs. This helps you control access and avoid accidental publishing.

## Using historical Māori land plans to identify older places and names

Historical plans and related records can be extremely valuable because they often contain:
- older place names for streams, ridges, bays, and flats
- names associated with block boundaries, pā sites, urupā references, tracks, landings, and settlements
- labels used at the time that may not appear in modern mapping products

These sources are also useful when whānau are trying to locate a place referenced in kōrero, but the name has shifted or been replaced over time.

### Where to find Māori land plans and related records

There is not one single place that holds everything. In practice you will use a combination.

Māori Land Court and Pātaka Whenua
- Pātaka Whenua holds the Court electronic record, including minutes and orders. :contentReference[oaicite:9]{index=9}
- The Pātaka Whenua guidance for document searching shows how minute book references can be used to find related documents. :contentReference[oaicite:10]{index=10}
- If you cannot find what you need digitally, the Court provides a pathway to view the physical record at district offices. :contentReference[oaicite:11]{index=11}

Archives New Zealand
- Archives holds copies of Māori Land Court minute books across long time periods and provides guidance for research. :contentReference[oaicite:12]{index=12}
- LINZ also notes that at Archives you can find plans and maps of Māori Land Court dealings and other historic land records. :contentReference[oaicite:13]{index=13}
- Archives also has guidance about whenua and Māori land research across their collections. :contentReference[oaicite:14]{index=14}

University of Auckland Māori Land Court Minute Books Index
- An index to minute books (1865 to 1910) that can help you locate relevant hearings and references when you are trying to find where a name appears. :contentReference[oaicite:15]{index=15}

LINZ Land Record Search and historic land records
- LINZ Land Record Search can be used to find titles, instruments, and surveys. :contentReference[oaicite:16]{index=16}
- LINZ guidance also covers historic land records and how to find them. :contentReference[oaicite:17]{index=17}
- LINZ guidance on searching Māori land records outlines what information helps, including block name and Māori Land Court district. :contentReference[oaicite:18]{index=18}

### A practical workflow: from kōrero to a georeferenced historical plan

1. Start with what you know
- Block name, area name, nearby river or maunga, and the Māori Land Court district if known.

2. Locate Court record references
- Use Pātaka Whenua to identify relevant minutes and orders. :contentReference[oaicite:19]{index=19}
- Record minute book references and any plan or survey references mentioned in the record.

3. Locate the plan or map
- Use Archives guidance and LINZ Land Record Search where appropriate, depending on what reference you have. :contentReference[oaicite:20]{index=20}
- If digital copies are not available, plan for viewing the physical record through the Māori Land Court district office process. :contentReference[oaicite:21]{index=21}

4. Scan or obtain a digital copy
- Keep the file name consistent, including the plan reference and date where known.
- Store the source reference in your metadata (where it came from).

5. Georeference in QGIS
- Load a modern basemap (LINZ Basemaps imagery is common).
- Add parcels, rivers, ridges, and roads for control points where possible.
- Use stable features for control points, such as confluences, coastlines, and major ridgelines. Avoid using fence lines or features that are likely to have moved.
- Save the georeferenced raster to a working folder and record the method.

6. Extract names and places
- Digitise points or lines for labelled features.
- Store the plan label exactly as written, then store your normalised form separately if needed (for macrons and modern spelling).
- Record the plan reference, page, and any notes about uncertainty.

7. Validate locally
- Bring the extracted names back to kaitiaki and kaumātua where appropriate.
- Confirm whether names are safe to share, and what level of detail is suitable.

### What to record when you extract names from plans

Do not treat a plan label as truth without context. Plans can contain misspellings, partial names, and colonial approximations. They can also be
