const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
        './src/**/*.jsx',
        './src/**/*.js',
        './public/index.html',
    ],
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
})

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        cssnano({
            preset: 'default'
        }),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ],
};
