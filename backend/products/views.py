from django.shortcuts import render


def products_view(request):
    context = {
        "title": "Hello world",
    }
    return render(request, "products_view.html", context)

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
