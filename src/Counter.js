import React, {useState, useRef} from 'react'
import SavedTimes from './SavedTimes'

const Counter = () => {
    const [timer, setTimer] = useState(0)
    const [pause, setPause] = useState()
    const countRef = useRef(null)
    const [value, setValue] = useState("")
    const [start, setStart] = useState();

    const handleStart = () => {
        if (timer > 0 && pause===false){
          handleReset();
        }
        setStart(true);
        setPause(false);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
          }, 1000)
    }
    
    const handlePause = () => {
        clearInterval(countRef.current)
        setPause(true);
        setStart(false);
    }

    const handleReset = () => {
      clearInterval(countRef.current)
      setTimer(0)
      setStart(false);
    }

    const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} . ${getSeconds}`;
    }
    const handleChange = (e) => {
      setValue(e.target.value);
    }
    const resetInput = () => {
      setValue("")
    }

    return (
        <div className="Counter">
          <div className ="CounterItems"> 
            <div className ="CounterButtons">
              <button className="CounterButton" onClick={handleStart}>Start</button>
              <button className="CounterButton" onClick={handleReset}>Stop</button>
              <button className="CounterButton" onClick={handlePause}>Pause</button>
            </div>
            <h1 className = "Time">{formatTime(timer)}</h1>
            <input className="InputField" value={value} onChange = {(e) => {handleChange(e)}}placeholder="Title"/>
            <div>
              {start === true && <p className="TimerStatus">Counting!</p>}
            </div>
          </div>
          <div className="SavedTimes">
            <SavedTimes time_data = {formatTime(timer)} title_data = {value} clickCallback = {resetInput} />
          </div>
        </div>
    );
}
export default Counter;