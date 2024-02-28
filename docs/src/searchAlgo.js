let buttonSearch = document.getElementById("searchText");
buttonSearch.addEventListener("click", function () {
  const searchInp = document.getElementById("searchInput").value;
  let textInp = document.getElementById("textarea-main");
  text = textInp.textContent;
  textInp.innerHTML = text;
  if (searchInp.trim() !== "") {
    console.log("searchInp", searchInp);
    const searchRegex = new RegExp(searchInp, "gi");
    let searchedText = text.replace(
      searchRegex,
      (match) =>
        `<span class="text-orange-600 underline underline-offset-4 text-base font-semibold">${match}</span>`
    );
    textInp.innerHTML = searchedText;
  }
});
