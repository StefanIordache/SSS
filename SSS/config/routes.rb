Rails.application.routes.draw do

  devise_for :users, controllers: { omniauth_callbacks: 'omniauth' }
 
  root to: 'home#index'

  get 'users/index', to: 'users#index', as: 'users'

  get 'payments/index', to: 'payments#index', as: 'payments'

end
