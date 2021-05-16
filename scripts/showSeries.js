
// Flag
function mouseOutSortByName(sortbyTypeL) {
    if (sortbyTypeL=="name") {
      document.getElementById("sortby_name").className = "flag_selected";
    } else {
      document.getElementById("sortby_name").className = "flag_not_selected";
    }
}


// Flag
function mouseOutSortByScore(sortbyTypeL) {
    if (sortbyTypeL=="score") {
      document.getElementById("sortby_score").className = "flag_selected";
    } else {
      document.getElementById("sortby_score").className = "flag_not_selected";
    }
}