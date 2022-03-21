# Getting Started with Create React App

Ui for electronic commerce LATAM clothing store (company -imaginary- dedicated to the sale of fashion products)

## Requirements

For development, you will only need a node global package, installed in your environement.

## Install

    $ git clone https://github.com/vale0722/clothesstore.git
    $ cd clothesstore
    $ npm install

## Configure app

You must set the environment variables, but first you must run the following command:

    $ cp .env.example .env

## Environment Variables

In the .env file you will find the following variables:

You must enter all of them for the application to work correctly

Mercado libre api url for product query

`REACT_APP_MERCADO_LIBRE_API =`

Country and category according to API specifications. (By default it is: Colombia, Fashion and accessories)

`REACT_APP_COUNTRY_CODE = 'MCO'`

`REACT_APP_CATEGORY_GLOBAL = 'MCO1430'`

### Bucket S3

All the statics of the application are in an s3 bucket of AWS

`REACT_APP_CLOTHES_STORE_STATICS =`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Demo

http://clothesstore-test.s3-website-us-east-1.amazonaws.com/

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=vale0722_clothesstore)](https://sonarcloud.io/summary/new_code?id=vale0722_clothesstore)
