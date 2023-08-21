import TopBar from "./TopBar";
import CardBar from "./CardBar";
import { useState } from "react";
import { basePrompt } from "../basePrompt";

export default function HealthPrompter() {
  const [inputLength, setInputLength] = useState(80);
  const [inputTemperature, setInputTemperature] = useState(80);
  const [confirmed, setConfirmed] = useState(false);
  const topBarHandler = (e) => {
    if (e.length) {
      setInputLength(e.length);
    }

    if (e.temperature) {
      setInputTemperature(e.temperature);
    }
  };

  const cardBarHandler = async (e) => {
    if (e.length > 0) {
      await generatePrompt(e);
    }
  };

  const generatePrompt = async (text) => {
    const prompt = { ...basePrompt };
    prompt.length = inputLength;
    prompt.temperature = inputTemperature;
    prompt.article = text;

    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(JSON.stringify(prompt));
      setConfirmed(true);
      setTimeout(() => setConfirmed(false), 1300);
    } else {
      console.log(prompt);
      alert("Clipboard API not available. Prompt logged to console.");
    }
  };

  return (
    <div>
      <TopBar
        onChange={topBarHandler}
        inputLength={inputLength}
        inputTemperature={inputTemperature}
      />
      <CardBar onChange={cardBarHandler} confirmed={confirmed} />
    </div>
  );
}
