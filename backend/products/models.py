from django.db import models
import json


# json.dumps()   =>    JSON.stringify()
# json.loads()   =>    JSON.parse()

class Book(models.Model):  # Table name 
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    price = models.IntegerField()
    year = models.IntegerField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    people_who_read = models.TextField(default="[]")
    likes = models.TextField(default="[]")
    
    def __str__(self):
        return self.title