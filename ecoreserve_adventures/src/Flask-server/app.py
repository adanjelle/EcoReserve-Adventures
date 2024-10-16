from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
import bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Replace with a secure key
db = SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app)
jwt = JWTManager(app)  # Initialize JWT

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

user_schema = UserSchema()
users_schema = UserSchema(many=True)

# Register endpoint
@app.route('/register', methods=['POST'])
def register():
    email = request.json['email']
    password = request.json['password']
    
    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user)

# Login endpoint
@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    
    # Check if user exists
    user = User.query.filter_by(email=email).first()
    
    if user and bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
        # Create JWT token
        access_token = create_access_token(identity=user.id)
        return jsonify({
            "access_token": access_token,
            "message": "Login successful"
        })
    
    return jsonify({"message": "Invalid credentials"}), 401

# Run the app
if __name__ == '__main__':
    db.create_all()  # Create database tables
    app.run(debug=True)
