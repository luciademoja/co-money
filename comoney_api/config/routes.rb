Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  post :purchase, to: 'purchases#create'
  post :add_to_combined_data, to: 'purchases#add_to_combined_data'
  post :discard_purchase, to: 'purchases#remove_from_combined_data'
  get :combined_data, to: 'accounts#combined_data'
  get :poll, to: 'purchases#poll_new_purchases'
end
