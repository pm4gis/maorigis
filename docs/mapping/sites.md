---
title: Sites
sidebar_position: 13
---
Site data refers to specific locations of interest. These may be cultural, operational, environmental, or project related. Sites are often mapped as points, but the meaning behind them is rarely simple.

This page focuses on how to model sites well, how to capture and store them safely, and how to move site data between field tools, desktop GIS, and sharing outputs.

## Types of sites Māori organisations commonly manage

Examples include:
- cultural and historical locations (managed carefully)
- project activity sites (planting, fencing, works)
- monitoring locations (water quality, biodiversity, soil)
- facilities and assets (buildings, pumps, sheds, tracks)
- engagement locations (hui venues, access points, meeting points)
- risk locations (erosion, slips, hazards, incidents)

Different site types often need different sensitivity and different audiences.

## A point is a reference, not the place

A point can represent:
- a true spot location (a gate, a photo point)
- the centre of an area (a wetland)
- an approximate location used for kōrero
- a placeholder until a site is confirmed

Practical habit: store a field that describes what the geometry represents.

Recommended fields:
- `location_type` exact, approximate, centre_of_area, generalised
- `accuracy_m` or `confidence` (simple values are fine)
- `status` draft, confirmed, under review, retired

## When to use points, lines, and polygons

| Geometry | Best for | Example |
|---|---|---|
| Point | single features, reference locations | gate, sampling spot, sign |
| Line | routes, edges, linear features | track, stream reach, fence line |
| Polygon | areas with footprint | wetland, site boundary, work area |

If a site is culturally sensitive, a polygon that represents a wider area can be safer than a precise point.

## A practical schema for site datasets

Minimum fields that support reuse:
- `site_id` stable internal ID
- `site_name` short display name
- `site_type` category (monitoring, asset, cultural, project, other)
- `description` short text
- `source` who provided it (role or organisation)
- `source_ref` link, doc reference, or kōrero session reference
- `captured_date`
- `checked_date`
- `status`
- `sensitivity` public, internal, restricted, highly restricted
- `sharing_notes` plain language conditions
- `owner_role` who is responsible for upkeep (role, not personal names)

If you collect photos and attachments:
- store them in a controlled folder or system
- link them with `site_id`
- avoid embedding sensitive photos in public layers

## Capturing sites in the field

Common field capture options:
- ArcGIS Field Maps and Survey123 (if you are in the ArcGIS stack)
- KoboToolbox (strong for forms)
- QField (if you are using QGIS offline)
- GPS devices exporting GPX

A reliable pattern:
1. capture in the field with a simple form
2. sync or export to a working dataset
3. review and clean in desktop GIS
4. publish only approved outputs

If you want site capture to stay consistent, make the form do the hard work:
- required fields for site type and status
- drop downs instead of free text where possible
- validation for dates and numbers
- a sensitivity field that is mandatory

## Managing sensitive sites

Not every site should be mapped widely, even internally.

Practical controls:
- keep sensitive sites in a separate dataset
- restrict access by role
- generalise locations for wider maps
- store only the minimum detail needed for the purpose
- do not publish sensitive site layers in public web maps

A simple rule: just because you can map it does not mean you should share it.

## Quality checks that prevent future problems

Minimum QA before sharing:
- duplicates removed or merged
- site IDs are unique
- categories are consistent (no spelling variations)
- geometry is reasonable (not in the ocean, not in the wrong rohe)
- restricted sites are not included in public outputs

## Moving sites between tools

Common formats:
- GeoPackage for QGIS working data
- file geodatabase for ArcGIS workflows
- CSV for simple point sharing (with latitude and longitude)
- KML or KMZ for viewing in Google Earth and quick sharing

If you are exporting for sharing, create a specific export with:
- only required fields
- sensitivity checked
- a clear file name including date and audience

## Useful sources for context layers

Sites become more useful when you can see them with context:
- basemaps and imagery: https://basemaps.linz.govt.nz/
- parcels and topo: https://data.linz.govt.nz/
- council planning and hazards: your local council open data portal
