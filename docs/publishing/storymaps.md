---
title: StoryMaps
sidebar_position: 30
description: Practical StoryMaps guidance for Māori GIS work, including tikanga, consent, media handling, and safe publishing.
keywords:
  - ArcGIS StoryMaps
  - Māori GIS
  - Aotearoa New Zealand mapping
  - iwi hapū storytelling
  - map publishing
  - sensitive sites
  - kaitiakitanga
---
**He kōrero tō te mapi, he horopaki tō te kōrero.**
StoryMaps can help you share kaupapa, explain decisions, and carry context that a map alone cannot. In Māori GIS work, the main job is to keep intent and meaning intact while protecting what should not travel beyond its proper audience.

This page focuses on building StoryMaps that are clear, useful, and safe to share.

## When StoryMaps are a good fit
Use StoryMaps when you need to:
- explain why a project exists and who it serves
- combine maps, images, text, and links in one place
- support engagement with whānau, trustees, partners, or the public
- publish a narrative that stays readable without a presenter

Avoid StoryMaps when the core output is a dataset that must remain tightly controlled, or when sensitive detail cannot be reliably protected in a web format.

## Start with a brief
Before you open the StoryMaps builder, write a short brief that answers:
- purpose: what decision or understanding is this supporting
- audience: who is meant to read it, and who is not
- access tier: internal, partner, or public
- sensitivity: what must never be shown, named, or implied
- reuse: whether content can be copied into reports, social media, or other sites

If you cannot describe the audience and access tier clearly, do not start building yet.

## Tikanga, consent, and responsibility
In practice, StoryMaps raise three common issues.

### Authority to publish
Confirm that you have mandate to publish the kōrero and the map content. For some kaupapa, authority sits with a rūnanga, trust board, marae committee, or named kaitiaki group. For others, it sits with whānau, or with a partnership group.

Document who approved publication and what they approved.

### Consent for people and whānau material
If you include:
- photos of people
- interviews or quotes
- whānau supplied images or documents
- stories tied to individuals
record consent and what the content can be used for. A general consent to “use in the project” is often not specific enough for public publishing.

### Protecting sensitive places and knowledge
A StoryMap can disclose information through:
- exact points on a map
- screenshots that include labels
- popups and attribute tables
- attachments and embedded downloads
- patterns and combinations of layers

Treat the StoryMap as a publication, not a draft map.

## Designing the structure
A StoryMap is easier to read when it has a simple spine.

A practical structure that suits many Māori GIS projects is:
- opening: kaupapa, people, and place, plus the purpose of the work
- context: what has happened, what is changing, what matters now
- methods: how data was gathered and what it can and cannot say
- results: maps and key findings, with uncertainty stated plainly
- implications: what this means for decisions and next steps
- closing: contacts, acknowledgements, and where updates will live

Keep headings short and descriptive. Assume readers skim first and then return to details.

## Maps inside StoryMaps
StoryMaps can include web maps, map tours, and embedded apps. The safest pattern is to publish the map content deliberately for the StoryMap, rather than reusing an operational map that contains internal layers.

### Build a StoryMap safe map
Create a copy of your map content that is designed for the StoryMap:
- remove restricted layers
- remove restricted fields from popups
- simplify symbology and labels
- set scale ranges to prevent over zooming into detail
- test the map on a phone screen, not only a desktop monitor

If you are unsure, treat the map as public and design down to that level first. You can always add detail for a controlled audience later.

### Popups and fields
Popups often cause the biggest problems. Use popups to support the story, not to expose your database.

Good habits:
- show only a small set of fields
- hide internal IDs, long notes, and staff only fields
- avoid showing coordinates
- remove links to internal systems
- disable downloads where possible

### Generalise and aggregate
If the kaupapa requires reference to sensitive sites, prefer:
- aggregated counts by area
- buffered areas or broad polygons
- generalised points that are not exact locations
- removing labels and names

If your StoryMap tells a story about a wāhi, the map does not need to show the exact point to be meaningful.

## Images, scans, and video
Media carries strong meaning, and also strong risk.

### Image handling
Before uploading images:
- check for identifying details in the background
- check for GPS metadata in photos and remove it if needed
- use captions to keep meaning in place
- avoid close ups that identify locations unintentionally

### Historic imagery and scanned plans
If you include historic imagery:
- state the source and date as clearly as you can
- do not imply survey accuracy unless you have evidence
- add a short note about uncertainty, especially for georeferenced scans

### File size and performance
Large images and videos slow StoryMaps and can frustrate readers. Resize images for web use and keep video short. Where possible, host video on a controlled platform and embed it.

## Links, citations, and source notes
StoryMaps are stronger when readers can see where information came from.

Include:
- dataset links where appropriate
- short source notes under maps and figures
- a reference section for key sources

For Māori GIS work, also include provenance notes where they affect interpretation, such as:
- what date the imagery is from
- what version of hazards layers you used
- whether any areas were clipped or filtered

## Accessibility and readability
Make the StoryMap usable for more people.

Practical checks:
- avoid relying on colour alone to carry meaning
- keep paragraph length short
- use headings frequently
- use alt text for meaningful images
- ensure text contrast is readable on the chosen theme
- test on mobile

## Collaboration and review
Treat review as part of publication, not as a last minute tidy up.

A practical review approach:
- content review: is the kōrero correct and appropriate
- sensitivity review: is anything disclosed directly or indirectly
- technical review: do maps, embeds, and links behave as intended
- final approval: a named person or group signs off

Record the approval date and any conditions.

## Publishing and sharing settings
Be explicit about sharing levels.

Common patterns:
- internal draft first, shared to a review group
- partner sharing through a named group, with a clear agreement
- public release only after a second sensitivity check

If you are using ArcGIS Online, review the sharing settings of every item the StoryMap depends on. A private StoryMap can still leak detail if an embedded map is public and downloadable.

## Records and long term maintenance
StoryMaps change over time. Plan for that.

Good maintenance habits:
- keep a change log for updates
- keep a copy of the final text in a controlled document store
- store source images in a stable location with an asset register
- review links every six to twelve months

If your StoryMap supports ongoing monitoring, include an “Updated on” date and explain what triggers an update.

## A final practical checklist
Before you share a StoryMap link:
- open it in an incognito browser window and test what a viewer can see
- click every map and popup and check fields and attachments
- check that restricted site names do not appear in text, labels, or images
- check that links do not expose internal systems or files
- confirm the access tier and audience match the original brief
