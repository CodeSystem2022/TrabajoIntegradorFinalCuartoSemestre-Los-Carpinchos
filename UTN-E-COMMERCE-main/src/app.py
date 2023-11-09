from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_user, logout_user, login_required
from sqlalchemy import create_engine
import psycopg2 #conexion a la base de datos

from config import config

#Models
from models.ModelUser import ModelUser

#Entities
from models.entities.User import User

app = Flask(__name__)

#db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://bd_tienda'
db = SQLAlchemy(app)

login_manager_app = LoginManager(app)

@login_manager_app.user_loader
def load_user(id):
    return ModelUser.get_by_id(db, id)


@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/client/login', methods=['GET', 'POST'])

def login():
    if request.method == 'POST':
        #print(request.form['username'])
        #print(request.form['password'])
        user = User(0, request.form['username'], request.form['password'])
        logged_user = ModelUser.login(db, user)
        if logged_user != None:
            if logged_user.password:
                login_user(logged_user)
                return redirect(url_for('home'))
            else:
                flash("Invalid password ...")
                return render_template('/client/login.html')
        else:
            flash("User not found ...")
            return render_template('/client/login.html')
    else:
        return render_template('/client/login.html')


@app.route('/client/index')
def home():
    return render_template('/client/index.html')


if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.run()
