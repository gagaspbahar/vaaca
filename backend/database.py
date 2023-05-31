from config import Config
import psycopg2

config = Config()

class Database:
  def __init__(self) -> None:
    self.connection = psycopg2.connect(
      host=config.config['DB_HOST'],
      port=config.config['DB_PORT'],
      database=config.config['DB_NAME'],
      user=config.config['DB_USER'],
      password=config.config['DB_PASSWORD']
    )
    self.cursor = self.connection.cursor()