window.onload = function(){
  var logo = $("#logo");
  TweenMax.to(logo, 2, { left: "632px", ease:Bounce.easeOut, repeat: 2, yoyo: true });
}
