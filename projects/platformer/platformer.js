$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 350, 100, 10)
    createPlatform(500, 350, 100, 10)
    createPlatform(400, 250, 100, 10)
    createPlatform(300, 150, 100, 20)
    createPlatform(550, 475, 100, 50)
    createPlatform(400, 600, 100, 20)
    createPlatform(200, 700, 100, 10)



    // TODO 3 - Create Collectables

    createCollectable("database", 550, 200, 1, .5)
    createCollectable("grace", 250, 100, 1, .8)
    createCollectable("kennedi", 350, 50,1 , .7)




    // TODO 4 - Create Cannons
    createCannon("right", 450, 2000)
    createCannon("left", 350, 1550)
    createCannon("right", 200, 1750)




    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
