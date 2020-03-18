from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 
import os

# Init app
application = app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

# Database
application.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize DB
db =  SQLAlchemy(application)

# Init ma
ma = Marshmallow(application)

#----------------------------------------------------------------------------------------------------
# Sign Up

# Sign Up Class/Model
class Register(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    email = db.Column(db.String(50))
    password  = db.Column(db.String(50))

    def __init__(self, first_name, last_name, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password

# Sign Up Schema
class RegisterSchema(ma.Schema):
    class Meta:
        fields = ('id', 'first_name', 'last_name', 'email', 'password')


# Init Schema
register_schema = RegisterSchema()
registers_schema = RegisterSchema(many=True)

@application.route('/')
def intro():
    return "Hello World"

# Create a registered user
@application.route('/auth/register', methods=['POST'])
def add_user():
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    email = request.json['email']
    password = request.json['password']

    new_User = Register(first_name, last_name, email, password)

    db.session.add(new_User)
    db.session.commit()

    return register_schema.jsonify(new_User)

# Get all registers users
@application.route('/auth/register', methods=["GET"])
def get_users():
    all_Users = Register.query.all()
    result = registers_schema.dump(all_Users)
    return jsonify(result)

# Get single user
@application.route('/auth/register/<id>', methods=["GET"])
def get_user(id):
    user = Register.query.get(id)
    return register_schema.jsonify(user)

# Update a user information
@application.route('/auth/register/<id>', methods=['PUT'])
def update_user(id):
    user = Register.query.get(id)

    first_name = request.json['first_name']
    last_name = request.json['last_name']
    email = request.json['email']
    password = request.json['password']

    user.first_name = first_name
    user.last_name = last_name
    user.email = email
    user.password = password

    db.session.commit()

    return register_schema.jsonify(user)

# Get single user
@application.route('/auth/test/', methods=["GET"])
def get_users():
    return "Nothing to see here."

# Run Server
if  __name__ == '__main__':
    app.run(debug=True)

