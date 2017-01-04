import Engine from "src/Engine";
import Keyboard from "src/Component/Keyboard";

import SceneSpace from "./scenes/SceneSpace";

Engine.attachDOM(document.getElementById("sideral-app"));

Engine.setProps({
    width : 700,
    height: 700
});

Engine.compose(new Keyboard())
      .compose(new SceneSpace());

Engine.run();
