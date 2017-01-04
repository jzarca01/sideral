import Player from './Player';
import Move from "src/Component/Move";
import Sprite from "src/Component/Sprite";

export default class Asteroid extends Player {

  constructor (props) {
    super(props);

    const asteroid = [
      {
        url: "./images/png/Meteors/meteorGrey_big1.png",
        width: 101,
        height: 84
      },
      {
        url: "./images/png/Meteors/meteorGrey_big2.png",
        width: 120,
        height: 98
      },
      {
        url: "./images/png/Meteors/meteorGrey_big3.png",
        width: 89,
        height: 82
      },
      {
        url: "./images/png/Meteors/meteorGrey_big4.png",
        width: 98,
        height: 96
      },
      {
        url: "./images/png/Meteors/meteorGrey_med1.png",
        width: 43,
        height: 43
      },
      {
        url: "./images/png/Meteors/meteorGrey_med2.png",
        width: 45,
        height: 40
      },
      {
        url: "./images/png/Meteors/meteorGrey_small1.png",
        width: 28,
        height: 28
      },
      {
        url: "./images/png/Meteors/meteorGrey_small2.png",
        width: 29,
        height: 26
      },
      {
        url: "./images/png/Meteors/meteorGrey_tiny1.png",
        width: 18,
        height: 18
      },
      {
        url: "./images/png/Meteors/meteorGrey_tiny2.png",
        width: 16,
        height: 15
      }
    ];
    const random = Math.floor(Math.random() * asteroid.length);

    this.compose(new Move())
        .compose(new Sprite({
          path  : asteroid[random].url,
          width : asteroid[random].width,
          height: asteroid[random].height
        }));
  }
}
