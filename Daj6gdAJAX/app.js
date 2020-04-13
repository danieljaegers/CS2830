$(document).ready(function () {
  OnloadContent();
});

function OnloadContent() {
  var options = [
    { content: "info" },
    { content: "classType" },
    { content: "currentAssignment", format: "xml" },
  ];

  for (var i = 0; i < options.length; i++) {
    let option = options[i];

    // console.log(option);

    $.get(
      "https://www.mizzouit.com/2830/challenge9/classInfo.php",
      option,
      function (data) {
        // console.log(data);
        switch (option.content) {
          case "info":
          case "classType":
            content = data;
            break;
          case "currentAssignment":
            var assignmentName = data.getElementsByTagName("assignmentName")[0]
              .innerHTML;
            var dueDateTimestamp = new Date(
              parseInt(
                data.getElementsByTagName("dueDateTimestamp")[0].innerHTML
              )
            );
            content = assignmentName + " is due on " + dueDateTimestamp;
            break;
        }

        $("#" + option.content).html(content);
      }
    );
  }
}

function officeHours(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  currentTab = document.getElementById(cityName);
  currentTab.style.display = "block";
  evt.currentTarget.className += " active";

  $.get(
    "https://www.mizzouit.com/2830/challenge9/classInfo.php",
    { content: "officeHours", format: "json", day: cityName },
    function (data) {
      // console.log(data);

      content = "<ul>";
      $.each(data.officeHours, function (k, v) {
        content += '<li>' + v.person + ' has office hours from ' + v.time + ' at ' + v.location + '</li>';
      });

      content += "</ul>";
      currentTab.innerHTML = content;
    }
  );
}