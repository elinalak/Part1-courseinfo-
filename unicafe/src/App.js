import { useState } from "react";

const Header = ({ name }) => <h2>{name}</h2>;

const AllButton = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const Button = ({ clickGood, clickNeutral, clickBad }) => {
  return (
    <>
      <AllButton onClick={clickGood} text="good" />
      <AllButton onClick={clickNeutral} text="neutral" />
      <AllButton onClick={clickBad} text="bad" />
    </>
  );
};

const StatisticLine = ({ value, text, measurament }) => {
  return (
    <p>
      {text} {value} {measurament}
    </p>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const average = (good * 1 + bad * -1 + neutral * 0) / (good + bad + neutral);
  const positive = (good / (good + bad + neutral)) * 100;
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} measurament="%" />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickGood = () => setGood(good + 1);

  const clickNeutral = () => setNeutral(neutral + 1);

  const clickBad = () => setBad(bad + 1);

  if (good || neutral || bad)
    return (
      <div>
        <Header name="give feedback" />
        <Button
          clickBad={clickBad}
          clickGood={clickGood}
          clickNeutral={clickNeutral}
        />
        <Header name="statistics" />
        <Statistics bad={bad} good={good} neutral={neutral} />
      </div>
    );
  else
    return (
      <div>
        <Header name="give feedback" />
        <Button
          clickBad={clickBad}
          clickGood={clickGood}
          clickNeutral={clickNeutral}
        />
        <Header name="statistics" />
      </div>
    );
};

export default App;
