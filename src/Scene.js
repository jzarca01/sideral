import Engine from "./Engine";
import Component from "./Component";


export default class Scene extends Component {

    /* LIFECYCLE */

    constructor () {
        super();

        this.name = "scene";

        /**
         * Stage of PIXI
         * @type {*}
         */
        this._container  = new PIXI.Container();

        /**
         * Gravity of the scene
         * @type {number}
         */
        this.gravity    = 0;

        /**
         * Scale of the scene
         * @type {number}
         */
        this.scale      = 1;

        /**
         * Width of the scene
         * @type {number}
         */
        this.width      = Engine.width;

        /**
         * Height of the scene
         * @type {number}
         */
        this.height     = Engine.height;
    }

    /* METHODS */
    update () {
	    super.update();

        if (Engine.keyboard.isPressed(Engine.keyboard.KEY.LEFT_ARROW)) {
            this.player.animation = this.player.animations.WALK_LEFT;
        }

        if (Engine.keyboard.isPressed(Engine.keyboard.KEY.RIGHT_ARROW)) {
            this.player.animation = this.player.animations.WALK_RIGHT;
        }

        if (Engine.keyboard.isPressed(Engine.keyboard.KEY.UP_ARROW)) {
            this.player.animation = this.player.animations.WALK_UP;
        }

        if (Engine.keyboard.isPressed(Engine.keyboard.KEY.DOWN_ARROW)) {
            this.player.animation = this.player.animations.WALK_DOWN;
        }

    }
}
