# ORM  ->  Object Relational Mapping
# ==========================================================================

# Book 
#   - title
#   - author
#   ...

# 1-step.  Create a model
from django.db import models

class Book(models.Model):
    title = ...
    author = ...
    ...

# In order to create a model in DB, we need to run a migration
# python manage.py makemigrations  (create a migration file for DB)
# python manage.py migrate         (Inserts the table into DB)
# ==========================================================================

# CRUD
#    - Create
#    - Read
#    - Update
#    - Delete
# ---------------
# 1-Create  
# book1 = Book.objects.create(title='...', author='...')
# ...
# ---------------
# 2-Read
# book1 = Book.objects.get(title='...')   =>  {...}  only one object
# OR
# book1 = Book.objects.filter(id=1)       =>  [...]  many objects
# ---------------
# 3-Update
# book1 = Book.objects.get(title='...')
# book1.title = 'smth else'
# book1.save()
# ---------------
# 4-Delete
# book1 = Book.objects.get(title='...')
# book1.delete()
