var makeSamus = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.html('<img src="http://i.imgur.com/DtZ8VY5.gif"/>');
  this.$node.addClass('samus');
  this.$node.slideUp();
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makeSamus.prototype = Object.create(makeDancer.prototype);
makeSamus.prototype.constructor = makeSamus;
makeSamus.prototype.step = function(){
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle('rotate');
};

makeSamus.prototype.lineUp = function(){
  this.$node.css({left: 100, position: "absolute"});
};
/*
makeSamus.prototype.change = function(){
  this.$node.html('<img src="http://37.media.tumblr.com/tumblr_mecbh7XNdz1rgpyeqo1_500.gif"/>');
};
*/
