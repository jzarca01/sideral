import Engine from "src/Engine";
import Scene from "src/Scene";

import Ship from "./../entities/Ship";
import Asteroid from "./../entities/Asteroid";

export default class SceneSpace extends Scene {

    /* LIFECYCLE */

    /**
     * @initialize
     * @returns {void}
     */
    initialize (parent) {
        super.initialize(parent);

        this.ship = new Ship();
        this.ship.width = this.ship.sprite.width;
        this.ship.height = this.ship.sprite.height;
        this.ship.y = this._cachedProps.height - this.ship.height;
        this.ship.x = this._cachedProps.width / 2 - this.ship.height;

        this.asteroid = new Asteroid();
        this.asteroid.width = this.asteroid.sprite.width;
        this.asteroid.height = this.asteroid.sprite.height;
        this.asteroid.x = this._cachedProps.width / 2 - this.asteroid.width;

        this.compose(this.ship)
            .compose(this.asteroid);
    }

    /**
     * @update
     * @returns {void}
     */
    update () {
        super.update();

        this.ship.direction.x = 0;
        this.ship.direction.y = 0;

        this.asteroid.direction.x = 0;
        this.asteroid.direction.y = 0;

        if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_LEFT)) {
            this.ship.move.left();
        }

        if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_RIGHT)) {
            this.ship.move.right();
        }

        if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_UP)) {
            this.ship.move.up({
              speed: 10
            });
        }

        if (Engine.keyboard.isHeld(Engine.keyboard.KEY.ARROW_DOWN)) {
            this.ship.move.down();
        }
    }
}
