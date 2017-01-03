# Be sure to restart your server when you modify this file.

Rails.application.config.session_store :cookie_store, key: '_smta_session', 
                                        domain: :all,
                                        expire_after: 6.months
