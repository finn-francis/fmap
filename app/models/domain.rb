# frozen_string_literal: true

class Domain < ApplicationRecord
  has_many :children, class_name: 'Domains::Subdomain', inverse_of: :parent, dependent: :restrict_with_error

  validates :name, presence: true
  validates :type, presence: true
  validates :type, inclusion: { in: %w[Domains::Domain Domains::Subdomain] }
end
