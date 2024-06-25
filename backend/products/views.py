from django.shortcuts import render, redirect
from .forms import CreateBookForm

# 1. Account related views
# 2. CRM  => Client Relationship Management
# 3. CRUD  => Create, Read, Update, Delete


def products_view(request):
    # GET method as default
    context = {
        "title": "Hello world",
    }
    return render(request, "products_view.html", context)


def create_book_view(request):
    form = CreateBookForm()
    cotext = {"form": form}

    if request.method == "POST":
        form = CreateBookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("products_view")            

    return render(request, "create_book_view.html", cotext)


# =================================================================
# # import HTTPResponse from django.http
# from django.http import HttpResponse


# # Create your views here.
# def products_view(request):
#     """Return an empty HTTPResponse object."""
#     return HttpResponse("""
#         <h1>Products View</h1>
#         <p>This is the products view</p>
#         <button>Click me</button>
#     """)
