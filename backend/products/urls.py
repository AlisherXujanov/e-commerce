from django.urls import path
from .views import *

urlpatterns = [
    path("", products_view, name="products_view"),
    path("create-book", create_book_view, name="create_book_view"),
]
