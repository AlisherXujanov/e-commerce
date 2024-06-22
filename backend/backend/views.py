from django.shortcuts import render, redirect
from products.models import Book


def landing_page(request):
    books = Book.objects.all()
    context = {"books": books}
    return render(request, "landing_page.html", context)


def about(request):
    return render(request, "about.html")
