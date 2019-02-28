Rails.application.routes.draw do
  get 'users/index'

  devise_for :users, controllers: { omniauth_callbacks: 'omniauth' }
 
  root to: 'home#index'

  root to: 'users#index'

end
