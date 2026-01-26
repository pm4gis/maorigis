---

title: StoryMaps

sidebar\_position: 40

---



ArcGIS StoryMaps is a web based tool for publishing a narrative that combines maps, text, images, video, and other media. It is designed for communication and engagement rather than analysis, and it sits on top of your ArcGIS Online content, including web maps and layers. :contentReference\[oaicite:0]{index=0}



In Māori contexts, StoryMaps can be a powerful way to share kaupapa, place-based stories, and project reporting, while still keeping control over what is shown and what stays private. The main risk is that StoryMaps makes publishing easy, and the layers behind a story can be shared more widely than intended if you do not design the data and sharing model carefully. :contentReference\[oaicite:1]{index=1}



\## What StoryMaps is good for in Māori contexts



Common Māori GIS uses for StoryMaps include:



\- Explaining kaupapa and context for governance, funders, and partners

\- Sharing taiao projects and monitoring outcomes without exposing raw sensitive data

\- Supporting engagement and consultation, with clear narrative structure

\- Presenting whenua based projects, restoration work, and catchment initiatives in a way people can follow

\- Packaging maps for non technical audiences, including whānau and trustees

\- Publishing a curated set of maps and media as a single, controlled experience



StoryMaps works best when you have already done the careful work of deciding what is safe to show, and you publish only what is needed for the audience.



\## How StoryMaps works in practice



A StoryMap is an item that references other items, such as web maps, hosted feature layers, images, and videos. If you make a story public, the items used inside it often need to be shared in a compatible way, which is where accidental oversharing can occur. :contentReference\[oaicite:2]{index=2}



A practical mental model is:



\- StoryMap is the presentation layer

\- Web map is the map container used inside the story

\- Feature layers and tables are the underlying data services



If you want to control risk, you control the data services first, then build the story on top of safe views.



\## A Māori safe publishing pattern



For many kaupapa, a safe default is to keep authoritative and sensitive data private, and publish a derived version that is fit for sharing.



A common pattern that reduces risk:



1\. Keep authoritative layers private (owner only or restricted group)

2\. Create a hosted feature layer view that exposes only safe fields and features

3\. Build the web map using the view layer, not the source layer

4\. Build the StoryMap using the web map

5\. Share the StoryMap and the view layer to the correct audience



Feature layer views exist specifically to expose a subset of fields or data from a source layer, while keeping the source protected. :contentReference\[oaicite:3]{index=3}



Sharing guidance and risks to keep in mind:



\- Public sharing makes an item accessible to anyone, including anonymous users, depending on your organisation settings :contentReference\[oaicite:4]{index=4}

\- Do not share editable hosted feature layers publicly unless the layer is deliberately set up for public data collection, such as Survey123 crowdsourcing workflows :contentReference\[oaicite:5]{index=5}



\## Planning a StoryMap for Māori kaupapa



Before you open the builder, write a short plan that answers:



\- Who is the audience (whānau, trustees, staff, partners, public)

\- What decision or outcome the story supports

\- What should remain restricted, and why

\- What you want the reader to do after reading (understand, support, fund, participate, change behaviour)



For Māori kaupapa, also decide early:



\- Who has mana whakahaere to approve publication

\- Whether the story includes mātauranga, kōrero tuku iho, or sensitive place information

\- Whether locations should be generalised or represented by wider areas

\- Whether you need a tikanga or use statement in the story



If you cannot clearly describe what is safe to share, do not start building a public story.



\## Choosing a StoryMap structure that fits Māori audiences



Different structures suit different kaupapa:



\- A governance update often needs clarity, short sections, and key maps with simple captions

\- A community story often needs more imagery, careful language, and strong place context

\- A funding application story often needs problem, approach, delivery, evidence, and outcomes, with strong visuals



StoryMaps provides multiple content blocks and layouts, including immersive blocks like sidecar and slideshow, and comparison tools like swipe. :contentReference\[oaicite:6]{index=6}



Practical guidance for selecting blocks:



\- Use sidecar when you want a step-by-step explanation with the map changing as the reader scrolls

\- Use map tour when place and sequence matter, such as a trail of sites, project locations, or a set of catchments

\- Use timeline when the kaupapa is chronological, such as project delivery stages, seasonal monitoring, or historical sequences

\- Use swipe when you want to compare before and after imagery, land cover change, or two map views



Esri maintains a set of current resources and tutorials on when and how to use these blocks. :contentReference\[oaicite:7]{index=7}



\## Data design for StoryMaps in Māori contexts



StoryMaps is only as safe as the data behind it. For Māori organisations, the most common issues are oversharing and unintended inference.



\### Decide what geometry is appropriate



For sensitive kaupapa, consider whether you should show:



\- A rohe boundary rather than points

\- A catchment or management unit rather than precise site locations

\- A heatmap, density surface, or aggregated counts rather than feature level data

\- Representative locations rather than actual locations



A useful test is: if someone screenshot this, could it be misused.



\### Control what attributes are visible



Popups can leak sensitive information. Before publishing, review:



\- All popup fields

\- Attachments

\- Related records

\- Any identifiers that allow linking back to restricted registers



If you need some data for internal management but not for public reading, that is a view layer problem, not a StoryMaps formatting problem. :contentReference\[oaicite:8]{index=8}



\### Names, te reo, and macrons



StoryMaps is often the first place where many readers see place names and kaupapa terms. Practical steps:



\- Use correct macrons consistently

\- Avoid mixing multiple spellings for the same name

\- Keep labels short on maps and put longer kōrero in the narrative text

\- If you use alternative names, explain why and when each is used



Where place names carry sensitivity, consider whether the story should use a broader geographic reference.



\## Building maps for use inside StoryMaps



A StoryMap often looks best when the map is designed specifically for reading, not for analysis.



Practical map design rules:



\- Reduce layers to what supports the story section

\- Use clear symbology and avoid clutter

\- Use scale dependent visibility so details only appear when the reader is zoomed in

\- Turn off edit capabilities for any layer used in public maps unless intentionally crowdsourced :contentReference\[oaicite:9]{index=9}

\- Keep basemaps consistent across the story so the reader does not need to re-learn context



If you are embedding a web map, remember that sharing the story is not the same as sharing the web map and layers. ArcGIS Online sharing is item based and needs a deliberate review. :contentReference\[oaicite:10]{index=10}



\## Step by step workflow for publishing a StoryMap safely



This is a practical workflow you can repeat.



\### 1. Prepare content and approvals



\- Draft the outline

\- List maps and datasets you will use

\- Identify any restricted layers and decide what will be published instead

\- Get a clear approval pathway, including who signs off before public release



\### 2. Build or update the underlying web maps



\- Create a web map per section if needed, rather than one map with everything

\- Confirm popups and labels

\- Confirm scale ranges

\- Use only safe view layers where appropriate :contentReference\[oaicite:11]{index=11}



\### 3. Build the StoryMap



Use the StoryMaps builder to assemble blocks and narrative. The Learn ArcGIS tutorials provide step-by-step guidance on building and publishing stories. :contentReference\[oaicite:12]{index=12}



\### 4. Accessibility check while building



Accessibility is not optional for many organisations, and it also improves readability for everyone.



Use these resources while you build:



\- Esri accessibility resources hub :contentReference\[oaicite:13]{index=13}

\- StoryMaps team guidance on getting started with accessible storytelling :contentReference\[oaicite:14]{index=14}

\- StoryMaps accessibility checklist resource :contentReference\[oaicite:15]{index=15}

\- Writing accessible StoryMaps content guidance :contentReference\[oaicite:16]{index=16}

\- ArcGIS architecture accessibility guidance for systems and design practices :contentReference\[oaicite:17]{index=17}



Practical accessibility tasks:



\- Add meaningful alt text to images and key graphics

\- Avoid text embedded inside images where possible

\- Use headings in a consistent hierarchy

\- Keep colour choices readable with sufficient contrast

\- Ensure embedded maps have clear titles and legends where needed

\- Avoid long unbroken sections of text



\### 5. Sharing review



Before you share, review each item:



\- StoryMap item sharing

\- Web map item sharing

\- Layer sharing, including view vs source

\- Export and download settings

\- Edit settings

\- Group sharing and public visibility



ArcGIS Online documentation covers how item sharing works, including what public sharing means. :contentReference\[oaicite:18]{index=18}



\### 6. Publish and test like a reader



Test on:



\- Mobile

\- Desktop

\- Different browsers

\- A logged-out session if the story is meant to be public



Check that every map loads, every media item is accessible via HTTPS, and nothing breaks. Esri has noted that mixed content and non-HTTPS resources can break stories or prevent content from loading. :contentReference\[oaicite:19]{index=19}



\## Performance and scale considerations



StoryMaps can slow down if it is overloaded with heavy media, too many embeds, or too many sections. Esri support guidance includes practical limitations and recommends keeping stories focused to protect performance. :contentReference\[oaicite:20]{index=20}



Practical performance tips:



\- Optimise images before upload

\- Avoid too many high resolution videos in a single page

\- Use fewer, clearer web maps rather than many complex ones

\- Prefer short sections with strong structure

\- Avoid embedding unnecessary external pages



\## Protecting stories and avoiding accidental loss



StoryMaps is often used for high value public facing content. Protect it like you would any other public asset.



Esri guidance on protecting published StoryMaps emphasises organisation, separating draft vs final items, and careful management of content that is shared publicly. :contentReference\[oaicite:21]{index=21}



There is also guidance from the StoryMaps community on protecting stories, maps, and layers from accidental deletion using administrative approaches and automation. :contentReference\[oaicite:22]{index=22}



Practical protections:



\- Keep drafts and finals in separate folders

\- Use naming conventions that clearly mark public items

\- Avoid building stories on top of personal accounts if the story is organisational

\- Ensure more than one trusted person can administer the content if staff change



\## SEO and discoverability



If a StoryMap is intended to be publicly discoverable, write the story like a web page, not a report.



Practical discoverability tasks:



\- Use a clear title that includes place and kaupapa

\- Use headings that match how someone would search

\- Add a short summary early in the story

\- Include image captions and descriptive text

\- Add credits and sources clearly



Some public sector web guidance notes that StoryMaps supports features that improve visibility in search engines, and it is still worth applying basic SEO thinking in titles and headings. :contentReference\[oaicite:23]{index=23}



If the StoryMap is not intended to be publicly discoverable, do not share it publicly.



\## Analytics and measuring reach



If you need to report engagement, use analytics so you can track visits and reader behaviour. StoryMaps resources include guidance on measuring traffic and reach. :contentReference\[oaicite:24]{index=24}



For Māori organisations, analytics can help answer:



\- Are whānau and community actually reading the story

\- Which sections are most visited

\- Whether the story is being used as intended for engagement or reporting



Treat analytics data carefully, especially where audiences are small.



\## Practical Māori use cases and patterns



\### Taiao monitoring and reporting



A common pattern:



\- An internal monitoring dataset remains restricted

\- A view layer publishes only safe summary fields

\- The StoryMap shows:

  - monitoring approach

  - map of monitoring areas (not necessarily exact points)

  - charts and trends

  - stories from the field with photos and short captions



This aligns with best practice guidance on preparing content for public sharing and using view layers to reduce exposure. :contentReference\[oaicite:25]{index=25}



\### Whenua based projects and marae projects



StoryMaps can support funding applications and project communication by combining maps, photos, and delivery narrative. There are community examples and training style resources focused on using StoryMaps for marae and whenua related funding applications. :contentReference\[oaicite:26]{index=26}



\### Cultural narratives and education



For cultural narratives, StoryMaps is useful when you want controlled storytelling rather than raw datasets. There are tutorial style resources aimed at creating StoryMaps for cultural narratives. :contentReference\[oaicite:27]{index=27}



A practical tikanga approach for cultural narratives:



\- Use generalised locations where needed

\- Use place-based storytelling that does not reveal restricted details

\- Include a clear statement of what can be reused and what cannot

\- Provide a contact pathway for permissions



\### Areas of interest and iwi context layers



Some organisations publish high level iwi areas of interest layers for context. If you use these in stories, treat them as indicative and explain the source and limitations in your narrative. :contentReference\[oaicite:28]{index=28}



\## A publication checklist you can copy into your process



Use this as a quick final pass before publishing.



Content and approvals:



\- The purpose and audience are stated clearly in the introduction

\- The right people have approved the content and level of detail

\- Any tikanga or use statement is included where appropriate



Data safety:



\- No restricted layers are used directly in public maps

\- View layers are used where fields or features must be limited :contentReference\[oaicite:29]{index=29}

\- Popups have been checked for sensitive fields

\- Attachments have been reviewed

\- Download and export settings match the sharing intent :contentReference\[oaicite:30]{index=30}

\- No publicly shared layer is editable unless intentionally designed for public contribution :contentReference\[oaicite:31]{index=31}



Technical:



\- All external content loads over HTTPS :contentReference\[oaicite:32]{index=32}

\- The story loads well on mobile and desktop

\- Images are optimised and not excessively large

\- Embedded maps load quickly and are not overly complex



Accessibility:



\- Alt text is present for key images and graphics :contentReference\[oaicite:33]{index=33}

\- Headings are structured properly

\- Text is readable and not reliant on colour alone

\- Captions are used where they add meaning



\## Authoritative StoryMaps links and learning pathways



Core StoryMaps resources and feature guidance:



\- ArcGIS StoryMaps resources hub, including tutorials, feature guides, and release notes :contentReference\[oaicite:34]{index=34}

\- Learn ArcGIS tutorial: Make a story :contentReference\[oaicite:35]{index=35}

\- Learn ArcGIS guidance on getting started and building in the StoryMaps builder :contentReference\[oaicite:36]{index=36}

\- Developer documentation overview of StoryMaps concepts and blocks :contentReference\[oaicite:37]{index=37}



Sharing and governance in ArcGIS Online:



\- ArcGIS Online documentation on sharing items and what public sharing means :contentReference\[oaicite:38]{index=38}

\- ArcGIS Online best practices for sharing :contentReference\[oaicite:39]{index=39}

\- Esri blog guidance on preparing content for public sharing :contentReference\[oaicite:40]{index=40}

\- Esri guidance on protecting editable feature data from public exposure :contentReference\[oaicite:41]{index=41}

\- Esri blog guidance on protecting published StoryMaps :contentReference\[oaicite:42]{index=42}



Accessibility:



\- Esri accessibility resources :contentReference\[oaicite:43]{index=43}

\- StoryMaps guidance on getting started with accessible storytelling :contentReference\[oaicite:44]{index=44}

\- Accessibility checklist resource for StoryMaps :contentReference\[oaicite:45]{index=45}

\- Writing accessible StoryMaps content :contentReference\[oaicite:46]{index=46}

\- ArcGIS architecture guidance on accessibility practices :contentReference\[oaicite:47]{index=47}



\## Example StoryMaps relevant to Māori kaupapa



Examples can help you set expectations for structure and tone. These are not endorsements, and you should still apply your own tikanga and governance.



\- A Māori themed StoryMaps collection example :contentReference\[oaicite:48]{index=48}

\- A StoryMap example with Māori kaupapa framing :contentReference\[oaicite:49]{index=49}

\- Example search collections for Māori tagged stories in ArcGIS Online, useful for browsing patterns and layouts :contentReference\[oaicite:50]{index=50}



\## Where this fits in the guide



StoryMaps sits in the publishing and sharing part of Māori GIS work. Use it when you need to communicate clearly with people who do not use GIS tools, and when you can publish derived content that is safe, appropriate, and approved.

