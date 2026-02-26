import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Modern documentation</span>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title} Documentation
            </Heading>
            <p className={styles.heroLead}>
              Practical guides, setup playbooks, and references to help your
              team ship confidently. Start with Git setup or jump straight into
              the core docs.
            </p>
            <div className={styles.heroCtas}>
              <Link className="button button--primary button--lg" to="/docs/">
                Start here
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/guides/setup-git">
                Set up Git
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.heroPanelCard}>
              <Heading as="h3" className={styles.heroPanelTitle}>
                Quick wins
              </Heading>
              <div className={styles.heroPanelList}>
                <div className={styles.heroPanelItem}>
                  <div className={styles.heroPanelIcon}>1</div>
                  <div>
                    <strong>Git setup checklist</strong>
                    <div>
                      Initialize, configure identity, and push your first
                      commit.
                    </div>
                  </div>
                </div>
                <div className={styles.heroPanelItem}>
                  <div className={styles.heroPanelIcon}>2</div>
                  <div>
                    <strong>Project structure</strong>
                    <div>Organize docs with guides, tutorials, and FAQs.</div>
                  </div>
                </div>
                <div className={styles.heroPanelItem}>
                  <div className={styles.heroPanelIcon}>3</div>
                  <div>
                    <strong>Multi-language</strong>
                    <div>English and Bahasa Melayu out of the box.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Modern Documentation"
      description="Modern docs with quickstart guides, Git setup, and multilingual support.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
