const plugin = require('tailwindcss/plugin')
const _ = require('lodash')

module.exports = plugin(function({ addComponents, theme }) {
    _.map(Object.keys(theme('typePresets')), (font => {
        _.map(Object.keys(theme(`typePresets.${font}.presets`)), (key) => {
            let preset = theme(`typePresets.${font}.presets.${key}`)
            let scale = theme(`typePresets.${font}.scale`)
            let selector = font !== 'default' && font !== 'body' ? 
              '.font-' + font + '.type-preset-' + key :
              '.type-preset-' + key

            if (isObject(scale))
            {
              const screens = theme('screens', {})
              let component = {}
              component[selector] = {
                fontSize: `var(--scale)`,
                lineHeight: preset.lineHeight
              }
              _.each(Object.keys(scale), (key) => {
                if (key === 'xs' || key === 'mobile' || key === 'default')
                {
                  component[selector]['--scale'] = calculateScale(scale[key], preset.power)
                }
                else
                {
                  component[`@media (min-width: ${screens[key]})`] = {
                    [selector]: {
                      '--scale': calculateScale(scale[key], preset.power),
                    }
                  }
                }
                addComponents({'@variants responsive': component})
              })
            }

            if (! isObject(scale))
            {
              let component = {}
              component[selector] = {
                '--scale': calculateScale(scale, preset.power),
                fontSize: `var(--scale)`,
                lineHeight: preset.lineHeight
              }
              addComponents({'@variants responsive': component})
            }

            function calculateScale (scale, power)
            {
              if (power === 0) return '1rem'
              return `calc(1rem ${power >= 0 ? '*' : '/'} ${parseFloat(Math.pow(scale, Math.abs(power))).toPrecision(4)})`;
            }

            function isObject (subject)
            {
              return typeof(subject) === 'object'
            }
        })
    }))
})
