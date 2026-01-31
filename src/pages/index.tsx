// src/pages/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Māori GIS Guidebook"
      description="A practical Māori GIS mapping guide for Aotearoa New Zealand."
    >
      <Head>
        <meta
          name="description"
          content="A practical Māori GIS mapping guide for Aotearoa New Zealand. Focused on practical mahi, safe sharing, and clear decision support."
        />
      </Head>

      <main className="mgis-landing">
        <section className="mgis-landingHero">
          <div className="container mgis-landingHero__inner">
            <div className="mgis-landingHero__copy">
              <div className="mgis-eyebrow">He aratohu mahi</div>
              <h1 className="mgis-landingHero__title">Māori GIS Mapping</h1>
              <p className="mgis-landingHero__subtitle">
                A practical Māori GIS Mapping guide, crafted for iwi and hapū mahi, supporting cultural, whakapapa, whenua and taiao
                mapping while ensuring you control tikanga, data, sovereignty, access and decision making.
              </p>

              <div className="mgis-landingNav">
                <Link className="mgis-navCard mgis-navCard--blue" to={useBaseUrl('/docs/intro')}>
                  <div className="mgis-navCard__title">Start</div>
                  <div className="mgis-navCard__desc">How to use the guide and set safe defaults.</div>
                </Link>

                <Link className="mgis-navCard mgis-navCard--teal" to={useBaseUrl('/docs/getting-started')}>
                  <div className="mgis-navCard__title">Tools</div>
                  <div className="mgis-navCard__desc">Choosing platforms and working styles.</div>
                </Link>

                <Link className="mgis-navCard mgis-navCard--purple" to={useBaseUrl('/docs/data')}>
                  <div className="mgis-navCard__title">Data</div>
                  <div className="mgis-navCard__desc">Finding, checking, and using Aotearoa datasets.</div>
                </Link>

                <Link className="mgis-navCard mgis-navCard--green" to={useBaseUrl('/docs/mapping')}>
                  <div className="mgis-navCard__title">Workflows</div>
                  <div className="mgis-navCard__desc">Repeatable mapping work for whenua and taiao.</div>
                </Link>

                <Link className="mgis-navCard mgis-navCard--amber" to={useBaseUrl('/docs/publishing')}>
                  <div className="mgis-navCard__title">Publishing</div>
                  <div className="mgis-navCard__desc">Maps, StoryMaps, and sharing without oversharing.</div>
                </Link>

                <Link
                  className="mgis-navCard mgis-navCard--rose"
                  to={useBaseUrl('/docs/governance-and-practice')}
                >
                  <div className="mgis-navCard__title">Kaupapa and governance</div>
                  <div className="mgis-navCard__desc">Consent, tikanga, access, and data sovereignty.</div>
                </Link>
              </div>
            </div>

            <div className="mgis-landingHero__media">
              <div className="mgis-mediaCard">
                <div className="mgis-mediaCard__top">
                  <div className="mgis-pill">Whenua and taiao</div>
                  <div className="mgis-pill mgis-pill--soft">Practical, safe, repeatable</div>
                </div>

                <div className="mgis-mediaCard__canvas">
                  <img
                    className="mgis-mediaCard__image"
                    src={useBaseUrl('/img/social-card.png')}
                    alt="Māori GIS Mapping"
                  />
                </div>

                <div className="mgis-mediaCard__caption">
                  Map-ready mahi that respects tikanga and keeps control of data.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mgis-section mgis-section--last">
          <div className="container">
            <h2 className="mgis-section__title">He aha tēnei</h2>
            <p className="mgis-section__lead">
              This site supports Māori organisations, iwi, hapū, whānau, and practitioners doing spatial work in Aotearoa. It is not
              software training and not academic theory.
            </p>
            <p className="mgis-section__lead">
              The focus is on practical GIS workflows that respect tikanga, maintain control of data, and produce maps and information
              that can be safely shared.
            </p>
            <ul className="mgis-section__list">
              <li>Using GIS to support decisions about whenua and taiao</li>
              <li>Working with place names, sites, and sensitive locations</li>
              <li>Understanding limits, uncertainty, and data provenance</li>
              <li>Publishing maps and stories without oversharing</li>
            </ul>

            <h3>How to use this site</h3>
            <p className="mgis-section__lead">
              Content is organised for different ways of working. Use the sidebar to browse by kaupapa, tools, or data themes.
            </p>
            <p className="mgis-section__lead">
              Pages are written to be read end to end or dipped into as needed. Not every section will apply to every project.
            </p>

            <h3>Scope of the guide</h3>
            <p className="mgis-section__lead">
              This guide covers common Māori GIS contexts including whenua, marae, pā, wāhi tapu, mahinga kai, waterways, coastal
              environments, and planning work.
            </p>
            <p className="mgis-section__lead">
              It assumes GIS is being used as a support tool, not as an end in itself.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
