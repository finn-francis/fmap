# frozen_string_literal: true

Rails.application.routes.draw do
  root 'dashboards#index'
  get '/*path' => 'dashboards#index'
end
