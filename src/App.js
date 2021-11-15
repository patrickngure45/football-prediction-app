import axios from 'axios';
import { useState, useEffect } from 'react';
import GameCard from './components/GameCard';
import { PushSpinner } from 'react-spinners-kit';

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NoData from './components/NoData';
import IsError from './components/IsError';

const BASE_URL = 'https://ngure-predictions.herokuapp.com/';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (day) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${BASE_URL}${day}`);
      setIsLoading(false);
      setIsError(false);
      setData(data.data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchData('');
  }, []);
  return (
    <main className="container">
      <Navbar />
      <div className="daysContainer">
        <div className="btnContainer">
          <button type="button" onClick={() => fetchData('')}>
            Today
          </button>
          <button type="button" onClick={() => fetchData('yesterday')}>
            Yesterday
          </button>
          <button type="button" onClick={() => fetchData('tomorrow')}>
            Tomorrow
          </button>
        </div>
      </div>
      {isError && <IsError />}
      {isLoading ? (
        <div className="spinner">
          <PushSpinner size={50} color="#4b4c56" />
        </div>
      ) : (
        <>
          {data.map((d) => (
            <GameCard key={d.id} game={d} />
          ))}
        </>
      )}
      {data.length < 1 && !isLoading && !isError && (
        <div>
          <NoData />
        </div>
      )}
      <Footer />
    </main>
  );
}
export default App;
