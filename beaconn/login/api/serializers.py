from rest_framework import serializers
from login.models import User

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [   
            'first_name',
            'last_name',
            'email',
            'password',
        ]

        extra_kwargs = {
            'password' : {'write_only': True}
        }

    def save(self):
        user = User(first_name = self.validated_data['first_name'], last_name = self.validated_data['last_name'], email = self.validated_data['email'], password = self.validated_data['password'])
        user.save()
        return user