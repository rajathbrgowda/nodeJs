//In JavaScript, global objects refer to objects that are available globally throughout the entire JavaScript runtime environment. These objects are accessible from any part of a JavaScript program, whether it's in the browser or server-side using platforms like Node.js. Here are some important global objects in JavaScript:

/* 1. **Global Object (`window` in browsers, `global` in Node.js):**
   - In web browsers, the global object is often referred to as `window`.
   - In Node.js, it is referred to as `global`.
   - It represents the global namespace and serves as the root object for the JavaScript environment.*/

   //javascript
   // In a browser environment
   console.log(window);

   // In Node.js environment
   console.log(global);
   

//2. **Console Object:**
//    - Provides methods for logging information to the browser's console or terminal.

   //javascript
   console.log("Hello, world!");
   

// 3. **setTimeout and setInterval:**
//    - Functions for executing code after a specified delay (`setTimeout`) or at regular intervals (`setInterval`).

   //javascript
   setTimeout(function() {
     console.log("Delayed message");
   }, 1000);

   setInterval(function() {
     console.log("Repeated message");
   }, 2000);
   

// 4. Math Object:
//    - Provides mathematical functions and constants.

   //javascript
   console.log(Math.PI);
   console.log(Math.sqrt(25));
   

// 5. Date Object:
//    - Allows working with dates and times.

   //javascript
   const currentDate = new Date();
   console.log(currentDate);
   

// 6. JSON Object:
//    - Provides methods for parsing and stringify JSON data.

   //javascript
   const jsonData = '{"name": "John", "age": 30}';
   const parsedData = JSON.parse(jsonData);
   console.log(parsedData.name);
   

// 7. Location Object (in browsers):
//    - Represents the current URL of the browser.
//javascript
   console.log(window.location.href);


// 8. Document Object (in browsers):
//    - Represents the web page, allowing manipulation of its content.

   //javascript
   console.log(document.title);
   

// These are just a few examples of global objects in JavaScript. It's important to be aware of these objects and their functionalities when working with JavaScript in different environments. Keep in mind that some objects may be specific to certain environments (e.g., the `window` and `document` objects are mainly used in browsers).