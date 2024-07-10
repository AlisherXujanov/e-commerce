from django import forms
from .models import Book


class CreateBookForm(forms.ModelForm):
    title = forms.CharField(label="Book Title", widget=forms.TextInput(
        attrs={"class": "form-control", "placeholder": "Enter book title"}))
    author = forms.CharField(label="Book author", widget=forms.TextInput(
        attrs={"class": "form-control", "placeholder": "Enter book author"}))
    price = forms.CharField(label="Book price", widget=forms.TextInput(
        attrs={"class": "form-control", "placeholder": "Enter book price"}))
    year = forms.CharField(label="Book year", widget=forms.TextInput(
        attrs={"class": "form-control", "placeholder": "Enter book year"}))
    description = forms.Textarea(
        attrs={"class": "form-control", "placeholder": "Enter book description"})
    image = forms.ImageField(label='Image', widget=forms.FileInput(
        attrs={'class': 'form-control'}))

    class Meta:
        model = Book
        fields = ['title', 'author', 'price', 'year', 'description', 'image']


class UpdateBookForm(forms.ModelForm):
    title = forms.CharField(label="Book Title", widget=forms.TextInput(
        attrs={"class": "form-control", "placeholder": "Enter book title"}))
    price = forms.CharField(label="Book Price", widget=forms.TextInput(
        attrs={"class": "form-control", "placeholder": "Price of the book"}))
    description = forms.Textarea(
        attrs={"class": "form-control", "placeholder": "Enter book description"})
    image = forms.ImageField(label='Image', widget=forms.FileInput(
        attrs={'class': 'form-control'}))

    class Meta:
        model = Book
        fields = ['title', 'price', 'description', 'image']
