import Player from './Player';
import Move from "src/Component/Move";
import Sprite from "src/Component/Sprite";

export default class Ship extends Player {

  constructor (props) {
    super(props);

    this.compose(new Move())
        .compose(new Sprite({
            path: "./images/png/playerShip3_red.png",
            width: 98,
            height: 75
          }));
        }
}
