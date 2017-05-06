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

  def remove_from_combined_data
    purchase = Purchase.last
    purchase.update_attribute :combined, false

    render json: {}, status: 200
  end

  def poll_new_purchases
    purchase = Account.first.purchases.where(combined: nil)
    render json: { purchase: purchase }, status: 200
  end

end
