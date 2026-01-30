---
title: Google Earth
sidebar_label: Google Earth
---
Google Earth Pro desktop is a free visual mapping tool that lets you explore whenua using satellite imagery, aerial photos, terrain, and simple overlays. It is one of the best tools for early kōrero because it is fast, familiar, and easy to use in a hui setting.

For Māori GIS projects, Google Earth Pro is strongest for:
- orientation and kōrero about place
- visualising landscapes in 3D
- checking change over time using historical imagery
- overlaying historic aerial photos and scanned plans for context
- sharing simple map packages (KMZ) and high quality screenshots

It is not a full GIS. Treat it as a visual and storytelling tool. When accuracy and repeatable analysis matter, move the work into QGIS or ArcGIS Pro.

## Downloads and versions

Google Earth Pro desktop:
https://www.google.com/earth/versions/

Google Earth web:
https://earth.google.com/web/

Google Earth mobile:
Search for “Google Earth” in your phone app store

For most kaupapa work on a computer, use Google Earth Pro desktop because it includes importing, historical imagery controls, and more export options.

## Where Google Earth Pro fits in a Māori GIS workflow

A practical pattern:
1. Use Google Earth Pro to explore and kōrero, sketch ideas, and gather context
2. Create a simple overlay (rohe, sites, routes) as KML or KMZ
3. Overlay historic imagery (RetroLens, scanned plans) to support kōrero about change and history
4. Export screenshots, a short tour video, or a KMZ for sharing
5. When the draft becomes important, move the layers into QGIS and rebuild with proper data management and metadata

Related pages in this guide:
- QGIS: ./qgis
- Tools overview: ./tools
- Google My Maps: ./Google-mymaps

## Key panels and what they are for

| Panel | What it is for | Māori project use |
|---|---|---|
| Search | Find places, addresses, coordinates | Jump to a marae, awa, maunga, road end, coastal point |
| Places | Your saved folders, overlays, and files | Organise kaupapa layers, hui drafts, shared KMZ packs |
| Layers | Turn on and off extra content like terrain and 3D buildings | 3D terrain for kōrero, borders and labels for orientation |

A good habit is to keep your work inside a single folder in “Places” for each kaupapa, then save that folder as a KMZ.

## Navigation and 3D control that helps in hui

Google Earth Pro becomes far more useful when you can tilt, rotate, and move smoothly.

Useful controls:
- Tilt and rotate to show ridgelines, catchments, and access
- Reset view to north up when people get disoriented
- Use keyboard shortcuts when presenting to keep motion smooth

Keyboard shortcuts reference:
https://support.google.com/earth/answer/148115

## Turn on the layers that matter

Layers change what people see. In hui, keep layers simple.

Common layers to use:
- Terrain (for 3D whenua)
- 3D Buildings (mainly urban areas)
- Borders and Labels (when you need quick context)
- Roads or Places (when you need access context)

How to choose layers:
https://support.google.com/earth/answer/148130

## Core features you will actually use

| Feature | What it does | Practical Māori use |
|---|---|---|
| Placemarks | Save a point with name, notes, links, images | Mark access points, kōrero locations, photo points |
| Paths | Draw lines and routes | Tracks, proposed routes, rohe edges as lines |
| Polygons | Draw areas | Rohe, project areas, generalised sites |
| Measure | Distance and area | Distances for access planning, rough areas for discussion |
| Elevation profile | Profile for a drawn path | Walk routes, ridge lines, catchment thinking |
| Historical imagery | Time slider imagery where available | Show land change, new roads, forestry cycles |
| Image overlays | Drape an image over the land | Overlay RetroLens photos and scanned plans |
| Tours | Record a fly through and play it back | Hui storytelling, comms clips, project updates |
| Save Image | Export high quality images with map options | Hui packs, board papers, social media images |
| Import data | Bring in CSV, shapefile, GPX, KML | Bring GIS drafts in for quick viewing and kōrero |

## Creating placemarks, paths, and polygons

### Placemarks

Create and manage placemarks:
https://support.google.com/earth/answer/148142

Practical tips:
- Keep names short and consistent, especially for hui maps
- Put key kōrero in the description field
- Add a link to a shared document folder if the placemark relates to a project file set
- Use folders to keep different kaupapa separate

### Paths and polygons

Use paths for routes and polygons for areas. In Māori contexts, polygons are often used for “kōrero zones” rather than exact boundaries.

Practical tips:
- Use a simple colour style that works on imagery
- Avoid dense outlines and heavy fill colours that hide the basemap
- Use folders like “Access”, “Taiao”, “Whenua”, “Hui notes” to keep clarity

## Measure distance, area, and elevation profile

Measure distance and elevation:
https://support.google.com/earth/answer/148134

Elevation profiles are very useful for:
- checking steepness of access routes
- explaining why certain routes are hard, unsafe, or costly
- showing how ridges and valleys shape catchments and water flow

Basic workflow:
1. Draw a path (or open an existing path)
2. Use the elevation profile option for that path
3. Screenshot the profile for a report or hui pack

## Historical imagery and change over time

View a map over time:
https://support.google.com/earth/answer/148094

Practical Māori use cases:
- showing pā sites and historic settlements in relation to today’s land use (use care with sensitive material)
- showing growth of suburbs, roads, forestry, or river changes
- identifying older track lines, old river courses, old slip scars
- supporting kōrero about land use history on a block

A simple hui method:
1. Go to the location
2. Turn on historical imagery
3. Move the slider to a few key dates
4. Save two or three images and label them clearly with the date range

## High quality screenshots for hui packs and reports

Save your favourite map image:
https://support.google.com/earth/answer/148146

Save Image is better than a normal screenshot because it can export at higher resolution and you can control map options.

Useful map options to manage:
- title and description
- legend (often not needed)
- scale bar (useful when reporting distance)
- compass and scale

Practical tip for comms:
- export one image with labels and one image without labels
- keep a “clean” style for social media and a “detailed” style for technical packs

## Importing and changing map data

Import and change map data:
https://support.google.com/earth/answer/176685

Google Earth Pro supports importing several data types, including common GIS formats. This is helpful when someone sends you a shapefile or CSV and you need to view it quickly in 3D, or overlay it on imagery for kōrero.

Practical uses:
- open a shapefile of project areas or constraints for quick checking
- import a CSV of sites, each with latitude and longitude
- import GPX tracks from field visits
- open a KML or KMZ shared by another team

## KML and KMZ as your sharing format

KML is the standard format for Google Earth content. KMZ is the zipped version that can include images and other supporting files.

KML documentation and reference:
https://developers.google.com/kml/documentation
https://developers.google.com/kml/documentation/kmlreference

A good practice for Māori projects is to share:
- KMZ for hui visuals and general kōrero
- a separate GIS dataset (GeoPackage or geodatabase extract) for actual analysis work

## Overlaying historical imagery in 3D

Overlaying is where Google Earth Pro becomes powerful for Māori kaupapa. You can drape an old photo or a scanned plan over the landscape, then tilt into 3D to see how rivers, ridges, and coastlines relate to the historic view.

Two key ideas:
- an overlay is mainly for visual context, not precision mapping
- you can get a very useful alignment by choosing strong reference features and adjusting transparency

### Image overlay basics

Use images as overlays:
https://support.google.com/earth/answer/148099

A practical workflow:
1. Zoom to the area where the overlay belongs
2. Add an Image Overlay
3. Choose the image file
4. Adjust transparency so you can see the base imagery underneath
5. Move, rotate, and stretch the overlay to line up
6. Save as KMZ so the overlay and image stay together

Google’s overlay lesson also shows the main controls (move, rotate, resize) and using transparency while aligning:
https://www.google.com/earth/outreach/learn/creating-photos-image-overlays-in-google-earth/

### Choosing good control features for alignment

When aligning a historic image or plan, use features that persist:
- coastline edges, headlands, and river mouths
- river bends and confluences
- ridgelines and spurs
- road intersections that have not moved much
- bridges and rail corridors (where they still exist)
- large building footprints in towns (older streets are often stable)

Avoid using features that shift:
- sand dunes and beach lines
- river channels in flood plains
- forestry boundaries
- seasonal wetland edges

### Make overlays look good in 3D

To make the overlay useful in 3D:
- turn on Terrain
- tilt the view to a low angle
- adjust overlay transparency so both layers are visible
- use modest movement when presenting, people can lose orientation quickly

Terrain is a layer you can toggle in the Layers panel:
https://support.google.com/earth/answer/148130

## Using RetroLens historical aerial photos

RetroLens is a New Zealand platform for viewing and downloading historic aerial imagery. It is a major resource for understanding land use change from the 1930s onwards, depending on the area and available surveys.

RetroLens:
https://retrolens.co.nz/

LINZ also describes how RetroLens relates to the Crown Aerial Film Archive scanning project:
https://www.linz.govt.nz/our-work/projects/crown-aerial-film-archive-historical-imagery-scanning-project
https://www.linz.govt.nz/products-services/data/types-linz-data/aerial-imagery/historical-aerial-imagery

### Important note about accuracy

Many historic aerial photos are not orthorectified. That means they can be rotated, tilted, and offset. A regional council note about RetroLens warns that images may need correction before use in mapping software.

This matters because Google Earth Pro overlays are manual alignment, not true georeferencing. Use them for kōrero and interpretation, then do proper georeferencing in QGIS if you need accuracy.

### Step by step: overlay a RetroLens image in Google Earth Pro

1. Find the photo in RetroLens and download the image you need
2. Save it into your project kete, for example:
   - `01_source/retrolens/`
3. Open Google Earth Pro and fly to the same area
4. Add an Image Overlay and select the downloaded image
5. Set transparency to about 40 to 60 percent so you can see the base imagery
6. Move the overlay into place using strong control features (coastline, river bends, roads)
7. Rotate and resize until the match is visually good
8. Rename the overlay with a clear label, include the year and survey reference if known
9. Save the whole folder as a KMZ so the overlay image stays packaged

### Making a “then and now” view for hui

A useful hui method is a paired view:
- one folder called “Then” containing the RetroLens overlay
- one folder called “Now” with overlay turned off, modern imagery visible
- one polygon layer showing the kaupapa area in a simple style

During hui you can toggle the overlay on and off to show change without moving location.

### When you should move to QGIS for proper alignment

Move to QGIS georeferencing when:
- you need to digitise boundaries or features accurately from the historic photo
- you are comparing change over time quantitatively
- you need a repeatable method for multiple images
- you need to overlay several historic photos reliably

A practical pipeline:
- do a quick overlay in Google Earth Pro for kōrero
- georeference properly in QGIS later and store outputs in a managed format

## Overlaying scanned Māori land plans and historic plans

Historic Māori land plans and related material can be extremely valuable for:
- identifying old pā sites, cultivations, tracks, river crossings, and names that are not in modern datasets
- supporting kōrero about land use, partitioning, access, and historic features
- reconnecting local knowledge to visible geography

Common sources include plan scans, survey plans, historic maps in reports, and scanned documents held by whānau, trusts, or archives.

### Step by step: overlay a scanned plan in Google Earth Pro

1. Prepare the scan:
   - crop to the map area
   - straighten the image if it is skewed
   - save as a PNG or JPG
2. Fly to the area in Google Earth Pro
3. Add an Image Overlay and select the scan file
4. Use transparency to see through to modern imagery
5. Align using stable features, especially coastlines, river junctions, ridges, and older road geometry
6. Add placemarks for key plan labels:
   - old names
   - boundary corner descriptions
   - access points
7. Save as KMZ and store in your kete:
   - `02_working/earth_overlays/`

### Digitising key features from a plan for kōrero

Once the plan overlay is roughly aligned:
- add polygons for areas that matter to the kōrero
- add paths for old track lines
- add placemarks for named features
- keep descriptions short and consistent

If you later rebuild in QGIS, these draft features become a useful starting point.

### Making plan overlays meaningful for Māori audiences

Good practice:
- keep macrons correct in any names you type
- include a “source note” in the placemark description (where the plan came from)
- include who confirmed the local name where relevant
- keep sensitive site locations out of general sharing versions

## Organising overlays and layers as a kaupapa kete

A practical folder structure inside Google Earth Pro “Places”:

- `Kaupapa - [name]`
  - `01_rohe_and_context`
  - `02_retrolens_overlays`
  - `03_historic_plans_overlays`
  - `04_sites_and_korero`
  - `05_outputs_views`

Matching disk folder structure:
- `01_source/google_earth/`
- `02_working/google_earth/`
- `04_outputs/google_earth/`

Save the whole kaupapa folder as KMZ regularly.

## Styling that works in a Māori setting

### Make maps readable

For hui, readability matters more than complexity:
- fewer layers
- clear colours
- short labels
- avoid too many icons

### Custom icons

In Google Earth Pro you can change placemark icons. Many teams create a small icon set, such as:
- marae
- access gate
- viewpoint
- monitoring site
- hazard

If you want full control and repeatability, you can also manage icon styles via KML. KML supports custom icons via IconStyle and linking to an icon image, and KMZ can package assets with the KML.

KML reference:
https://developers.google.com/kml/documentation/kmlreference

## 3D terrain and settings that make a difference

### Terrain and 3D buildings

Turn on terrain for 3D whenua, and 3D buildings when it helps explain urban context.

Layers guidance:
https://support.google.com/earth/answer/148130

### Elevation exaggeration

In some landscapes, modest elevation exaggeration helps people understand ridges and valleys. Google Earth Pro includes an elevation exaggeration setting in the 3D View options.

If you change it, keep it modest so people do not get misled by the shape.

## Paths in 3D and elevation profiles for access kōrero

Use a path to:
- show a proposed access route
- explain steepness and pinch points
- support safety kōrero for field work

Then use the elevation profile feature for that path:
https://support.google.com/earth/answer/148134

## Adding 3D models for kaupapa sites

Google Earth can show 3D models using KML with COLLADA model files, packaged in KMZ.

KML models documentation:
https://developers.google.com/kml/documentation/models

This is an advanced workflow, but it can be useful for:
- simple concept models for a pā redevelopment or visitor platform (share only with the right people)
- visualising a proposed structure in a landscape
- concept kōrero about location and visibility

If you do this, store the full KMZ package inside the project kete and keep clear versioning.

## Tours, fly throughs, and simple videos for comms

Tours are useful for:
- presenting a landscape story smoothly
- explaining a catchment and how water moves
- showing then and now with an overlay
- creating short comms clips for a project update

A practical pattern:
1. Create folders and layers you want visible
2. Set up a few key viewpoints as placemarks
3. Record a tour that moves between them
4. Export a video if needed, or share the KMZ

Movie Maker is often used for exporting tours, but behaviour can vary by version. If you need a polished motion design output, Google Earth Studio can also be used in a browser:
https://www.google.com/earth/studio/

## Sharing, collaboration, and “who can see what”

Google Earth Pro is not a multi user editing tool in the way Google My Maps is. Collaboration is usually done by:
- sharing a KMZ file
- keeping a “master” KMZ and receiving change suggestions from others
- splitting layers into separate KMZ files (one per theme) then combining when presenting

Practical access approach:
- make an “internal” KMZ with full detail for the core project team
- make a “hui” KMZ with only what is appropriate to show
- make a “public” set of screenshots or a simplified map if anything is being shared wider

If you need true collaborative editing on a simple map, consider Google My Maps:
./Google-mymaps

## Troubleshooting overlays and common issues

| Issue | Likely cause | Practical fix |
|---|---|---|
| Overlay never lines up perfectly | Photo is not orthorectified, terrain distortion | Accept it for kōrero, then georeference in QGIS for accuracy |
| Overlay drifts as you zoom | Perspective differences, tilt, control points weak | Align at the scale that matters most, use stronger features |
| Overlay looks stretched | Scan is skewed or warped | Pre process the scan, crop and straighten before overlay |
| Things look “rubber banded” in 3D | Terrain and vertical exaggeration effects | Toggle terrain off for checking, reduce exaggeration if needed |
| Labels are unreadable | Too many layers and icons | Hide layers, simplify, reduce label density |

## Resource links

Google Earth Pro help and guides:
- Choose layers: https://support.google.com/earth/answer/148130
- Keyboard shortcuts: https://support.google.com/earth/answer/148115
- Explore and change view: https://support.google.com/earth/answer/148186
- Create and manage placemarks: https://support.google.com/earth/answer/148142
- Import and change map data: https://support.google.com/earth/answer/176685
- Use images as overlays: https://support.google.com/earth/answer/148099
- Creating image overlays lesson: https://www.google.com/earth/outreach/learn/creating-photos-image-overlays-in-google-earth/
- View a map over time: https://support.google.com/earth/answer/148094
- Save high quality images: https://support.google.com/earth/answer/148146
- Measure distance and elevation profile: https://support.google.com/earth/answer/148134

KML references:
- KML documentation: https://developers.google.com/kml/documentation
- KML reference: https://developers.google.com/kml/documentation/kmlreference
- KML models: https://developers.google.com/kml/documentation/models

Historic imagery sources for Aotearoa:
- RetroLens: https://retrolens.co.nz/
- LINZ historical aerial imagery info: https://www.linz.govt.nz/products-services/data/types-linz-data/aerial-imagery/historical-aerial-imagery
- LINZ Crown Aerial Film Archive scanning project: https://www.linz.govt.nz/our-work/projects/crown-aerial-film-archive-historical-imagery-scanning-project

Google Earth Studio:
- https://www.google.com/earth/studio/
