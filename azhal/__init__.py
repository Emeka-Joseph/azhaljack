from flask import Flask
from dotenv import load_dotenv
import os

load_dotenv()

def create_app(config_name=None):
    app = Flask(__name__)

    from azhal.config import config
    cfg = config_name or os.environ.get('FLASK_ENV', 'default')
    app.config.from_object(config[cfg])

    from azhal.userroutes import user
    app.register_blueprint(user)

    return app
