const fs = require('fs/promises');

async function example() {
  try {
    const data = await fs.readFile('./.rc', { encoding: 'utf8' });
    console.log(JSON.parse(data));
  } catch (err) {
    console.log(err);
  }
}
example();
