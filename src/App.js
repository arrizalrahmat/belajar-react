import React from 'react';
import { useApp } from './App-hook';

const App = () => {
  const {
    username,
    fullName: namaPenuh,
    hobbies,
    newHobby,
    setNewHobby,
    setUserData,
    userData,
    setFullName,
    handleAddHobby,
  } = useApp();

  return (
    <div>
      <p>
        username: {username} fullName: {namaPenuh}
      </p>
      <ul>
        {hobbies.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
      <input
        type="text"
        value={newHobby}
        onChange={(e) => setNewHobby(e.target.value)}
      />
      <button onClick={() => handleAddHobby()}>
        Add hobby
      </button>
      <p>new Hobby: {newHobby}</p>
      <p>{JSON.stringify(userData)}</p>
      <button
        onClick={() =>
          setUserData({
            ...userData,
            age: userData.age + 1,
          })
        }
      >
        +
      </button>
      <button
        onClick={() => setFullName(namaPenuh.toUpperCase())}
      >
        CAPITALIZE NAME
      </button>
    </div>
  );
};

export default App;
