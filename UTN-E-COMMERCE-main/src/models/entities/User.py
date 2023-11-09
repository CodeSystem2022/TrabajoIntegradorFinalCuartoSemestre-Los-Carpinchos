from werkzeug.security import check_password_hash
from flask_login import UserMixin

#hashed password es el pw guardado en la bd, despues de pasar por el metodo hash
#password es el textp plano, mi clave

class User(UserMixin):

    def __init__(self, id, username, password, email="") -> None:
        self.id = id
        self.username = username
        self.password = password
        self.email = email

    @classmethod
    def check_password(self, hashed_password, password):
        return check_password_hash(hashed_password, password)