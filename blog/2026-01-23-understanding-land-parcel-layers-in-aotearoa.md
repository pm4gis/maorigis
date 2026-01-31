---
title: "Understanding land and property layers in Aotearoa"
slug: "understanding-land-parcel-layers-aotearoa"
date: "2026-01-23"
authors: [duane]
tags:
  - land-parcels
  - property
  - linz
  - crosyl
  - crown-land
  - whenua
  - governance
---


One of the most common sources of confusion in Māori GIS work is land and property data. Many people assume there is one definitive parcel layer that shows ownership. In reality, there are several layers, each representing something slightly different and some even incomplete.



This post explains the main land and property polygon datasets available through LINZ, what they represent, and how they fit together. It also explains how to identify Crown owned land using the CROSYL dataset.



\## The starting point: cadastral parcels

The foundation of land information is the cadastral survey system. This defines legal land parcel boundaries based on surveyed titles.



The primary dataset is:

NZ Parcels

https://data.linz.govt.nz/layer/51279-nz-parcels/



NZ Parcels represent:

\- surveyed land parcels

\- legal title boundaries

\- the spatial extent of land titles



They do not include ownership names or values. They show geometry only.



\## What NZ Parcels does and does not tell you

NZ Parcels tells you:

\- where legal parcel boundaries are

\- how parcels fit together spatially



It does not tell you:

\- who owns the land

\- whether land is Māori freehold land

\- what the land is used for



That information comes from other systems.



\## Survey parcels and titles

Behind NZ Parcels sit survey datasets and title records. These are linked through identifiers but not always easy to join directly.



Relevant LINZ content:

\- Cadastral survey data

  https://www.linz.govt.nz/products-services/data/types-linz-data/cadastral-data

\- Landonline system (not public GIS data)



For most GIS work, NZ Parcels is the correct spatial layer to use.



\## Māori land considerations

Māori land status is not stored in the NZ Parcels dataset itself. Māori land information comes from Māori Land Court records and separate datasets.



This separation is important:

\- parcel geometry is neutral

\- land status is legal and cultural



Never assume parcel geometry implies ownership type.



\## Property rating and valuation layers

Councils often publish rating unit or valuation layers. These are not cadastral parcels.



They represent:

\- rating units

\- aggregated properties

\- administrative groupings



They may:

\- combine multiple parcels

\- split parcels differently

\- change more often



Use them carefully and do not treat them as legal boundaries.



\## Crown land and the CROSYL dataset

To identify land owned by the Crown, LINZ publishes the CROSYL dataset.



CROSYL stands for Crown Owned Spatial Layer.



Dataset:

Crown Owned Property (CROSYL)

https://data.linz.govt.nz/layer/101290-crown-owned-property-crosyl/



CROSYL represents:

\- parcels believed to be owned by the Crown

\- land administered by government agencies



It is compiled from multiple sources and should be treated as indicative.



\## Using CROSYL correctly

CROSYL is useful for:

\- understanding Crown footprint in a rohe

\- supporting planning and engagement

\- identifying potential overlap with Māori land interests



It is not:

\- a definitive legal record

\- always fully up to date



Always check metadata and disclaimers.



\## How these layers fit together

A practical GIS stack often looks like this:

\- NZ Parcels for legal geometry

\- Māori land datasets for status

\- CROSYL for Crown ownership context

\- Council layers for planning overlays

\- Historical imagery for context



Each layer answers a different question.



\## Using these layers in GIS tools

All these datasets can be added to QGIS or ArcGIS.



Sources:

\- LINZ Data Service

  https://data.linz.govt.nz

\- LINZ Basemaps

  https://basemaps.linz.govt.nz



Use NZTM2000 projection for analysis and editing.



\## Common mistakes to avoid

\- assuming one layer answers all questions

\- mixing rating units with parcels

\- treating CROSYL as definitive ownership

\- publishing parcel data without context



Parcel data carries weight. Treat it carefully.



\## Final thoughts

Understanding land layers is as much about governance as it is about GIS. Each dataset reflects a system, a purpose, and a set of assumptions.



For Māori GIS work, clarity about what a layer does and does not represent is just as important as the map itself.

