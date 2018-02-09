export const fetchEventsByCategory = id => {
  return $.ajax({
    url: `/api/categories/${id}`,
    method: 'GET',
    data: { id },
  });
};
