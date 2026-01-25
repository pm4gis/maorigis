---

title: Place names

sidebar\_position: 22

---



Place names are not just labels. In Aotearoa, place names often carry whakapapa, history, and the ongoing relationship between people and whenua. Good place name practice improves map quality, supports te reo Māori, and reduces confusion in governance and engagement.



This page focuses on practical ways to use official place names, Māori names, and local naming in GIS.



\## Why place names matter in Māori GIS



Common needs include:



\- Labelling maps correctly for hui and reports

\- Using macrons consistently

\- Handling dual names and alternative names

\- Aligning with official names for councils and government

\- Supporting kōrero about local history and identity



\## Official place names sources



The main authoritative source for official place names is the New Zealand Gazetteer, maintained under the New Zealand Geographic Board Ngā Pou Taunaha o Aotearoa.



Core access points:



\- NZ Gazetteer web app: https://gazetteer.linz.govt.nz/ :contentReference\[oaicite:47]{index=47}

\- Gazetteer usage guidance: https://www.linz.govt.nz/guidance/place-naming/how-use-new-zealand-gazetteer :contentReference\[oaicite:48]{index=48}



Direct download:



\- Gazetteer CSV: https://gazetteer.linz.govt.nz/gaz.csv :contentReference\[oaicite:49]{index=49}



LINZ Data Service layers:



\- NZ Place Names (NZGB): https://data.linz.govt.nz/layer/51681-nz-place-names-nzgb/ :contentReference\[oaicite:50]{index=50}

\- NZ Place Names lines (NZGB): https://data.linz.govt.nz/layer/52423-nz-place-names-lines-nzgb/ :contentReference\[oaicite:51]{index=51}



Suburbs and localities:



\- Suburb Locality table (NZ Gazetteer table): https://data.linz.govt.nz/table/113008-suburb-locality-nz-gazetteer/ :contentReference\[oaicite:52]{index=52}



\## A practical taxonomy for place names in your GIS



Place name data becomes more useful when you separate official naming from local and organisational naming.



Suggested categories:



\- Official name (from NZ Gazetteer or NZGB layers)

\- Official alternative name (includes dual naming where present)

\- Local Māori name used by hapū or iwi (when you have permission and context)

\- Local English name in common use

\- Historical name (with date range if known)

\- Internal operational name (used for projects or assets)



Do not mix these into one field. Keep them separate so you can label maps appropriately for different audiences.



\## Suggested schema for a place names layer you maintain



If you create an internal place names layer (points or polygons) that includes local names, use a simple schema:



\- display\_name (what you want on the map for this audience)

\- official\_name

\- alternative\_names

\- name\_language (mi, en, mixed)

\- name\_type (official, dual, local, historical, operational)

\- source (NZ Gazetteer, iwi or hapū, council, research, other)

\- source\_link

\- notes (short context)

\- sensitivity (public, internal, restricted)

\- last\_checked\_date



:::note

If a local name is shared by whānau or hapū for internal use, treat it as taonga and apply access controls.

:::



\## Step by step: load official place names into QGIS using the Gazetteer CSV



This approach works well when you want a full national dataset quickly.



1\. Download the CSV

\- Open https://gazetteer.linz.govt.nz/gaz.csv

\- Save the file into your project `01\_source` folder :contentReference\[oaicite:53]{index=53}



2\. Add it in QGIS

\- Layer menu

\- Add Layer

\- Add Delimited Text Layer

\- File name: select the CSV

\- Geometry definition: point coordinates



3\. Choose the coordinate fields

The Gazetteer CSV includes coordinates and a coordinate reference frame. Confirm which fields contain coordinates and verify the CRS in QGIS after loading. :contentReference\[oaicite:54]{index=54}



4\. Save as GeoPackage

\- Right click the loaded layer

\- Export

\- Save Features As

\- Format: GeoPackage

\- CRS: NZTM2000 is a good default for most Māori GIS work in Aotearoa



5\. Create a label rule for macrons and dual names

\- Use the official name field as the base label

\- If an alternative or dual name exists, create a label expression that shows it on a second line for specific map types



\## Step by step: load official place names from LINZ Data Service



This approach works when you prefer web services or want a smaller subset.



1\. Open the LINZ Data Service layer page

\- NZ Place Names (NZGB): https://data.linz.govt.nz/layer/51681-nz-place-names-nzgb/ :contentReference\[oaicite:55]{index=55}



2\. Choose your access method

\- Download for offline and stable use

\- WFS for live querying and filtering

\- WMTS or WMS for display only



3\. Add to QGIS or ArcGIS Pro

For WFS, LINZ provides WFS patterns that use a web services key. :contentReference\[oaicite:56]{index=56}



\## Step by step: ensure macrons are handled correctly



Macrons can be lost when software assumes the wrong text encoding.



1\. Use UTF-8

When loading CSV, confirm UTF-8 encoding in the import settings.



2\. Choose fonts that support te reo Māori

Most modern system fonts support macrons. If labels display incorrectly, change the map font.



3\. Keep names as text, not as coded abbreviations

Do not store names in fields that truncate, and avoid exporting to formats that have strict text limits unless required.



\## Using place names in Māori mapping products



\## Hui maps

For hui, use labels that match local expectation. You may show official names and local Māori names together when appropriate, but only when it is tika for the context.



\## Reports and submissions

Align with official names to match council and Crown documentation. Use alternative names where they add clarity.



\## Web maps and public outputs

Default to official names unless you have permission and a clear purpose. Keep sensitive names out of public layers.



\## Additional Māori relevant place and community sources



These are not official place name authorities, but they can support kaupapa, engagement, and navigation.



\- Te Kāhui Māngai (directory of iwi and Māori organisations): https://www.tkm.govt.nz/ :contentReference\[oaicite:57]{index=57}

\- Māori Maps (marae connections and contact approach): https://maori.maps.arcgis.com/ (Māori Maps is listed as a Māori Data Tool and is widely used for marae connection) :contentReference\[oaicite:58]{index=58}



Use these as supporting layers, not as replacements for official naming.



\## Where to go next



\- Use NZ data sources to build a consistent national base layer set: /docs/nz-data

\- Use Māori land to link block information to place context: /docs/maori-land

\- Use Sites to manage local locations with sensitivity controls: /docs/sites



