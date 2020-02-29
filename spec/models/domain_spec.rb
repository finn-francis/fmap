# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Domain, type: :model do
  describe 'validations' do
    it { is_expected.to(validate_presence_of(:name)) }
    it { is_expected.to(validate_presence_of(:type)) }
    it { is_expected.to(validate_inclusion_of(:type).in_array(%w[Domains::Domain Domains::Subdomain])) }
  end

  it { is_expected.to(have_many(:children)) }

  describe Domains::Domain do
    it { is_expected.to(validate_uniqueness_of(:name).scoped_to(:company_id)) }
    it { is_expected.to(validate_presence_of(:company_id)) }
    it { is_expected.to(belong_to(:company)) }
  end

  describe Domains::Subdomain do
    it { is_expected.to(validate_presence_of(:parent_id)) }
    it { is_expected.to(validate_uniqueness_of(:name).scoped_to(:parent_id)) }
    it { is_expected.to(belong_to(:parent)) }
  end
end
