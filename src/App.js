import React, { useEffect, useState } from "react";
import { T, useTranslation, TranslationProvider } from "@mojang/t-component";

const fetchMessages = async (locale: string) => {
  return (await fetch(`/translations/${locale}.json`)).json();
};

export const App = () => {
  const { t } = useTranslation();
  const [locale, setLocale] = useState('en_US');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    async function updateTranslation() {
      setTranslations(await fetchMessages(locale));
    }
    updateTranslation();
  }, [locale])

  return (
    <TranslationProvider translation={translations}>
    <div>
      <p><T>This text will be translated.</T></p>
      <p>
        <T
          placeholders={[
            "https://link",
          ]}
          isHTML
        >
          {`This text <a href='%1$s'>includes a link</a> to that will also be translated`}
        </T>
      </p>
      <p>
        {t("Texts can also be translated with the t function")}
      </p>
      <p>
        <button onClick={() => {setLocale('en_US')}}>English</button>
        <button onClick={() => {setLocale('fr_FR')}}>French</button>
        <button onClick={() => {setLocale('es_ES')}}>Spanish</button>
      </p>
    </div>
    </TranslationProvider>
  )
}