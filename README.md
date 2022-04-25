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

## Acknowledgements

-   [Scrimba](https://scrimba.com) - The base app is from a tutorial
