Rails.application.routes.draw do
  get 'reports/index'
  get 'dashboard/index'
  get 'users/index'

  devise_for :users, controllers: { omniauth_callbacks: 'omniauth' }

  root to: 'home#index'


end
