countWords = (text) => {
  if (text === "") {
    return 0;
  }
  const words = text.match(/\w+/g);
  return words.length;
};

countSentences = (text) => {
  if (text.trim() === "") {
    return 0;
  }

  const sentences = text.match(/\w[.!?](\s|$)/gm);

  return sentences ? sentences.length : 0;
};

countParagraphs = (text) => {
  if (text.trim() === "") {
    return 0;
  }
  if (text[-1] !== " " && text[-1] !== "\n") {
    text += "\n\n";
  }
  const paragraphs = text.match(/\n\s*\n/g);
  if (paragraphs != null) {
    return paragraphs.length;
  } else {
    return 0;
  }
};

countCharacters = (text) => {
  return text.length;
};

var textArea = document.getElementById("textarea-main");
textArea.addEventListener("input", function () {
  const text = textArea.value;
  const words = countWords(text);
  const sentences = countSentences(text);
  const paragraphs = countParagraphs(text);
  const characters = countCharacters(text);
  const Info = [characters, words, sentences, paragraphs];
  displayGrid = document.getElementById("viewInfo").children;
  for (let i = 0; i < displayGrid.length; i++) {
    displayGrid[i].innerText = `${displayGrid[i].id}: ${Info[i]}`;
  }
});
