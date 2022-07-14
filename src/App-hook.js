import { useState, useEffect } from 'react';

export const useApp = () => {
  const [username, setUsername] = useState('arrizalrahmat');

  const [fullName, setFullName] = useState(
    'Arrizal Rahmat Kurniawan'
  );

  const [userData, setUserData] = useState({
    address: 'Jakarta',
    age: 17,
  });

  const [hobbies, setHobbies] = useState(['coding']);

  const [newHobby, setNewHobby] = useState('');

  const doSomething = () => {
    // prosesnya panjang misalnya
    console.log(
      'useEffect berjalan, agenya:',
      userData.age
    );
  };

  const handleAddHobby = () => {
    setHobbies([...hobbies, newHobby]); // destruct array / object

    setNewHobby('');
  };

  useEffect(() => {
    console.log('do something on mount');
  }, []);

  useEffect(() => {
    doSomething();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.age]);

  return {
    username,
    fullName,
    hobbies,
    newHobby,
    userData,
    handleAddHobby,
    setNewHobby,
    setHobbies,
    setUserData,
    setFullName,
  };
};
