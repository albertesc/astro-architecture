// create .json file with name of icons from icons folder

const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../public/assets/icons');

fs.readdir(iconsDir, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    
    const icons = files
        .filter((file) => file.endsWith('.svg'))
        .map((file) => file.replace('.svg', ''));
    
    fs.writeFile(
        path.join(__dirname, '../src/data/icons.json'),
        JSON.stringify(icons, null, 2),
        (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Icons created');
        }
    );
});