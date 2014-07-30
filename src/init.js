$(document).ready(function(){
  window.dancers = [];

  $(".button").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var option = $('.selector').val();
    //console.log(option)
    //var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[option];

    // make a dancer with a random position
      var dancer = new dancerMakerFunction(
      //$("body").height() * Math.random(),
      100 * Math.random(),
      //$("body").width() * Math.random(),
      100 * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    var l = window.dancers.length;
    dancer.$node.css("z-index = -1");
    $('body').append(dancer.$node);
    dancer.$node.css({top: 100, left:100, position: "absolute"}
    );

    $('.batman').mouseover(function() {
        var dWidth = $(document).width() - 100, // 100 = image width
            dHeight = $(document).height() - 100, // 100 = image height
            nextX = Math.floor(Math.random() * dWidth),
            nextY = Math.floor(Math.random() * dHeight);
        $(this).animate({ left: nextX + 'px', top: nextY + 'px' });


  });


  });
$(".lineUpButton").on("click", function(event){
  for( var i = 0; i < window.dancers.length; i++ ) {
    window.dancers[i].lineUp();
  };
});

$(".partnerUp").on("click", function(event){
  for( var i = 0; i < window.dancers.length; i += 2 ) {
    //set first dancer's css props to second dancer's props
    //get position of 2nd dancer
    var pair = window.dancers[i + 1].$node.position();
    window.dancers[i].$node.css(pair);
  };
});

});
