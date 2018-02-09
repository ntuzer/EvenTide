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
