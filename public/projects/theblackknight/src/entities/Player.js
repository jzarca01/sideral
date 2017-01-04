import Entity from "src/Entity";

export default class Player extends Entity {

    /* LIFECYCLE */

    /**
     * @constructor
     */
    constructor (props) {
        super(props);

        this.debug  = true;
        this.width  = 40;
        this.height = 40;
    }
}
