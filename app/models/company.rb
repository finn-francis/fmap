# frozen_string_literal: true

class Company < ApplicationRecord
  belongs_to :user
  belongs_to :parent, class_name: 'Company', inverse_of: :children
  has_many :children, class_name: 'Company', inverse_of: :parent, dependent: :restrict_with_error

  validates :user_id, presence: true
  validates :name, presence: true
end
