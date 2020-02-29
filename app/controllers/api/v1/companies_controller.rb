# frozen_string_literal: true

module Api
  module V1
    class CompaniesController < ApplicationController
      def index
        companies = current_user.companies
        render json: companies
      end

      def show
        render json: company
      end

      private

      def company
        @company ||= current_user.companies.find(params[:id])
      end
    end
  end
end
