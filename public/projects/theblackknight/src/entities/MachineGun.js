import Entity from "src/Entity";
// import Animation from "src/Animation";

export default class MachineGun extends Entity {

  constructor (player, scene) {

    super();

    this.player = player;
    this.scene = scene;

    // Set properties
    this.props({
        size : { width: 5, height: 1 },
        debug: true
    });
  }

  startPosition () {
      return {
        x: this.player.position.x + this.player.size.width,
        y: this.player.position.y + this.player.size.height - this.size.height
      }
  }

}
