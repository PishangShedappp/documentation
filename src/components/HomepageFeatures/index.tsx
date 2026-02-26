import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  href: string;
  kicker: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Get started fast',
    kicker: 'Quickstart',
    description: (
      <>
        Learn the basics, set up your docs, and ship your first page in minutes.
      </>
    ),
    href: '/docs/',
  },
  {
    title: 'Git setup guide',
    kicker: 'Guide',
    description: (
      <>
        Initialize a repository, configure author info, and push your first
        commit with confidence.
      </>
    ),
    href: '/docs/guides/setup-git',
  },
  {
    title: 'Write better docs',
    kicker: 'Best practices',
    description: (
      <>
        Structure your content with tutorials, how-tos, and references that
        scale with your team.
      </>
    ),
    href: '/docs/',
  },
];

function Feature({title, description, href, kicker}: FeatureItem) {
  return (
    <Link className={styles.featureCard} to={href}>
      <span className={styles.featureKicker}>{kicker}</span>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
      <span className={styles.featureLink}>Learn more -&gt;</span>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
