---
title: Survey123
sidebar_position: 61
---

Survey123 is a form based data collection tool in the ArcGIS platform. It is used to collect structured survey responses, including locations, photos, and attachments, then publish results into ArcGIS Online for mapping and reporting.

Survey123 site: https://survey123.arcgis.com/
Product overview: https://www.esri.com/en-us/arcgis/products/arcgis-survey123/overview

## What Survey123 is good for

Survey123 works well for:

- Field surveys with consistent questions and response types
- Monitoring programmes where the same site is visited many times
- Condition checks, inspections, and repeatable assessments
- Collecting GPS points, photos, and notes together
- Workflows that need validation rules and required fields

## Where it fits in Māori GIS workflows

Survey123 can be a good fit when:

- Your organisation already uses ArcGIS Online
- You need consistent data capture across staff or contractors
- The project needs dashboards or reporting that update automatically
- You need to separate internal registers from what is shared

It is strongest when the dataset design and permissions are decided before any field collection starts.

## Data governance and sensitive information

Before building a survey, decide:

- Who owns the data and who is responsible for it
- Who can view, edit, download, and share the outputs
- Whether any locations or kōrero are sensitive
- Whether identifying information is required at all

Practical safer approaches:

- Avoid collecting personal information unless it is required
- Put sensitive details in a separate internal dataset, not in the public facing layer
- Use hosted feature layer views to share only safe fields or safe records

Hosted feature layer views: https://doc.arcgis.com/en/arcgis-online/manage-data/create-hosted-views.htm

## Typical workflow

1. Design the survey schema and keep it minimal
2. Test on real devices in the field conditions you expect
3. Collect data and review it regularly during collection
4. Clean and quality check results in ArcGIS Pro or QGIS if needed
5. Publish a view layer for sharing and reporting
6. Build maps, dashboards, or StoryMaps on top of the view

ArcGIS Online sharing items: https://doc.arcgis.com/en/arcgis-online/share-maps/share-items.htm

## Limits to be aware of

Survey123 may not suit work where:

- Data must remain fully offline for the full life of the project
- You need survey grade accuracy
- You cannot control ArcGIS Online governance and sharing settings
- The kaupapa requires local file based storage only
