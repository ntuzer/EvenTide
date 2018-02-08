export const createRSVP = rsvp => {
  return $.ajax({
    url: 'api/rsvps',
    method: 'POST',
    data: { rsvp }
  });
};
