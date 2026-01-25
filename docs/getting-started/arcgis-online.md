---
title: ArcGIS Online
sidebar_position: 4
---

ArcGIS Online is a web based GIS platform used to store, manage, analyse, and share spatial data through maps and applications. It is widely used across the public sector in Aotearoa New Zealand and is often the platform partner organisations expect.

ArcGIS Online is powerful for sharing and collaboration, but it requires deliberate governance. Publishing is easy. Undoing oversharing can be hard.

## He aha te painga, why ArcGIS Online is valuable for Māori organisations

ArcGIS Online is useful when you need to:

- Share interactive maps with governance, staff, partners, or community
- Create simple apps so non technical users can engage with information
- Support engagement through StoryMaps
- Support monitoring and reporting through Dashboards
- Collect field information using mobile apps and forms
- Coordinate work across multiple teams and locations

It can also support capability building, because people can interact with maps without needing GIS software installed.

## Key concepts you need to understand

ArcGIS Online is organised around:

- An organisation, your controlled workspace
- Users, roles, and privileges
- Groups, for controlling sharing
- Items, the things you create and share, such as maps and layers
- Hosted layers, data stored and served by the platform
- Apps, experiences that sit on top of maps and layers

If you understand users, groups, and items, you can manage most risk.

## Data care, mana whakahaere, and permissions

Before uploading any data, be clear about:

- Who owns the data
- Who has permission to use it
- Whether it includes sensitive locations or kōrero
- What the default sharing setting should be
- Whether downloads and exports should be allowed

:::note
A map can be private while the layer behind it is shared wider. Always check the sharing settings on the layer, not only the map.
:::

## Common apps and when to use them

ArcGIS Online includes several app patterns that are useful in Māori contexts.

Web maps
- The foundation for most things
- Used to explore layers, turn layers on and off, and share a view

StoryMaps, kōrero and engagement
- Used to present a narrative with maps, images, and text
- Useful for kaupapa communication, project context, and engagement
- Official info and examples: https://storymaps.arcgis.com/

Dashboards, reporting and monitoring
- Used to show indicators, counts, charts, and maps
- Useful for governance reporting, environmental monitoring, programme tracking
- Official info: https://www.esri.com/en-us/arcgis/products/arcgis-dashboards/overview

Instant Apps and Experience Builder, simple user tools
- Used to create focused map experiences for specific audiences
- Useful for trustees, staff, and partners who need a simple interface
- Instant Apps: https://www.esri.com/en-us/arcgis/products/arcgis-instant-apps/overview
- Experience Builder: https://www.esri.com/en-us/arcgis/products/arcgis-experience-builder/overview

Survey123 and Field Maps, collecting information
- Useful for field data capture, monitoring sites, inspections, and activity logging
- Survey123: https://survey123.arcgis.com/
- Field Maps: https://www.esri.com/en-us/arcgis/products/arcgis-field-maps/overview

## A safe publishing workflow, from desktop to web

This is a practical workflow that reduces oversharing risk.

1. Prepare a shareable dataset
- Remove sensitive attributes
- Generalise geometry if needed
- Confirm naming and macrons
- Add a short metadata description and date

2. Publish as a hosted feature layer
- Upload data
- Create hosted layer
- Set sharing to Owner only first

3. Create a view layer for wider sharing
- Create a view that excludes sensitive fields or features
- Share the view to a specific group, not to the whole organisation

4. Build the map and app on the view
- Use the view as the layer source in maps and apps

5. Review before sharing
- Check layer sharing
- Check map sharing
- Check app sharing
- Check whether exports are allowed
- Check popups do not reveal sensitive information

## Example, a taiao monitoring dashboard

Common Māori use case:

- A set of monitoring sites (points)
- A table of monitoring results (date, indicator, result, notes)
- A dashboard showing:
  - map of sites
  - latest results
  - trend chart for key indicators
  - filters by catchment or site type

Start with internal sharing, then widen access once the kaupapa and permissions are clear.

## Where this fits in the guide

ArcGIS Online is best used for sharing and engagement once your data is ready and your permissions are clear. Use QGIS or ArcGIS Pro for careful preparation and data management, then publish simplified outputs to ArcGIS Online for the audiences that need them.
