from django.shortcuts import render, redirect
from .forms import CreateBookForm, UpdateBookForm
from .models import Book

# 1. Account related views
# 2. CRM  => Client Relationship Management
# 3. CRUD  => Create, Read, Update, Delete



def create_book_view(request):
    form = CreateBookForm()
    cotext = {"form": form}

    if request.method == "POST":
        form = CreateBookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("landing_page")            

    return render(request, "create_book_view.html", cotext)


def update_book_view(request, pk:int):
    """
        pk  ==  Primary Key
        Needed to find and update the book
    """
    book = Book.objects.get(id=pk)
    form = UpdateBookForm(instance=book)
    
    if request.method == "POST":
        form = CreateBookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("landing_page")

    cotext = {"form": form}
    return render(request, "update_book_view.html", cotext)
