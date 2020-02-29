# frozen_string_literal: true

module Domains
  class Domain < ::Domain
    belongs_to :company

    validates :company_id, presence: true
    validates :name, uniqueness: { scope: :company_id }
  end
end
