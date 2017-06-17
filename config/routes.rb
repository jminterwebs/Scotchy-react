Rails.application.routes.draw do



  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks", sessions: 'users/sessions' }
  root 'static#index'
  resources :users, only: [:show] do
    resources :whiskeys
    resources :distillers, only: [:show, :index]


  end

  resources :whiskeys
    post '/whiskeys/:id/add' => 'whiskeys#add', :as => :add_whiskey
    put '/whiskeys/:id/delete' => 'whiskeys#remove', :as => :remove_whiskey
  resources :distillers
  resources :regions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
