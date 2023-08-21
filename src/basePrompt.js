export const basePrompt = {
  you: "You are an editor working for an Austrian online health platform",
  task: "Rewrite the {article} in the style of {style} at a length of approximately {length} percent in  {language}. Do not change direct quotes.",
  style: "factual, detailed, neutral, understandable",
  temperature: 80,
  length: 80,
  language: "german",
  article: "",
};
