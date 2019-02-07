from api.Views.routes import bp
from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS


app = Flask(__name__)
jwt = JWTManager(app)
CORS(app)
app.register_blueprint(bp, url_prefix='/api/v1')
app.config['JWT_SECRET_KEY'] = 'SECretK1ey'