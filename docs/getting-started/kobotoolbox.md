---

title: KoboToolbox

sidebar\_position: 50

---



:contentReference\[oaicite:0]{index=0} is a free and open platform for collecting survey and field data. It is widely used in humanitarian, development, and community based work, including kaupapa Māori research, environmental monitoring, and engagement projects.



KoboToolbox is not GIS software. It complements GIS by helping you collect structured data that can later be mapped, analysed, and shared.



\## What KoboToolbox is good for



KoboToolbox is well suited to:



\- Field surveys using phones or tablets

\- Offline data collection in remote areas

\- Structured questionnaires and forms

\- Collecting locations, photos, and notes together

\- Community engagement and consultation

\- Environmental and taiao monitoring

\- Research projects that need clear data governance



It is commonly used where internet access is unreliable or where many people are contributing data.



\## Why it works well in Māori contexts



KoboToolbox fits Māori contexts for several reasons:



\- Works offline and syncs later, supporting mahi on whenua and in remote areas

\- Data ownership remains with the project owner

\- Forms can be designed to reflect kaupapa and tikanga

\- Works alongside GIS without forcing data into external platforms

\- Supports careful control of what is collected and shared



It allows you to collect information close to the source, then decide how and where it is used.



\## How KoboToolbox fits with GIS



A common pattern is:



\- Use KoboToolbox to collect data in the field

\- Export the data as CSV or GeoJSON

\- Bring the data into QGIS or ArcGIS Pro

\- Combine it with basemaps and other layers

\- Create maps or summaries for kōrero and decisions



KoboToolbox becomes the capture tool. GIS becomes the analysis and visualisation tool.



\## Types of data you can collect



KoboToolbox supports many question types, including:



\- Text and numbers

\- Single choice and multiple choice

\- Dates and times

\- GPS location points

\- Photos and audio

\- Notes and observations



For GIS work, the most useful are:



\- Location points

\- Repeating groups for observations

\- Photos linked to a location

\- Condition or status fields



\## Designing a good form



A good form is short, clear, and purposeful.



Good practice:



\- Start with what you actually need to know

\- Avoid collecting data just because you can

\- Use clear labels and simple language

\- Group related questions together

\- Test the form on a phone before real use



If a form feels confusing, it will produce unreliable data.



\## Using te reo Māori in forms



Light and accurate use of te reo Māori can strengthen engagement.



Suggestions:



\- Use te reo Māori for section headings where appropriate

\- Use correct macrons

\- Keep questions clear and unambiguous

\- Avoid mixing languages in the same question unless intentional

\- Test wording with users before deployment



Forms should feel respectful and easy to use.



\## Location data and accuracy



KoboToolbox captures GPS locations from the device.



Important considerations:



\- Accuracy depends on the device and environment

\- Tree cover, terrain, and buildings affect GPS

\- Do not assume survey points are survey grade locations

\- Record confidence or notes where accuracy matters



For many kaupapa, indicative locations are sufficient. For legal or engineering work, they are not.



\## Managing sensitive information



Some data should not be widely shared.



Good practice includes:



\- Avoid collecting personal information unless required

\- Separate identifying information from observation data

\- Use clear naming for sensitive questions

\- Control who has access to the project

\- Export and store data securely



Once data is collected, treat it with the same care as other taonga.



\## Exporting data for GIS use



KoboToolbox allows export in several formats.



Common options:



\- CSV for spreadsheets and general use

\- GeoJSON for direct use in GIS

\- XLSX for reporting and review



Typical GIS workflow:



1\. Export GeoJSON or CSV

2\. Open in QGIS or ArcGIS Pro

3\. Check coordinate system

4\. Clean field names if needed

5\. Save into a GeoPackage or geodatabase

6\. Document the source and date



Always keep the original export unchanged and work on a copy.



\## Example use cases



Environmental monitoring:

\- Record pest trap checks

\- Track planting or restoration sites

\- Record waterway observations



Community engagement:

\- Capture feedback at hui or events

\- Record places of concern or interest

\- Support consultation processes



Asset and site recording:

\- Record condition of sites or facilities

\- Capture photos linked to locations

\- Build an internal register over time



\## Limits to be aware of



KoboToolbox is not:



\- A GIS analysis tool

\- A long term spatial database

\- A replacement for data governance processes



It is best used as a collection tool, not the final home of your data.



\## Useful links



\- KoboToolbox website: https://www.kobotoolbox.org/

\- Documentation: https://support.kobotoolbox.org/

\- Form building guide: https://support.kobotoolbox.org/getting-started.html



\## When not to use KoboToolbox



Avoid using it when:



\- You need survey grade spatial accuracy

\- Data must remain fully offline at all times

\- The project requires complex relational databases

\- Long term data hosting is the main requirement



In those cases, other tools may be more suitable.



\## Next steps



\- Tools overview: `/docs/getting-started/tools`

\- QGIS for working with survey data: `/docs/getting-started/qgis`

\- Publishing maps and results: `/docs/publishing/maps`



