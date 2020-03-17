// Daniel Jaegers
// DAJ6GD
// 2/26/2020
// Challenge 6: To-Do List S20

document.getElementById("addForm").onsubmit = function(e) {
  // https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  handleSubmit();
};

function handleSubmit() {
  // Backup form validation
  if (validateForm()) {
    title = document.getElementById("title");
    type = document.getElementById("type");
    date = document.getElementById("date");

    var tableObject = document.getElementById("todoListBody");

    // https://www.w3schools.com/jsref/met_table_insertrow.asp
    var row = tableObject.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = title.value;
    cell2.innerHTML = type.value;
    cell3.innerHTML = date.value;
    cell4.innerHTML = '<i class="fas fa-check-circle"></i>';

    // <input type="checkbox" />

    // https://www.w3schools.com/jsref/event_ondblclick.asp
    cell1.ondblclick = function() {
      // https://www.w3schools.com/js/js_popup.asp
      var newTitle = window.prompt("Enter a new title:", cell1.innerHTML);

      if (newTitle == null || newTitle == "") {
        window.alert("The title was not changed.");
      } else {
        cell1.innerHTML = newTitle;
      }
    };

    // https://www.w3schools.com/jsref/met_table_deleterow.asp
    cell4.onclick = function() {
      document.getElementById("todoList").deleteRow(this.parentNode.rowIndex);
    };

    sortTable();
    clearForm();
  }
}

// This is the backup validation function.
// The required attribute already validates the form.
function validateForm() {
  formObject = document.getElementById("addForm");

  for (var i = 0; i < formObject.elements.length; i++) {
    if (
      formObject.elements[i].value === "" &&
      formObject.elements[i].hasAttribute("required")
    ) {
      document.getElementById("errorMessage").style.visibility = "visible";
      return false;
    }
  }

  return true;
}

// https://www.w3schools.com/jsref/met_form_reset.asp
function clearForm() {
  document.getElementById("addForm").reset();
  document.getElementById("errorMessage").style.visibility = "hidden";
}

// https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("todoList");
  switching = true;
  /* Make a loop that will continue until
    no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
      first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
        one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
function handleTheme() {
  document.body.classList.toggle("dark-mode");

  if (this.innerHTML == "Light") {
    this.innerHTML = "Dark";
  } else {
    this.innerHTML = "Light";
  }
}
