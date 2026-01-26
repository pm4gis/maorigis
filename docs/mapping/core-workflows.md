---
title: Core workflows
sidebar_position: 10
---

This page describes practical GIS workflows that Māori organisations commonly use. The focus is not software features. The focus is reliable ways to move from a kaupapa to a map, dataset, or decision support output, while keeping control of quality, permissions, and kōrero.

## A simple workflow that works most of the time

1. Define the kaupapa and audience
2. Confirm permissions, sensitivity, and sharing boundaries
3. Gather data from trusted sources
4. Prepare and check the data
5. Build the map or run the analysis
6. Review with the right people (including kaitiaki where relevant)
7. Publish or share the output in the right format
8. Store the work so it can be found and reused
9. Record what changed and what needs checking next

If you skip steps, the common outcomes are rework, confusion, and accidental oversharing.

## Step 1: Define the kaupapa and audience

Before opening any tool, write a short statement that answers:

- What question are we trying to answer
- Who is this for (whānau, trustees, staff, council partner, public)
- What decision or kōrero will it support
- What will success look like
- What must not be shown or shared

A good kaupapa statement is short enough that it can fit in a project folder readme.

## Step 2: Permissions and sensitivity first

GIS makes copying easy. That is the risk.

Common sensitivity categories:
- public: safe to publish
- internal: staff and governance only
- restricted: named roles and teams only
- highly restricted: kaitiaki or mandated group only

Practical rules that prevent most mistakes:
- keep restricted and highly restricted layers in separate folders or separate databases
- do not put sensitive layers into general purpose basemap folders
- do not publish a map item until you have checked it does not include hidden layers or embedded data
- store the approval decision with the output (who approved, when, for what audience)

## Step 3: Gather data (and record where it came from)

Good sources in Aotearoa include:
- LINZ Data Service: https://data.linz.govt.nz/
- LINZ Basemaps: https://basemaps.linz.govt.nz/
- Stats NZ Datafinder: https://datafinder.stats.govt.nz/
- data.govt.nz catalogue: https://data.govt.nz/
- DOC open data: https://doc-deptconservation.opendata.arcgis.com/
- regional and local council open data portals
- your own organisational datasets and historic files

When you download or receive a dataset, record:
- source URL or organisation
- date you downloaded it
- licence or conditions
- any known limitations

## Step 4: Prepare and check the data

This is where most quality is created.

Minimum checks:
- coordinate reference system is correct for your work area
- geometry is valid (no obvious broken polygons)
- attribute field names make sense
- duplicate features are removed or explained
- key fields use consistent values (categories, names, status)

Practical preparation habits:
- keep a copy of original downloads in `01_source` and do not edit them
- do all edits in a working GeoPackage (QGIS) or geodatabase (ArcGIS)
- keep a short change log for each dataset you modify

## Step 5: Build the map or analysis

Choose analysis that matches the audience. More complexity does not always add value.

Common patterns:
- overlay: kaupapa layer plus context layers (hazards, planning, taiao, infrastructure)
- summarise by area: counts or totals by rohe, catchment, block, or zone
- distance and access: routes, buffers, travel distance, nearest facilities
- time and change: compare imagery or datasets over time, show trends

If you are producing a map for hui, prioritise readability over detail.

## Step 6: Review with the right people

A good review is not only technical.

Review roles commonly needed:
- technical review: projections, data sources, symbology, map clarity
- kaupapa review: does this answer the question
- tikanga and sensitivity review: is anything unsafe to show or share
- local knowledge review: names, locations, and interpretations

If there is disagreement, keep contested content separate and label it clearly as under review.

## Step 7: Publish or share the output safely

Match format to audience.

| Output type | Best for | Notes |
|---|---|---|
| PDF map | hui packs, board papers, submissions | easiest to control and archive |
| PNG or JPG | slides, social media images | keep a clean version and a labelled version |
| Web map | internal viewing, interactive exploration | do not publish sensitive layers |
| Dashboard | governance reporting | use summary measures, not personal detail |
| Story map | narrative and context | treat as publishing, not internal drafting |
| Data extract | partners who need data | share the minimum needed, with conditions |

A practical publishing checklist:
- map includes title, date, version
- sources are listed
- sensitive layers are not included, even hidden
- audience and permission statement is clear
- an archived copy is stored in `04_outputs`

## Step 8: Store and make it reusable

A basic project folder structure that works:

- `01_source` original downloads and raw inputs
- `02_working` cleaned and edited datasets
- `03_projects` QGIS or ArcGIS project files
- `04_outputs` PDFs, images, exports
- `05_styles` symbols, styles, templates
- `06_metadata` sources, licences, notes, approvals, change log

Store a short readme in the root folder describing:
- what this project is
- where the key datasets are
- who to contact
- what is restricted

## Step 9: Keep a lightweight change log

A change log can be one markdown file.

Minimum entries:
- date
- what changed
- who changed it
- why it changed
- what needs checking next

This protects your organisation when staff change.

## Four common Māori organisation workflows

### Whenua register workflow
Purpose: keep a reliable view of whenua interests and context.
Steps:
- confirm record context (block names, parcels, identifiers)
- maintain a clean internal layer with stable IDs
- join in planning, hazards, and infrastructure context when needed
- publish hui maps as PDFs, not raw datasets

### Taiao monitoring workflow
Purpose: support kaitiakitanga and track change over time.
Steps:
- define indicators and what data is captured
- collect field data with consistent forms
- store monitoring results with dates and provenance
- map change and trends, not just point locations
- publish summary outputs, keep sensitive details restricted

### Sites and assets workflow
Purpose: manage locations of interest with good context.
Steps:
- define what a “site” means in your organisation
- store sites with category, status, and sensitivity
- record source and confidence
- manage field edits and review before publishing

### Engagement map workflow
Purpose: support kōrero at hui and with partners.
Steps:
- create simple base maps with familiar landmarks
- use clear layers and labels
- capture feedback and decisions
- return drafts for review
- store final outputs with notes on what was agreed
