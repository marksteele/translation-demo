import React, { useState } from "react";
import { LionessProvider, T } from 'lioness'

const messages = require('./translations/messages.json');

export const App = () => {
  const names = ["Mark", "Darth Vador", "Emperor Palpatine"]
  const [locale, setLocale] = useState('en_US');
  const [name, setName] = useState(names[Math.floor(Math.random() * names.length)]);
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
          name={name}
        />
</p>
<p>
        <T message="Buy more potatoes {{ link:here }}!" link={<a href="http://potatoes.com/buy" />} />
        </p>
      <p>
        <button onClick={() => {setName(names[Math.floor(Math.random() * names.length)])}}>change name</button>
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