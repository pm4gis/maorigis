---
title: ArcGIS Pro
sidebar_label: Esri ArcGIS Pro Desktop
---

ArcGIS Pro is a desktop GIS application designed for advanced mapping, data management, and spatial analysis. It is used when you need more structure, repeatability, and control than web based tools can provide.

ArcGIS Pro runs on Windows and connects to ArcGIS Online, but it is primarily a hands on desktop tool for GIS practitioners.

## Mā wai, who ArcGIS Pro is for

ArcGIS Pro is suited to:

- Dedicated GIS practitioners
- Analysts working with complex datasets
- Organisations managing structured spatial data
- Advanced users supporting others through maps and apps

In many Māori organisations, ArcGIS Pro is used by a small number of skilled users who prepare data and outputs for wider governance and community use.

## Licensing and access

ArcGIS Pro requires a licence. Common access patterns include:

- Personal licences for individuals
- Organisational licences linked to an ArcGIS Online organisation
- Community or not for profit programmes where eligible

Licence details and eligibility can vary. Use your organisation’s Esri account and local support pathway.

Product overview:
- https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview

## He aha te painga, what ArcGIS Pro is best at

ArcGIS Pro is commonly used for:

- Managing and cleaning spatial datasets
- Creating authoritative map products
- Advanced spatial analysis and processing
- Managing coordinate systems and projections
- Preparing layers for publishing to ArcGIS Online
- Working with geodatabases and structured schemas

## Data management, whakahaere raraunga

ArcGIS Pro is strong when you need structured data management, including:

- File geodatabases
- Domains and subtypes for consistent data entry
- Topology rules for quality control
- Controlled attribute structures and naming
- Clear separation between raw data, working layers, and published outputs

This is useful for long term datasets such as rohe boundaries, sites registers, assets, and monitoring datasets.

:::note
Advanced tools increase responsibility. Strong data management should support mana and trust, not undermine them.
:::

## Example workflow, build a controlled sites register

This is a common advanced use case.

1. Create a file geodatabase for internal authoritative data
- Keep it in an access controlled location

2. Create a sites feature class with a clear schema
Suggested fields:
- site_id
- site_name
- site_type
- sensitivity (public, internal, restricted)
- source
- last_checked_date
- notes

3. Add domains for consistency
Example domains:
- site_type values
- sensitivity values

4. Add quality checks
- topology rules if polygons
- required fields
- standard coordinate system

5. Publish a view to ArcGIS Online for wider use
- Publish only the fields and features that are safe
- Use groups to manage access

## Analysis and processing

ArcGIS Pro supports advanced analysis such as:

- Spatial joins and overlays
- Network and distance analysis
- Raster processing and terrain work
- Catchment and environmental modelling
- Time enabled data and change analysis

Use analysis outputs carefully and explain assumptions clearly in any governance or community facing outputs.

## Map production for formal outputs

ArcGIS Pro is well suited to:

- Planning documents
- governance packs
- Treaty related evidence support
- technical reports

Use layout templates and keep a consistent style for readability.

## Working with ArcGIS Online

ArcGIS Pro connects directly to ArcGIS Online. Common workflows:

- Prepare and quality check data in ArcGIS Pro
- Publish layers to ArcGIS Online
- Build maps, dashboards, and StoryMaps on top
- Keep authoritative sources managed locally or on controlled infrastructure

This keeps technical work controlled while sharing outputs more widely.

## Limitations to be aware of

- Higher learning curve than viewer tools
- Licensing and account management required
- Windows only
- Not ideal for casual or occasional users

## Where this fits in the guide

ArcGIS Pro is the advanced tool for people who need to manage data properly, run repeatable analysis, and produce authoritative outputs. It is most effective when combined with clear data governance and clear decisions about what is shareable.
