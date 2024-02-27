countWords = (text) => {
  if (text === "") {
    return 0;
  }
  text = text.replace(/ +/g, " ");
  return text.split(" ").length;
};

countSentences = (text) => {
  if (text === "") {
    return 0;
  }
  const sentenceEndings = [".", "!", "?"];
  text = text.replace(/\n\s*\n/g, "\n");
  text = text.replace(/ +/g, " ");
  text = text.replace(/\.+/g, ".");
  const sentences = text.split(
    new RegExp(`[${sentenceEndings.join("")}]\\s*|\\n+`)
  );
  const filteredSentences = sentences.filter(
    (sentence) => sentence.trim() !== ""
  );
  return filteredSentences.length;
};

countParagraphs = (text) => {
  text = text.replace(/\n\s*\n/g, "\n");
  return text.split("\n").length;
};

countCharacters = (text) => {
  return text.length;
};

var textArea = document.getElementById("textarea-main");
textArea.addEventListener("input", function () {
  let text = textArea.value;
  let words = countWords(text);
  let sentences = countSentences(text);
  let paragraphs = countParagraphs(text);
  let characters = countCharacters(text);
  let Info = [characters, words, sentences, paragraphs];
  displayGrid = document.getElementById("viewInfo").children;
  for (let i = 0; i < displayGrid.length; i++) {
    displayGrid[i].innerText = `${displayGrid[i].id}: ${Info[i]}`;
  }
});
