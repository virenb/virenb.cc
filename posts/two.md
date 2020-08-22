---
title: 'Second Blog Post'
date: '2020-03-01'
---

# Second Post

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

```javascript
function hello() {
  return `This is MD!`;
}
```

```jsx
function hello() {
  return `This is MD!`;
}
```

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
```
