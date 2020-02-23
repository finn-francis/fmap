# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def current_user
    @current_user ||= User.find_by(email: 'finnfrancis123@gmail.com')
  end
end
