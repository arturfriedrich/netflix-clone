# Netflix Clone

*Simplified clone of the Streaming Platform: **Netflix***

## Overview

### Website to the current version

[Website](arturfriedrich.github.io/netflix-clone/)

## My process

### Built with

-   React
-   HTML
-   CSS
-   Javascript
-   Firebase

### What I learned

-   Large React Based Architectures
-   Styled Components
-   Compound Components
-   Firebase (Firestore & Auth)


```jsx
export default function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState(false)
    
    return (
      <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
        <Container {...restProps}>{children}</Container>
      </FeatureContext.Provider>
    )
}
```


## Author

-   GitHub - [@arturfriedrich](https://www.github.com/arturfriedrich)
-   Twitter - [@arturfriedrich7](https://twitter.com/arturfriedrich7)

## Supporting Scrimba

Since 2017, we have created over 20 free courses on Scrimba, and we're going to
continue launching free courses. But to pay our bills, we have to charge once
in a while. So if you've ever wanted to "give back" to Scrimba, you can do that by buying
	one of our paid courses

- [Become a professional React developer](https://scrimba.com/course/greact)
- [The Responsive Web Design Bootcamp](https://scrimba.com/course/gresponsive)
- [The Ultimate JavaScript Bootcamp](https://scrimba.com/course/gjavascript)

	It would also mean the world to us if you share the courses.  

Happy Coding!

## Screenshots
![Screen Shot 2022-04-25 at 23 29 01](https://user-images.githubusercontent.com/67378210/165180176-a63b0a9d-5bfa-4604-96c0-474188fb3762.png)
![Screen Shot 2022-04-25 at 23 29 06](https://user-images.githubusercontent.com/67378210/165180167-f7ef8873-cd91-4841-abda-9de59fee73df.png)
![Screen Shot 2022-04-25 at 23 29 30](https://user-images.githubusercontent.com/67378210/165180163-ebc8cda7-e078-4656-9eee-b010bc7ddc2d.png)
![Screen Shot 2022-04-25 at 23 29 48](https://user-images.githubusercontent.com/67378210/165180153-749917d1-3b96-4850-9860-c4142751ff4f.png)
![Screen Shot 2022-04-25 at 23 29 55](https://user-images.githubusercontent.com/67378210/165180135-acfab06c-cdda-4394-a818-438ce2fa97ce.png)


