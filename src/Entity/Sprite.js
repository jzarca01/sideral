import Entity from "./../Entity";
import Shape from "./Shape";
import Timer from "../Mixin/Timer";

export default class Sprite extends Entity {

    /* LIFECYCLE */

    /**
     * @constructor
     */
    constructor () {
        super();

        this.name       = "sprite";

        this._container = new PIXI.Sprite();

        this.mix(new Timer());

        /**
         * Animation
         * @type {string}
         */
        this.animation = { name: null, delay: 0, tiles: [], lineOfTexture: 0, frameCounter: 0};

        /**
         * SpriteSheet of the Sprite
         * @type {string}
         */
        this.spritesheet = { texture: null, width: 0, height: 0, animations: [] };

        /**
         * Display the debug mode
         * @type {boolean}
         */
        this.debug = false;

        // auto-binding

        this._displayDebugMode  = this._displayDebugMode.bind(this);
    }

    /**
     * @override
     */
    setReactivity () {
        super.setReactivity();

        this.reactivity.
            when("debug").change(this._displayDebugMode);
    }

    /**
     * Set a new Spritesheet
     * @param {string} image: url of the image
     * @param {number=} tilewidth: tilewidth of the spritesheet
     * @param {number=} tileheight: tileheight of the spritesheet
     */
    setSpritesheet (image, tilewidth, tileheight) {
        if (!image) {
            throw new Error("Sprite.setSpritesheet", "image is not defined.");
        }

        const loader = new PIXI.loaders.Loader();

        loader.add("character", image);

        loader.load((loader, resources) => {
            const texture           = resources.character.texture;
            this.spritesheet        = { image: image, tilewidth: tilewidth, tileheight: tileheight };
             
        if (typeof tilewidth !== "undefined" && typeof tileheight !== "undefined") {
               texture.frame = new PIXI.Rectangle(0, 0, tilewidth, tileheight);
        }

            console.log("this _container1", this._container);
        });

        loader.onProgress.add(() => {console.log("on progress")});
        loader.onError.add(() => {console.log("on error")});
        loader.onLoad.add(() => {console.log("on load")});
        loader.onComplete.add((loader, resources) => {
            this._container.texture = resources.character.texture;
            console.log("this _container2", this._container);
        });

    }

    /**
     * Add a new Animation
     * @param {string} name: name of animation
     * @param {number=} delay: delay between two tiles
     * @param {array=} tiles: array of column numbers
     * @param {number=} lineOfTexture: line in the spritesheet
     */
    addAnimation (name, delay, tiles, lineOfTexture) {
        if (!tiles) {
            throw new Error("Sprite.addAnimation", "no texture provided.");
        }

        this.animation = { name: name, delay: delay, tiles: tiles, lineOfTexture: lineOfTexture, frameCounter: 0 };
        console.log("addAnimation");
        if (this.spritesheet && this.spritesheet.image) {
            this.spritesheet.animations.push(this.animation);
        }
    }

    setAnimation (name) {
        console.log("this setAnimation");
        if(this.spritesheet.image) {
            this.animation = this.spritesheet.animations.find(animation => animation.name === name);
                console.log("this", this);

        this.timer.setTimer(this.animation.delay || 1, {
            eventComplete: () => {
                this.updateAnimation(this.animation);
            }
        });
        }
        
    }

    /**
     * Updates the Animation
     * @param {string} animation: object animation
     */
    updateAnimation(animation) {   
        if (!animation) {
            throw new Error("Sprite.updateAnimation", "no animation provided.");
        } 

        if (this.spritesheet && this.spritesheet.width && this.spritesheet.height) {

            let x, y, tileheight, tilewidth;    

            if(animation.frameCounter === animation.tiles.length){                                                        
                animation.frameCounter = 0;                                                    
            };     

            x = animation.tiles[animation.frameCounter];
            y = animation.lineOfTexture;

            tilewidth = this.spritesheet.width;
            tileheight = this.spritesheet.height;

            this._container.texture.frame = new PIXI.Rectangle(x, y, tilewidth, tileheight);

            animation.frameCounter++;                 
        }
    }

    /* REACTIVITY */

    /**
     * Show or hide the debug mode
     * @private
     */
    _displayDebugMode (previousValue) {
        if (this.debug) {
            this.compose(new Shape(), {
                name    : "_debug",
                width   : this.width,
                height  : this.height,
                stroke  : "#FF0000",
                fill    : "transparent"
            });

        } else if (Boolean(previousValue)) {
            this.decompose(this._debug);

        }
    }

    /**
     * @override
     * @private
     */
    _containerSize () {
        if (this.debug) {
            this._debug.size(this.width, this.height);
        }
    }
}
