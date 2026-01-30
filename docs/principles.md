---
title: Principles and responsibilities
sidebar_label: Principles
sidebar_position: 2

---

This section sets the foundation for the rest of the guide. It focuses on practical judgement and responsibility rather than theory. The aim is to support decisions that protect people, relationships, and information while still getting useful work done.

## Begin with purpose

Before opening any GIS tool, be clear about why you are doing the work. A short purpose statement prevents wasted effort and reduces risk.

At a minimum, be able to state:
- what decision, kōrero, or outcome this work supports
- who the work is for
- what will be produced (map, dataset, layer, report, dashboard, story, print pack)
- what will not be produced (for example, no public web layer, no downloadable dataset)

A practical habit is to write a one paragraph “purpose and boundaries” note in the project folder and copy it into the item description if you publish anything online.

## Relationships are part of the workflow

In Māori contexts, GIS work exists inside relationships. Trust, mana, and accountability matter as much as technical accuracy. A technically correct map can still cause harm if it is shared without permission, lacks context, or is interpreted outside the kaupapa.

Good practice includes:
- confirming who has authority to request, approve, and publish
- agreeing the review process early (who needs to see drafts, and when)
- sharing drafts early, before outputs are treated as final
- keeping notes of decisions, permissions, and assumptions
- returning value to the people who contributed kōrero or knowledge, not only to the organisation

If you are unsure, stop and check. Fixing a relationship after a map has been shared is usually harder than fixing a dataset.

## Understand what is sensitive and why

Not all sensitive information is sensitive for the same reason. The reason matters, because it changes what “safe sharing” looks like.

Common reasons information may require care include:
- wāhi tapu, kōiwi, urupā, or cultural practice
- taonga species, mahinga kai, or resources at risk
- locations that increase theft, damage, or unwanted attention
- identifying individuals, whānau, or private land interests
- information shared in confidence or for a specific purpose only
- contested boundaries or kōrero where publishing could inflame conflict
- material that could be misused in planning, enforcement, or public debate

Do not assume information is safe to reuse because it exists somewhere else. Context and intent still matter, and “publicly available” does not mean “ethically safe to republish”.

## Decide access early

A common source of problems is building a dataset first and deciding access later. Access needs to be designed into the workflow.

Before you begin, decide:
- who can view
- who can edit
- who can download or copy
- who can share further
- whether external partners are involved
- how long the access should last

If you are using ArcGIS Online, treat sharing settings as a high risk step.
If you are using QGIS and files, treat folder permissions, file copies, and email attachments as high risk steps.

A useful default is role based access rather than person based access, such as “kaitiaki group”, “governance group”, “project team”, “public”.

## Use the least exposure approach

A safe default is to expose the minimum information required to achieve the purpose.

Examples:
- share areas or generalised polygons instead of exact point locations
- share categories and trends instead of raw values
- publish aggregated summaries by catchment, rohe, or block rather than individual sites
- use static maps instead of interactive layers when downloading would increase risk
- keep sensitive layers offline and produce safe outputs from them

A useful test: if this was forwarded beyond the intended audience, what could go wrong, and how serious would it be.

## Keep provenance and context visible

GIS layers lose meaning quickly when separated from their context. Provenance is not bureaucracy. It is what lets people trust and reuse the work later.

For each dataset or map, record:
- source and date
- licence and conditions of use
- who provided it and any restrictions
- accuracy and known limitations
- intended purpose and intended audience
- a checked date and reviewer role
- contact role or kaitiaki (role, not personal details unless required)

This can be lightweight. A short note in metadata, a readme file, or an “item description” on a web layer is usually enough.

## Be careful with boundaries

Boundaries in GIS are often treated as facts. In practice they may be layered, uncertain, or dependent on context.

Good practice includes:
- labelling the boundary type (legal, administrative, rohe, project, indicative)
- recording the source and date
- avoiding presenting uncertain boundaries as final
- adding notes about what the boundary does and does not represent
- checking boundaries with the right people before publishing, especially where rights, representation, or funding are involved

If you need a single line for a map but reality is more complex, add a note that signals the complexity instead of hiding it.

## Use careful language on maps

Maps communicate strongly, sometimes more strongly than intended. Words like “confirmed”, “owned”, “claim”, “site”, “restricted”, and “boundary” can carry legal, cultural, or political weight.

Practical steps:
- use plain, neutral labels
- include a legend, date, and purpose
- include a short limitation note if the map could be misread
- include a “use statement” where appropriate, such as internal use only
- avoid language that implies certainty when the data is indicative or under review

Treat wording, layout, and emphasis as part of the content, not decoration.

## Build review into your workflow

A review step is where many risks are caught.

A simple review model:
- technical review: projection, symbology, sources, validity, readability
- kaupapa review: does it answer the question, is the story accurate
- tikanga review: does it align with permissions, safety, and local expectations
- local knowledge check: names, locations, and interpretation

If there are different viewpoints, store them separately and label clearly. Do not merge disagreement into one “average” truth.

## Protect people in the data

Be careful with any data that can identify people directly or indirectly.

Common examples:
- owner details and shares
- household or whānau level information
- addresses linked to sensitive topics
- photos with recognisable people, vehicles, or unique markers
- small count summaries where individuals can be inferred

Good practice:
- keep personal information out of GIS layers unless there is a clear lawful purpose and secure storage plan
- separate personal data into a controlled system, link by IDs where necessary
- use aggregation and generalisation when publishing

## Licensing and fairness

Licences set legal conditions, but fair use in Māori contexts is wider than legal. You may be legally allowed to use something and still create harm if you use it without care.

Practical habits:
- record the licence for each dataset
- do not strip attribution from outputs
- respect conditions that limit reuse or redistribution
- if a dataset was provided by a hapū or whānau group, treat their conditions as the first rule, even if the file format makes copying easy

## Safe defaults for tools

These defaults reduce mistakes.

QGIS and file based work:
- keep one working GeoPackage per kaupapa
- keep restricted data in a separate folder or database
- export PDFs and images for hui, avoid sending raw layers by email
- write a short readme and a change log

ArcGIS Online:
- publish source layers to a small publishing group only
- create view layers per audience
- build maps and apps from view layers, not source layers
- use groups for sharing, avoid public sharing unless approved
- check layer, map, and app sharing separately

## A small checklist before you share anything

- purpose and audience are clear
- sensitive layers are removed or generalised
- names are correct, including macrons where needed
- sources and checked dates are included
- the right people have reviewed
- the output format matches the risk
- an archived copy is stored

These principles are meant to make GIS work easier to trust and easier to sustain, not to slow it down. When the foundations are strong, the technical work becomes faster.
