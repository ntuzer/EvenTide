import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event, bookmark, removeBookmark, createBookmark }) => {
  if (event === undefined) return null;
  if (createBookmark === undefined) return null;
  let price = event.max_price - event.min_price === 0 ? "Free" : `$${event.max_price - event.min_price}`;
  let dateObj = new Date(event.start_date).toString();
  let date = `${dateObj.slice(0,3)}, ${dateObj.slice(4,15)}`;
  let category = "category";
  let icon = bookmark === "true" ? "fas fa-bookmark" : "far fa-bookmark";
  let bookIt = bookmark === "true" ? removeBookmark : createBookmark;
  if (!this.props.loggedIn) bookIt = () => this.props.history.push('/abcdef');


  return (
    <div key={event.id} className="e-i-i">
      <div className="e-i-box">
        <div className="ii-upper">
          <Link to={`/events/${event.id}`}>

            <div className="img-div">
              <img className="ii-img"
                src={event.event_image_url}
                height="165" width="330" alt=""></img>
              <span>{price}</span>
            </div>

            <div className="ii-text">
              <div className="ii-t-date">{date}</div>
              <div className="ii-t-title">{event.title}</div>
              <div className="ii-t-location">{event.location}</div>
            </div>
          </Link>
        </div>

        <div className="ii-footer">
          <Link to="/">#{category}</Link>
          <div className="ii-bookmark">
            <div onClick={() => bookIt(event.id)}><i className={icon}></i></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventIndexItem;
// onClick={() => deleteEvent(event.id)}












// class EventIndexItem extends React.Component {
//   constructor(props){
//     // { event, bookmark }
//     super(props);
//     this.bookIt = this.bookIt.bind(this);
//
//
//   }
//
//
//   bookIt(){
//
//   }
//
//   render(){
//     if (event === undefined) return null;
//     let price = event.max_price - event.min_price === 0 ? "Free" : `$${event.max_price - event.min_price}`;
//     let dateObj = new Date(event.start_date).toString();
//     let date = `${dateObj.slice(0,3)}, ${dateObj.slice(4,15)}`;
//     let category = "category";
//     let icon = bookmark ? "fas fa-bookmark" : "far fa-bookmark";
//     let method = bookmark ? this.props.removeBookmark : this.props.createBookmark;
//     return (
//       <div key={event.id} className="e-i-i">
//         <div className="e-i-box">
//           <div className="ii-upper">
//             <Link to={`/events/${event.id}`}>
//
//               <div className="img-div">
//                 <img className="ii-img"src={event.event_image_url} height="165" width="330" alt=""></img>
//                 <span>{price}</span>
//               </div>
//
//               <div className="ii-text">
//                 <div className="ii-t-date">{date}</div>
//                 <div className="ii-t-title">{event.title}</div>
//                 <div className="ii-t-location">{event.location}</div>
//               </div>
//             </Link>
//           </div>
//
//           <div className="ii-footer">
//             <Link to="/">#{category}</Link>
//             <div className="ii-bookmark">
//               <div onClick={() => method(event.id)}><i className={icon}></i></div>
//               <Link to="/"></Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
//
//
//
//
//
