from abc import ABC, abstractmethod
# Abstract
# Inheritance

# this == self

# class User:
#     def __init__(self, name:str, age:int, bio:str) -> None:
#         self.name = name
#         self.age = age
#         self.bio = bio

#     def __str__(self) -> str:
#         return f"User {self.name}"

#     def get_info(self) -> str:
#         return f"{self.name} is {self.age} years old. {self.bio}"

# # {...:...}
# user1 = User("John", 25, "I am a software engineer")
# print(user1.get_info())


# __init__  => is a constructor method which is used to initialize the attributes of a class
# it is called automatically when an object is created

#############################################################################################
# Abstraction

# "abc" here stands for abstract base class. It is first imported and then used as
# a parent class for some class that becomes an abstract class. Its simplest implementation
# can be done as below.



# class AbcAnimal(ABC):
#     def __init__(self, name, food):
#         self.name = name
#         self.food = food

#     @abstractmethod
#     def get_description(self):
#         pass
#         # raise NotImplementedError

#     def __str__(self):
#         return f"{self.name} eats {self.food}"


# class Animal(AbcAnimal):
#     def __init__(self, name, food, wild):
#         super().__init__(name, food)
#         self.wild = wild

#     def get_description(self):
#         return f"{self.name} eats {self.food}"


# class WildAnimals(Animal):
#     def __init__(self, name: str, food: str, wild: bool, speed: int = 0):
#         super().__init__(name, food, wild)
#         self.speed = speed

#     def get_description(self):
#         parent_info = super().get_description()
#         return parent_info + f" and runs at {self.speed} km/h"


# tiger = WildAnimals("Tiger", "Meat", True, 50)
# print(tiger)
# print(tiger.get_description())


# abs module is used to create abstract classes
# it is helpful when we want to create a class that will be used as a base class
# abstractmethod is used to declare abstract methods which will be implemented by the child classes
# is it used to ensure that the child classes will have the same method as the parent class
# and returns an error if the child class does not have the same method as the parent class
# RU: абстрактный класс - это класс, который не предназначен для создания экземпляров,
# а предназначен для использования в качестве родительского класса для других классов
# абстрактный метод - это метод, который объявлен, но не реализован в базовом классе.

#############################################################################################
# Inheritence

# Inheritance allows us to define a class that inherits all the methods
# and properties from another class.
# Parent class is the class being inherited from, also called base class.
# Child class is the class that inherits from another class, also called derived class.

# is a way of creating a new class for using details of an existing class without modifying it.
# The newly formed class is a derived class (or child class).
# Similarly, the existing class is a base class (or parent class).

# class Parent:
#     def __init__(self, name):
#         self.name = name

#     def test(self):
#         print("Hello world")

# class Child(Parent, ABC):
# #     Inherited members from parent class
# #     Additional members of the child class
#     def __init__(self, name, age):
#         super().__init__(name)  # => calls the parent class constructor
#         self.age = age

#     def test(self):
#         print("Hello world from child")

#     def __repr__(self) -> str:
#         '''
#             Is used to represent the object with a string.
#             It is used for debugging and logging.
#         '''
#         return f"{self.name} is {self.age} years old"

#     def __str__(self) -> str:
#         '''
#             Is used to represent the object with a string.
#             It is used for the end user.
#         '''
#         return f"{self.name} is {self.age} years old"


# child = Child("John", 20)
# print(child)
# print(child.test())

# Polymorphism
# Polymorphism allows you define one interface and have multiple implementations.
# Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.

# class Character:
#     def attack(self):
#         raise NotImplementedError("Subclass must implement abstract method")

# class Soldier(Character):
#     def attack(self):
#         return 'Soldier shoots a gun!'

# class Alien(Character):
#     def attack(self):
#         return 'Alien uses a laser beam!'

# class Robot(Character):
#     def attack(self):
#         return 'Robot uses a mechanical arm!'

#############################################################################################
# Encapsulation
# is used to restrict access to methods and variables.
# This prevents data from direct modification which is called encapsulation.

# class A:
#     def __init__(self):
#         self._a = 2.   # Protected member ‘a’
#         self.__b = 2.  # Private member ‘b’

# a = A()
# print(a._a)

# # Real world example
# class BankAccount:
#     def __init__(self):
#         self.__account_number = None
#         self.__pin = None
#         self.__balance = 0

#     def set_account_details(self, account_number, pin):
#         self.__account_number = account_number
#         self.__pin = pin

#     def get_balance(self, account_number, pin):
#         if self.__account_number == account_number and self.__pin == pin:
#             return self.__balance
#         else:
#             return "Invalid account details"

#     def deposit(self, account_number, pin, amount):
#         if self.__account_number == account_number and self.__pin == pin:
#             self.__balance += amount
#             return "Deposit successful"
#         else:
#             return "Invalid account details"

#     def withdraw(self, account_number, pin, amount):
#         if self.__account_number == account_number and self.__pin == pin:
#             if amount <= self.__balance:
#                 self.__balance -= amount
#                 return "Withdrawal successful"
#             else:
#                 return "Insufficient balance"
#         else:
#             return "Invalid account details"


#############################################################################################
# DECORATORS

# @property   is a built-in decorator in Python that is used to define the properties
#             of an object. The @property decorator makes the work easier by
#             automatically calling the getter method when the value of the attribute is accessed.

# @classmethod is a built-in decorator in Python that is used to create class methods.
#              The class method can be called by both the class and the object.
#              This method accepts the class as the first argument that is passed automatically
#              when the method is called.

# @staticmethod is a built-in decorator in Python that defines a static method.
#               A static method doesn’t receive any reference argument whether it is called by an
#               instance of a class or by the class itself. This means that a static method can neither
#               modify object state nor class state. Static methods are restricted in what data they can
#               access - and they’re primarily a way to namespace your methods.

# -- Static method knows nothing about the class and just deals with the parameters.
# -- Class method works with the class since its parameter is always the class itself.

# Link that is about difference of two decorators:
# https://sparkbyexamples.com/python/python-difference-between-staticmethod-and-classmethod/#h-1-what-is-staticmethod


# class Student:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     @classmethod
#     def fromBirthYear(cls, name, year):
#         return cls(name, date.today().year - year)

#     @staticmethod
#     def isAdult(age):
#         return age > 18

# student1 = Student('Rolf', 19)
# student2 = Student.fromBirthYear('Anna', 1990)

# print(student1.age)
# print(student2.age)


####################################################################################
####################################################################################
# class Student():
#     def __init__(self, name, age):
#         self.__name = name
#         self.__age = age
#         self.__image = "..."

#     # {{ student.img_url }}   ===   {{ student.__image.url }}
#     # {%  %}

#     # def get_name(self):
#     #     return self.__name

#     @property
#     def name(self):
#         return self.__name

#     @name.setter
#     def name(self, name):
#         self.__name = name

#     # def set_name(self, name):
#     #     self.__name = name

# s1 = Student('John', 25)
# # print(s1.get_name())
# # print(s1.set_name("Alex"))
# print(s1.name)
# s1.name = "Alex"
# print(s1.name)


####################################################################################
####################################################################################


# factory design
class AbstractUserClass(ABC):
    name: str
    surname: str
    age: int
    email: str

    @abstractmethod
    def get_info(self):
        raise NotImplementedError(
            "This is an abstract method and needs to be implemented in the child class.")


class User(AbstractUserClass):
    def __init__(self, name: str, surname: str, age: int = 0, email: str = '') -> None:
        self.name = name
        self.surname = surname
        self.age = age
        self.email = email

    def __str__(self) -> str:
        return f'{self.name} {self.surname} is {self.age} years old.\nEmail: {self.email}'

    def __repr__(self) -> str:
        return f'{self.name} {self.surname} is {self.age} years old.\nEmail: {self.email}'

    def __call__(self, *args, **kwargs):
        print(f"This is call fn from __call__")
        for i in args:
            print(i)
        return ''
        # ex:
        # user1("test1", "test2", "test3")  => This is call fn from __call__
        # s1 = Student()
        # s1()

    def __add__(self, other):
        return "This user has $" + str(other.budget)

    def get_info(self):
        print(f'{self.name} {self.surname}')
        return ''

    @classmethod
    def from_string(cls, string):
        if not string.count(',') == 3:
            raise Exception("String must have 4 values separated by comma.")

        # string  =>  "John, Doe, 25, test@gmail.com"
        splitted_str = string.split(",")
        name, surname, age, email = splitted_str
        # name = splitted_str[0]
        # surname = splitted_str[1]
        # age = splitted_str[2]
        # email = splitted_str[3]
        return cls(name, surname, int(age), email)

    @staticmethod
    def is_adult(age):
        return age > 18


class Client(User):
    def __init__(self, name: str, surname: str, budget: float) -> None:
        super().__init__(name, surname)
        self.budget = budget

    def __str__(self) -> str:
        return f'{self.name} {self.surname} has ${self.budget} budget.'

    def __repr__(self) -> str:
        return f'{self.name} {self.surname} has ${self.budget} budget.'

    def get_info(self):
        print(f'{self.name} {self.surname} has ${self.budget} budget.')
        return ''


# =================================================
user1 = User('John', 'Doe', 25, 'test@gmail.com')
print(user1.get_info())
# =================================================
client1 = Client("Cathrine", "Mackwold", 10000)
print(client1.get_info())
# =================================================
result = user1 + client1
print(result)
# =================================================
# user1 = User.from_string("John, Doe, 25, test@gmail.com")  # classmethod
# print(user1)
# print(User.is_adult(user1.age))  # staticmethod
