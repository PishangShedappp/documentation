import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from '@site/src/pages/index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Dokumentasi moden</span>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title} Dokumentasi
            </Heading>
            <p className={styles.heroLead}>
              Panduan praktikal, playbook persediaan, dan rujukan untuk membantu
              pasukan bergerak yakin. Mulakan dengan panduan Git atau terus ke
              dokumentasi utama.
            </p>
            <div className={styles.heroCtas}>
              <Link className="button button--primary button--lg" to="/ms/docs/">
                Mula di sini
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/ms/docs/guides/setup-git">
                Sediakan Git
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.heroPanelCard}>
              <Heading as="h3" className={styles.heroPanelTitle}>
                Ringkas dan pantas
              </Heading>
              <div className={styles.heroPanelList}>
                <div className={styles.heroPanelItem}>
                  <div className={styles.heroPanelIcon}>1</div>
                  <div>
                    <strong>Senarai semak Git</strong>
                    <div>
                      Mulakan repo, tetapkan identiti, dan tolak komit pertama.
                    </div>
                  </div>
                </div>
                <div className={styles.heroPanelItem}>
                  <div className={styles.heroPanelIcon}>2</div>
                  <div>
                    <strong>Struktur projek</strong>
                    <div>Susun docs dengan panduan, tutorial, dan FAQ.</div>
                  </div>
                </div>
                <div className={styles.heroPanelItem}>
                  <div className={styles.heroPanelIcon}>3</div>
                  <div>
                    <strong>Pelbagai bahasa</strong>
                    <div>Inggeris dan Bahasa Melayu tersedia.</div>
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
      title="Dokumentasi Moden"
      description="Dokumentasi moden dengan panduan pantas, setup Git, dan sokongan pelbagai bahasa.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
