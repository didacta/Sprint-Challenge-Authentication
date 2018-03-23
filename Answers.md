<!-- Answers to the Short Answer Essay Questions go here -->

#  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware is code designed to be ran before your server sends a response back to you. It is run after a req. to the server and then sent back to res. This allows for your program to interact  There is local middleware which is ran only on specified functions and also global middleware which is instantiated on every function in the file that the middleware is called.

Sessions in express are used to keep users logged in once they logged in once. This is usually accomplished by keeping track of their session ID that is automatically created with all mongoDB objects.

Bcrpyt is a npm-package that makes it simple to add hashing and salting to user inputted passwords, increasing security. JWT protect the payload of the user inputting passwords so they can't be intercepted in the actual login/signup POST before they are hashed and salted.

# What does bcrypt do in order to prevent attacks?
Bcrypt adds a HASH and SALT to a password to increase password complexity. A hash simply applies an algorithim to your password that returns with a large complicated string. A salt is an addition to that string to ensure that even if your user's password is a few simple characters like 'asdf' it is still secure. The cool part of Bcrypt is how it lets you adjust the SALT cost to make sure that hackers aren't able to hash passwords too quickly. If in the future computers are solving your hash faster than you'd like, you can simply adjust the SALT value with a variable.

#  What are the three parts of the JSON Web Token?
The three parts of the JSON web token are the header, payload, and signature which is a combination of the first two. The signature is just a confirmation that the header and payload were not tampered with.