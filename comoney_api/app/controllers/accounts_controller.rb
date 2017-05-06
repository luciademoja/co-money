class AccountsController < ApplicationController

  def combined_data
    purchases1 = Account.first.purchases.where(combined: true)
    purchases2 = Account.second.purchases.where(combined: true)

    account1_total = purchases1.map{ |h| h[:amount]  }.sum.to_f
    account2_total = purchases2.map{ |h| h[:amount]  }.sum.to_f
    total = account1_total + account2_total

    account1_per = (account1_total / total).to_f
    account2_per = (account2_total / total).to_f

    render json: {
      account1: purchases1,
      account2: purchases2,
      account1_per: (account1_per * 100).round(1),
      account2_per: (account2_per * 100).round(1),
      account1_total: account1_total,
      account2_total: account2_total
    }
  end

end
