---
title: StoryMaps
sidebar_position: 30
---

StoryMaps combine maps, text, images, and structure to tell a clear story. They are well suited to Māori contexts where kōrero, place, whakapapa, and narrative matter, and where the map is only one part of what people need to understand.

This page is practical guidance, with examples and links to real StoryMaps.

## What StoryMaps are good for

StoryMaps work well when you need to:
- Explain context, not just data
- Walk people through a place, kaupapa, or decision
- Combine maps with narrative and supporting media
- Support engagement and shared understanding
- Publish updates over time without rewriting a full report

They are less suitable when your audience needs full technical detail, raw datasets, or complex analysis workflows.

## Common Māori use cases

Typical use cases include:
- Sharing project context with whānau, hapū, or community groups
- Explaining taiao or environmental mahi, including monitoring and restoration
- Providing background and options for consultation
- Reporting progress in a way that is readable for non GIS audiences
- Presenting a place story using te reo place names, local histories, and imagery
- Showing staged decisions, for example what is known, what is proposed, and what is still undecided

StoryMaps help bridge the gap between technical GIS work and lived experience.

## Examples to learn from

These are public StoryMaps that show common patterns you can copy.

Aotearoa examples:
- Te Whakapapa o ngā Awa (structure, embedded map, participation cues). :contentReference[oaicite:1]{index=1}
- Matawhenua: Tirohanga 3D Māori GIS ki te Whakapapa collection (collection pattern, thematic navigation, 3D). :contentReference[oaicite:2]{index=2}
- Māori Land in Aotearoa New Zealand (topic framing, basic thematic map use). :contentReference[oaicite:3]{index=3}
- Measuring the baseline health of pipi in Whangārei (science story with place, monitoring, and narrative). :contentReference[oaicite:4]{index=4}
- Ahuahu archaeological project StoryMap (heritage storytelling, careful presentation). :contentReference[oaicite:5]{index=5}
- Connecting New Zealanders to Lakes (long form narrative with maps and sections). :contentReference[oaicite:6]{index=6}

Platform guidance and official learning:
- ArcGIS StoryMaps product overview (capabilities and supported content types). :contentReference[oaicite:7]{index=7}
- StoryMaps learning resources (workflows and how to build). :contentReference[oaicite:8]{index=8}

## A simple structure that usually works

A strong StoryMap is usually a small number of sections with a clear flow:
- What this is about
- Why it matters
- Where it applies
- What is happening or proposed
- What comes next
- How to provide feedback, if relevant

If you do not have a clear flow, the map will not fix it. Keep the narrative in charge and let the maps support it.

## Choosing the right level of detail

StoryMaps should show enough to understand the kaupapa, not everything you know.

Common patterns that work well:
- Governance summary map: simple, clear, no sensitive attributes
- Supporting context map: land cover, catchments, iwi areas of interest, protected areas, elevation
- Optional detail: links to controlled web maps or to data pages, rather than embedding technical layers directly

Good practice:
- Use simplified layers
- Remove unnecessary fields and attachments
- Use scale dependent visibility so detail only appears when it is needed
- Avoid exposing raw datasets through pop ups and attribute tables

A practical approach is to use a “view” layer for StoryMaps, not your source layer.

## Working safely with sensitive information

Avoid publishing precise locations for:
- Wāhi tapu, wāhi tūpuna, urupā
- Archaeological sites and features
- Some mahinga kai areas
- Locations where visibility increases risk of damage or misuse

Safer alternatives:
- Show areas or zones, not points
- Use generalised geometry
- Show counts by catchment, management unit, or grid
- Include narrative without a map for the most sensitive parts

If the kaupapa is sensitive or contested, prefer a static map pack or controlled sharing.

## Te reo Māori in StoryMaps

Te reo Māori can add meaning and respect when used correctly.

Practical guidance:
- Use te reo in headings where it adds clarity, not decoration
- Use place names correctly with macrons
- Keep spelling consistent across text, map labels, and captions
- Do not translate technical terms unless you have agreed wording
- If you use a bilingual style, use it consistently and keep sentences short

If your map labels do not support macrons, fix that before publishing.

## Maps, media, and performance tips

StoryMaps feel slow when media is too large or when too many web maps load at once.

Practical tips:
- Use fewer maps, but make each map do a clear job
- Prefer one strong map per section, not many small maps
- Compress images before upload
- Keep videos short and add captions
- Use map bookmarks or sections rather than expecting users to pan and zoom to find meaning
- If your map does not need query, consider a rasterised output or tile style approach rather than a fully queryable feature layer

## Writing and editing tips that improve trust

StoryMaps can fail if they read like a brochure. Treat them as a briefing.

Useful practices:
- Put the conclusion early, then support it
- Use headings that state meaning, not just topics
- Use short paragraphs and short sentences
- Add a “what we know, what we do not know” section when the topic is uncertain
- Add a “how to interpret this map” note for non GIS audiences
- Name the data sources and dates in plain language

## Review before sharing

Before publishing:
- Review with someone who was not involved in building it
- Check map sharing settings and layer sharing settings
- Confirm permissions for photos, logos, and third party content
- Check that pop ups do not reveal fields you did not intend to share
- View it on mobile and on a slow connection
- Confirm that any feedback link goes to the right place

Once published, StoryMaps can be shared widely and quickly, even when you did not intend that.

## Accessibility and readability

Do the basics every time:
- Add alt text for meaningful images
- Use headings in a logical order
- Do not rely on colour alone to communicate meaning
- Keep font sizes readable
- Use high contrast for text over images
- Add captions that explain why an image matters

This helps all audiences, including people reading on phones.

## Offline and low connectivity considerations

StoryMaps generally assume an internet connection. If your audience has limited connectivity:
- Provide a PDF export or a static alternative alongside the StoryMap
- Offer a map pack option for hui
- Keep media sizes small
- Avoid embedding multiple heavy web maps in one page

If offline access is required, do not use StoryMaps as the primary delivery.