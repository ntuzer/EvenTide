export const createBookmark = eventId => {
  return $.ajax({
    url: 'api/bookmarks',
    method: 'POST',
    data: { eventId }
  });
};

export const fetchBookmarks = () => {
  return $.ajax({
    url: '/api/bookmarks',
    method: 'GET',
  });
};

export const fetchBookmark = (id) => {
  return $.ajax({
    url: `/api/bookmarks/${id}`,
    method: 'GET',
  });
};

export const removeBookmark = (id) => {
  return $.ajax({
    url: `/api/bookmarks/${id}`,
    method: 'DELETE',
  });
};
