import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = () => (
  <ContentLoader
    className="Pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#fdfcfc"
    foregroundColor="#efefef"
  >
    <circle cx="140" cy="127" r="125" />
    <rect x="0" y="266" rx="5" ry="5" width="280" height="23" />
    <rect x="0" y="310" rx="5" ry="5" width="280" height="88" />
    <rect x="128" y="406" rx="20" ry="20" width="152" height="45" />
    <rect x="0" y="414" rx="5" ry="5" width="95" height="30" />
  </ContentLoader>
);

export default PizzaSkeleton;
