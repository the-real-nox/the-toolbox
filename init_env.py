#!/bin/python3
from string import ascii_letters, digits
from random import choice

def genPassword(length: int) -> str:
    PASS = ascii_letters + digits + "!=+?"
    return "".join(choice(PASS) for i in range(length))

def main():
    DATA = ""
    with open("./.env.template", "r") as fopen:
        DATA = "".join(fopen.readlines())
    
    with open("./.env", "w") as fopen:
        fopen.write(
            DATA.replace("POSTGRES_PASSWORD=", f"POSTGRES_PASSWORD={genPassword(24)}")
        )
if __name__ == "__main__" :
    main()