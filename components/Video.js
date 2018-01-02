import cx from 'classnames';

class Video extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }


  render() {

  let shortDesciptions = function(d){
    let sd = d.substr(0, 100);
    if(d.length > 100){
      sd += '...';
    }

    return sd
  }
    let row = '';
      let url  = './static/' + this.props.data['url'];
      let heading = this.props.data['name'];
      let description = this.props.data['description'];
      let id = this.props.data['_id'];
      row = (
        <div className="course" key={id}>
          <h3>{heading}</h3>
          <div className="course-img">
            <video className="course-video" controls>
              <source src={url} type="video/mp4">
              </source>
            </video>
          </div>
          <p>{shortDesciptions(description)}</p>
        </div>
      );
    return (
      <div className="flex-container flex-wrap courses visible">
        {row}
      </div>
    );
  }
}

export default(Video);
