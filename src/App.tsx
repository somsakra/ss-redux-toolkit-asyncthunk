import React, { useState, useEffect } from "react";
import "./App.css";
import { addAmount, increment } from "./features/counter/counter-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { getDog } from "./features/dogs/dogs-api-slice";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

function App() {
  // const [count, setCount] = useState(0);

  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);
  const getDogStage = useSelector((state: RootState) => state.dog);

  const handleClickCounter = () => {
    dispatch(increment());
  };
  const handleClickAdd3 = () => {
    dispatch(addAmount(3));
  };

  useEffect(() => {
    dispatch(getDog());
  }, []);

  if (getDogStage.loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <div>
        <p>{count}</p>
        <button onClick={handleClickCounter}> Counter</button>
        <button onClick={handleClickAdd3}>Add-3</button>
      </div>
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Picture</th>
          </thead>
          <tbody>
            {getDogStage.value.map((dog) => (
              <tr key={dog.id}>
                <td>{dog.name}</td>
                <td>
                  <img src={dog.image.url} height={"200"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
