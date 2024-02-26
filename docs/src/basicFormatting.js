function getSelectedText() {
  var textarea = document.getElementById("textarea-main");

  if (textarea.selectionStart != undefined) {
    var startPos = textarea.selectionStart;
    var endPos = textarea.selectionEnd;
    var selectedText = textarea.value.substring(startPos, endPos);
    return selectedText;
  } else {
    return 0;
  }
}

// Html Components
var textArea = document.getElementById("textarea-main");

let buttonUpper = document.getElementById("toUpper");
buttonUpper.addEventListener("click", function () {
  if (getSelectedText() != 0) {
    let selectedText = getSelectedText();
    let text = textArea.value;
    text = text.replace(selectedText, selectedText.toUpperCase());
    textArea.value = text;
  } else {
    textArea.value = textArea.value.toUpperCase();
  }
});

let buttonLower = document.getElementById("toLower");
buttonLower.addEventListener("click", function () {
  if (getSelectedText() != 0) {
    let selectedText = getSelectedText();
    let text = textArea.value;
    text = text.replace(selectedText, selectedText.toLowerCase());
    textArea.value = text;
  } else {
    textArea.value = textArea.value.toLowerCase();
  }
});

let buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", function () {
  if (getSelectedText() != 0) {
    let selectedText = getSelectedText();
    let text = textArea.value;
    text = text.replace(selectedText, "");
    textArea.value = text;
  } else {
    textArea.value = "";
  }
});

let buttonFormat = document.getElementById("formatSpace");
buttonFormat.addEventListener("click", function () {
  if (getSelectedText() != 0) {
    let selectedText = getSelectedText();
    let text = textArea.value;
    text = text.replace(selectedText, selectedText.replace(/ +/g, " "));
    text = text.replace(selectedText, selectedText.replace(/\n\s*\n/g, "\n"));
  } else {
    textArea.value = text;
    text = text.replace(selectedText, selectedText.replace(/ +/g, " "));
    text = text.replace(selectedText, selectedText.replace(/\n\s*\n/g, "\n"));
  }
});

let buttonCapitalize = document.getElementById("capitalize");
buttonCapitalize.addEventListener("click", function () {
  let text = textArea.value;
  let sentences = text.split(".");

  let capitalizedSentences = sentences.map(function (sentence) {
    var trimmedSentence = sentence.trim();
    return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
  });

  var resulText = capitalizedSentences.join(". ");
  textArea.value = resulText;
});
