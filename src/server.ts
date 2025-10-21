console.log('hello from server.js');
console.log('hello from server.js 2');

function name(name: string) {
  const naam = {
    fname: 'Gokul',
    lname: 'Modi',
  };

  return `Hello, ${name} ${naam.fname}!`;
}
name('GOkul');
