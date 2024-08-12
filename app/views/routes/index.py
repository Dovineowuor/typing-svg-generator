from flask import Blueprint, render_template

bp = Blueprint('index', __name__)

@bp.route('/')
def index():
    """
    Render the index.html template when the user visits the root URL.

    """
    return render_template('index/index.html')
