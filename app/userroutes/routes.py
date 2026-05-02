from flask import Blueprint, render_template

userroutes = Blueprint('userroutes', __name__)

@userroutes.route('/')
def index():
    return render_template('userroutes/index.html')

@userroutes.route('/about')
def about():
    return render_template('userroutes/about.html')

@userroutes.route('/services')
def services():
    return render_template('userroutes/services.html')

@userroutes.route('/team')
def team():
    return render_template('userroutes/team.html')

@userroutes.route('/faq')
def faq():
    return render_template('userroutes/faq.html')

@userroutes.route('/contact')
def contact():
    return render_template('userroutes/contact.html')
