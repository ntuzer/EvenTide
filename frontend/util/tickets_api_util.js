export const fetchTicket = (id) => {
  return $.ajax({
    url: `api/tickets/${id}`,
    method: 'GET',
  });
};
export const createTicket = ticket => {
  return $.ajax({
    url: 'api/tickets',
    method: 'POST',
    data: { ticket }
  });
};
export const deleteTicket = ticketId => {
  return $.ajax({
    url: `api/tickets/${ticketId}`,
    method: 'DELETE',
  });
};
