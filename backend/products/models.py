from django.db import models, IntegrityError
import json

class LikesManager(models.Manager):
    def get_queryset(self):
        # Book.objects.all()
        return super().get_queryset()

    def get_likes(self):
        objs = self.get_queryset()
        pool = []
        for obj in objs:
            if len(obj.get_likes()) > 0:  # "[]"  =>   [] > 0
                pool.append(obj)
        return pool

    # def get_dislikes(self):
    #     # Book.objects.all().filter(likes__lt=0)
    #     return self.get_queryset().filter(likes__lt=0)


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
    image = models.ImageField(
        upload_to='books/', default='books/default.png')

    objects = models.Manager()  # The default manager
    liked_objects = LikesManager()  # Custom manager

    def get_people_who_read(self) -> list:
        """
        Returns a list of people who read this book\n
        RU: Возвращает список людей, которые прочитали эту книгу
        """
        return json.loads(self.people_who_read)

    def set_people_who_read(self, person_id: int) -> bool:
        """
        Adds a person into the list of people who read this book\n
        RU: Добавляет человека в список людей, которые прочитали эту книгу
        """
        existing_people = self.get_people_who_read()
        if person_id not in existing_people:  # person_id not in [1, 2, 3]
            existing_people.append(person_id)
            json.dumps(existing_people)
            return True
        return False

    def get_likes(self) -> list:
        """
        Returns a list of people who liked this book\n
        RU: Возвращает список людей, которые лайкнули эту книгу
        """
        return json.loads(self.likes)

    def set_likes(self, person_id: int,  delete: bool = False) -> bool:
        """
        Adds a person into the list of people who liked this book\n
        RU: Добавляет человека в список людей, которые лайкнули эту книгу
        """
        existing_likes = self.get_likes()

        if person_id and delete:
            if person_id in existing_likes:
                existing_likes.remove(person_id)
                return True
            else:
                return False

        if person_id not in existing_likes:  # person_id not in [1, 2, 3]
            existing_likes.append(person_id)
            json.dumps(existing_likes)
            return True
        else:
            return False


    def save(self, *args, **kwargs):
        if not self.title:
            raise IntegrityError("Title is required")
        self.title = self.title.upper()
        super().save(*args, **kwargs)  # Call the "real" save() method.


    def delete(self, *args, **kwargs):
        # ex: self.children.all().delete()
        super().delete(*args, **kwargs)  # Call the "real" delete() method.


    def __str__(self):
        return self.title


# ------------------------------------
# import json
# pool = []
# objs = Book.objects.all()
# for obj in objs:
#     if json.loads(obj.likes) > 0:
#         pool.append(obj)
# ------------------------------------
# objs = Book.liked_objects.get_likes()
# Book.liked_objects.get_dislikes()
# ------------------------------------
