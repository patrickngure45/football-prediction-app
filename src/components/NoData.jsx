import React from 'react';
import { MagicSpinner } from 'react-spinners-kit';

import './noData.css';

const NoData = () => {
  return (
    <section className="welcomeContainer">
      <h1>😞 OOOPS!!!</h1>
      <p>
        Sorry for the inconvenience, currently working on the analysis, <br />{' '}
        please check again later
      </p>
      <MagicSpinner />
    </section>
  );
};

export default NoData;
