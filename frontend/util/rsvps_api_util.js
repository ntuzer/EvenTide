export const createRSVP = rsvp => {
  return $.ajax({
    url: 'api/rsvps',
    method: 'POST',
    data: { rsvp }
  });
};

export const fetchTickets = () => {
  return $.ajax({
    url: '/api/rsvps',
    method: 'GET',
  });
};
