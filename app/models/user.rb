class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, :omniauth_providers => [:facebook]

  has_many :comments
  has_many :user_whiskeys
  has_many :whiskeys, through: :user_whiskeys


  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.name = auth.info.name
      user.password = Devise.friendly_token[0,20]
    end
  end




  def whiskey_count
    self.whiskeys.count
  end

  def distillers
    count = []

    self.whiskeys.each do |whiskey|
      count << whiskey.distiller
    end
    count.uniq
  end

  def distillers_count
      distillers.count
  end


end
