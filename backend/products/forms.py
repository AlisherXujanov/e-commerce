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

    def __init__(self, *args, **kwargs):
        super(CreateBookForm, self).__init__(*args, **kwargs)
        self.title = self.data.get('title')

    def is_valid(self):
        import re
        form = super(CreateBookForm, self).is_valid()

        title_pattern = r'^[a-zA-Z0-9]*$'
        if not re.match(title_pattern, self.title):
        # if self.title == "bemiyya":
            # self.add_error('title', 'Bemiyya suzi mumkun emas')
            self.add_error('title', 'Title must be alphanumeric')
            return False

        return form

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
