class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  
  def find_by_credentials
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      render json: {foundUser: true}
    else
      render json: {foundUser: false}
    end

  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
