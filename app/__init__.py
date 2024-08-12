from flask import Flask
from app.utils.configs.config import Config
from app.views.routes import views  # Ensure this import is correct

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Register the views blueprint
    app.register_blueprint(views)
    
    return app
