// src/pages/index.tsx
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const LINKS = {
  intro: '/docs/intro',
  principles: '/docs/principles',
  tools: '/docs/getting-started/tools',
  nzData: '/docs/data/nz-data-sources',
  qgis: '/docs/getting-started/qgis',
  arcgisOnline: '/docs/getting-started/arcgis-online',
  maoriLand: '/docs/data/maori-land',
  placeNames: '/docs/data/place-names',
  coreWorkflows: '/docs/mapping-work/core-workflows',
  taiao: '/docs/mapping-work/taiao',
  sites: '/docs/mapping-work/sites',
  climate: '/docs/taiao/climate-change-impacts',
};

type Card = {
  title: string;
  desc: string;
  to: string;
};

const startPathway: Card[] = [
  {
    title: 'Introduction',
    desc: 'What this guide is, who it is for, and how to use it.',
    to: LINKS.intro,
  },
  {
    title: 'Principles',
    desc: 'Mana, responsibility, permissions, and safe sharing.',
    to: LINKS.principles,
  },
  {
    title: 'Tools overview',
    desc: 'Choose a tool chain that fits your kaupapa and constraints.',
    to: LINKS.tools,
  },
  {
    title: 'NZ data sources',
    desc: 'Find trusted datasets for Aotearoa, quickly.',
    to: LINKS.nzData,
  },
];

const quickLinks: Card[] = [
  { title: 'QGIS', desc: 'Free desktop GIS for offline work and analysis.', to: LINKS.qgis },
  { title: 'ArcGIS Online', desc: 'Web maps, apps, groups, sharing, and controls.', to: LINKS.arcgisOnline },
  { title: 'Māori land', desc: 'Blocks, parcels, sources, and practical workflows.', to: LINKS.maoriLand },
  { title: 'Place names', desc: 'Gazetteer, macrons, ingoa wāhi, local names.', to: LINKS.placeNames },
  { title: 'Core workflows', desc: 'From kaupapa to outputs, repeatable and safe.', to: LINKS.coreWorkflows },
  { title: 'Taiao', desc: 'Environmental layers, monitoring, and kaitiakitanga.', to: LINKS.taiao },
  { title: 'Sites', desc: 'Site schemas, sensitivity, capture, and sharing.', to: LINKS.sites },
  { title: 'Climate impacts', desc: 'Sea level rise, hazards, and planning layers.', to: LINKS.climate },
];

const toolChains = [
  {
    title: 'Beginner',
    items: ['Google Earth Pro for kōrero', 'Google My Maps for simple sharing', 'QGIS for tidy datasets'],
  },
  {
    title: 'ArcGIS stack',
    items: ['ArcGIS Pro for prep', 'ArcGIS Online for sharing', 'Survey123 and Field Maps for field capture'],
  },
  {
    title: 'Offline first',
    items: ['QGIS + GeoPackage', 'Local basemaps and LDS downloads', 'Restricted layers separated by design'],
  },
];

function HeroButtons() {
  return (
    <div className={styles.heroButtons}>
      <Link className={clsx('button button--primary button--lg', styles.heroButton)} to={LINKS.intro}>
        Start here
      </Link>
      <Link className={clsx('button button--secondary button--lg', styles.heroButton)} to={LINKS.tools}>
        Tools overview
      </Link>
      <Link className={clsx('button button--outline button--lg', styles.heroButton)} to={LINKS.nzData}>
        NZ data sources
      </Link>
    </div>
  );
}

function CardGrid({ title, items }: { title: string; items: Card[] }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.h2}>{title}</h2>
        </div>
        <div className={styles.grid}>
          {items.map((c) => (
            <Link key={c.title} to={c.to} className={styles.card}>
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardDesc}>{c.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StartPathway() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.twoCol}>
          <div>
            <h2 className={styles.h2}>He aha tēnei</h2>
            <p className={styles.p}>
              A practical Māori GIS guide for day to day mahi. Plain New Zealand English, light te reo Māori,
              practical tasks, and safe approaches to sharing.
            </p>
            <ul className={styles.list}>
              <li>Choose tools that fit your kaupapa, team, and constraints.</li>
              <li>Build repeatable workflows that keep control of your data.</li>
              <li>Use Aotearoa datasets confidently, with sources and checked dates.</li>
              <li>Publish maps and stories without accidental oversharing.</li>
            </ul>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelTitle}>A good starting pathway</div>
            <ol className={styles.steps}>
              {startPathway.map((s) => (
                <li key={s.title} className={styles.step}>
                  <Link to={s.to} className={styles.stepLink}>
                    {s.title}
                  </Link>
                  <div className={styles.stepDesc}>{s.desc}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolChainPanel() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <h2 className={styles.h2}>Pick a tool chain that fits the mahi</h2>
        <p className={styles.p}>
          Most teams use a chain. Start simple, keep the kete tidy, and scale up when the kaupapa needs it.
        </p>

        <div className={styles.grid3}>
          {toolChains.map((t) => (
            <div key={t.title} className={styles.panelSoft}>
              <div className={styles.panelTitle}>{t.title}</div>
              <ul className={styles.list}>
                {t.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManaPanel() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.callout}>
          <div className={styles.calloutTitle}>He kōrero mō te mana, responsibility and care</div>
          <p className={styles.p}>
            GIS makes copying and sharing easy. Keep a clear boundary between public outputs and internal source data.
            Record permissions, keep checked dates with datasets, and use the least sensitive version that still meets
            the kaupapa.
          </p>
          <div className={styles.calloutButtons}>
            <Link className={clsx('button button--secondary', styles.smallButton)} to={LINKS.principles}>
              Read principles
            </Link>
            <Link className={clsx('button button--outline', styles.smallButton)} to={LINKS.tools}>
              Tools overview
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Māori GIS"
      description="A practical GIS mapping guide for people working in iwi and Māori communities."
    >
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.kicker}>He aratohu mahi</div>
            <h1 className={styles.heroTitle}>Māori GIS</h1>
            <p className={styles.heroSubtitle}>
              A practical GIS mapping guide for people working in iwi and Māori communities.
            </p>
            <HeroButtons />
            <div className={styles.heroMeta}>
              Plain New Zealand English, light te reo Māori, practical tasks, and safe approaches to sharing.
            </div>
          </div>
        </div>
      </header>

      <main>
        <StartPathway />
        <CardGrid title="Ngā hononga tere" items={quickLinks} />
        <ToolChainPanel />
        <ManaPanel />
      </main>
    </Layout>
  );
}
