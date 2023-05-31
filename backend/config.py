from dotenv import load_dotenv, dotenv_values

class Config:
  def __init__(self) -> None:
    self.config = dotenv_values(".env")