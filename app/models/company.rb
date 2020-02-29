# frozen_string_literal: true

class Company < ApplicationRecord
  belongs_to :user
  belongs_to :parent, class_name: 'Company', inverse_of: :children, foreign_key: :parent_id, optional: true

  has_many :children, class_name: 'Company', inverse_of: :parent, dependent: :restrict_with_error
  has_many :domains, dependent: :destroy

  validates :user_id, presence: true
  validates :name, presence: true
end
