from django.urls import path
from .views import *

urlpatterns = [
    # 8000/users/create/
    path('create/', create_account, name='create_account'),
    path('login/', login_view, name='login'),
    path('logout/', logout_user, name='logout'),
]
