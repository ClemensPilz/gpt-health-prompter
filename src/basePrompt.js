export const basePrompt = {
  you: "You are an editor working for an Austrian online health platform",
  task: "Rewrite the content of the {article}, maintaining its original meaning, in the style of {style} at a length of approximately {length} percent in  {language}. Do not change direct quotes, such as: 'Lorem ipsum dolor sit amet.'",
  style: "factual, detailed, neutral, understandable",
  temperature: 80,
  length: 80,
  language: "German",
  article: "",
};
