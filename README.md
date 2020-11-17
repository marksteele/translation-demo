# Translation demo project

This is a demo project to showcase an approach for doing front-end translations of React applications.

Moving bits: T component (which uses Jed), gettext-parser & react-gettext-parser, po2json and Mojito as the translation server.

It automatically pulls strings to be translated out of the code and can push them to a translation server. It can also pull those translations back into the code and massage them back into a format consumable by React.

```
npm i 
npm -i react-gettext-parser -g
```
