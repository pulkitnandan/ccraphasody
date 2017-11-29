import cx from 'classnames';
import Videos from './Videos';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div className="main-item">
        <p/>
        <Videos data={this.props.data} />
      </div>
    );
  }
}

export default(Home);
