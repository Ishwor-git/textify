function getSelectedText() {
  var textarea = document.getElementById("textarea-main");

  if (textarea.selectionStart != undefined) {
    var startPos = textarea.selectionStart;
    var endPos = textarea.selectionEnd;
    var selectedText = textArea.value.substring(startPos, endPos);
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
    textArea.value = text;
  } else {
    textArea.value = textArea.value.toUpperCase();
  }
});

let buttonLower = document.getElementById("toLower");
buttonLower.addEventListener("click", function () {
  if (getSelectedText() != 0) {
    let selectedText = getSelectedText();
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
    text = text.replace(selectedText, selectedText.replace(/\n\s*\n/g, "\n\n"));
    textArea.value = text;
  } else {
    text = textArea.value;
    text = text.replace(text, text.replace(/ +/g, " "));
    text = text.replace(text, text.replace(/\n\s*\n/g, "\n\n"));
    textArea.value = text;
  }
});

let buttonCapitalize = document.getElementById("capitalize");
buttonCapitalize.addEventListener("click", function () {
  let text = textArea.value;
  let finalText = text.replace(
    /([.!?]\s|\n)([a-z])/g,
    (match, separator, letter) => {
      return separator + letter.toUpperCase();
    }
  );
  textArea.value = finalText;
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
  textArea.value = text;
});
