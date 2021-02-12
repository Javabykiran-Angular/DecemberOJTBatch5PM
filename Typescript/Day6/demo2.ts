//Json Object
//json=> javascript Object Notation
// it store key & value format

var obj={
    fname:"Sumit",
    "lname":"Raokhande",
    id:5
}
// data retrive using Dot operator
console.log(`
            First name ${obj.fname}
            Last name ${obj.lname}
            id        ${obj.id}
`);

//data retrive using square operator/bracket

console.log(`
            First name ${obj["fname"]}
            Last name ${obj['lname']}
            id        ${obj['id']}
`);

