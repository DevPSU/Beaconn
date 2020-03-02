from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from ..models import User

User = get_user_model()

class UserAPITest(APITestCase):
    def setUp(self):
        u1 = User(first_name='abcd', last_name = 'wxyz', email = 'abcdwxyz@gmail.com', password = 'nopassword')
        u1.save()

    