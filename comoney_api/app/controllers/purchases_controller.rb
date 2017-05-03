class PurchasesController < ApplicationController

  def create
    purchase = Purchase.new(account_id: Account.first.id, amount: 345, name: 'ICA Maxi')
    purchase.save

    render json: {}, status: 200
  end

  def add_to_combined_data
    purchase = Purchase.last
    purchase.update_attribute :combined, true

    render json: {}, status: 200
  end

end
