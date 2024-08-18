import React from "react";

const LanguageOption = ({
  selectedLanguage,
  setSelectedLanguage,
  languageName,
  languageValue,
}) => {
  return (
    <label htmlFor={languageValue}>
      <li className="flex gap-2 text-xl font-roboto font-medium text-gray-600">
        <input
          id={languageValue}
          type="radio"
          value={languageValue}
          checked={selectedLanguage === languageValue}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        />{" "}
        {languageName} {""}{" "}
        <img
          src={`../../public/${languageValue}.svg`}
          width={40}
          height={40}
          alt={`${languageName} Flag`}
        />
      </li>
    </label>
  );
};

export default LanguageOption;
