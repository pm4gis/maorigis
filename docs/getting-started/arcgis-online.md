---
title: ArcGIS Online
sidebar_position: 4
---

ArcGIS Online is a web based GIS platform for storing, managing, analysing, and sharing spatial data through maps and apps. In Aotearoa it is widely used by councils and agencies, so it is often the platform partners expect.

ArcGIS Online is easy to publish with, which is both the strength and the risk. A Māori organisation gets the most value when it sets clear rules for permissions, sharing, and what must stay restricted.

## He aha te painga, why ArcGIS Online is valuable for Māori organisations

ArcGIS Online is useful when you need to:
- share interactive maps with trustees, staff, partners, and whānau
- create simple map apps so non technical users can explore information
- use StoryMaps for kaupapa communication and engagement
- use Dashboards for monitoring and reporting
- collect field information using mobile apps and forms
- coordinate work across multiple teams and locations

It also supports capability building because people can view and filter maps without needing GIS installed.

## Core concepts you must understand

ArcGIS Online is organised around a few building blocks. If you learn these, the rest becomes easier.

| Concept | What it means | Why it matters |
|---|---|---|
| Organisation | Your controlled ArcGIS Online environment | Where your users, content, and settings live |
| Users | Named accounts with licences | Who can create, edit, publish, administer |
| User types | The licence bundle that controls app access | Sets what each person can do and which apps they can use |
| Roles and privileges | What actions a user can perform | Controls publishing, editing, sharing, admin powers |
| Groups | A controlled sharing space | The safest way to share to the right people |
| Items | Anything stored in ArcGIS Online | Maps, layers, apps, files, packages |
| Layers | The data behind the map | Sharing risk usually sits here, not in the map |
| Apps | A user experience built from maps and layers | Dashboards, StoryMaps, Experience Builder, Instant Apps |

## Māori data care in ArcGIS Online

A practical way to think about ArcGIS Online for Māori organisations is mana whakahaere for data. You want:
- the right people controlling access and change
- the right audiences seeing the right level of detail
- clear provenance and “checked date” notes
- safe publishing patterns for culturally sensitive content

Good defaults:
- keep sensitive layers out of ArcGIS Online unless you have strong controls
- publish generalised or summary layers for wider audiences
- document decisions and approvals as part of the item details

A simple rule: always check the layer sharing, not only the web map sharing.

## User types, roles, and privileges

User types control which apps someone can use and the maximum set of privileges they can be granted. Roles then assign the actual privileges.

Start with a small set of roles that match real work:
- Viewer (view only)
- Editor (edit specific layers, no publishing)
- Publisher (publish content, create apps)
- Administrator (settings and governance)

Official guidance:
- User types, roles, and privileges: https://doc.arcgis.com/en/arcgis-online/administer/roles.htm
- Privileges for roles: https://doc.arcgis.com/en/arcgis-online/administer/privileges-for-roles-orgs.htm

## Groups are your safety tool

Groups are the safest practical way to share content to specific people, including trustees, staff teams, contractors, and partner agencies.

### Common group patterns that work

| Group | Who is in it | What it is for |
|---|---|---|
| Working group | GIS team and project staff | Draft maps, working layers, internal testing |
| Review group | kaitiaki, senior staff, trusted reviewers | Reviewing content and sensitivity before wider release |
| Governance group | trustees and governance support roles | View only maps and dashboards for decisions |
| Partner group | specific partners | Sharing a limited extract or view layer |
| Public group | not a “member list”, just a public sharing target | Content you are ready to publish publicly |

### Shared update groups for multiple editors

If multiple people need to update the same layers and maps, ArcGIS Online supports “shared update groups”. These groups allow members to update items shared to the group. Plan this early because the group setting matters.

Create groups guidance (including shared update groups):
https://doc.arcgis.com/en/arcgis-online/share-maps/create-groups.htm

Manage groups:
https://doc.arcgis.com/en/arcgis-online/administer/manage-groups.htm

## Aotearoa setup that saves time

### Use LINZ imagery basemaps in ArcGIS Online

LINZ provides NZ wide imagery basemaps and guidance for ArcGIS Online. LINZ also notes that Esri products do not support the LINZ Basemaps vector tile format, so Esri users should use LINZ raster tile services or WMTS or XYZ endpoints instead.

- LINZ Basemaps product overview: https://www.linz.govt.nz/products-services/data/linz-basemaps
- LINZ note about Esri support and what to use instead: https://basemaps.linz.govt.nz/docs/user-guide/working-with-vector-tiles/usage/
- Add LINZ Aerial Imagery Basemaps to ArcGIS Online (step by step): https://basemaps.linz.govt.nz/docs/user-guide/use-in-esri-software/how-to-add-linz-aerial-imagery-basemaps-to-arcgis-online/
- Add LINZ imagery basemaps to your organisation basemap gallery: https://basemaps.linz.govt.nz/docs/user-guide/use-in-esri-software/how-to-add-linz-basemaps-to-arcgis-online-basemaps/

### Add OGC services when you need them

ArcGIS Online can add OGC services like WMS and WMTS as items, then reuse them in maps.

ArcGIS Online OGC reference:
https://doc.arcgis.com/en/arcgis-online/reference/ogc.htm

Add layers from a URL (WMS, WMTS and more):
https://doc.arcgis.com/en/arcgis-online/create-maps/add-layers-from-url.htm

### Place names and macrons

For Māori mapping, place names are not decoration. They carry whakapapa and meaning. Two useful references:
- LINZ place names overview and the Gazetteer: https://www.linz.govt.nz/products-services/place-names/place-names-new-zealand
- LINZ NZ Place Names item in ArcGIS Online (Gazetteer content): https://www.arcgis.com/home/item.html?id=f2a61f4158454e61baa55b8aa4b914e9

Practical habits:
- store Māori names in their own field (for example `name_mi`) and keep macrons correct
- store local hapū names where appropriate, record who confirmed them
- include a short “names note” in the item description about the source and confirmation

## Items, layers, and the most common trap

ArcGIS Online items are connected. A web map can be private while its layer is shared widely, or the opposite.

Share items guidance:
https://doc.arcgis.com/en/arcgis-online/share-maps/share-items.htm

Best practice for sharing:
https://doc.arcgis.com/en/arcgis-online/reference/best-practices-share.htm

Hosted layers and dependencies:
https://doc.arcgis.com/en/arcgis-online/manage-data/hosted-web-layers.htm

Practical check every time you publish:
- open the layer item page and confirm sharing
- open the web map item page and confirm sharing
- open the app item page and confirm sharing

## Hosted feature layers, view layers, and safe publishing

Hosted feature layers store your data in ArcGIS Online. A hosted feature layer view (often called a view layer) references the same data but can have different sharing, editing, and field visibility settings.

Create hosted feature layer views:
https://doc.arcgis.com/en/arcgis-online/manage-data/create-hosted-views.htm

Hosted layers overview:
https://doc.arcgis.com/en/arcgis-online/manage-data/hosted-web-layers.htm

### A publishing pattern that prevents most oversharing

Use a three layer pattern.

| Layer type | Who can access | What it contains |
|---|---|---|
| Source hosted layer | GIS publishing team only | Full detail, possibly including restricted fields |
| Internal view layer | staff who need detail | Most fields and features, controlled sharing |
| Public or partner view layer | specific audience | minimal fields, generalised, no restricted content |

Build maps and apps on the view layer, not the source layer.

### Controlling editing safely

Editing settings sit on the layer and view layers. If you need public data collection, there are specific settings that must be enabled and this changes your risk profile.

Best practices for sharing and editing:
https://doc.arcgis.com/en/arcgis-online/reference/best-practices-share.htm

Manage hosted feature layer editing (important limitations):
https://doc.arcgis.com/en/arcgis-online/manage-data/manage-editing-hfl.htm

## Updating data over time: overwrite, append, and change tracking

Data updates are common in monitoring and asset work. Choose a method that matches your workflow.

Useful references:
- Manage hosted feature layers: https://doc.arcgis.com/en/arcgis-online/manage-data/manage-hosted-feature-layers.htm
- Differences between overwriting and appending: https://support.esri.com/en-us/knowledge-base/faq-what-are-the-differences-between-overwriting-and-ap-000028667
- Overwrite a web feature layer from ArcGIS Pro: https://pro.arcgis.com/en/pro-app/latest/help/sharing/overview/overwrite-a-web-layer.htm

Practical notes:
- if you enable change tracking on a hosted feature layer, it can block later overwrite workflows, so decide early
- when you overwrite, check downstream dependencies like maps, dashboards, and joins
- when you append, you must manage duplicates and IDs carefully

## Making a good web map for Māori audiences

A good web map is simple, clear, and respectful of context.

### Web map essentials

- use a basemap that supports the kōrero
- show a small number of layers, grouped clearly
- use clear symbology and legible labels
- set popups to show only what users need
- add bookmarks for important places
- include a short source and “checked date” statement

### Popup design that avoids harm

Popups can reveal more than you expect. For Māori contexts:
- do not show restricted notes, internal IDs, or sensitive attachments in public facing maps
- use view layers to remove sensitive fields rather than relying on careful popup configuration
- keep photos and documents in controlled systems unless publishing is approved

## Apps you can build in ArcGIS Online

ArcGIS Online supports multiple app builders. Choose the simplest tool that fits the audience.

| App type | Best for | Link |
|---|---|---|
| StoryMaps | kaupapa narrative, engagement, context, project updates | https://storymaps.arcgis.com/ |
| Dashboards | monitoring, KPIs, governance reporting | https://www.esri.com/en-us/arcgis/products/arcgis-dashboards/overview |
| Instant Apps | quick focused apps from a web map | https://www.esri.com/en-us/arcgis/products/arcgis-instant-apps/overview |
| Experience Builder | larger multi page experiences and portals | https://www.esri.com/en-us/arcgis/products/arcgis-experience-builder/overview |

Practical Māori use examples:
- a dashboard for taiao monitoring trends, shared to governance and kaitiaki groups
- a StoryMap for project context and updates with carefully chosen layers
- an Experience Builder page as an internal “map hub” for staff, with restricted access

## Field data collection in the ArcGIS Online ecosystem

Field work is common in kaitiakitanga, assets, restoration, and monitoring.

Common tools:
- Survey123 for form based capture: https://survey123.arcgis.com/
- Field Maps for map based capture and editing: https://www.esri.com/en-us/arcgis/products/arcgis-field-maps/overview

Practical controls:
- make the form do the work, use required fields and drop downs
- collect only what you need, avoid personal information unless there is a clear lawful purpose and storage plan
- store sensitive attachments with care, photos can expose locations and context
- publish summary reporting layers, keep raw detail restricted

## Credits and cost management

ArcGIS Online uses credits for specific transactions and storage types. Administrators should monitor credit usage, set budgets, and avoid surprises.

Understand credits:
https://doc.arcgis.com/en/arcgis-online/administer/credits.htm

Esri credits overview:
https://www.esri.com/en-us/arcgis/products/credits/overview

A practical approach:
- monitor credit usage monthly
- prefer view layers and filtering over duplicated hosted datasets
- be cautious with heavy analysis tools and large imagery hosting unless budgeted
- limit who can publish hosted layers if credits are tight

## Security settings you should review

ArcGIS guidance recommends avoiding anonymous access unless required and limiting external sharing unless required.

ArcGIS Online security settings:
https://doc.arcgis.com/en/arcgis-online/administer/configure-security.htm

ArcGIS Online implementation guidance:
https://trust.arcgis.com/en/security/arcgis-online-guidance.htm

A practical Māori organisation stance:
- default to internal only
- use groups for most sharing
- use public sharing only for approved public outputs
- keep a simple publishing checklist and a second reviewer for public items

## Metadata and item details that improve reuse

Item descriptions are not optional. They are what makes your maps safe and reusable when staff change.

Metadata in ArcGIS Online:
https://doc.arcgis.com/en/arcgis-online/manage-data/metadata.htm

Configure item details:
https://doc.arcgis.com/en/arcgis-online/manage-data/configure-item-details.htm

Suggested minimum content for Māori projects:
- what this item is for and who it is for
- data sources and links
- checked date and reviewer (role, not personal name if not needed)
- sensitivity and sharing rules
- tikanga notes where relevant
- known limitations and what not to use it for

## Aotearoa examples and inspiration

Use these to learn patterns, not to copy content without checking permissions and context.

- Matawhenua Māori GIS collection (3D and mapping kete examples): https://storymaps.arcgis.com/collections/31d1371892cb419ea2aa97e8b57b5059
- LINZ NZ Place Names Gazetteer item: https://www.arcgis.com/home/item.html?id=f2a61f4158454e61baa55b8aa4b914e9
- Te ao Māori regional profile experience (example experience layout): https://experience.arcgis.com/experience/2616b7c599df48e1b47a791b658dfcf7
- Iwi Areas of Interest dataset (TPK, ArcGIS Hub): https://hub.arcgis.com/maps/TPK::iwi-areas-of-interest-1/about
- Stats NZ Geographic Boundary Viewer user guide (StoryMap style guide example): https://storymaps.arcgis.com/stories/d2583cb4030545b084895e3ef87c515c

## Common mistakes and how to avoid them

| Mistake | What happens | Prevention |
|---|---|---|
| Sharing the web map but not checking the layer | data becomes visible or blocked unexpectedly | check map, layer, app sharing separately |
| Publishing sensitive attributes in popups | sensitive kōrero leaks | remove fields with view layers, then build apps |
| Letting too many people publish hosted layers | content sprawl, credit surprises | limit privileges, use shared templates and review |
| Deleting a source item that a hosted layer depends on | updates fail later | understand dependencies and keep source items |
| Using one layer for all audiences | either too restricted or too open | use view layers per audience |
| No metadata | nobody knows what it is or whether it is safe | set item details as part of publishing |

## Where this fits in the guide

ArcGIS Online is best used for sharing and engagement once your data is ready and your permissions are clear. Use QGIS or ArcGIS Pro for careful preparation and data management, then publish simplified outputs to ArcGIS Online for the audiences that need them.

Related pages:
- Tools overview: ./tools
- ArcGIS Pro: ./arcgis-pro
- ArcGIS StoryMaps: ./arcgis-storymaps
- ArcGIS Dashboards: ./arcgis-dashboards
- QGIS: ./qgis
