import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

type Tile = {
  title: string;
  desc: string;
  to: string;
  colour: 'blue' | 'purple' | 'orange' | 'teal' | 'red' | 'green';
};

const quickTiles: Tile[] = [
  { title: 'Start', desc: 'Safe defaults, roles, and your first clean map.', to: '/docs/start', colour: 'blue' },
  { title: 'Tools overview', desc: 'Choose a tool chain that fits your mahi.', to: '/docs/toolkits', colour: 'purple' },
  { title: 'NZ data sources', desc: 'Find trusted datasets for Aotearoa.', to: '/docs/data', colour: 'teal' },
  { title: 'QGIS', desc: 'Offline desktop GIS, analysis, and exports.', to: '/docs/toolkits/qgis', colour: 'green' },
  { title: 'ArcGIS Online', desc: 'Web maps, apps, sharing, and permissions.', to: '/docs/toolkits/arcgis-online', colour: 'orange' },
  { title: 'Place names', desc: 'Gazetteer, macrons, ingoa wāhi, local naming.', to: '/docs/data/place-names', colour: 'red' },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Māori GIS"
      description="A practical Māori GIS guide for day to day mahi in Aotearoa New Zealand."
    >
      <main>
        <section className="mgis-hero">
          <div className="container">
            <h1 className="mgis-hero__title">Māori GIS</h1>

            <p className="mgis-hero__subtitle">
              A practical GIS guide for Māori contexts in Aotearoa. Focused on real mahi, safe sharing, and clear
              decision support.
            </p>

            <div className="mgis-hero__buttons">
              <Link className="button button--primary button--lg" to="/docs/start">
                Start here
              </Link>
              <Link className="button button--outline button--lg" to="/docs/toolkits">
                Tools overview
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/data">
                NZ data sources
              </Link>
            </div>
          </div>
        </section>

        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--7">
              <h2>He aha tēnei</h2>

              <p>
                This site supports useful GIS work in Māori contexts without turning it into academic theory or software
                manuals. It is written in plain New Zealand English, with light te reo Māori, and focuses on practical,
                repeatable workflows.
              </p>

              <ul>
                <li>Choose tools that fit your kaupapa, team, and constraints</li>
                <li>Build workflows that keep control of your data</li>
                <li>Use Aotearoa datasets confidently, with sources and dates checked</li>
                <li>Publish maps and stories without accidental oversharing</li>
              </ul>
            </div>

            <div className="col col--5">
              <h3>A good starting pathway</h3>
              <ol>
                <li>
                  <Link to="/docs/introduction">Introduction</Link>
                  <br />
                  What this guide is, who it is for, and how to use it.
                </li>
                <li>
                  <Link to="/docs/principles">Principles</Link>
                  <br />
                  Mana, responsibility, permissions, and safe sharing.
                </li>
                <li>
                  <Link to="/docs/toolkits">Tools overview</Link>
                  <br />
                  Choosing a tool chain that fits your mahi.
                </li>
                <li>
                  <Link to="/docs/data">NZ data sources</Link>
                  <br />
                  Trusted datasets for Aotearoa.
                </li>
              </ol>
            </div>
          </div>

          <hr />

          <h2>Ngā hononga tere</h2>
          <p className="mgis-muted">Quick entry points for first clicks.</p>

          <div className="mgis-tiles">
            {quickTiles.map((t) => (
              <Link key={t.to} to={t.to} className={`mgis-tile mgis-tile--${t.colour}`}>
                <div className="mgis-tile__title">{t.title}</div>
                <div className="mgis-tile__desc">{t.desc}</div>
                <div className="mgis-tile__cta">Get started</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
