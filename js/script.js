  var link = document.querySelector(".search-button");
  var searchForm = document.querySelector(".hotel-search");
  var date = searchForm.querySelector("#day-in");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    if (searchForm.classList.contains("hotel-search")) {
      searchForm.classList.add("hotel-search-invisible");
      searchForm.classList.remove("hotel-search");
    } else {
      searchForm.classList.add("hotel-search");
      searchForm.classList.remove("hotel-search-invisible");
    };
    date.focus();
  });
