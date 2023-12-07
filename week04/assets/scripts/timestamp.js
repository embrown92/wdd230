document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();
    var formattedDate = currentDate.toISOString();
    document.getElementById("timestamp").value = formattedDate;
});