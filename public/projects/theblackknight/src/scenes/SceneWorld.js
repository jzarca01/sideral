import Engine from "src/Engine";
import Scene from "src/Scene";

import EntityPlayer from "./../entities/EntityPlayer";
import EntityMachineGun from "./../entities/EntityMachineGun";

export default class SceneWorld extends Scene {

    /* LIFECYCLE */

    /**
     * @initialize
     * @returns {void}
     */
    initialize () {
        super.initialize();

        this.canvas.clearColor  = "#eee";
        this.player             = new EntityPlayer();

        this.attachEntity(this.player, 10, 10);
    }

    addMachineGun () {
      this.machinGunLeft = new EntityMachineGun(this.player, this);
      this.machinGunRight = new EntityMachineGun(this.player, this);

      this.attachEntity(this.machinGunLeft,
        this.machinGunLeft.startPosition().x,
        this.player.position.y,
      );

      this.attachEntity(this.machinGunRight,
        this.machinGunRight.startPosition().x,
        this.machinGunRight.startPosition().y,
      );
    }

    /**
     * @update
     * @returns {void}
     */
    update () {
        super.update();

        if (Engine.keyboard.isHeld(Engine.keyboard.KEY.SPACE)) {
          this.addMachineGun();
        }

        if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_RIGHT) && Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_UP)) {
          this.player.topRight();

        } else if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_LEFT) && Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_UP)) {
          this.player.topLeft();

        } else if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_RIGHT) && Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_DOWN)) {
          this.player.bottomRight();

        } else if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_LEFT) && Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_DOWN)) {
          this.player.bottomLeft();

        } else if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_RIGHT)) {
            this.player.right();

        } else if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_LEFT)) {
            this.player.left();

        } else if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_UP)) {
            this.player.top();

        } else if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_DOWN)) {
            this.player.bottom();
        } else if (this.player.moving) {
            this.player.idle();
        }
    }
}
