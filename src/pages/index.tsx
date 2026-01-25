import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

type CardProps = {
  to: string;
  title: string;
  description: string;
};

function Card({ to, title, description }: CardProps) {
  return (
    <Link className={styles.card} to={to}>
      <div className={styles.cardInner}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{description}</p>
      </div>
    </Link>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Māori GIS"
      description="A practical GIS mapping guide for people working in iwi and Māori communities"
    >
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>He aratohu mahi, a practical guide</p>
          <h1 className={styles.heroTitle}>Māori GIS</h1>
          <p className={styles.heroSubtitle}>
            A practical GIS mapping guide for people working in iwi and Māori communities.
          </p>

          <div className={styles.ctaRow}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Start here
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/getting-started/tools">
              Tools overview
            </Link>
            <Link className="button button--secondary button--outline button--lg" to="/docs/data/nz-data">
              NZ data sources
            </Link>
          </div>

          <p className={styles.heroNote}>
            Plain New Zealand English, light te reo Māori, practical tasks, and safe approaches to sharing.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.h2}>He aha tēnei, what this guide is</h2>
          <div className={styles.twoCol}>
            <div>
              <p className={styles.lead}>
                This site helps you do useful GIS work in Māori contexts without turning it into academic theory or software training.
                It focuses on day to day mahi such as finding data, building clear maps, and sharing outputs safely.
              </p>

              <ul className={styles.list}>
                <li>Choose tools that fit your kaupapa, team, and constraints</li>
                <li>Build a simple workflow that keeps control of your data</li>
                <li>Use public datasets in Aotearoa confidently</li>
                <li>Publish and share outputs without accidental oversharing</li>
              </ul>
            </div>

            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>A good starting pathway</h3>
              <ol className={styles.steps}>
                <li>
                  Read <Link to="/docs/intro">Introduction</Link>
                </li>
                <li>
                  Read <Link to="/docs/principles">Principles and responsibilities</Link>
                </li>
                <li>
                  Choose a tool set in <Link to="/docs/getting-started/tools">Tools overview</Link>
                </li>
                <li>
                  Build your data pack using <Link to="/docs/data/nz-data">NZ data sources</Link>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Ngā hononga tere, quick links</h2>
          <div className={styles.grid}>
            <Card
              to="/docs/getting-started/tools"
              title="Tools overview"
              description="How QGIS, ArcGIS Pro, ArcGIS Online, and Google Earth are used in Aotearoa, and when each fits."
            />
            <Card
              to="/docs/getting-started/qgis"
              title="QGIS"
              description="Free desktop GIS for offline work, analysis, and careful preparation of data and outputs."
            />
            <Card
              to="/docs/getting-started/arcgis-online"
              title="ArcGIS Online"
              description="Web maps, apps, StoryMaps, and dashboards with practical advice on sharing and permissions."
            />
            <Card
              to="/docs/data/nz-data"
              title="NZ data sources"
              description="High value national and local sources, plus practical ways to download or connect via services."
            />
            <Card
              to="/docs/data/maori-land"
              title="Māori land"
              description="Working with Māori land information safely, and building a whenua context map without oversharing."
            />
            <Card
              to="/docs/data/place-names"
              title="Place names"
              description="Using official names, macrons, and local naming in ways that are clear and respectful."
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>He kōrero mō te mana, responsibility and care</h2>
          <div className={styles.callout}>
            <p className={styles.calloutText}>
              GIS tools make copying and sharing easy. Keep a clear boundary between public outputs and internal source data.
              Record permissions, keep dates with datasets, and use the least sensitive version that still meets the kaupapa.
            </p>
            <div className={styles.calloutLinks}>
              <Link className="button button--secondary button--sm" to="/docs/principles">
                Read principles
              </Link>
              <Link className="button button--secondary button--outline button--sm" to="/docs/getting-started/tools">
  Tools overview
</Link>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
