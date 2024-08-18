import React, { useState } from "react";
import { OpenAI } from "openai";
import LanguageOption from "./LanguageOption";

const Hero = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [userPrompt, setUserPrompt] = useState("");
  const [error, setError] = useState("");
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const fetchChatCompletion = async () => {
    setLoading(true);
    if (selectedLanguage === "") {
      setError("Please Select a Language first");
      return;
    }
    if (userPrompt === "") {
      setError("Please Enter the text to Translate");
      return;
    }
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are Language Translater and Your Job is to translate the provided text to the specified language and Only provide the translated text.",
          },
          {
            role: "user",
            content: `Please just translate this text ${userPrompt} to ${selectedLanguage} language`,
          },
        ],
      });
      console.log(response);
      setTranslatedText(response.choices[0].message.content);
      // console.log(response.choices[0].message);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-12 mb-12">
        <div className="max-w-[460px] min-h-[480px] border-4 border-[#274274] shadow-[#274274] shadow-lg rounded-lg pb-10 ">
          {translatedText ? (
            <div>
              <h2 className="text-[#035A9D] font-bold font-roboto text-2xl text-center mt-8">
                Original text 👇
              </h2>
              <textarea
                cols="50"
                rows="3"
                className="text-[#333333] w-[410px] h-[120px] font-roboto font-medium border border-gray-300 rounded-lg bg-[#EFF0F4] resize-none focus:outline-none focus:border-transparent mx-6 mt-5 p-2"
                readOnly
                value={userPrompt}
              />

              <div>
                <h2 className="text-[#035A9D] font-bold font-inter text-2xl text-center mt-4">
                  Your translation 👇
                </h2>
                <p className="text-[#333333] font-roboto font-medium border border-gray-300 rounded-lg bg-[#EFF0F4] focus:outline-none focus:border-transparent mx-6 mt-5 p-2">
                  {translatedText}
                </p>
                <button
                  className="bg-[#035A9D] w-[410px] text-white text-center p-2 rounded-md transition transform hover:bg-[#0f4f80] font-roboto font-md mt-10 mx-5"
                  onClick={() => setTranslatedText("")}
                >
                  Translate More
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-[#035A9D] font-bold font-roboto text-2xl text-center mt-8">
                Text to Translate 👇
              </h2>
              <textarea
                placeholder="How are you?"
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                className="text-[#333333] w-[410px] h-[120px] font-roboto font-medium border border-gray-300 rounded-lg bg-[#EFF0F4] resize-none focus:outline-none focus:border-transparent mx-6 mt-5 p-2"
              />
              <div>
                <h2 className="text-[#035A9D] font-bold font-roboto text-2xl text-center mt-4">
                  Select language 👇
                </h2>
                <ul className="flex flex-col gap-2 mt-4 mx-8">
                  <LanguageOption
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    languageName="French"
                    languageValue="french"
                  />
                  <LanguageOption
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    languageName="Spanish"
                    languageValue="spanish"
                  />
                  <LanguageOption
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    languageName="Japanese"
                    languageValue="japanese"
                  />
                  <LanguageOption
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    languageName="Urdu"
                    languageValue="urdu"
                  />
                  <LanguageOption
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    languageName="Arabic"
                    languageValue="arabic"
                  />
                  <LanguageOption
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    languageName="Turkish"
                    languageValue="turkish"
                  />
                </ul>
                {error && <p className="text-red-500 mx-8 mt-3">{error}</p>}
                <div className="flex items-center mt-6">
                  <button
                    className="bg-[#035A9D] w-[410px] text-white m-auto text-center p-2 rounded-md transition transform hover:bg-[#0f4f80] font-roboto font-md"
                    onClick={fetchChatCompletion}
                    disabled={loading}
                  >
                    {loading ? "Translating..." : "Translate"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
