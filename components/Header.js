import cx from 'classnames';
import {toggleNav} from '../actions/utils';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className="header">
        <div className="short-bio">Crossover video portal</div>
        <p className="aligned" style={{marginLeft: '8.32812px', marginRight: '8.32812px'}}>Tutorials in the world of javascript. Right there when needed. <em>VideoPortal 1.0</em>.</p>
      </div>
    );
  }
}

export default(Header);
