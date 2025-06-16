const { create } = require('tailwind-rn');
const styles = create(require('../tailwind.config.js'));
const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname, 'tailwind.json'), JSON.stringify(styles));
