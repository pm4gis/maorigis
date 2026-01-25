---
title: Google Earth
sidebar_position: 3
---

Google Earth is a free mapping and visualisation tool that lets you explore the world using satellite imagery, aerial photos, terrain, and simple map layers. It is best understood as a visual exploration and communication tool rather than a full GIS application.

For many iwi and hapū contexts, Google Earth is a useful starting point because it feels familiar, loads fast, and works well for kōrero.

## Download and versions

Google Earth web:
- https://earth.google.com/web/

Google Earth Pro desktop:
- https://www.google.com/earth/versions/

Google Earth mobile:
- Search for “Google Earth” in your phone app store

For most practical work on a computer, Google Earth Pro is the most useful option.

## He aha te painga, why Google Earth is useful

Google Earth is commonly used for:

- Exploring whenua and landscapes in 3D
- Getting fast visual context for a rohe
- Supporting kōrero in hui and workshops
- Viewing change over time using historical imagery
- Creating simple overlays and screenshots for reports
- Sharing locations with people unfamiliar with GIS

## What Google Earth is not

Google Earth is not:

- A full GIS analysis tool
- An authoritative source of boundaries
- A data management system
- A safe place to store sensitive or restricted data

Imagery can look precise but it can be out of date or offset. Treat it as context, not truth on its own.

## Core tasks you will actually use

Common tasks include:

- Search and navigate to a place
- Add placemarks for locations of interest
- Draw paths and polygons to describe an area
- Measure distance and area
- View historical imagery
- Save and share KML or KMZ files
- Take screenshots for hui packs

## Step by step, create a simple hui overlay

1. Open Google Earth Pro

2. Navigate to your area
- Search for the place name
- Use tilt and rotate if 3D terrain helps explain the landscape

3. Add a polygon for an area of interest
- Add
- Polygon
- Name it clearly
- Draw the boundary
- Set a simple style so it is visible

4. Add a placemark for a key location
- Add
- Placemark
- Name it clearly
- Keep the description brief

5. Save as KMZ
- Right click the folder in the Places panel
- Save Place As
- Choose KMZ
- Store it in your project folder

## Step by step, bring Google Earth work into QGIS

Use this when early kōrero becomes a GIS task.

1. Save your Google Earth content as KML or KMZ

2. In QGIS
- Layer
- Add Layer
- Add Vector Layer
- Select the KML or KMZ file and load it

3. Export to GeoPackage for longer term use
- Right click the layer
- Export
- Save Features As
- Format: GeoPackage

4. Add proper context layers
- LINZ Basemaps for imagery: https://basemaps.linz.govt.nz/
- LINZ Data Service for reference layers: https://data.linz.govt.nz/

## Using Google Earth with Māori data

Google Earth is often used to support kōrero about place, whakapapa, history, and landscape. It can be very effective for this, but be careful with what you capture and share.

Consider:

- Whether sites or locations are sensitive
- Who will see the screen during a hui
- Who will receive the KMZ or screenshots afterwards
- Whether a map implies permission that has not been agreed
- Whether the overlay should be generalised

:::note
Just because imagery is publicly visible does not mean it is appropriate to use or share in all contexts. Mana, trust, and tikanga still apply.
:::

## File types and sharing

Google Earth uses:

- KML and KMZ for points, lines, and areas
- Image overlays
- Simple descriptions and links

KMZ files are easy to forward. If content is sensitive, do not email it widely. Prefer screenshots with reduced detail or a simplified boundary.

## Where this fits in the guide

Google Earth is a strong entry point for spatial thinking and early kōrero. When you need structure, accuracy, and repeatable work, move the content into QGIS or ArcGIS Pro and manage it properly.
