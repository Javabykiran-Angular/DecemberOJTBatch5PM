//Array of json Object

var arrobj=[
    {
        fname:"Sumit",
        lname:"Raokhande",
        id:1
    },
    {
        fname:"Kiran",
        lname:"Raokhande",
        id:2
    },
    {
        fname:"Spruha",
        lname:"Raokhande",
        id:3
    }
];

// console.log(`
// -------------------------------
//     First Name :: ${arrobj[0].fname}
//     Last Name :: ${arrobj[0].lname}
//     ID       :: ${arrobj[0].id}
// `);

// for (let i = 0; i < arrobj.length; i++) {
    
//     console.log(`
// -------------------------------
//     First Name :: ${arrobj[i].fname}
//     Last Name :: ${arrobj[i].lname}
//     ID       :: ${arrobj[i].id}
    
// `);
// }


var arrobj1=[
    {
        name:"Samsung",
        price:10000,
        quantity:1,
        description:{
            specification:"Technical",
            design:'Good',
            Tech:{
                processor:"Snapdragon 765",
                battery:"4000mah",
                ram: "12GB",
                modelno:7570
            }
        }
    },
    {
        name:"Motorolla",
        price:20000,
        quantity:1,
        description:{
            specification:"Technical",
            design:'Good',
            Tech:{
                processor:"Snapdragon 765",
                battery:"4000mah",
                ram: "12GB",
                modelno:7570
            }
        }
    },
    {
        name:"One Plus",
        price:30000,
        quantity:2,
        description:{
            specification:"Technical",
            design:'Good',
            Tech:
                {
                    processor:"Snapdragon 765",
                    battery:"4000mah",
                    ram: "12GB",
                    modelno:7570
                }
               
        }
    }
];




// for (let i = 0; i < arrobj1.length; i++) {
    
//         console.log(`
//     -------------------------------
//         Product Name :: ${arrobj1[i].name}
//         Product Price :: ${arrobj1[i].price}
//         Product Quantity:: ${arrobj1[i].quantity}
//         Description::  
//                     1 Specification: ${arrobj1[i].description.specification}
//                     2 Design       : ${arrobj1[i].description.design} 
//                     3 Tech         :
//                             processor: ${arrobj1[i].description.Tech.processor}  
//                             Battery: ${arrobj1[i].description.Tech.battery}
//                             Ram: ${arrobj1[i].description.Tech.ram}
//                             Model no: ${arrobj1[i].description.Tech.modelno}
//     `);
   

//     }


var indusJson={

    status:"",
    data:[
            {
                fname:"Sumit",
                lname:"Raokhande",
                id:1,
                
            },
            {
                fname:"Kiran",
                lname:"Raokhande",
                id:2
            },
            {
                fname:"Spruha",
                lname:"Raokhande",
                id:3
            }
            ],
    error:"Error Occured"
}

if(indusJson.status=="Success"){
    for (let i = 0; i < indusJson.data.length; i++) {
        console.log(`
                First name: ${indusJson.data[i].fname}
                Last name: ${indusJson.data[i].lname}
                Id      : ${indusJson.data[i].id}
        `);        
    }
}else{
    console.log(indusJson.error);
}