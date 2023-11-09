class Config:
    SECRET_KEY = 'scrypt:32768:8:1$RyljTxI7zvrDLQtw$51fdd7039cf3e849e95dac0a7470c26f8bb7288ea75dedbdac1ff8b47ccc681fb0a4186e214fba9d9556d222455856e0377f198e08f2a16ad0d84940258a868c'

class DevelopmentConfig(Config):
    DEBUG = True
    USER = 'postgres',
    PASSWORD= 'admin',
    HOST = '127.0.0.1',
    PORT = '5432',
    DATABASE = 'bd_tienda'

config={
    'development': DevelopmentConfig
}