// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  //this.angle = 0;
  this.$node = $('<span></span>');
  this.$node.draggable();
  this.timeBetweenSteps = timeBetweenSteps;
  //this.rotate();
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  var context = this.step.bind(this);
  setTimeout(context, this.timeBetweenSteps);
  };

makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

  this.$node.css({top: top, left: left});
};

/*makeDancer.prototype.rotate = function(){
    this.$node.on('click', function(){
    this.angle += 90;
    this.$node.rotate(this.angle);
}
*/
