#ReduxSimpleStarter - YouTube Search Box

###Start the project!

1 . `npm start` will start our project and run a simple server.

localhost:8080

2 . 

**src ->  components - > `app.js`**

####New ES6 Syntax..

OLD 

```javascript
const App = function() {
  return <div>ABEL!</div>;
}

```

ES6
*fat arrow: keep in mind that 'this' will change*

```javascript
const App = () => {
  return <div>ABEL!</div>;
}

```


####EXPORT CODE

We ONLY want to export a small amount of the code we wrote in the search_bar.js
So let's only export the SearchBar Component.. 

`export default SearchBar;`

ANY FILE in our app that imports searchBar will get our searchBar component..

**search_bar.js**

```javascript
import React from 'react';

const SeachBar = () => {
  return <input />
};


export default SearchBar;

``` 

**index.js** 

`import SearchBar from 'search_bar';`


```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from 'search_bar';

const API_KEY = '';

const App = () => {
  return <div>ABEL you are gonna learn ReacJs!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));


```
