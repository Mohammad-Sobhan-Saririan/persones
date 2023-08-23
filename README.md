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

### in Short

The base of the Project has been implemented in persone Folder. In this folder, we can see a table that has a header for the Properties of each person and we can sort them with click on each property. in the table, we can delete each person & update it and also give a like to each person. we also have a navigation bar that shows the number of persons that we like and also a search bar for searching. On this page, we have a list group that filtered each person with their (city) properties. we have a button for adding a new person that navigates us to the login page and we should add a valid person to our list. we have a pagination that navigates us to each page of our list. we have a button for showing all persons that we have on our list.

## Login

I created components for this project we use class components and also functional components. In the Login folder, I create [form](./src/components/login/form.jsx) and [input](./src/components/login/input.jsx) for using them in [login](./src/components/login/login.jsx) and [update](./src/components/login/update.jsx). in form component, we create functions for validating our data and also we create a function for validating our form and handling submit, change, and render input. I extract each input in the input component and use it in the form component. Also, I created a select component for using it in the form component. Then in addition to using Bootstrap for styling, I use CSS for styling when hovering over the input and also when the input is invalid. in [Login](./src/components/login/login.jsx) and [update](./src/components/login/update.jsx), I place the forms and use the functions that I create in the form component.

![Alt text](./src/images/Login.jpg)

## Update

In the update folder, we have [update](./src/components/update/update.jsx) that use functions in [Form](./src/components/Login/form.jsx) and [input](./src/components/Login/input.jsx) for updating our data. in form component, we create functions for validating our data and also we create a function for validating our form and handling submit, change, and render input. I extract each input in the input component and use it in the form component. Also, I created a select component for using it in the form component. Then in addition to using Bootstrap for styling, I use CSS for styling when hovering over the input and also when the input is invalid. in [update](./src/components/update/update.jsx), I place the forms and use the functions that I create in the form component.

![Alt text](./src/images/update.jpg)
## Persones

in persones folder we have table ,list group,Navigation bar and pagination component.in List group component we create a list group, show us the cities that we have in our list and we can filter our list with click on each city.in table component we create a table, show us the persons that we have in our list and we can sort them with click on each property of person , also we can delete each person and update it . also give a like to each person .in Navigation bar component we create a navigation bar that show us the number of persons that we like and also a search bar for searching .in pagination component we create a pagination that navigate us to each page of our list.also we have a button for adding a new person that navigates us to the login page and we should add a valid person to our list.

![Alt text](./src/images/person_page.jpg)
below we see the Person page and the components that we have in this page.

#### list group

![Alt text](./src/images/list_group.jpg)

#### table

![Alt text](./src/images/table.jpg)

#### navigation bar

![Alt text](./src/images/navbar.jpg)

#### pagination

![Alt text](./src/images/pagination.jpg)

#### Full video

https://github.com/Mohammad-Sobhan-Saririan/persones/assets/101567856/c3c5c593-d475-4b86-b2b2-82108adf8bbe

### packeges

    -lodash
    -fontawesome
    -bootstrap

<!-- Update README.md -->
