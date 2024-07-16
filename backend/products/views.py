from django.shortcuts import render, redirect
from .forms import CreateBookForm, UpdateBookForm
from .models import Book
from django.contrib import messages
from .usecases import add_to_favorites, remove_from_favorites

# 1. Account related views
# 2. CRM  => Client Relationship Management
# 3. CRUD  => Create, Read, Update, Delete


def add_to_wishlist(request, pk):
    """
    Adds a book to the wishlist for later purchase\n
    RU: Добавляет книгу в список желаемого для покупки
    """
    ...
    # If added into wishlist return True and show success message
    # else return False and show error message
    if add_to_favorites(request, pk):
        messages.success(request, "Book added to wishlist")
        return redirect("landing_page")
    else:
        messages.error(request, "Error: Book not added to wishlist")
        return redirect("landing_page")

def remove_from_wishlist(request, pk):
    """
    Adds a book to the wishlist for later purchase\n
    RU: Добавляет книгу в список желаемого для покупки
    """
    ...
    # If added into wishlist return True and show success message
    # else return False and show error message
    if remove_from_favorites(request, pk):
        messages.warning(request, "Book removed from wishlist")
        return redirect("landing_page")
    else:
        messages.error(request, "Error: Book not removed from wishlist")
        return redirect("landing_page")



def create_book_view(request):
    form = CreateBookForm()
    cotext = {"form": form}

    if request.method == "POST":
        form = CreateBookForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("landing_page")
        else:
            messages.error(request, "Error: Form is not valid")
            cotext = {"form": form}

    return render(request, "create_book_view.html", cotext)


def update_book_view(request, pk: int):
    """
        pk  ==  Primary Key
        Needed to find and update the book
    """
    book = Book.objects.get(id=pk)
    form = UpdateBookForm(instance=book)

    if request.method == "POST":
        form = UpdateBookForm(request.POST, request.FILES, instance=book)
        if form.is_valid():
            form.save()
            return redirect("landing_page")

    cotext = {"form": form}
    return render(request, "update_book_view.html", cotext)
