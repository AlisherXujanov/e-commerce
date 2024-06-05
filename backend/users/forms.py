from django import forms
from typing import Union, Literal

class CreateUserForm(forms.Form):
    username = forms.CharField(max_length=100, label='Username',
                               widget=forms.TextInput(
                                   attrs={'class': 'form-control',
                                          'placeholder': 'Username'}))

    def __init__(self, *args, **kwargs) -> None:
        ...

        # polymorphism   ->  poly->много, morf-формный   
        #                    functions that have many forms
        # ex:   
        #   -  len()  -> str, list, tuple, dict, set

        # encapsulation  (private, protected, public)
        # inheritance
        # abstraction  (abs)
        # methods
        # decorators  (property, ...setter)

# def test(a: int, b: Union[str, int, bool], c:Literal["hello"]) -> int:
#     """This is test text"""
#     ...

# test(1, "2", "world")
# "".upper()


# assert result == 2 # Error
# ...