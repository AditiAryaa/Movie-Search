$(document).ready(function () {
  let apiKey = "a456c8a5";
  $("#movieForm").submit(function (event) {
    event.preventDefault();

    var movie = $("#movie").val();

    var result = "";

    var url = "http://www.omdbapi.com/?apikey=" + apiKey;

    $.ajax({
      method: "GET",
      url: url + "&t=" + movie,
      success: function (data) {
        console.log(data);
        result = `
        
        <img  class="img-thumnail"  src="${data.Poster}" />
        <i>${data.Title}</i>
        <i>${data.Released}</i>
        <i>${data.Runtime}</i>
        <i>${data.Genre}</i>
        <i>${data.Director}</i>
        <i>${data.Actors}</i>
        
        `;
        $("#result").html(result);
      },
    });
  });
});
