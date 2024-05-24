from django.urls import path
from .views import *

urlpatterns = [
    path("", products_view, name="products_view"),
]
