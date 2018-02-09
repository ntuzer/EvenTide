require 'test_helper'

class Api::BookmarksControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_bookmarks_create_url
    assert_response :success
  end

  test "should get index" do
    get api_bookmarks_index_url
    assert_response :success
  end

  test "should get destroy" do
    get api_bookmarks_destroy_url
    assert_response :success
  end

end
