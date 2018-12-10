# coding: utf8

# SSH Forward command : ssh -f user@XX.XX.XX.XX -L 3307:mysql1.example.com:3306 -N
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv


load_dotenv()

url = os.getenv('DATABASE_URL')


engine = create_engine(url)
Session = sessionmaker(bind=engine)


if __name__ == '__main__':
    session = Session()
    r = engine.execute('SHOW tables;').fetchall()
    print(r)