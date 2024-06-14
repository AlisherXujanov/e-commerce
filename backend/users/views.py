from django.shortcuts import render, redirect
from .forms import LoginUserForm, CreateUserForm
from django.contrib import messages
from django.contrib.auth.models import User

# import authenticate, login, logout
from django.contrib.auth import authenticate, login, logout


# Create your views here.
def create_account(request):
    # Get method as default
    form = CreateUserForm()
    context = {"form": form}

    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            user = User.objects.create(
                username=form.cleaned_data.get('username'),
                email=form.cleaned_data.get('email'),
                password=form.cleaned_data.get('password')
            )
            user.save()
            messages.success(request, "Successfully created a new account!")
            return redirect('products_view')
        else:
            messages.error(request, "Failed to create a new account!")
            print("Failed")

    return render(request, "create_account.html", context)


def login_view(request):
    form = LoginUserForm()
    context = {"form": form}

    if request.method == "POST":
        form = LoginUserForm(request.POST)
        # 1. authenticate  -> user
        # 2. if user then login
        # 3. else return error message
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            # user = authenticate(request, username=username, password=password)
            # if user:
            #     user ...
            if user := authenticate(request, username=username, password=password):
                login(request, user)
                messages.success(request, "Successfully logged in!")
                return redirect('products_view')
            else:
                messages.error(request, "Invalid username or password!")

    return render(request, "login.html", context)
