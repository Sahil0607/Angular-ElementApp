const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const es5 = [
        './dist/elementApp/runtime-es5.js',
        './dist/elementApp/polyfills-es5.js',
        './dist/elementApp/main-es5.js'
    ];

    const es2015= [
        './dist/elementApp/runtime-es2015.js',
        './dist/elementApp/polyfills-es2015.js',
        './dist/elementApp/main-es2015.js'
    ];

    // const combineFiles = [
    //     './dist/elementApp/runtime-es5.js',
    //     './dist/elementApp/polyfills-es5.js',
    //     './dist/elementApp/main-es5.js',
    //     './dist/elementApp/runtime-es2015.js',
    //     './dist/elementApp/polyfills-es2015.js',
    //     './dist/elementApp/main-es2015.js'
    // ];

      await fs.ensureDir('elements');
      // await concat(combineFiles, 'elements/elements-es5.js');
      await concat(es5, 'elements/elements-es5.js');
      await concat(es2015, 'elements/elements-es2015.js');
      await fs.copyFile('./dist/elementApp/styles.css', './elements/styles.css'); // we will need style.css file in elements
    //   await fs.copy('./dist/elementApp/assets', 'elements/assets/' );
}
concatenate();

// const fs = require('fs-extra');
// const concat = require('concat');

// (async function build() {
//     const files = [
//         './dist/elementApp/runtime-es5.js',
//         './dist/elementApp/polyfills-es5.js',
//         // './dist/elementApp/scripts-es5.js',
//         './dist/elementApp/main-es5.js',
//     ];

//     await fs.ensureDir('elements');
//     await concat(files, 'elements/framework-poll.js');
//     await fs.copyFile('./dist/elementApp/style.css', 'elements/style.css'); // we will need style.css file in elements
//     // await fs.copy('./dist/elementApp/assets/', 'elements/assets');  // Copy and paste image
// });

