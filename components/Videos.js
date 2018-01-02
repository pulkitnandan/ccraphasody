import cx from 'classnames';
import Link from 'next/link'

class Videos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  handleVideoClick = e => e.stopPropagation()

  render() {

  let shortDesciptions = function(d){
    let sd = d.substr(0, 100);
    if(d.length > 100){
      sd += '...';
    }

    return sd
  }
    let rows = [];
    for (var i = 0; i < this.props.data.length; i++) {
      let url  = './static/' + this.props.data[i]['url'];
      let heading = this.props.data[i]['name'];
      let description = this.props.data[i]['description'];
      let id = this.props.data[i]['_id'];
      rows.push(
        <Link key={id} href={{ pathname: '/video', query: { id } }}>
        <div className="course">
          <h3>{heading}</h3>
          <div className="course-img">
            <video className="course-video" controls onClick={this.handleVideoClick}>
              <source src={url} type="video/mp4">
              </source>
            </video>
          </div>
          <p>{shortDesciptions(description)}</p>
        </div>
        </Link>
      );
    }
    return (
      <div className="flex-container flex-wrap courses visible">
        {rows}
      </div>
    );
  }
}

export default(Videos);
