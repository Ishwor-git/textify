function getSelectedText() {
  var textarea = document.getElementById("textarea-main");

  if (textarea.selectionStart != undefined) {
    var startPos = textarea.selectionStart;
    var endPos = textarea.selectionEnd;
    var selectedText = textarea.textContent.substring(startPos, endPos);
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
    text = text.replace(selectedText, selectedText.toUpperCase());
    textArea.textContent = text;
  } else {
    textArea.textContent = textArea.textContent.toUpperCase();
  }
});

let buttonLower = document.getElementById("toLower");
buttonLower.addEventListener("click", function () {
  if (getSelectedText() != 0) {
    let selectedText = getSelectedText();
    text = text.replace(selectedText, selectedText.toLowerCase());
    textArea.textContent = text;
  } else {
    textArea.textContent = textArea.textContent.toLowerCase();
  }
});

let buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", function () {
  if (getSelectedText() != 0) {
    let selectedText = getSelectedText();
    text = text.replace(selectedText, "");
    textArea.textContent = text;
  } else {
    textArea.textContent = "";
  }
});

let buttonFormat = document.getElementById("formatSpace");
buttonFormat.addEventListener("click", function () {
  if (getSelectedText() != 0) {
    let selectedText = getSelectedText();
    let text = textArea.textContent;
    text = text.replace(selectedText, selectedText.replace(/ +/g, " "));
    text = text.replace(selectedText, selectedText.replace(/\n\s*\n/g, "\n"));
    textArea.textContent = text;
  } else {
    text = textArea.textContent;
    text = text.replace(text, text.replace(/ +/g, " "));
    text = text.replace(text, text.replace(/\n\s*\n/g, "\n"));
    textArea.textContent = text;
  }
});

let buttonCapitalize = document.getElementById("capitalize");
buttonCapitalize.addEventListener("click", function () {
  let text = textArea.textContent;
  let finalText = text.replace(
    /([.!?]\s|\n)([a-z])/g,
    (match, separator, letter) => {
      return separator + letter.toUpperCase();
    }
  );
  textArea.textContent = finalText;
});

let buttonCopy = document.getElementById("copyContent");
buttonCopy.addEventListener("click", function () {
  textArea.select();
  document.execCommand("copy");
  textArea.removeAttribute("selected");
});

let buttonPaste = document.getElementById("pasteContent");
buttonPaste.addEventListener("click", async function () {
  let text = await navigator.clipboard.readText();
  textArea.textContent = text;
});
