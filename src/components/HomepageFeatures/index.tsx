import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'User-Friendly Token Info',
    description: (
      <>
        OpenTokenRegistry is used to display human-readable names, icons, ticker
        symbols, and other token information in many Bitcoin Cash wallets, block
        explorers, indexers, and other software.
      </>
    ),
  },
  {
    title: 'Free to List, Free to Use',
    description: (
      <>
        The registry is volunteer-maintained by active members of the Bitcoin
        Cash community. It's free to use in your software, and there are no fees
        to list new tokens or update token information.
      </>
    ),
  },
  {
    title: 'Open, Transparent Verification',
    description: (
      <>
        OpenTokenRegistry is maintained and reviewed in transparent,
        collaborative process. All discussion is public, and changes require
        acceptance by multiple known contributors.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
