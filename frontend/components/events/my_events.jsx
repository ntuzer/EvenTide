import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';

class MyEvents extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchMyEvents();
  }

  render(){

    if (Object.keys(this.props.events).length === 0) return null;
    let events = Object.values(this.props.events);
    let eArr = [];
    return (
      <section className="user-show-body-outer">
        <div className="u-s-b-o">
          <div className="user-show-body">
            {
              events.map(evt => {
                let bool = "false";
                if (eArr.includes(evt.id)) bool = "true";
                return (
                  <EventIndexItem key={evt.id}
                    loggedIn = "true"
                    createBookmark={this.props.createBookmark}
                    removeBookmark={this.props.removeBookmark}
                    bookmark={bool} event={evt} />
                );
              })
            }
          </div>
        </div>
      </section>
    );
  }

}


export default MyEvents;
// <div key={evt.id} className="e-i-i">
//   <div className="e-i-box">
//     <div className="ii-upper">
//       <Link to={`/events/${evt.id}`}>
//
//         <div className="img-div">
//           <img className="ii-img"
//             src={evt.event_image_url}
//             height="165" width="330" alt=""></img>
//           <span>{evt.price}</span>
//         </div>
//
//         <div className="ii-text">
//           <div className="ii-t-date">{evt.start_date}</div>
//           <div className="ii-t-title">{evt.title}</div>
//           <div className="ii-t-location">{evt.location}</div>
//         </div>
//       </Link>
//     </div>
//
//     <div className="ii-footer">
//       <Link to="/">#{evt.category}</Link>
//       <div className="ii-bookmark">
//
//       </div>
//     </div>
//   </div>
// </div>
