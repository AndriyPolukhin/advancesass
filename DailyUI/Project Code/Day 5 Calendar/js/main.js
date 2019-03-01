$(window).click(play);

function play() {
  $("body").removeClass("play");
  var c = $("ul.secondPlay li.active");

  if (c.html() == undefined) {
    c = $("ul.secondPlay li").eq(0);
    c.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");

  } else if (c.is(":last-child")) {
    $("ul.secondPlay li").removeClass("before");
    c.addClass("before").removeClass("active");
    c = $("ul.secondPlay li").eq(0);
    c.addClass("active")
      .closest("body")
      .addClass("play");
  } else {
    $("ul.secondPlay li").removeClass("before");
    c.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }

}

for (i = 0; i < 4; i++) {
  setTimeout(function(){
    $(window).click();
  }, i * 1200);
}