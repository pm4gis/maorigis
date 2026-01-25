---
title: Sharing and access
sidebar_position: 20
---

Sharing GIS outputs is often more complex than creating them. Once information leaves your control, it can be copied, reused, or misunderstood. In Māori contexts, sharing can also affect mana, trust, and relationships, so it needs active decisions and clear agreements.

This page focuses on practical sharing approaches that respect kaupapa and protect relationships.

## Sharing is a decision, not a default

Just because a map or dataset can be shared does not mean it should be. Sharing should be intentional and agreed, especially when working with:
- Whenua Māori
- Sites of significance
- Cultural landscapes
- Sensitive environmental information
- Operational data that could enable harm if misused

Make the sharing decision early. If sharing decisions are made late, people often default to whatever is easiest, not whatever is safest.

A useful starting question is: what is the minimum information needed for the purpose.

## Clarify the purpose before you share

Before sending anything, write a one sentence purpose statement and include it with the share. Examples:
- “This map supports governance discussion and is not an operational layer.”
- “This dataset is for consenting assessment only and must not be republished.”
- “This is indicative and is not suitable for boundary decisions.”

This reduces misunderstanding and helps prevent reuse outside the original kaupapa.

## Common sharing scenarios

Different scenarios need different controls:
- Internal staff access
- Trustee or board access
- Partner agency access
- Consultant access
- Community engagement
- Public information

Avoid a single approach for all scenarios. A PDF that is safe for a board pack might be unsafe as a public link. A dataset that is fine for a contractor might be too detailed for broad community engagement.

## Simple access levels you can apply today

A basic classification helps people make consistent choices. Use a small set and apply it everywhere, including filenames and metadata.

Suggested set:
- Public: safe for open publication
- Internal: safe for staff use only
- Restricted: limited to named people or a defined group
- Sensitive: only shared by agreement, with tight controls

Add one more field where it helps: review date. This forces a future decision instead of letting access drift.

## Internal sharing

Internal sharing works best when:
- Data lives in a shared drive, GIS workspace, or controlled platform
- Access is limited to named roles, not general staff groups
- Files are versioned and dated

Good practice:
- Separate source data from outputs
- Use read only access for most users
- Keep a simple register of shared datasets and maps
- Standardise filenames so people do not email the wrong version

A practical filename pattern:
`YYYY-MM-DD_topic_audience_version_access`
Example:
`2026-01-25_freshwater-priorities_governance_v03_restricted.pdf`

## Sharing with trustees and boards

Trustee and board sharing often sits between internal and public. Treat it as restricted by default.

Good practice:
- Provide a short note on what the map is for and what it is not for
- Use static outputs for governance where possible
- Avoid sharing editable datasets unless there is a clear governance need
- Include a contact person for questions, not a chain of forwarded emails

If trustees need interactive access, use a controlled group and publish a limited view layer, not the source dataset.

## Sharing with partners

When sharing with councils, Crown agencies, NGOs, or community groups:
- Share only what is required for the task
- Provide context in writing, not just data
- State any restrictions on reuse and onward sharing
- Avoid sending raw working datasets unless needed
- Prefer outputs rather than editable data when possible

If the other party needs data to integrate into their system, use a tailored extract. Remove fields, remove features, and generalise geometry where appropriate.

## Sharing with consultants and contractors

Consultants often need more detail, but that does not mean they need everything.

Good practice:
- Use a statement of work that includes data handling expectations
- Specify storage location expectations if relevant
- Set a return or deletion expectation at the end of the engagement
- Ask for the derived outputs back, including symbology and metadata

If the work includes culturally significant information, make sure the consultant understands that this is not general project data and is not portable between jobs.

## Web sharing controls

Web maps are powerful but require deliberate configuration.

General controls that apply in most platforms:
- Prefer group based access over public links
- Avoid anonymous access unless you intend public publication
- Review sharing settings regularly
- Assume links will be forwarded
- Limit what is visible in pop ups and attribute tables
- Use separate published views to limit fields and features
- Disable export where possible
- Remove attachments unless they are required

A useful rule: map permissions are not enough. Layer permissions control what can be downloaded or queried.

## ArcGIS Online and ArcGIS Enterprise patterns

If using ArcGIS Online or Enterprise, these patterns reduce risk:
- Create a source hosted feature layer that is not shared
- Create a hosted feature layer view for sharing
- In the view, remove sensitive fields, hide pop ups, and filter features
- Share the view to a group, not public
- Build the web map from the view, not the source layer

If users only need to see symbols and not query data, consider publishing a cached tile layer or a rasterised output. This reduces the chance of data extraction.

## Sharing for community engagement

Community engagement often needs clarity and care more than detail.

Safer approaches:
- Use simplified layers and clear labels
- Use areas or zones rather than exact points for sensitive locations
- Provide narrative context on the same page as the map
- Include a feedback pathway so people can correct or add context safely

Avoid using a technical internal map as an engagement map. Engagement maps should be designed for interpretation, not analysis.

## Managing expectations

Clear communication prevents problems. When sharing, state:
- What the data can be used for
- What it should not be used for
- Whether it is current, indicative, or historic
- Whether it may be republished
- Who to contact with questions
- How long access is granted for, if relevant

If a recipient asks for more detail, treat that as a new sharing decision, not a minor follow up.

## When not to share

Do not share when:
- The data is incomplete, contested, or still under review
- Permissions are unclear or not recorded
- The risk outweighs the benefit
- The map could be misunderstood without context
- Sharing could damage relationships or cause harm

It is acceptable to say no, to delay sharing, or to offer a safer alternative such as a generalised map or a summary table.

## A practical sharing checklist

Before sharing any GIS output, check:
- Purpose: why is this being shared and what decision does it support
- Audience: who exactly will receive it
- Sensitivity: what could go wrong if it is forwarded or copied
- Minimum: can you share less detail and still meet the purpose
- Controls: access level, expiry or review date, export settings
- Context: short written explanation included
- Provenance: sources and dates included
- Record: have you noted what was shared, with whom, and when

## Next steps

- Publishing maps safely: [Publishing maps](/docs/publishing/maps)
- Narrative publishing with StoryMaps: [StoryMaps](/docs/publishing/storymaps)
