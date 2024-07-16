from django.urls import path
from .views import *

urlpatterns = [
    path("create-book", create_book_view, name="create_book_view"),
    path("update-book/<int:pk>/", update_book_view, name="update_book_view"),
    path("add-to-wishlist/<int:pk>", add_to_wishlist, name="add_to_wishlist"),
    path("remove-from-wishlist/<int:pk>",
         remove_from_wishlist, name="remove_from_wishlist"),
]
