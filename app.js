$(function() {
  $("#add-movie").on("submit", function(e) {
    e.preventDefault();

    var title = $("#title").val();
    var rating = $("#rating").val();

    var movie = $("<div class='movie'>");
    movie.append("<h3>" + title + "</h3>");
    movie.append("<p>" + rating + "</p>");
    movie.append("<button class='remove'>Remove</button>");

    $("#movies").append(movie);
  });

  $("#movies").on("click", ".remove", function() {
    $(this).parent().remove();
  });
}); 