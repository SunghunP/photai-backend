# Pho Tai
## About this Project
Test website for Pho restaurant with CRUD functionality and MERN stack

## Table of Contents
1. [General Info](#general-info)
2. [Getting Started](#getting-started) 
3. [Project Idea](#project-idea)
4. [Updates](#updates)

## General Info
### Website Link
work in progress...

### Screen shots of the website
Welcome Page <br/>
<img src="" alt="WIP1" width="700px"/> <br/>

Menu Index <br/>
<img src="" alt="WIP2" width="700px"/> <br/>

### Technologies used:
- HTML
- CSS
- JavaScript

### Dependencies used:
- Express
- Mongoose
- Node.js
- dotenv
- CORS

## Getting started
### Installation:
To download this repository and start the server:
```
$ git clone https://github.com/SunghunP/photai-backend
$ cd ../path/to/the/file
$ npm install
$ npm start
```

### Contributing:
1. Fork it!
2. Create your own branch: `git checkout -b my-new-branch`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-branch`
5. Submit a pull request! 

## Project idea
You hungry? Get some food at Pho Tai! An online menu for a local business.


### Wireframes and ERD:
WIP
WIP

### API documentation:
> `index: GET "/menu/" => renders list of all menu items for the shop`

> `create: POST "/menu/" => add a product to the database`

> `show: GET "/menu/:id" => show information on a menu item by using provided ID`

> `update: PUT "/menu/:id" => update a menu item using the provided ID.`

> `delete: DELETE "/menu/id:" => find a product by ID and deletes from database`

### List of Schemas and Models
Menu model:
```
const menuSchema = new Schema({
    // menu model
    itemNumber: { type: Number, required: true, unique: true, },
    menuItemTag: { type: String, maxLength: [4, "Character length must be 4 or lower."]},
    name:        { type: String, required: true },
    vietName:    { type: String },
    desc:        { type: String, maxLength: 500 },
    // img:         { type: String },
    price:       { type: Number, required: true, min: [0, "The price of food must be greater than zero!"] },
    foodType:    { type: String }
});
```
## Updates
WIP