# Translation demo project

This is a demo project to showcase an approach for doing front-end translations of React applications.


Moving bits: 
* React T component https://github.com/Mojang/t-component
* Gettext parser to extract strings from js/jsx: https://github.com/laget-se/react-gettext-parser
* Transform po files back to Jed compatible json: https://github.com/mikeedwards/po2json
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
npm -i react-gettext-parser -g
mojito repo-create -n translation-demo -d "Translation demo project" -l "(fr-CA)->fr-FR" "(en-GB)" "(en-AU)" es-ES fr-FR -it PRINTF_LIKE
```

# Workflow

React components are created, where all strings that need to be translated are wrapped with the `<T>` component or `t() / useTranslation()` function, which implements translation.

# Similar approaches for React

https://github.com/alexanderwallin/lioness

# For other languages...

For PHP/Java/etc... xgettext can extract from strings from source in multiple languages. 

https://www.codeandweb.com/babeledit/tutorials/translation-with-gettext-and-php

