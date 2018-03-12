import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';



class TicketIndex extends React.Component {
  constructor(props) {
    super(props);
    this.prettyDate = this.prettyDate.bind(this);
  }

  componentDidMount(){
    this.props.fetchTickets();
  }

  prettyDate(event){
    let dateObj = new Date(event.start_date).toString();
    let dateEnd = new Date(event.end_date).toString();
    let ampm1 = parseInt(dateObj.slice(16,18)) > 12 ? "PM" : "AM";
    let ampm2 = parseInt(dateEnd.slice(16,18)) > 12 ? "PM" : "AM";
    let times =
      `${dateObj.slice(16,21)} ${ampm1} - ${dateEnd.slice(16,21)} ${ampm2}`;
    let mon = `${dateObj.slice(4, 7)}`;
    let day = `${dateObj.slice(8, 10)}`;
    let date = `${dateObj.slice(0,3)}, ${dateObj.slice(4,15)}`;
    let price = event.max_price - event.min_price === 0 ?
      "Free" : `$${event.max_price - event.min_price}`;
    return { dateObj, dateEnd, ampm1, ampm2, times, mon, day, date, price };
  }

  render(){
    if (Object.keys(this.props.rsvps).length === 0) return null;
    let rsvps = Object.values(this.props.rsvps);

    console.log('what is');
    console.log(rsvps);
    return (
      <section className="user-show-body-outer">
        <div className="u-s-b-o">
          <div className="user-show-body">
            <div className="my-tickets">
            {
              rsvps.map(rsvp => {
                let datos = this.prettyDate(rsvp.event);
                return(
                  <div className="ticket-item" key={rsvp.rsvp.id}>
                    <img src={rsvp.event.event_image_url} alt=""></img>
                    <div>
                      <h3>{rsvp.event.title}</h3>
                      <h2>Date: {datos.mon} {datos.day}</h2>
                      <h2>Order Id: {rsvp.rsvp.id}</h2>
                      <h1>Qty: {rsvp.rsvp.quantity}</h1>
                    </div>
                  </div>
                );
              })
            }
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default TicketIndex;


// {
//   events.map(evt => {
//     let bool = "false";
//     if (eArr.includes(evt.id)) bool = "true";
//     return <EventIndexItem key={evt.id}
//       loggedIn = "true"
//       createBookmark={this.props.createBookmark}
//       removeBookmark={this.props.removeBookmark}
//       bookmark={bool} event={evt} />;
//   })
// }
