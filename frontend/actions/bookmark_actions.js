import * as BookAPIUtil from '../util/bookmarks_api_util';

export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const RECEIVE_BOOKMARK_ERRORS = 'RECEIVE_BOOKMARK_ERRORS';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

const receiveBookmarks = bookmarks => {
  return {
    type: RECEIVE_BOOKMARKS,
    bookmarks
  };
};

const receiveBookmark = bookmark => {
  return {
    type: RECEIVE_BOOKMARK,
    bookmark
  };
};

export const receiveErrors = errors => {
  return {
  type: RECEIVE_BOOKMARK_ERRORS,
  errors
  };
};

export const deleteBookmark = bookmark => {
  return {
    type: REMOVE_BOOKMARK,
    bookmark
  };
};


export const fetchBookmarks = () => dispatch => {
  return BookAPIUtil.fetchBookmarks().then(bks => (
    dispatch(receiveBookmarks(bks))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const fetchBookmark = (id) => dispatch => {
  return BookAPIUtil.fetchBookmark(id).then(bk => (
    dispatch(receiveBookmark(bk))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const removeBookmark = (id) => dispatch => {
  return BookAPIUtil.removeBookmark(id).then(bk => (
    dispatch(deleteBookmark(bk))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const createBookmark = (id) => dispatch => {
  return BookAPIUtil.createBookmark(id).then(bk => (
    dispatch(receiveBookmark(bk))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};
