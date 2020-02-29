# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :dashboards, only: :index
      resources :companies, only: %i[index show]
    end
  end
  root 'dashboards#index'
  get '/*path' => 'dashboards#index'
end
