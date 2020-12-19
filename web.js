$(function() {
  $(".collapse").collapse();
  $(document).scroll(function() {
    var $nav = $("#navBar");
    $nav.toggleClass("bg-dark", $(this).scrollTop() > $nav.height());
  });
});
