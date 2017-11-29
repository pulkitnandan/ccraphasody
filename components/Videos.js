import cx from 'classnames';

class Videos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    let rows = [];
    console.log(this.props.data)
    for (var i = 0; i < this.props.data.length; i++) {
      let url  = './static/' + this.props.data[i]['url'];
      let heading = this.props.data[i]['name'];
      let description = this.props.data[i]['description'];
      let id = this.props.data[i]['_id'];
      rows.push(
        <div className="course" key={id}>
          <h3>{heading}</h3>
          <div className="course-img">
            <video className="course-video" controls>
              <source src={url} type="video/mp4">
              </source>
            </video>
          </div>
          <p>{description}</p>
        </div>
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
