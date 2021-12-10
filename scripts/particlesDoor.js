// @path-json can be an object or an array, the first will be loaded directly, the object from the array will be random selected



/* tsParticles.loadJSON(@dom-id, @path-json, @callback (optional)); */
tsParticles.loadJSON("tsparticles", "scripts/presets/doorParticles.json").then(function (container) {
    // container is ready to be used
  });
 //the second one
// Important! If the index is not in range 0...array.length, the index will be ignored.

// after initialization this can be used.

tsParticles.load()
/* tsParticles.setOnClickHandler(@callback); */
/* this will be fired from all particles loaded */
tsParticles.setOnClickHandler(e => {
    /* custom on click handler */
  });
// now you can control the animations too, it's possible to pause and resume the animations
// these methods don't change the config so you're safe with all your configurations
// domItem(0) returns the first tsParticles instance loaded in the dom
const particles = tsParticles.domItem(0);
// play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
particles.play();
// pause will stop the animations
