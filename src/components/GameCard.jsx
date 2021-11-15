import React from 'react';

import './gameCard.css';

const GameCard = ({ game }) => {
  return (
    <section className="gameContainer">
      <div className="headingContainer">
        <h4>{game.competition_cluster}</h4>
        <h5>{game.competition_name}</h5>
      </div>
      <div className="teamsContainer">
        <span>{game.home_team}</span> <strong>-</strong>{' '}
        <span>{game.away_team}</span>
      </div>
      <div className="oddsContainer">
        <p>
          Pick: <span>{game.prediction}</span>
        </p>
        <p>
          Odds: <span>{game.odds[game.prediction]}</span>
        </p>
      </div>
      <div className="prediction">
        <p>
          Results: <span>{game.result}</span>
        </p>
        <p>
          Outcome: <span>{game.status}</span>
        </p>
      </div>
    </section>
  );
};

export default GameCard;
