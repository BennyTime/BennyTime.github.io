import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Rich Lore & History',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore a world shaped by Elemental Shards and ancient conflicts. From the 
        Shard War to the present day, discover the events that forged the nations 
        of Vaeloran.
      </>
    ),
  },
  {
    title: 'Diverse Nations & Cultures',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Journey through 11 unique regions, each influenced by their Elemental Shard. 
        From the floating islands of Aerion Skydrift to the eternal darkness of the 
        Umbra Court.
      </>
    ),
  },
  {
    title: '16 Unique Races',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Create your character from homebrew races like the soul-guiding Aelvar, 
        the shapeshifting Plasari, or the construct Valken seeking their own identity.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
