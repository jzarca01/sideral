import Component from "./index";
import Timer from "./Timer";


export default class Move extends Component {

  /**
   * Move constructor
   * @param {*} props: properties
   */
  constructor (props) {
    console.log('Move loaded');
    super(props);
  }

  up (options = {}) {
    console.log('Move:up');
    console.log(options);
    this.parent.direction.y -= options.speed;
  }

  right (options = {}) {
    console.log('Move:right');
    this.parent.direction.x++;
  }

  down (options = {}) {
    console.log('Move:down');
    this.parent.direction.y++;
  }

  left (options = {}) {
    console.log('Move:left');
    this.parent.direction.x--;
  }

  update () {
    // console.log('Move:update');
  }

  get name () {
    return 'move';
  }
 }
