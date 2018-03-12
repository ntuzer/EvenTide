export const fetchEvents = () => {
  return $.ajax({
    url: 'api/events',
    method: 'GET',
  });
};
export const fetchMyEvents = () => {
  return $.ajax({
    url: 'api/myEvents',
    method: 'GET',
  });
};
export const fetchEvent = (id) => {
  return $.ajax({
    url: `api/events/${id}`,
    method: 'GET',
  });
};

export const createEvent = event => {
  return $.ajax({
    url: 'api/events',
    method: 'POST',
    data: { event }
  });
};

export const updateEvent = event => {
  return $.ajax({
    url: `api/events/${event.id}`,
    method: 'PATCH',
    data: { event }
  });
};

export const deleteEvent = eventId => {
  return $.ajax({
    url: `api/events/${eventId}`,
    method: 'DELETE',
  });
};
