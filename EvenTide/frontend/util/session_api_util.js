export const signup = user => (
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: user
  })
);

export const signin = user => (
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    url: 'api/session',
    method: 'DELETE'
  })
);

// [POST] api/users: "users#create" (signup),
// [POST] api/session: "sessions#create" (login),
// [DELETE] api/session: "sessions#destroy" (logout)
