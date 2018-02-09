Rails.application.routes.draw do
  namespace :api do
    get 'bookmarks/create'
  end

  namespace :api do
    get 'bookmarks/index'
  end

  namespace :api do
    get 'bookmarks/destroy'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :events, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :events, only: [:index, :show, :create, :update, :destroy]
    resources :tickets, only: [:show, :create, :destroy]
    resources :rsvps
  end

  root "static_pages#root"
end
