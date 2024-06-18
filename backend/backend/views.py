from django.shortcuts import render, redirect


def landing_page(request):
    return render(request, "landing_page.html")

def about(request):
    return render(request, "about.html")