import React from 'react';

import './noData.css';

const IsError = () => {
  return (
    <section className="welcomeContainer">
      <p>
        <div>😞😞😞😞</div>
        Sorry, we are experiencing technical difficulties at the moment,
        <br /> please try again later.
      </p>
    </section>
  );
};

export default IsError;
