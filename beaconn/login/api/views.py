from django.shortcuts import render

from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from login.models import User 
from .serializers import SignupSerializer
import json

'''
API for login
'''
class LoginAPIView(APIView):
    
    '''
    Takes in a login request with an email and password, and searches the user in the database.
    If found, checks to see if password matches.
    Return values-  HTTP 200 (OK) if email found and password matches
                    HTTP 401 (UNAUTHORIZED) if email found, password does not match
                    HTTP 404 (NOT FOUND) if email not found in database
    '''
    def get(self, request, format = None):
        if request.method == 'GET':
            email = request.query_params.get("email")
            password = request.query_params.get("password")
            
        users = User.objects.all()
        try:
            user = users.get(email = email)
            if user.password == password:
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

'''
API for signup
'''
class SignupAPIView(APIView):
        
    '''
    Takes in a signup request with a first name, last name, email and password.
    Creates new user if the email does not already exist, otherwise returns error code.
    Return values-  HTTP 200 (OK) if request valid, email unique, user saved in database
                    HTTP 409 (CONFLICT) if request valid, email already exists in database
                    HTTP 400 (BAD REQUEST) for invalid/missing parameters in query
    '''
    def post(self, request, format = None):
        if request.method == 'POST':
            serializer = SignupSerializer(data = request.query_params)

        if serializer.is_valid():
            users = User.objects.all()
            users = users.filter(email = request.query_params.get('email'))
            if len(users) == 0:
                user = serializer.save()
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_409_CONFLICT)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
