Rails.application.routes.draw do
  # resources :countries
  # resources :artworks
  # resources :users
  # resources :artists

  get '/countries', to: "countries#index"
  get '/artists', to: "artists#index"
  get '/users', to: "users#index"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
