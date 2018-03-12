export const fetchTickets = () => {
  return $.ajax({
    url: '/api/rsvps',
    method: 'GET',
  });
};
