function getAdmin(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push (key);
        }
    }
    return admins;
}

const usuario = new Map();

usuarios.set('luiz', 'Admin');
usuarios.set('Wesley', 'Admin');
usuarios.set('Jorge', 'User');
