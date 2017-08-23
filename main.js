//  Coder: EliTheC๏der
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.font = "64px Visitor";
var assets = {};
assets.r = {};
assets.title = new Image();
assets.start = new Image();
assets.startglow = new Image();
assets.options = new Image();
assets.optionsglow = new Image();
assets.guide = new Image();
assets.guideglow = new Image();
assets.credits = new Image();
assets.creditsglow = new Image();
assets.bluepaddle = new Image();
assets.redpaddle = new Image();
assets.back = new Image();
assets.backglow = new Image();
assets.credits2 = new Image();
assets.gear = new Image();
assets.gearglow = new Image();
assets.r.title = true;
assets.r.startglow = false;
assets.r.optionsglow = false;
assets.r.guideglow = false;
assets.r.creditsglow = false;
assets.r.start = false;
assets.r.options = false;
assets.r.guide = false;
assets.r.credits = false;
assets.r.backglow = false;
assets.r.gearglow = false;
assets.r.gear = false;
assets.r.secret = false;
assets.r.secretr = false;
function getMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
function render() {
  ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
  if (assets.r.title === true) {
    ctx.drawImage(assets.title,window.innerWidth/2-256,0);
    ctx.drawImage(assets.bluepaddle,0,148);
    ctx.drawImage(assets.redpaddle,1366-512,148);
    if (assets.r.startglow === false) {
      ctx.drawImage(assets.start,window.innerWidth/2-256,window.innerHeight/4);
    }else{
      ctx.drawImage(assets.startglow,window.innerWidth/2-256,window.innerHeight/4);
    }
    if (assets.r.optionsglow === false) {
      ctx.drawImage(assets.options,window.innerWidth/2-256,window.innerHeight/3+32);
    }else{
      ctx.drawImage(assets.optionsglow,window.innerWidth/2-256,window.innerHeight/3+32);
    }
    if (assets.r.guideglow === false) {
      ctx.drawImage(assets.guide,window.innerWidth/2-256,window.innerHeight/3+128);
    }else{
      ctx.drawImage(assets.guideglow,window.innerWidth/2-256,window.innerHeight/3+128);
    }
    if (assets.r.creditsglow === false) {
      ctx.drawImage(assets.credits,window.innerWidth/2-256,window.innerHeight/3+224);
    }else{
      ctx.drawImage(assets.creditsglow,window.innerWidth/2-256,window.innerHeight/3+224);
    }
    lines(true);
  }
    
  if (assets.r.start === true || assets.r.options === true || assets.r.guide === true || assets.r.credits === true) {
    if (assets.r.backglow === false) {
      ctx.drawImage(assets.back,0,0);
    }else{
      ctx.drawImage(assets.backglow,0,0);
    }
  }
  if (assets.r.title === false) {
    if (assets.r.gearglow === false) {
      ctx.drawImage(assets.gear,1266-64,0);
    }else{
      ctx.drawImage(assets.gearglow,1266-64,0);
    }
  }
  if (assets.r.start === true) {
    lines(false);
  }
  if (assets.r.options === true) {
    lines(true);
  }
  if (assets.r.guide === true) {
    ctx.fillStyle = "#3A8356";
    ctx.fillText("EAT SOME TACOS.",128,window.innerWidth/4);
    ctx.fillStyle = "#000000";
    lines(true);
  }
  if (assets.r.credits === true) {
    ctx.drawImage(assets.credits2,0,0,512,512,128,72,512,512);
    ctx.drawImage(assets.credits2,0,512,512,512,1366-512-128,164,512,512);
    lines(true);
  }
  if (assets.r.secretr === true) {
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
    ctx.fillStyle = "#3A8356";
    ctx.font = "32px Visitor";
    ctx.fillText("You found the easter egg! Now go play Taco Tapper!!!",128,window.innerWidth/4);
    ctx.font = "64px Visitor";
    ctx.fillStyle = "#000000";
  }
}
assets.title.src = "assets/Pings Title.gif";
assets.start.src = "assets/PingsStart.png";
assets.startglow.src ="assets/PingsStartHighlighted.png";
assets.options.src = "assets/PingsOptions.png";
assets.optionsglow.src = "assets/PingsOptionsHighlighted.png";
assets.guide.src = "assets/PingsGuide.png";
assets.guideglow.src = "assets/PingsGuideHighlighted.png";
assets.credits.src = "assets/PingsCredits.png";
assets.creditsglow.src = "assets/PingsCreditsHighlighted.png";
assets.bluepaddle.src = "assets/Blue Paddle.png";
assets.redpaddle.src = "assets/Red Paddle.png";
assets.back.src = "assets/PingsBack.png";
assets.backglow.src = "assets/PingsBackHighlighted.png";
assets.credits2.src = "assets/Credits.png";
assets.gear.src = "assets/PingsSettings.png";
assets.gearglow.src = "assets/PingsSettingsHighlighted.png";
function area(cox,coy,x1,y1,x2,y2) {
  if (cox > x1 && coy > y1 && cox < x2 && coy < y2) {
    return true;
  }else{
    return false;
  }
}
function lines(p) {
  if (p === true) {
    ctx.fillStyle = "#3A8356";
    ctx.fillRect(0,132,window.innerWidth,12);
    ctx.fillRect(0,652,window.innerWidth,12);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,128,window.innerWidth,4);
    ctx.fillRect(0,648,window.innerWidth,4);
    ctx.fillRect(0,144,window.innerWidth,4);
    ctx.fillRect(0,664,window.innerWidth,4);
    ctx.fillStyle = "#000000";
  }else{
    ctx.fillStyle = "#3A8356";
    ctx.fillRect(0,132,window.innerWidth,12);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,128,window.innerWidth,4);
    ctx.fillRect(0,144,window.innerWidth,4);
    ctx.fillStyle = "#000000";
  }
}
window.onload = function() {
  render();
};
canvas.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(evt);
  if (assets.r.title === true && area(mousePos.x,mousePos.y,window.innerWidth/2-256+80,window.innerHeight/4+32,window.innerWidth/2-256+512-84,window.innerHeight/4+128-36)) {
    assets.r.startglow = true;
  }else{
    assets.r.startglow = false;
  }
  if (assets.r.title === true && area(mousePos.x,mousePos.y,window.innerWidth/2-256+8,window.innerHeight/3+32+32,window.innerWidth/2-256+512-12,window.innerHeight/3+128-36+32)) {
    assets.r.optionsglow = true;
  }else{
    assets.r.optionsglow = false;
  }
  if (assets.r.title === true && area(mousePos.x,mousePos.y,window.innerWidth/2-256+80,window.innerHeight/3+32+128,window.innerWidth/2-256+512-84,window.innerHeight/3+128-36+128)) {
    assets.r.guideglow = true;
  }else{
    assets.r.guideglow = false;
  }
  if (assets.r.title === true && area(mousePos.x,mousePos.y,window.innerWidth/2-256+8,window.innerHeight/3+32+224,window.innerWidth/2-256+512-12,window.innerHeight/3+128-36+224)) {
    assets.r.creditsglow = true;
  }else{
    assets.r.creditsglow = false;
  }
  if (assets.r.title !== true && area(mousePos.x,mousePos.y,80,0,432,128)) {
    assets.r.backglow = true;
  }else{
    assets.r.backglow = false;
  }
  if (assets.r.title !== true && area(mousePos.x,mousePos.y,1233,31,1298,96)) {
    assets.r.gearglow = true;
  }else{
    assets.r.gearglow = false;
  }
  if (assets.r.credits === true && area(mousePos.x,mousePos.y,498,346,500,348)) {
    assets.r.secretr = true;
  }else{
    assets.r.secretr = false;
  }
  render();
}, false);
canvas.addEventListener('click', function(evt) {
  var mousePos = getMousePos(evt);
  if (assets.r.startglow === true) {
    assets.r.title = false;
    assets.r.start = true;
  }
  if (assets.r.optionsglow === true) {
    assets.r.title = false;
    assets.r.options = true;
  }
  if (assets.r.guideglow === true) {
    assets.r.title = false;
    assets.r.guide = true;
  }
  if (assets.r.creditsglow === true) {
    assets.r.title = false;
    assets.r.credits = true;
  }
  if (assets.r.backglow === true) {
    assets.r.title = true;
    assets.r.start = false;
    assets.r.options = false;
    assets.r.guide = false;
    assets.r.credits = false;
    assets.r.backglow = false;
  }
  if (assets.r.gearglow === true) {
    assets.r.title = false;
    assets.r.start = false;
    assets.r.options = true;
    assets.r.guide = false;
    assets.r.credits = false;
    assets.r.backglow = false;
  }
  if (assets.r.secretr === true) {
    assets.r.secret = true;
  }
  console.log(mousePos);
  render();
}, false);




