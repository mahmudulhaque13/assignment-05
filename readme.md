### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
getElementById- Returns the first and only element with that Id. Only works with unique Id.

getElementsByClassName- Returns A live HTML Collection of elements with class name. Works with shared class name.

querySelector- Returns only first element that matches a CSS selector. Supports ant CSS selector like Id, class, div etc.

querySelectorAll- Returns all elements that matches a CSS selector. Returns a static NodeList not live.

2. How do you **create and insert a new element into the DOM**?

Answer: document.createElement() method is used to create a new HTML element. For insert into DOM appendChild method is used.

3. What is **Event Bubbling** and how does it work?

Answer: Event bubbling means that when an event like a click happens on an element, it first runs the event on that element, and then it bubbles up to its parent, then grandparent, all the way up to body and html.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: Event delegation is a technique where instead of adding event listeners to many child elements, just one event listener adding to their parent is enough. The parent can catch events from its children because of event bubbling.
Only one listener can handle lots of events. Need less code so that easier to manage.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: preventDefault() stops the default browser behavior for an event. It does not stop the event from bubbling or being handled by other listeners.

stopPropagation() stops the event from bubbling up or capturing down. It doesn’t prevent the default browser action.
