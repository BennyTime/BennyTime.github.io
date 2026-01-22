import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function BlogIndex() {
  return (
    <Layout
      title="Campaign Log"
      description="Session notes and campaign updates for The Grand Divide">
      <div className="container" style={{padding: '4rem 0', maxWidth: '800px'}}>
        <div style={{textAlign: 'center'}}>
          <h1>Campaign Log</h1>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: 'var(--ifm-color-emphasis-700)',
            marginBottom: '3rem'
          }}>
            Chronicles of adventure in the world of Vaeloran
          </p>
        </div>

        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          borderRadius: '8px',
          marginTop: '2rem'
        }}>
          <h2 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
            The Journey Begins Soon
          </h2>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: 'var(--ifm-color-emphasis-700)',
            marginBottom: '2rem'
          }}>
            Session notes and campaign updates will be posted here as the adventure unfolds.
            Each entry will document the party's discoveries, encounters, and progress through
            the mysteries of Vaeloran.
          </p>
          <Link
            className="button button--primary button--lg"
            to="docs/intro">
            Explore the World
          </Link>
        </div>
      </div>
    </Layout>
  );
}
