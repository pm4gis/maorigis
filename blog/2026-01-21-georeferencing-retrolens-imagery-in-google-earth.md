---

title: Georeferencing Retrolens imagery using Google Earth
slug: georeferencing-retrolens-imagery-google-earth
date: 2026-01-21
authors: duane
tags:
 - retrolens
 - georeferencing
 - google-earth
 - historical-imagery
 - workflows
 - whenua
---



Downloading historical aerial photos is only the first step. To actually use them in a spatial context, they need to be georeferenced. This means aligning the scanned image to real world coordinates so it sits in the right place on the earth.



This post describes a practical, accessible method using Google Earth Pro. It is not the most precise method, but it is often good enough for exploratory work, kōrero, and early stage analysis.



\## Why georeference historical imagery

Georeferencing allows you to:

\- overlay historical imagery with modern basemaps

\- compare change over time

\- digitise features like old stream lines or tracks

\- create time series layers for storytelling



For Māori GIS work, this can support whenua history, planning discussions, and evidence gathering.



\## What you need

\- A downloaded Retrolens image file

\- Google Earth Pro installed  

 https://www.google.com/earth/versions/

\- A basic understanding of the area being mapped



Google Earth Pro is free and runs on Windows and Mac.



\## Understanding the limits of accuracy

Before starting, be clear about expectations.



Retrolens imagery:

\- is not orthorectified

\- may be distorted by terrain

\- may not align perfectly even when done carefully



Google Earth:

\- uses Web Mercator projection

\- uses mixed date imagery underneath

\- prioritises visual alignment over survey accuracy



This workflow is for interpretation, not legal boundary definition.



\## Step by step georeferencing in Google Earth

1\. Open Google Earth Pro.

2\. Navigate to your area of interest.

3\. Turn on helpful reference layers such as roads, rivers, and place names.

4\. Go to Add, then Image Overlay.

5\. Browse to your Retrolens image file.



The image will appear with green adjustment handles.



\## Aligning the image

Use stable features that are unlikely to have moved:

\- road intersections

\- river confluences

\- coastlines

\- ridgelines

\- long established buildings



Avoid:

\- fence lines

\- vegetation edges

\- small stream bends



Adjust transparency so you can see both the image and the basemap.



Move, rotate, and scale until the best overall fit is achieved. Do not chase perfection at the edges. Aim for a reasonable centre alignment.



\## Using multiple control points mentally

Google Earth does not require formal control points, but you should still think in that way.



Ask yourself:

\- does the image line up in more than one place

\- are errors consistent or chaotic

\- does terrain explain distortions



If alignment is very poor, consider whether a different image frame or year would work better.



\## Saving and exporting

Once aligned:

\- click OK to save the overlay

\- organise it into a folder by year

\- rename it clearly, including the source and date



You can export the overlay as a KMZ file for sharing or reuse.



\## Building a series over time

One powerful approach is to georeference multiple years for the same location.



For example:

\- 1943 image

\- 1962 image

\- 1978 image



Stacked in Google Earth, these allow quick visual comparison. This is often more effective for kōrero than a single image.



\## Moving from Google Earth to GIS

If you need more control later:

\- export KMZ files

\- load them into QGIS

\- refine alignment if needed



QGIS provides proper georeferencing tools, but Google Earth is often enough for early stages.



\## Tikanga and sharing

Georeferenced historical imagery can make sensitive information easier to access. Before sharing:

\- check who the audience is

\- consider clipping to the area needed

\- include clear context about limitations



A georeferenced image feels authoritative, even when it is not. Make that clear.



\## Final thoughts

Google Earth lowers the barrier to working with historical imagery. It allows whānau, kaitiaki, and planners to explore change without specialist software.



Used carefully, it is a powerful bridge between archival imagery and modern GIS.



