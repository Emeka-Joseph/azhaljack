from setuptools import find_packages, setup

setup(
    name="azhaljack",
    version="1.0.0",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        "flask",
        "flask-sqlalchemy",
        "flask-login",
        "flask-wtf",
        "python-dotenv",
    ],
)
