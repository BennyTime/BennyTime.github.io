import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A comprehensive guide to the world of Vaeloran - D&D campaign setting">
      <HomepageHeader />
      <main>
        <div className="container" style={{padding: '4rem 0', maxWidth: '800px'}}>
          <div className="row">
            <div className="col" style={{textAlign: 'center'}}>
              <p style={{
                fontSize: '1.3rem', 
                lineHeight: '1.8', 
                fontStyle: 'italic',
                marginBottom: '2rem',
                color: 'var(--ifm-color-emphasis-700)'
              }}>
                "The world was broken. Not by blade or spell, but by ambition and divine wrath. 
                The Shard War tore the very fabric of reality, scattering history like ash on the wind."
              </p>
              
              <div style={{
                textAlign: 'left',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                <p>
                  <strong>Before the Shards, there was unity.</strong> Before the war, there was peace. 
                  But those days are lost—remembered only in fragments, whispers, and half-truths 
                  buried beneath centuries of silence.
                </p>
                <p>
                  <strong>Now, the world is divided.</strong> Nine nations stand apart, each shaped 
                  by an Elemental Shard's power. Each guards its secrets. Each tells a different story 
                  of what came before.
                </p>
                <p>
                  <strong>History has been destroyed.</strong> The records burned. The truth erased. 
                  The past reduced to ash and legend.
                </p>
                <p style={{marginTop: '2rem', fontSize: '1.2rem', fontWeight: '500'}}>
                  In this fractured world, you must find your place. Explore distant lands and forgotten eras. 
                  Uncover what was lost. Discover what truly happened when the world broke.
                </p>
              </div>

              <div style={{
                borderTop: '2px solid var(--ifm-color-emphasis-300)',
                paddingTop: '2rem',
                marginTop: '3rem'
              }}>
                <p style={{fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-600)'}}>
                  Begin your journey through Vaeloran
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="docs/intro">
                  Explore the World
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
