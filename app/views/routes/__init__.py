from flask import Blueprint

# Create the main blueprint for the views
views = Blueprint('views', __name__)

# Import and register route modules
from . import index, about, generate_svg

# Register blueprints with the main views blueprint
views.register_blueprint(index.bp)
views.register_blueprint(about.bp)
views.register_blueprint(generate_svg.bp)
