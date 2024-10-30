import { useState } from 'react';

export default function Greeting({greeting_info}) {

  const randomMessage = () => greeting_info.messages[(Math.floor(Math.random() * greeting_info.messages.length))];
  
  const [greeting, setGreeting] = useState(greeting_info.messages[0]);

  return (
    <div> 
      <h3>{greeting}! {greeting_info.heading_text}</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}