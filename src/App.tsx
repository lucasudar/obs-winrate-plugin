import './App.css';
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {configSlice} from "./store/slices/configSlice";
import {useEffect, useState} from "react";

function App() {
  const {win, lose} = useAppSelector(state => state.config)
  const [winRate, setWinRate] = useState(0)
  const dispatch = useAppDispatch();

  useEffect(() => {
    const totalGames = win + lose;
    const winRate = totalGames === 0 ? 0 : (win / totalGames) * 100;
    setWinRate(winRate)
  }, [win, lose])

  const onWinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWin = parseInt(e.target.value, 10) || 0;
    dispatch(configSlice.actions.setWin(newWin))
  }

  const onLoseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLose = parseInt(e.target.value, 10) || 0;
    dispatch(configSlice.actions.setLose(newLose))
  }

  const onReset = () => {
    dispatch(configSlice.actions.reset())
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => input.value = '')
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Dock for OBS:
        </p>
        <input onChange={onWinChange} placeholder="set wins"/>
        <input onChange={onLoseChange} placeholder="set lose"/>
        <button onClick={onReset}>reset</button>
        <p>
          Win Rate: {winRate.toFixed(2)}%
        </p>
      </header>
    </div>
  );
}

export default App;
