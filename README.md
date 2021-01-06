# Translation demo project

This is a demo project to showcase an approach for doing front-end translations of React applications.

The goal is to support pluralization as well as gendered translations (which are common to latin based languages like spanish, french, italian) in a way that most closely resembles a typical gettext based workflow.


Moving bits: 
* lioness components and functions for translation https://github.com/alexanderwallin/lioness
* react-gettext-parser to extract strings from js/jsx: https://github.com/marksteele/react-gettext-parser (forked from https://github.com/laget-se/react-gettext-parser to allow overriding contexts)
* gettext-parser to parse .po files into json https://github.com/smhg/gettext-parser
* Translation server https://www.mojito.global/

It automatically pulls strings to be translated out of the code and can push them to a translation server. It can also pull those translations back into the code and massage them back into a format consumable by React.


# Install Mojito

```
brew tap box/mojito
brew install mojito-cli
brew install mojito-webapp
mojito-webapp
```


# Installing test project

```
npm i 
mojito repo-create -n translation-demo -d "Translation demo project" -l "(fr-CA)->fr-FR" "(en-GB)" "(en-AU)" es-ES fr-FR -it PRINTF_LIKE
```

# Workflow

React components are created, where all strings that need to be translated are wrapped with the `<T>` component or translations functions, which implements translation.

Some examples:

```
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

        <p> <T
            message="Hello worldy world mc world face"
            context={person.gender}
          />  </p>
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
```


Run the NPM scripts.

## Extract translations from source

```
npm run trans:extract
```

## Push translation keys to translation server

```
npm run trans:push
```

Once translations are pushed, go to http://localhost:8080/, login (admin/ChangeMe), select the project and add missing translations.

## Pull translations from translation server

```
npm run trans:pull
```

## Update JSON translation files from .po files

```
npm run trans:update
```



# For other languages...

For PHP/Java/etc... xgettext can extract from strings from source in multiple languages. 

https://www.codeandweb.com/babeledit/tutorials/translation-with-gettext-and-php


# Other translation servers

I've looked at using Serge and Zing

https://evernote.github.io/zing

https://serge.io/

Setup looks much more complex before you get to a working system