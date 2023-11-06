import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function FriendsListApp() {
  const [friendName, setFriendName] = useState('');
  const [friendsList, setFriendsList] = useState([]);

  const handleInputChange = (event) => {
    setFriendName(event.target.value);
  };

  const handleAddFriend = () => {
    if (friendName.trim() !== '') {
      setFriendsList([...friendsList, friendName]);
      setFriendName('');
    }
  };

  const handleClearText = () => {
    setFriendName('');
  };

  return (
    <div>
      <h1>My Friends List</h1>
      <input type="text" placeholder="Enter friend's name" value={friendName} onChange={handleInputChange} />
      <button onClick={handleAddFriend}>Add Friend</button>
      <button onClick={handleClearText}>Clear</button>

      <h2>Friends:</h2>
      <ul>
        {friendsList.map((friend, index) => (
          <p key={index}>{friend}</p>
        ))}
      </ul>
    </div>
  );
}

export default FriendsListApp;
