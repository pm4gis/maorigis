---
title: Getting Started
sidebar\_position: 1
---

This page is a practical overview of common GIS tools used in Aotearoa New Zealand, with a Māori audience in mind. It is not an endorsement. The aim is to help you choose tools that fit your kaupapa, your people, your budget, your IT constraints, and the level of care required for the data.

## Most teams use a tool chain, not one tool

Māori GIS work often moves through stages, and different tools suit different stages.

- Kōrero and early scoping: simple, visual tools that help people talk and orient
- Data preparation and analysis: desktop GIS where you can work carefully and repeatably
- Sharing and decision support: web maps, dashboards, and story style outputs
- Field capture: mobile tools and forms, often offline
- Archiving and reuse: clean formats, clear metadata, sensible folder structure

A common, practical chain looks like this:
- QGIS for cleaning, analysis, and offline work
- ArcGIS Pro when you need compatibility with councils and Crown partners
- ArcGIS Online for sharing web maps, apps, and dashboards
- StoryMaps for narrative outputs
- Field Maps, Survey123, or KoboToolbox for field capture
- Google Earth Pro for quick kōrero and visualisation

## Choosing tools based on kaupapa and risk

Tools are easy to change. Trust is hard to rebuild. Start by matching tools to the kaupapa and the sensitivity of the information.

Useful checks:
- Who is the audience for the output, and where will it be viewed
- What happens if this data is shared wider than intended
- What needs to stay offline or restricted
- Who holds mana to approve sharing and publishing
- What skills exist in your team now, and what is realistic to learn this year

If you are unsure, keep sensitive layers offline, publish generalised outputs, and keep a clear record of decisions.

## Desktop GIS for “make it right” work

### QGIS
QGIS is free and open source. It suits teams that want flexibility, offline capability, and control over where files live.

Good for:
- cleaning and preparing data from many sources
- whenua, taiao, and planning overlays
- repeatable analysis workflows
- producing clear printed maps for hui and governance packs

Key considerations:
- access control is mostly your folder and file permissions, not built into the tool
- sharing is often file based, so version control matters
- set standards early for project folders, naming, and metadata

Download:
- https://qgis.org/download/

Read more: [QGIS](./qgis)

### ArcGIS Pro
ArcGIS Pro is a licensed desktop GIS used widely by councils and many agencies. It is often useful when partners expect ArcGIS formats or enterprise patterns.

Good for:
- compatibility with ArcGIS environments used by partners
- geodatabase workflows and structured editing
- producing formal layouts for reporting
- preparing layers for ArcGIS Online sharing

Key considerations:
- licensing and accounts need active management
- workflows can depend on organisational IT settings
- plan for handover so knowledge does not sit with one person

Download:
- https://pro.arcgis.com/en/pro-app/latest/get-started/download-arcgis-pro.htm

Read more: [ArcGIS Pro](./arcgis-pro)

## Web sharing, decision support, and storytelling

### ArcGIS Online
ArcGIS Online is a web platform for maps, layers, apps, dashboards, and sharing with controlled access.

Good for:
- governance viewing maps and dashboards
- community engagement where interactivity helps
- sharing a single “source of truth” layer for a project team
- controlled access via groups and roles

Key considerations:
- oversharing is easy if settings are not checked every time
- treat “anyone with the link” as public in practice
- keep sensitive layers out of public map items and public groups
- set a publishing checklist and use a second reviewer

Access:
- https://www.esri.com/en-us/arcgis/products/arcgis-online/overview

Read more: [ArcGIS Online](./arcgis-online)

### ArcGIS StoryMaps
StoryMaps is for narrative outputs that combine maps, images, text, and media. It can work well for kaupapa Māori contexts where you need explanation and context, not just a map.

Good for:
- sharing kōrero with maps in a controlled way
- project updates with clear visuals
- education and communication for whānau and partners
- reporting outcomes with maps and images together

Key considerations:
- treat StoryMaps like publishing, not like internal drafting
- assume content can be copied or screenshotted
- do not embed restricted layers in a public story
- add clear source notes and “checked date” statements

Access:
- https://www.esri.com/en-us/arcgis/products/arcgis-storymaps/overview

Read more: [ArcGIS StoryMaps](./arcgis-storymaps)

## Field capture and forms

### ArcGIS Field Maps
Field Maps is a mobile app for viewing maps, collecting and editing features, and working offline when configured.

Good for:
- capturing points, lines, and polygons in the field
- inspections and asset checks
- tracking work completed and what is next
- offline field workflows with sync when back in coverage

Key considerations:
- plan offline areas and sync rules before you go to the field
- decide what fields are required, and keep forms short
- avoid collecting personal information unless you have clear permission and a secure system
- test a full field workflow with two devices before rollout

Downloads:
- https://www.esri.com/en-us/arcgis/products/arcgis-field-maps/downloads

Read more: [ArcGIS Field Maps](./arcgis-fieldmaps)

### ArcGIS Survey123
Survey123 is form centric. It is often used when data quality and consistency matter and you want a guided form.

Good for:
- structured surveys and monitoring forms
- repeatable site assessments
- capturing photos and notes in a consistent way
- offline data capture with later upload

Key considerations:
- define validation rules so you do not collect rubbish data
- include “who collected” and “checked date” fields for provenance
- decide your sensitivity model early, especially for site and cultural information
- keep a clear process for review before publishing outputs

Downloads:
- https://www.esri.com/en-us/arcgis/products/arcgis-survey123/downloads

Read more: [ArcGIS Survey123](./arcgis-survey123)

### KoboToolbox
KoboToolbox is widely used for surveys and monitoring, including offline field collection. It can suit Māori organisations that want a strong survey workflow without needing the ArcGIS stack.

Good for:
- surveys and monitoring programmes
- offline field capture
- community led data collection with clear forms

Key considerations:
- choose hosting options that match your governance and privacy needs
- define who can see raw submissions and attachments
- plan how you will bring data into GIS cleanly (CSV, GeoJSON, other)
- design consent language and restrictions as part of the form

Access:
- https://www.kobotoolbox.org/

Read more: [KoboToolbox](./kobotoolbox)

## Simple tools for kōrero and quick maps

### Google Earth Pro
Google Earth Pro is useful for quick visualisation and kōrero, especially when people recognise the imagery and terrain view.

Good for:
- early scoping and orientation
- screenshots for packs and slides
- simple overlays for discussion

Key considerations:
- it is not a full GIS for data management or analysis
- keep your “official” datasets in GIS formats, then export simple views when needed
- use KML or KMZ for sharing lightweight overlays, and keep a clear “checked date” note

Download:
- https://www.google.com/earth/about/versions/

Read more: [Google Earth](./google-earth)

### Google My Maps
My Maps is a simple web tool for drawing points and shapes and sharing a basic map.

Good for:
- quick internal planning maps
- small project maps that do not need analysis
- early engagement where simplicity matters

Key considerations:
- treat it as light and temporary, not as an authoritative store
- avoid using it for restricted sites or sensitive kōrero
- plan your export path so you can move data into QGIS or ArcGIS when needed

Start here:
- https://www.google.com/maps/about/mymaps/

Read more: [Google My Maps](./Google-mymaps)

## Formats that help you move between tools

These formats show up constantly. Choosing the right one reduces pain.

- GeoPackage (GPKG): strong default for QGIS, portable, one file, good for long term storage
- File geodatabase (GDB): common in ArcGIS workflows, good for structured datasets
- Shapefile: widely compatible but limited and easy to break, use only when required
- CSV: good for tables and simple point data, needs clear coordinate fields
- KML or KMZ: useful for Google Earth and simple sharing, not ideal for complex data management

Practical tip: keep a clean “working” dataset and a separate “shared outputs” dataset. Do not publish straight from your working layers.

## Download and learning links

- QGIS download: https://qgis.org/download/
- ArcGIS Pro download guidance: https://pro.arcgis.com/en/pro-app/latest/get-started/download-arcgis-pro.htm
- ArcGIS Online overview: https://www.esri.com/en-us/arcgis/products/arcgis-online/overview
- ArcGIS StoryMaps overview: https://www.esri.com/en-us/arcgis/products/arcgis-storymaps/overview
- ArcGIS Field Maps downloads: https://www.esri.com/en-us/arcgis/products/arcgis-field-maps/downloads
- ArcGIS Survey123 downloads: https://www.esri.com/en-us/arcgis/products/arcgis-survey123/downloads
- Google Earth Pro versions and download: https://www.google.com/earth/about/versions/
- Google My Maps: https://www.google.com/maps/about/mymaps/
- KoboToolbox: https://www.kobotoolbox.org/

## A short note on mana and responsibility

Tools do not carry mana. People and relationships do. Good practice is visible in the work.

- keep consent and permissions explicit
- document assumptions, sources, and checked dates
- separate restricted layers from general project files
- publish only what has the right approvals
- return value to whānau and kaitiaki, not only to reporting requirements
