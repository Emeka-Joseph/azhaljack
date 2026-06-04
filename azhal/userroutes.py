from flask import Blueprint, render_template

user = Blueprint('user', __name__)

@user.route('/')
def index():
    return render_template('user/index.html')

@user.route('/about')
def about():
    return render_template('user/about.html')

@user.route('/services')
def services():
    return render_template('user/services.html')

@user.route('/team')
def team():
    return render_template('user/team.html')

@user.route('/faq')
def faq():
    return render_template('user/faq.html')

@user.route('/contact')
def contact():
    return render_template('user/contact.html')
