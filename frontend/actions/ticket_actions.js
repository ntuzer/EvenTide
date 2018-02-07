import * as TicketAPIUtil from '../util/events_api_util';

export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const RECEIVE_TICKET_ERRORS = 'RECEIVE_TICKET_ERRORS';


const receiveTicket = ticket => {
  return {
    type: RECEIVE_TICKET,
    ticket
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_TICKET_ERRORS,
    errors
  };
};


export const fetchTicket = id => dispatch => {
  return TicketAPIUtil.fetchTicket(id)
    .then(ticket => dispatch(receiveTicket(ticket)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};


export const createTicket = ticket => dispatch => {
  return TicketAPIUtil.createTicket(ticket)
    .then(tk => dispatch(receiveTicket(tk)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteTicket = id => dispatch => {
  return TicketAPIUtil.deleteTicket(id)
    .then(ticket => dispatch(receiveTicket(null)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
