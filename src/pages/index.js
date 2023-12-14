import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero--primary", styles.hero, styles.heroBanner)}>
      <div className={clsx("container", styles.heroInner, styles.heroBackgroundBanner)}>
        <img
          width="340px"
          // height='340px'
          alt="restu-logo"
          className={styles.heroLogo}
          src={useBaseUrl("/restu49-logo-dark-mode.png")}
        />
        
        {/* <img
          width="200px"
          // height='340px'
          alt="front-cover"
          className={styles.heroLogo}
          src={useBaseUrl("/restu49/01-cover-depan.jpg")}
        />
        <img
          width="200px"
          // height='340px'
          alt="back-cover"
          className={styles.heroLogo}
          src={useBaseUrl("/restu49/148-COVER-BELAKANG.jpg")}
        /> */}
        

        <Heading as="h1" className={styles.heroProjectTagline}>
          {siteConfig.title}
          <span className={styles.heroTitleTextHtml}>
            <p>Memori 2015 zaman KISAS anda kini di hujung jari.</p>
          </span>
        </Heading>
        <div className={styles.indexCtas}>
          <Link
            className="button button--secondary button--lg"
            to="/front-cover"
          >
            Terus ke majalah!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Memori 2015 zaman KISAS anda kini di hujung jari"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
