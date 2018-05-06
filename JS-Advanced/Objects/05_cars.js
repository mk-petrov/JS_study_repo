let objects = new Map();

function create(name) {
    objects.set(name, {});
}

function inherit(name, parent) {
    objects.set(name, Object.create(objects.get(parent)));
}

function set(objName, propName, value) {
    // by propName is necessary to use [], not '.' , because will return property with name propName
    objects.get(objName)[propName] = value;

}

function print(name) {
    let current = objects.get(name);
    let props = [];
    for(let prop in current){
        props.push(`${prop}:${current[prop]}`);
    }
    // let props = Object.keys(current);     //Object.keys returns all property names or Object.getOwnPropertyNames
    console.log(props.join(', '));

}

create('c1');
inherit('c2', 'c1');
set('c1', 'color', 'red');
set('c2', 'model', 'new');

console.log(objects);
print('c1');
print('c2');