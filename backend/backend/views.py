from django.shortcuts import render, redirect
from products.models import Book
from django.views.generic import TemplateView

# def landing_page(request):
#     books = Book.objects.all()
#     context = {"books": books}
#     return render(request, "landing_page.html", context)


class LangingPageView(TemplateView):
    template_name = 'landing_page.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['books'] = Book.objects.all()
        return context


def about(request):
    return render(request, "about.html")
