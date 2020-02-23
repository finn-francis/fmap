# frozen_string_literal: true

module Api
  module V1
    class DashboardsController < ApplicationController
      def index
        render json: { firstName: current_user.first_name }
      end
    end
  end
end
