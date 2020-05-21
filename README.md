# type-preset-tailwind-plugin (v1.2)
Tailwind Plugin for creating Constructive Type Presets

## Getting Started

`npm install constructive/type-preset-tailwind-plugin`

Next, require the plugin in the `plugins` array in `tailwind.config.js`

```js
  plugins: [
    require('type-preset-tailwind-plugin')
  ]
```


Then you can define your presets:

```js
theme: {
  typePresets: {
    body: {
      'scale': 1.33,
      'presets': {
        1: {power: 6, lineHeight: 1.1},
        2: {power: 5, lineHeight: 1.1},
        3: {power: 4, lineHeight: 1.25},
        4: {power: 3, lineHeight: 1.25},
        5: {power: 2, lineHeight: 1.25},
        6: {power: 1, lineHeight: 1.25},
        7: {power: -1, lineHeight: 1.25},
      }
    },      
    display: {
      'scale': 1.25,
      'presets': {
        1: {power: 6, lineHeight: 1.1},
        2: {power: 5, lineHeight: 1.1},
        3: {power: 4, lineHeight: 1.25},
        4: {power: 3, lineHeight: 1.25},
        5: {power: 2, lineHeight: 1.25},
        6: {power: 1, lineHeight: 1.25},
        7: {power: -1, lineHeight: 1.25},
        8: {power: -2, lineHeight: 1.25},
      }
    }
  }
}
```

..which will generate the type preset components

```css
.type-preset-1{
  font-size: calc(1rem * 5.534);
  line-height: 1.1;
}

.type-preset-2{
  font-size: calc(1rem * 4.161);
  line-height: 1.1;
}

.type-preset-3{
  font-size: calc(1rem * 3.129);
  line-height: 1.25;
}

/* ... snip... */

.font-display.type-preset-1{
  font-size: calc(1rem * 3.814);
  line-height: 1.1;
}

.font-display.type-preset-2{
  font-size: calc(1rem * 3.051);
  line-height: 1.1;
}

.font-display.type-preset-3{
  font-size: calc(1rem * 2.441);
  line-height: 1.25;
}

/** ... and so on ... */

```


## Scale 
As of v1.2, the scale property supports object notation for handling responsive scale changes. Use the key "default", "mobile", or "xs" for the starting scale, and all valid Tailwind @screen options after that. 


```javascript
  display: {
    'scale': {
      default: 1.1,
      lg: 1.414
    },
    ...
```