/*

More SplitText demos on Codepen: https://codepen.io/collection/KiEhr

See https://www.greensock.com/splittext/ for details. 

This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/

var $quote = $("#quote"),
    mySplitText = new SplitText($quote, {type:"words"}),
    splitTextTimeline = new TimelineLite();

TweenLite.set($quote, {perspective:400});

//kill any animations and set text back to its pre-split state
function kill(){
  splitTextTimeline.clear().time(0);
  mySplitText.revert();
}

$("#chars").click(function() {
  kill();
  mySplitText.split({type:"chars, words"}) 
  splitTextTimeline.staggerFrom(mySplitText.chars, 0.6, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.02);
})

$("#words").click(function() {
  kill();
  mySplitText.split({type:"words"}) 
  $(mySplitText.words).each(function(index,el){
    splitTextTimeline.from($(el), 0.6, {opacity:0, force3D:true}, index * 0.01);
    splitTextTimeline.from($(el), 0.6, {scale:index % 2 == 0  ? 0 : 2, ease:Back.easeOut}, index * 0.01); 
  });
})

$("#lines").click(function() {
   kill();
   mySplitText.split({type:"lines"}) 
   splitTextTimeline.staggerFrom(mySplitText.lines, 0.5, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -150"}, 0.1);
 
})

$("#charsWordsLines").click(function() {
  kill();
  mySplitText.split({type:"chars, words, lines"}) 
  splitTextTimeline.staggerFrom(mySplitText.chars, 0.2, {autoAlpha:0, scale:4, force3D:true}, 0.01, 0.5)
    .staggerTo(mySplitText.words, 0.1, {color:"#8FE402", scale:0.9}, 0.1, "words")
    .staggerTo(mySplitText.words, 0.2, {color:"white", scale:1}, 0.1, "words+=0.1")
    .staggerTo(mySplitText.lines, 0.5, {x:100, autoAlpha:0}, 0.2) 
})

//revert the text back to its pre-split state
$("#revert").click(function() {
  mySplitText.revert(); 
})