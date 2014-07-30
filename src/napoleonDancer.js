var makeNapoleon = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.html('<img src="http://25.media.tumblr.com/tumblr_mdskl9xO9j1rj6di8o1_500.gif"/>');
  this.$node.addClass("napoleon");
  this.$node.slideUp();
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makeNapoleon.prototype = Object.create(makeDancer.prototype);
makeNapoleon.prototype.constructor = makeNapoleon;
makeNapoleon.prototype.step = function(){
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
};

makeNapoleon.prototype.lineUp = function(){
  this.$node.css({left: 100, position: "absolute"});
}
