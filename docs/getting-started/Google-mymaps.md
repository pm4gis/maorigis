---
title: Google My Maps
sidebar_position: 60
---

Google My Maps is one of the best beginner mapping tools because it is simple, visual, and collaborative. It lets you create a map in a browser, add points, lines, and areas, organise them into layers, and share the map with others. Treat it as a kōrero and communication tool, not a full GIS system.

My Maps: https://www.google.com/mymaps

## Where My Maps fits in a Māori GIS workflow

My Maps is useful when you need a map that supports people to talk, plan, and agree on next steps.

Common Māori GIS uses:
- Hui packs: simple maps that help whānau and trustees understand locations and options
- Early kaupapa planning: quick sketches of areas of interest, access routes, and key constraints
- Community engagement: a map that people can view easily, without GIS software
- Project coordination: sites to visit, tasks to complete, who is responsible
- Place based storytelling: simple layers with photos and short descriptions

When a My Maps draft becomes important, export it and rebuild it properly in QGIS or ArcGIS Pro, with clear permissions and metadata. See [QGIS](./qgis) and [ArcGIS Pro](./arcgis-pro).

## What My Maps is good for

- Quick maps to support kōrero
- Collaboration with non technical users
- Capturing approximate locations, photos, and notes
- Simple categorisation and styling of points by a spreadsheet column
- Sharing a map link, or embedding a map in a website

## What it is not suitable for

Do not use My Maps for:
- Authoritative boundaries or legal maps
- Long term storage of important datasets
- Sensitive locations, wāhi tapu, or restricted cultural information
- Complex spatial analysis, topology rules, or advanced editing
- High accuracy field capture workflows

## Key features you should know

| Feature | What it does | Why it helps |
|---|---|---|
| Layers (up to 10) | Organise your content into separate layers | Keep the map readable and easy to turn on and off |
| Style by category | Colour and icon groups using a data column | Make the map easy to understand for hui audiences |
| Data table | View and edit the layer attributes in a table | Quick cleanup without exporting to GIS |
| Import from tables | Import from Google Sheets, CSV, XLSX, KML, KMZ, GPX, photos | Fast way to load lots of features |
| Sharing and permissions | Share as view or edit, via Google Drive or My Maps | Lets whānau and project teams collaborate |
| Export | Export the map to KML/KMZ, or layers to CSV | Move work into GIS when it becomes important |
| Embed | Embed a public map in a website | Simple publishing for comms and updates |

## Create a map, name it, and choose a basemap

Create or open a map, then set a name and description. You can switch the basemap style from the “Base map” option in the left panel. Good options for Māori kaupapa maps are often “Satellite” for orientation or a plain basemap for readability. Keep the description short and include a checked date.

Help: https://support.google.com/mymaps/answer/3024454

## Add places, lines, and areas

You can add places by searching for a location or by placing a marker, and you can draw lines and polygons to show paths and areas.

Practical ideas:
- Add markers for meeting points, access gates, river crossings, and photo points
- Draw areas for “general focus zones” for discussion, not exact boundaries
- Draw lines for proposed walking routes, monitoring tracks, or access corridors

Limits matter if you are building a big map. A map can hold up to 10,000 lines, shapes, or places, and layers have their own limits. If your map is growing, split it into more than one map, or move to QGIS.  

Help:
- Add places: https://support.google.com/mymaps/answer/3024925
- Draw lines and shapes (includes size limits): https://support.google.com/mymaps/answer/3433053

## Use layers to keep the map clear

Treat layers like themes. A good beginner pattern is one layer per kaupapa.

Example layer set for a simple kaupapa map:
- Hui and logistics
- Access and routes
- Taiao observations (generalised)
- Risks and constraints
- Notes and photos

My Maps supports up to 10 layers. You can move features between layers and open the layer data table to edit attributes.  

Help: https://support.google.com/mymaps/answer/3024933

## Style the map so it reads well in hui

Styling makes the map usable for non GIS audiences.

Useful styles:
- Uniform style: one icon and colour for a whole layer
- Sequence of numbers: good for site visit order
- Individual styles: hand style a few key features
- Style by data column: group by categories like “Site type” or “Priority”

Help: https://support.google.com/mymaps/answer/3024933

### Custom icons for Māori kaupapa maps

Custom icons help you create a map legend that makes sense to your kaupapa, like distinct icons for:
- wāhi kōrero (generalised, not sensitive)
- access points
- photo points
- hazards
- monitoring sites

A practical approach:
- Use PNG icons with a transparent background
- Keep icons simple, high contrast, and readable on mobile
- Use one icon set consistently across your maps

Google Maps Help Community guidance describes using “Style”, then “More icons”, then “Custom icon” to upload an icon. If you use custom icons, expect colours to be “baked into” the image rather than recoloured by My Maps styles.

## Import data from a spreadsheet or Google Sheet

Import is the fastest way to build a useful map for beginners.

My Maps can import:
- Google Sheets, CSV, XLSX
- KML, KMZ, GPX
- Photos from Google Drive or Google Photos

File rules you should know:
- First row should have column titles
- Do not import more than 2,000 rows at once
- Unzipped KML and KMZ files can be up to 5 MB
- Other files can be up to 40 MB
- My Maps can locate features from latitude and longitude, addresses, place names, or a WKT geometry column named “WKT”

Help: https://support.google.com/mymaps/answer/3024836

### Geocoding addresses and place names

If your spreadsheet has an address or place name column, My Maps can place points based on that column during import.

Practical advice for Aotearoa:
- Use full addresses where possible (street number, road name, town)
- For rural areas, try a nearby road address or a recognised place name
- Keep an extra column for “Location notes” so people can describe access or uncertainty
- After import, spot check points by comparing to satellite imagery and local knowledge

If you need more control than address geocoding, add latitude and longitude columns, or use a WKT column.

Help: https://support.google.com/mymaps/answer/3024836

### A spreadsheet template that works well

| Column | Example | Notes |
|---|---|---|
| Name | Puna monitoring site 01 | Short and consistent |
| Category | Puna | Used for “Style by data column” |
| Address | State Highway 1, Kaikōura | Optional, for geocoding |
| Latitude | -42.40123 | Best for accuracy |
| Longitude | 173.68102 | Best for accuracy |
| Priority | High | Helps filtering and sorting |
| Description | Monthly water clarity check | Keep short |
| Access notes | Park at gate, walk 200 m | Useful for field visits |
| Sensitivity | Internal | Use this for sharing rules |
| Photo URL | https://... | Optional |

## Keep your map up to date without losing styling

If you maintain your data in a Google Sheet or CSV, My Maps can reimport and merge to update a layer while keeping styles, icons, and attachments for matching features.

My Maps supports options like:
- Replace all items
- Update matching items (keeps existing features and updates matches)
- Add more items
- Merge matching items

Help: https://support.google.com/mymaps/answer/3024836

## Use the data table for quick editing

The layer data table is an easy way for beginners to clean up names, categories, and notes. It is also useful for quick QA before sharing.

Help: https://support.google.com/mymaps/answer/3024933

## Collaboration and permissions

### Share view and edit access

You can share a map so others can view or edit it. My Maps sharing is linked to Google Drive sharing, so you can manage permissions from Drive as well.

Common roles:
- Can view: ideal for whānau and trustees who just ne
