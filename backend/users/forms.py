from django import forms


class CreateUserForm(forms.Form):
    username = forms.CharField(max_length=100, label='Username',
                               widget=forms.TextInput(attrs={'class': 'form-control',
                                                             'placeholder': 'Username'}))
    email = forms.EmailField(label='Email',
                             widget=forms.EmailInput(attrs={'class': 'form-control',
                                                            'placeholder': 'Email'}))
    password = forms.CharField(max_length=100, label='Password',
                               widget=forms.PasswordInput(attrs={'class': 'form-control',
                                                                 'placeholder': 'Password'}))
    password2 = forms.CharField(max_length=100, label='Password Confirmation',
                                widget=forms.PasswordInput(attrs={'class': 'form-control',
                                                                  'placeholder': 'Password Confirmation'}))

    # def __init__(self, *args, **kwargs) -> None:
    #     super(CreateUserForm).__init__(*args, **kwargs)


class LoginUserForm(forms.Form):
    username = forms.CharField(max_length=100, label='Username',
                               widget=forms.TextInput(attrs={'class': 'form-control',
                                                             'placeholder': 'Username'}))
    password = forms.CharField(max_length=100, label='Password',
                               widget=forms.PasswordInput(attrs={'class': 'form-control',
                                                                 'placeholder': 'Password'}))
