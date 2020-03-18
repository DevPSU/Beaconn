from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

application = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

application.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(application)

ma = Marshmallow(application)

@application.route('/')
def index():
    return "Test"

if __name__ == '__main__':
    application.run(debug=True)