var makeCarlton = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.html('<img src="http://4.bp.blogspot.com/-1n9dFwSMIcg/U1qWoBaN7mI/AAAAAAAAS9I/kmHE750tpvE/s1600/carltondancing2.gif"/>');
  this.$node.addClass('carlton');


};

makeCarlton.prototype = Object.create(makeDancer.prototype);
makeCarlton.prototype.constructor = makeCarlton;
makeCarlton.prototype.step = function(){
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
};
makeCarlton.prototype.lineUp = function(){
  this.$node.css({top: 200, position: 'absolute'});
}
