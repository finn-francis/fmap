# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Company, type: :model do
  describe 'validations' do
    it { is_expected.to(validate_presence_of(:user_id)) }
    it { is_expected.to(validate_presence_of(:name)) }
  end

  describe 'relations' do
    it { is_expected.to(have_many(:children)) }
    it { is_expected.to(have_many(:domains)) }
    it { is_expected.to(belong_to(:parent)) }
  end
end
