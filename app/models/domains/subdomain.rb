# frozen_string_literal: true

module Domains
  class Subdomain < ::Domain
    belongs_to :parent, class_name: 'Domain', foreign_key: :parent_id, inverse_of: :children

    validates :parent_id, presence: true
    validates :name, uniqueness: { scope: :parent_id }
  end
end
