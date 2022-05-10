const body = document.getElementById('body');
const form = document.getElementById('form');
const table = document.getElementById('table');
const ingredient = document.getElementsByClassName('ingredient');
const protein = document.getElementsByClassName('protein');
const carbohydrate = document.getElementsByClassName('carbohydrate');
const fat = document.getElementsByClassName('fat');
const energy = document.getElementsByClassName('energy');

let ingredients = [];
let proteinAmounts = [];
let carbohydrateAmounts = [];
let fatAmounts = [];
let energyAmounts = [];
let inserts = 0;

function addNewRow() {
    table.innerHTML+= 
                    '<tr><td><input type="text" class="ingredient"></td><td><input type="number" class="protein"></td><td><input type="text" class="carbohydrate"></td><td><input type="text" class="fat"></td><td><input type="text" class="energy"></td></tr>';
                
    ingredients[inserts] = document.getElementById('ingredientName').value;
    proteinAmounts[inserts] = document.getElementById('proteinAmount').value;
    carbohydrateAmounts[inserts] = document.getElementById('carbohydrateAmount').value;
    fatAmounts[inserts] = document.getElementById('fatAmount').value;
    energyAmounts[inserts] = document.getElementById('energyAmount').value;

    ingredient[inserts].value = ingredients[inserts];
    protein[inserts].value = proteinAmounts[inserts];
    carbohydrate[inserts].value = carbohydrateAmounts[inserts];
    fat[inserts].value = fatAmounts[inserts];
    energy[inserts].value = energyAmounts[inserts];

    inserts++;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById('tableView').style.display = null;
    for(var i=0; i<inserts; i++) {
        ingredient[i].value = ingredients[i];
        protein[i].value = proteinAmounts[i];
        carbohydrate[i].value = carbohydrateAmounts[i];
        fat[i].value = fatAmounts[i];
        energy[i].value = energyAmounts[i];
    }
});

fetch('values.json')
  .then(response => response.json())
  .then( data => appendData(data))
  .catch( err => console.log(err));

function appendData(data) {
    // let ing = document.getElementById('ingredientName').value;
    console.log(data);
    document.getElementById('proteinAmount').value = data.testIngredient2.protein;
}