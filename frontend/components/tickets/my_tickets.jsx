import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';



class TicketIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchTickets();
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
            {
              rsvps.map(rsvp => {
                return(
                  <div className="ticket-item" key={rsvp.rsvp.id}>
                    <img src={rsvp.event.event_image_url} alt=""></img>
                    <h3>{rsvp.event.title}</h3>
                    <h2>Ticket Purchase Id {rsvp.rsvp.id}</h2>
                    <h1>Qty: {rsvp.rsvp.quantity}</h1>
                  </div>
                );
              })
            }
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
