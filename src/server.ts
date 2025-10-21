console.log('hello from server.js')

function name(name: string) {
    const naam = {
        fname: 'Gokul',
        lname: 'Modi',
    }

    return `Hello, ${name} ${naam.fname}!`
}
name('GOkul')
