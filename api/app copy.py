from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 
import os

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize DB
db =  SQLAlchemy(app)

# Init ma
ma = Marshmallow(app)

# Test Class/Model
class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

# Test Schema
class TestSchema(ma.Schema):
    class Meta:
        fields = ('id', 'first_name', 'last_name')


# Init Schema
test_schema = TestSchema()
tests_schema = TestSchema(many=True)

# Create a Test
@app.route('/test', methods=['POST'])
def add_test():
    first_name = request.json['first_name']
    last_name = request.json['last_name']

    new_Test = Test(first_name, last_name)

    db.session.add(new_Test)
    db.session.commit()

    return test_schema.jsonify(new_Test)

# Get all Test
@app.route('/test', methods=["GET"])
def get_tests():
    all_Tests = Test.query.all()
    result = tests_schema.dump(all_Tests)
    return jsonify(result)

# Get single Test
@app.route('/test/<id>', methods=["GET"])
def get_test(id):
    test = Test.query.get(id)
    return test_schema.jsonify(test)

# Update a Test
@app.route('/test/<id>', methods=['PUT'])
def update_test(id):
    test = Test.query.get(id)

    first_name = request.json['first_name']
    last_name = request.json['last_name']

    test.first_name = first_name
    test.last_name = last_name

    db.session.commit()

    return test_schema.jsonify(test)

# Run Server
if  __name__ == '__main__':
    app.run(debug=True)

