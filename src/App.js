import React, { useState } from "react";
import { LionessProvider, T } from 'lioness'

const messages = require('./translations/messages.json');

export const App = () => {
  const people = [{
    name: "Mark",
    gender: "male"
  },
  {
    name: "Sally",
    gender: "female"
  },
  {
    name: "Harry",
    gender: "male"
  },
  {
    name: "Jill",
    gender: "female"
  }
]
  const [locale, setLocale] = useState('en_US');
  const [person, setPerson] = useState(people[Math.floor(Math.random() * people.length)]);
  const [numPotatoes, setNumPotatoes] = useState(1);

  return (
    <LionessProvider messages={messages} locale={locale}>
    <div>
    <h1><T>Potato inventory</T></h1>
    <p>
      
            <T
            message="Dear {{ name }}, there is one potato left"
            messagePlural="Dear {{ name }}, there are {{ count }} potatoes left"
            count={numPotatoes}
            name={person.name}
            context={person.gender}
          />  
</p>
<p>
        <T message="Buy more potatoes {{ link:here }}!" link={<a href="http://potatoes.com/buy" />} context={person.gender} />
        </p>
      <p>
        <button onClick={() => {setPerson(people[Math.floor(Math.random() * people.length)])}}>Change Person</button>
        <button onClick={() => {setNumPotatoes(Math.round(Math.random() * 3))}}>change potatoes</button>
      </p>
      <p>
        <button onClick={() => {setLocale('en_US')}}>English</button>
        <button onClick={() => {setLocale('fr_FR')}}>French</button>
        <button onClick={() => {setLocale('es_ES')}}>Spanish</button>
      </p>
    </div>
    </LionessProvider>
  )
}