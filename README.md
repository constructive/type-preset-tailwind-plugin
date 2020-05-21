# type-preset-tailwind-plugin (v1.1)
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
  font-size: calc(1rem * 1.33 * 1.33 * 1.33 * 1.33 * 1.33 * 1.33);
  line-height: 1.1;
}

.type-preset-2{
  font-size: calc(1rem * 1.33 * 1.33 * 1.33 * 1.33 * 1.33);
  line-height: 1.1;
}

.type-preset-3{
  font-size: calc(1rem * 1.33 * 1.33 * 1.33 * 1.33);
  line-height: 1.25;
}

/* ... snip... */

.font-display.type-preset-1{
  font-size: calc(1rem * 1.25 * 1.25 * 1.25 * 1.25 * 1.25 * 1.25);
  line-height: 1.1;
}

.font-display.type-preset-2{
  font-size: calc(1rem * 1.25 * 1.25 * 1.25 * 1.25 * 1.25);
  line-height: 1.1;
}

.font-display.type-preset-3{
  font-size: calc(1rem * 1.25 * 1.25 * 1.25 * 1.25);
  line-height: 1.25;
}

/** ... and so on ... */

```