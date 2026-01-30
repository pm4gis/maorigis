import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Māori GIS"
      description="A practical Māori GIS guide for Māori mapping work in Aotearoa New Zealand."
    >
      <main>
        <section className="mgis-hero">
          <div className="container">
            <h1 className="mgis-hero__title">Māori GIS</h1>

            <p className="mgis-hero__subtitle">
              A practical guide to using GIS in Māori contexts.
              Focused on real mahi, care for whenua, and safe handling of knowledge.
            </p>

            <div className="mgis-hero__buttons">
              <span className="button button--primary button--lg" aria-disabled="true">
                Guide
              </span>
              <span className="button button--outline button--lg" aria-disabled="true">
                Data
              </span>
              <span className="button button--secondary button--lg" aria-disabled="true">
                Tools
              </span>
            </div>
          </div>
        </section>

        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--7">
              <h2>He aha tēnei</h2>

              <p>
                This site supports Māori organisations, iwi, hapū, whānau, and practitioners
                doing spatial work in Aotearoa. It is not software training and not academic theory.
              </p>

              <p>
                The focus is on practical GIS workflows that respect tikanga, maintain control
                of data, and produce maps and information that can be safely shared.
              </p>

              <ul>
                <li>Using GIS to support decisions about whenua and taiao</li>
                <li>Working with place names, sites, and sensitive locations</li>
                <li>Understanding limits, uncertainty, and data provenance</li>
                <li>Publishing maps and stories without oversharing</li>
              </ul>
            </div>

            <div className="col col--5">
              <h3>How to use this site</h3>

              <p>
                Content is organised for different ways of working.
                Use the sidebar to browse by kaupapa, tools, or data themes.
              </p>

              <p>
                Pages are written to be read end to end or dipped into as needed.
                Not every section will apply to every project.
              </p>
            </div>
          </div>

          <hr />

          <h2>Scope of the guide</h2>

          <p>
            This guide covers common Māori GIS contexts including whenua, marae, pā,
            wāhi tapu, mahinga kai, waterways, coastal environments, and planning work.
          </p>

          <p>
            It assumes GIS is being used as a support tool, not as an end in itself.
          </p>
        </section>
      </main>
    </Layout>
  );
}
