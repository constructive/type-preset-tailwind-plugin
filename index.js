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

            let component = {};
            component[selector] = {
                fontSize: `calc(1rem${_.repeat(` ${preset.power >= 0 ? '*' : '/'} ${scale}`, Math.abs(preset.power))})`,
                lineHeight: preset.lineHeight
            }
            addComponents(component)
        })
    }))
})