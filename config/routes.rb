Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'
  namespace :api do
    namespace :v1 do
     resources :fruits, only: [:index, :create, :destroy, :update]
    end
  end
end