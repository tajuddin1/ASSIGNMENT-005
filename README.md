# ASSIGNMENT-005


### 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

- **getElementById("id")**
  - We can selects only one element by it `id`.

- **getElementsByClassName("className")**
  - We can selects multiple elements that share the same class name.

- **querySelector("css-selector")**
  - We can selects any elements by elements name, class name, id.

- **querySelectorAll("css-selector")**
  - We can selects All elements by that share the same class name, elements name.

---

### 2. How to create and insert a new element into the DOM?

Steps:
1. **We need to create the element** using `document.createElement("tagname")`
2. **Then need to add content** with by appending children or `innerHTML`
3. **Then insert it** into the dom with `appendChild`.
