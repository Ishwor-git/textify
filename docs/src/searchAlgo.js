let buttonSearch = document.getElementById("searchText");
buttonSearch.addEventListener("click", function () {
  //getting necessary elements from dom and storing them in variables
  const searchInp = document.getElementById("searchInput").value;
  let textInp = document.getElementById("textarea-main").value;
  let searchDisplay = document.getElementById("searchResult");
  searchDisplay.innerHTML = textInp;

  //searching for the input text in the main text
  if (searchInp.trim() !== "") {
    //if search input is not empty
    document.getElementById("overlay").classList.remove("hidden");

    //checking for whitespace in search input : presence of whitespace means that the input is a sentence
    whitespace = /\s/.test(searchInp);
    if (whitespace) {
      // generating regex for search input

      const searchRegex = new RegExp(searchInp, "gi");
      //replacing the search input with the same input by highlighting it

      let searchedText = textInp.replace(
        searchRegex,
        (match) =>
          `<span class="text-orange-500 underline underline-offset-4 text-base font-semibold">${match}</span>`
      );
      searchDisplay.innerHTML = searchedText;
    }
    //if search input is a single word
    else {
      //generating regex for search input
      const searchRegex = new RegExp(`\\b${searchInp}\\b`, "gi");

      //replacing the search input with the same input by highlighting it
      let searchedText = textInp.replace(
        searchRegex,
        (match) =>
          `<span class="text-orange-500 underline underline-offset-4 text-base font-semibold">${match}</span>`
      );
      searchDisplay.innerHTML = searchedText;
    }
  }
});
