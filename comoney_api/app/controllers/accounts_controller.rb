class AccountsController < ApplicationController

  def combined_data
    @purchases1 = Account.first.purchases.where(combined: true)
    @purchases2 = Account.second.purchases.where(combined: true)

    render json: { account1: @purchases1, account2: @purchases2 }
  end

end
