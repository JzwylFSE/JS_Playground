import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/index';
import RockPaperScissors from './Rock-Paper-Scissors/index';
import CounterProgram from './Counter-Program/index';
import RandomNumberGenerator from './Random-Number-Generator/index';
import DiceRoller from './Dice-Roller/index';
import DigitalClock from './Digital-Clock';
import Stopwatch from './Stopwatch';
import WeatherApp from './Weather-App';
import Calculator from './Calculator';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Rock-Paper-Scissors" element={<RockPaperScissors />} />
                <Route path="/Counter-Program" element={<CounterProgram />} />
                <Route path="/Random-Number-Generator" element={<RandomNumberGenerator />} />
                <Route path="/Dice-Roller" element={<DiceRoller />} />
                <Route path="/Digital-Clock" element={<DigitalClock />} />
                <Route path="/Stopwatch" element={<Stopwatch />} />
                <Route path="/Weather-App" element={<WeatherApp />} />
                <Route path="/Calculator" element={<Calculator />} />
            </Routes>
        </Router>
    );
}
