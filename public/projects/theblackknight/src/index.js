import Engine from "src/Engine";
import Keyboard from "src/Component/Keyboard";

import SceneWorld from "./scenes/SceneWorld";

// Define the size of the engine
Engine.width(700);
Engine.height(400);

Engine.compose(new Keyboard())
      .attachScene(new SceneWorld());

// Render the engine into a dom
Engine.attachDOM(document.getElementById("sideral-app"));

// Start the loop
Engine.run();


// Custom code
/*
const scene  = new Scene();
const entity = new Entity();

entity.debug = true;

scene.attachEntity(entity, 10, 10);
Engine.attachScene(scene);

scene.canvas.clearColor = "whitesmoke";
*/
