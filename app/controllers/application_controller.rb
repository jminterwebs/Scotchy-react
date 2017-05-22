class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true
  before_action :authenticate_user!

  def after_sign_in_path_for(resource)
  request.env['omniauth.origin'] || root_path
  end

  protected

       def configure_permitted_parameters
           devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:name, :email, :password) }
           devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:name, :email, :password, :current_password) }
       end
end
