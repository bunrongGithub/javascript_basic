### Javascript Dom 

### 1. What is DOM ?
    Dom stands for `Document Object Model`. 
it's a programming interface that allows us to create , change , or remove elements from the document. We can also add Events to these elements to make our page more dynamic.

### 2. What does the DOM tree structure look like ?

### See Dom structure => `https://en.wikipedia.org/wiki/Document_Object_Model#/  media/File:DOM-model.svg`

### 3. How to select element in DOM ?
`getElementById()`
`querySelector()`
`querySelectorAll()`

### 4. How to create an Element in DOM?
`const paragraph = document.createElement("p")`
### 5. How to modify an Element innerHTML / textContent?
`document.getElementById('myElement').innerHTML = '<s> Updated content with HTML tags</s>'`
`document.getElementById('myElement').textContent = 'Updated content without HTML tags'`
### 6. How to add a CSS class?
`function addClass(){ element.classList.add('new-class') }`
### 7. How to remove a class from element ?
`element.classList.remove('new-class')`

### 8. What are HTML events?
    HTML events are actions that happen in the web browser and can be detected and responded back by javascript.
### 9. What is the addEventListener() method?
    addEventListener() is a method in JavaScript that allows you to attach an event handler to an element (such as a DOM element like a button, input field, etc.). This method is commonly used in web development to listen for events (like clicks, keypresses, mouse movements, etc.) on an element and then perform actions in response to those events.
`document.getElementById("myBtn").addEventListener("click", displayDate);`

### 10. What is event propagation?
    Event propagation is the process that defines the order in which event handlers are executed when an event occurs in an element nested within other elements.
    ### Phases of event propagation in the DOM
        Capturing Phase (Capture):
            The event starts from the root of the document and propagates down to the target element.
            During this phase, event listeners set for capturing are executed.
            Target Phase:
            The event reaches the target element.
            Event listeners for the target element are executed. If the event listener is not specified to be for capturing, it will run during the bubbling phase.
            Bubbling Phase (Bubble):
            After reaching the target, the event propagates back up to the root.
            During this phase, event listeners set for bubbling are executed.

### Thanks!!!!

