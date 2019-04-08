Rails.application.routes.draw do
  get 'dashboard/index'
  get 'users/index'

<<<<<<< HEAD
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth' }

=======
  devise_for :users, controllers: { :omniauth_callbacks => "omniauth" }
 
>>>>>>> a7408b1a4d1f50881360e5253910444c3ba6fc1f
  root to: 'home#index'

  root to: 'users#index'

  root to: 'dashboard#index'

end
