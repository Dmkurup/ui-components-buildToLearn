const data=[
    {'Book ID': '1', 'Book Name': 'Challenging Times',
                'Category': 'Business', 'Price': '125.60'
            },
            {'Book ID': '2', 'Book Name': 'Learning JavaScript',
                'Category': 'Programming', 'Price': '56.00'
            },
            {'Book ID': '3', 'Book Name': 'Popular Science',
                'Category': 'Science', 'Price': '210.40'
            }
];

const btn = document.getElementById("clickme");
btn.addEventListener("click",getData);

//get values for table header
function getData(){
let col=[];
for(let i=0;i<data.length;i++){
    for(let key in data[i]){
        if(col.indexOf(key)===-1){
            col.push(key);
        }
    }
}

//create a table
const table=document.createElement("table");
let tr=table.insertRow(-1);

//table headers
for(let i=0;i<col.length;i++){
    let th=document.createElement("th");
    th.innerHTML=col[i];
    tr.appendChild(th);
}
//add json data

for(let i=0;i<data.length;i++){
     tr =table.insertRow(-1);
     for(let j=0;j<col.length;j++){
         let tabcell=tr.insertCell(-1);
         tabcell.innerHTML=data[i][col[j]];
     }
}

const dataContainer = document.getElementById("showData");
dataContainer.innerHTML="";
dataContainer.appendChild(table);
};