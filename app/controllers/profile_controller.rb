class ProfileController < ApplicationController
  before_action :authenticate_user!, only: [:show, :update]
  before_action :set_profile, only: [:show, :update]

  def create
    @profile = Profile.new(profile_params)
    current_user.profile = @profile
    if @profile.save
      render nothing: true, status: :ok
    else
      render nothing: true, status: :bad_request
    end
  end

  def show
    @project = Project.all
  end

  def update
    @profile.app_name = params[:profile][:app_name]
    @profile.desc = params[:profile][:desc]
    @profile.tel = params[:profile][:tel]
    @profile.app_email = params[:profile][:app_email] 

    if @profile.save
      current_user.profile = @profile
      render nothing: true, status: :ok
    else
      render nothing: true, status: 304
    end
  end

  private
  def set_profile
    @profile = current_user.profile
    if @profile.nil?
      @profile = Profile.new
      @profile.app_name = "어플 이름"
      @profile.desc = "수정 버튼을 눌러 어플에 대한 정보를 입력하세요."
      @profile.tel = "전화번호"
      @profile.app_email = "이메일"
    end
    return @profile
  end

  def profile_params
    params.require(:profile).permit(:app_name, :desc, :tel, :app_email)
  end

  def profile_avatar_params
    params.require(:profile).permit(:avatar, :app_name, :desc, :tel, :app_email)
  end

end