# User List made by reko5
This is front-end application, where you can handle user objects stored on a server-based application.

I forked the original repo as wanted (link to my fork: https://github.com/reko5/dina-assessment ).

I used React, because create-react-app installed almost everything that I needed for the project and its easy to work with.

Commits have been made after every important addition.

I made a simple and smooth user interface with all the informations that the user need for easy usability of the app:

![User List](https://user-images.githubusercontent.com/105787337/206960081-ac64355a-66f4-4085-8352-b1544a682d76.jpg)

![Home page](https://github.com/reko5/user-list/blob/main/public/Home%20page.jpg)

![Add user](https://github.com/reko5/user-list/blob/main/public/Add%20user.jpg)

![Add user (success)](https://github.com/reko5/user-list/blob/main/public/Add%20user%20(success).jpg)

![Add user (fails)](https://github.com/reko5/user-list/blob/main/public/Add%20user%20(fails).jpg)

![Edit user](https://github.com/reko5/user-list/blob/main/public/Edit%20user.jpg)

<h2>Tech stacks that I used:</h2>

- Framework: React
- JavaScript
- Axios
- Postman
- Material UI
- HTML
- CSS

These are above the requirements for running the application in a browser. I used Google Chrome (version: 108.0.5359.99 ).

<h2>List of main features:</h2>

index.js:
- Entering point for the applictaion, contains the logic for rendering the App component.

App.js:
- Added Components as HTML elements and CSS properties with Material UI.

- Routing made with react-router-dom for proper navigation between the pages.

UsersService.js:
- Contains the crucial functions to make connection with the server through CRUD (REST API) endpoints by Axios.

Header.js:
- This component has the Navigation bar with different links to the Home page, the User List, and Add user pages.

UserList.js:
- It contains the main functions of the application.

- After GET the data from the server with the getUser function, it generate a table: first the columns, after the rows anc cells.

- The Locked users seen with strikethroughed texts.

- There is a column for Edit User buttons for every user. If clicked on the button, the browser goes to /edit path.

- In another column we can adjust the user's Status as we wish from active to locked or back. A Switch built in for that purpose.

- The list able to paginate, that displays 10, 25 or 100 users at once, depends on request. The standard is 10 user/page.

EditUser.js:
- Can be used from User List through user.id. First name and Last name are editable by updateUser (PUT) function. It write out the actual attributes in the textfields, when open the page.

AddUser.js:
- We can add users with addUser (POST) function. Validation errors from the serveres are seen next to the labels (with red), as a success message too (with green) like on Edit User page too.

Postman: It helps a lot, mostly when I need to check if my updates and edits were successful or not.

![Postman](https://user-images.githubusercontent.com/105787337/206965563-1c1f8631-dd40-4f7a-9d8d-648c06678676.png)

**<p>Roadmap</p>**
For further development, I have a few ideas:
- There can be a search field at User List page, for check people are locked or not.
- There can be filters on every column.
- A lock/unlock all function could be useful too.

**<p>Support</p>**
If you have any question about the project, feel free to contact me on reichert.kornel@gmail.com