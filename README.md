## Notes

Il est essentiel d'attribuer un tableau vide à `images` car lors du chargement de la page, celui ci est vide.

Idem pour la propriété `url` qui logiquement est vide aussi.

```js
const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])
  console.log(main)
  return (
    <Wrapper>
      <img src={main.url} alt="main image" />
    </Wrapper>
  )
}
```

Filters.js

Tous les `name` des inputs doivent matcher avec ceux du `state.company/category...` présents dans le fichier `filter_context.js`
