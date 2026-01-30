---
title: Publishing maps
---
Publishing maps is about turning internal GIS work into something other people can understand and use. In Māori contexts, publishing also involves decisions about mana, access, responsibility, and long term control of information.

This page focuses on practical ways to publish maps while keeping control of data and intent.

## What publishing a map actually means

Publishing does not always mean making something public on the internet. It can include:
- A PDF map for a board paper
- A static image for a report or funding application
- A private web map shared only with staff, trustees, or partners
- A public facing map with limited detail and limited attributes
- A map pack for a hui, workshop, or engagement process

The key question is not what tool you use. It is who the map is for, what decisions it supports, and what happens if the map is copied or shared wider than intended.

## Start with intent and audience

Write a one sentence purpose statement before you publish anything. Example: “This map supports governance discussion about catchment priorities. It is not an operational map.”

Then check:
- Who is the intended audience
- What decisions or kōrero it supports
- Whether the map will be used once, or will be referenced for years
- Whether the map could be misunderstood outside its kaupapa

## Publishing options

Most publishing approaches fit into these types:
- Static maps exported from QGIS or ArcGIS Pro
- Web maps hosted in a platform such as ArcGIS Online, ArcGIS Enterprise, GeoServer, or a council portal
- Maps embedded in reports, presentations, and briefing packs
- Narrative publishing using StoryMaps or a documentation site
- Controlled distribution of data extracts to specific people, under agreed conditions

Each option has different trade offs in reach, control, and risk.

## Static maps

Static maps are usually the safest and most predictable option.

Good uses include:
- Hui packs
- Board and trustee papers
- Consultation material
- Reports and funding applications
- Maps that may be quoted later and need a stable reference

Benefits:
- You control exactly what is shown
- There is no live data connection
- There is a clear “this is what we published” record
- The audience cannot easily extract the underlying dataset

Good practice:
- Include a clear title and purpose
- Include date of creation and data “as at” date
- Include a short source and licence note
- Include scale, north arrow, and legend where relevant
- Generalise or aggregate sensitive layers
- Avoid including attribute tables or identifiers that are not needed

A practical default for sensitive kaupapa is to publish a static map first, then only move to interactive maps if there is a clear need.

## Web maps

Web maps allow people to pan, zoom, and explore information themselves. They can be effective when:
- Multiple people need to view the same information
- Context layers help explain a situation
- Updates are expected over time
- People need to query a feature, but only a limited set of fields

Risks to manage:
- Layers can sometimes be downloaded
- Sharing settings can change accidentally
- Attribute tables may expose information you did not intend to publish
- The map may be reused outside its original kaupapa
- “Screenshot sharing” can spread content even when access is controlled

Controls to apply in most web map platforms:
- Use private groups rather than public sharing
- Limit who can share, copy, or export
- Use separate published views to hide fields and features
- Remove attachments, photos, and notes unless necessary
- Disable pop ups or show only safe, pre approved fields
- Set an expiry or review date for access

A useful pattern is to publish three layers, not one:
- Source layer (internal, not shared)
- Publishing view (limited fields, limited features)
- Presentation layer (symbology and labels only)

## Choosing what level of detail to show

Maps do not need to show everything you know. A simple structure that works in many Māori contexts is to separate outputs by level:

- Governance maps: high level context, low detail, suitable for packs and public facing material
- Operational maps: more detail for staff and project delivery, shared on a need to know basis
- Technical datasets: raw or near raw data that stays internal or is shared only by agreement

This supports kōrero while reducing the chance of harm from publishing precise locations or sensitive attributes.

## Sensitive places and culturally significant information

Treat these as high risk unless you have clear agreement to publish:
- Wāhi tapu, wāhi tūpuna, urupā
- Archaeological site locations
- Sensitive mahinga kai areas
- Locations that enable trespass, theft, or damage
- Information that could trigger conflict between groups or undermine trust

Safer alternatives:
- Show an area of interest rather than precise points
- Use buffers or grid squares rather than exact geometry
- Replace locations with counts by catchment or management unit
- Move detail into a controlled internal map and publish only the summary

## Attribution, licensing, and provenance

Every published map should include a short provenance note, even if it is internal. Keep it short and factual:
- Data sources and providers
- Data “as at” date
- Licence statements where relevant
- Any transformations, generalisation, or exclusions applied

If the map includes mātauranga Māori or iwi supplied data, add a clear statement about governance and limits on reuse. If you have an agreed wording, use that wording consistently.

## Map quality and readability

A published map is a communication product. Poor design can create risk because people fill in the gaps.

Minimum standards that help:
- Clear title that states purpose, not just theme
- Legend that matches what the audience needs
- Labels that are readable and not overloaded
- Te reo Māori names spelled correctly, with macrons where used
- Colour choices that remain readable when printed
- Avoid relying on colour alone for meaning
- A short “how to read this map” note when the audience is not GIS trained

## Versioning and review

Maps live longer than you expect. Add a review point:
- Include a version number on the map and in the filename
- Keep a simple changelog for web maps
- Record who approved the map for publishing
- Set a “review by” date for web maps that might remain accessible

## A simple publishing checklist

Before publishing any map, check:
- Who is the audience
- What decision or kōrero it supports
- Whether the data is appropriate for that audience
- Whether the output could be reused out of context
- Whether sensitive locations or attributes are exposed
- Whether a simpler map would still achieve the purpose
- Whether you have recorded sources, dates, and version
- Whether you have approval for publication where needed

If you are unsure, choose the more cautious option and publish less detail.

## Useful tools

Common tools that work well:
- QGIS print layouts for PDFs
- ArcGIS Pro layouts for formal outputs
- Web map platforms for controlled sharing, with published views and field limits
- Documentation sites (including Docusaurus) for stable reference pages and context

## Next steps

- Sharing controls and access management: [Sharing and access](/docs/publishing/sharing)
- StoryMaps and narrative publishing: [StoryMaps](/docs/publishing/storymaps)
