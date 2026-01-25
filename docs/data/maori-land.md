---

title: Māori land

sidebar\_position: 20

---



Māori land information sits across whakapapa, law, governance, and place. GIS can help you pull threads together, but you need to be clear about what the data represents, what it can be used for, and what should stay private.



This page focuses on practical sources and workflows for working with whenua Māori in a GIS context.



\## What you are usually trying to do



Common needs include:



\- Identify where a block is and what surrounds it

\- Understand how a block is managed (trust, incorporation, other structure)

\- Support communication with owners and whānau

\- Prepare maps for hui, planning, funding, or projects

\- Combine whenua information with taiao, hazards, and infrastructure layers

\- Build an internal register of whenua interests and responsibilities



\## Key places to find Māori land information



Start with the sources that are designed for Māori land records and block context.



Pātaka Whenua (Māori Land Court) is the current online portal for Māori land information, replacing what was previously available through Māori Land Online. :contentReference\[oaicite:0]{index=0}



Use Pātaka Whenua when you need:



\- A block search by block name

\- An owner or management structure search

\- Summary information that relates to the Māori Land Court record



The Māori Land Court also publishes supporting documents and lists for Māori land, including the annual Māori Land Update, national lists of Māori land blocks, and the Māori Incorporation Register. :contentReference\[oaicite:1]{index=1}



Te Puni Kōkiri hosts Tōku Whenua reports on Tupu, which can provide boundary context, aerial photos, and environmental information for a land block. :contentReference\[oaicite:2]{index=2}



\## Practical Māori land data sources and links



Use these links as your starting set.



Māori Land Court and related



\- Pātaka Whenua (search and summaries): https://customer.service.maorilandcourt.govt.nz/ :contentReference\[oaicite:3]{index=3}

\- Māori land data landing page (updates, lists, incorporation register): https://www.xn--morilandcourt-wqb.govt.nz/en/the-court-record/m%C4%81ori-land-data :contentReference\[oaicite:4]{index=4}

\- Find your land guidance (includes Tōku Whenua and LINZ references): https://www.xn--morilandcourt-wqb.govt.nz/en/maori-land/find-your-land :contentReference\[oaicite:5]{index=5}

\- Tūhono Whenua guidance (how to get information about Māori land): https://www.tupu.nz/en/tuhono/how-to-get-information-about-maori-land/ :contentReference\[oaicite:6]{index=6}

\- Tōku Whenua reports (Tupu): https://www.tupu.nz/ :contentReference\[oaicite:7]{index=7}



Public base layers that help you map whenua context



\- LINZ Data Service (property, topo, imagery, hydro, transport): https://data.linz.govt.nz/ :contentReference\[oaicite:8]{index=8}

\- LINZ Basemaps (imagery and basemap tiles): https://basemaps.linz.govt.nz/ :contentReference\[oaicite:9]{index=9}

\- Stats NZ geographic boundaries (meshblocks and admin boundaries): https://datafinder.stats.govt.nz/ :contentReference\[oaicite:10]{index=10}

\- DOC Open Spatial Data (public conservation land, tracks, ecological regions): https://doc-deptconservation.opendata.arcgis.com/ :contentReference\[oaicite:11]{index=11}



\## Working with Māori land boundaries in GIS



Māori land information is often available as text records, reports, and summaries. Spatial boundaries can be harder to obtain in a single authoritative dataset, and different organisations may hold different versions.



A practical approach is to separate your work into two layers:



\- Your boundary layer (the geometry you map)

\- Your record layer (what you know about the block, its governance, and how it is used)



Then you link them using stable identifiers you can maintain over time.



\## Suggested schema for your internal whenua register



Create one internal layer or table for Māori land blocks you work with. Keep it simple and focused.



Suggested fields:



\- block\_name

\- block\_id\_or\_reference (use what you can consistently capture from your source)

\- rohe

\- governance\_type (trust, incorporation, other)

\- governance\_name

\- main\_contacts (internal or approved contacts only)

\- source\_system (Pātaka Whenua, Tōku Whenua, whānau, LINZ, other)

\- last\_checked\_date

\- sensitivity (public, internal, restricted)

\- notes (short context, tikanga, constraints)



Keep ownership lists and personal information out of GIS unless you have a clear purpose, permission, and secure storage.



:::note

Treat whenua and owner information as taonga. Keep a clear boundary between public mapping and internal records.

:::



\## Step by step: build a Māori land context map in QGIS



This is a practical workflow for creating a map that supports kōrero without over exposing sensitive information.



1\. Find the block and confirm the name

\- Search the block in Pātaka Whenua

\- Record the exact block name you will use internally

\- Note any governance structure name if present :contentReference\[oaicite:12]{index=12}



2\. Create a project folder for the block

Use a predictable folder structure:



\- 01\_source

\- 02\_working

\- 03\_outputs

\- 04\_metadata



3\. Add a basemap or imagery

Use LINZ Basemaps for current imagery and context.

If you need a WMTS link for ArcGIS Online or other tools, LINZ provides WMTS URLs in the form shown in their guide, including an API key. :contentReference\[oaicite:13]{index=13}



4\. Add property and context layers

From LINZ Data Service, add the layers you need for context such as:

\- parcels

\- waterways

\- roads

\- topo features



Use WFS when you need editable vector features and filtering. LINZ provides WFS access using a web services key. :contentReference\[oaicite:14]{index=14}



5\. Add taiao layers relevant to the kaupapa

Use DOC for public conservation areas and similar context layers. :contentReference\[oaicite:15]{index=15}



6\. Create your block layer

If you have a boundary from a report or partner, store it as your geometry.

If you only have a reference location, store a point and clearly label it as indicative.



7\. Create an output map for hui

Keep it simple:

\- block boundary or indicative point

\- key surrounding context

\- labels that are readable at A4 or A3

\- a short note about limitations and date checked



8\. Store metadata

Create a small text file in `04\_metadata` that lists:

\- sources used

\- dates downloaded or checked

\- licence notes

\- restrictions or tikanga notes



\## Step by step: use LINZ Basemaps in ArcGIS Online for context



LINZ provides a WMTS URL pattern for adding a basemap layer, including an API key, and guidance for using it in Esri software. :contentReference\[oaicite:16]{index=16}



1\. Get a LINZ Basemaps API key

\- Open https://basemaps.linz.govt.nz/

\- Copy your API key from the site interface :contentReference\[oaicite:17]{index=17}



2\. Choose a tileset

\- Find an imagery layer relevant to your rohe

\- Copy the WMTS capabilities URL shown in the LINZ guidance pattern :contentReference\[oaicite:18]{index=18}



3\. Add to ArcGIS Online

\- In Map Viewer, choose Add layer from URL

\- Paste the WMTS URL

\- Follow the LINZ guidance about removing the `?api=` part if required for recognition in ArcGIS Online :contentReference\[oaicite:19]{index=19}



\## Common problems and how to avoid them



\## Block names do not match other datasets

Block naming can differ across sources and time. Store the source name and the date you checked it. Do not try to force it to match council or LINZ naming.



\## Boundaries are treated as exact when they are not

If your boundary is indicative, label it as indicative in the layer name and in outputs.



\## Sensitive sites are mapped inside a general boundary

Keep sensitive sites in a separate restricted layer, with controlled access, and avoid publishing them to public web maps.



\## Where to go next



\- Read the principles page and decide what should be public, internal, or restricted: /docs/principles

\- Use the Taiao page in this section when building environmental context layers: /docs/taiao

\- Use the Sites page when managing site based information with sensitivity settings: /docs/sites



