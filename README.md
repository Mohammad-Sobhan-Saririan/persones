# CRUD Operation for Persones using react

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## src Folder

        ---Persones
        ---Navbar
        ---Login
        ---Update
        ---NotFound
        ---Paging_Navbar

---

### Persones

The base of the Project has been implemented in this Folder. In this folder, we can see a table that has a header for the Properties of each person and we can sort them with click on each property. in the table, we can delete each person & update it and also give a like to each person. we also have a navigation bar that shows the number of persons that we like and also a search bar for searching. On this page, we have a list group that filtered each person with their (city) properties. we have a button for adding a new person that navigates us to the login page and we should add a valid person to our list. we have a pagination that navigates us to each page of our list. we have a button for showing all persons that we have on our list.

### Login

In this page we can add a new person to our list.
we have a form that we should fill it with valid data.
we have a button for adding new person to our list.

### Update

In this page we can update a person that we have in our list.
we have a form that we should fill it with valid data.
we have a button for updating person to our list.

### NotFound

In this page we can see a message that show us the page that we want to navigate is not found.

### Paging_Navbar

In this page we can see a navigation bar that navigate us to each page of our list.

### Login

i create components for this project we use class component and also functional component.
in Login folder i create [form.jsx] and [input.jsx] for using them in [login.jsx] and [update.jsx] .in form component we craete functions for validate our data and also we craete a function for validate our form and handle submit ,change and render input.i extract each input in input component and use it in form component.also i create select component for using it in form component.
then in addition to using bootstrap for styling, i use css for styling when hovering over the input and also when the input is invalid.
in Login.jsx i place the forms and use the functions that i create in form component.

### Persones

in persones folder we have table ,list group,Navigation bar and pagination component.in List group component we create a list group, show us the cities that we have in our list and we can filter our list with click on each city.in table component we create a table, show us the persons that we have in our list and we can sort them with click on each property of person , also we can delete each person and update it . also give a like to each person .in Navigation bar component we create a navigation bar that show us the number of persons that we like and also a search bar for searching .in pagination component we create a pagination that navigate us to each page of our list.
![Alt text](./src/images/neon.jpg)

### packeges

    -lodash
    -fontawesome
    -bootstrap
