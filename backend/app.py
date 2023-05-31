from flask import Flask
from config import Config
from database import Database

app = Flask(__name__)
config = Config()
database = Database()


@app.route('/')
def hello():
    return '<h1>Hello, world!</h1>'

if __name__ == "__main__":
    app.run(debug=True)