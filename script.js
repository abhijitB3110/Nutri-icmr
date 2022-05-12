const body = document.getElementById('body');
const form = document.getElementById('form');
const table = document.getElementById('table');
const timeScheduled = document.getElementsByClassName('timeScheduled');
const recipeGiven = document.getElementsByClassName('recipeGiven')
const ingredient = document.getElementsByClassName('ingredient');
const amountTaken = document.getElementsByClassName('amountTaken');
const protein = document.getElementsByClassName('protein');
const carbohydrate = document.getElementsByClassName('carbohydrate');
const fat = document.getElementsByClassName('fat');
const energy = document.getElementsByClassName('energy');

const time = document.getElementById('time');
const recipeName = document.getElementById('recipeName');
const ingredientNameField = document.getElementById('ingredientName');
const amount = document.getElementById('amount');
const proteinField = document.getElementById('proteinAmount');
const carbohydrateField = document.getElementById('carbohydrateAmount');;
const fatField = document.getElementById('fatAmount');
const energyField = document.getElementById('energyAmount');

let times = [];
let recipeNames = [];
let ingredients = [];
let amountTakens = [];
let proteinAmounts = [];
let carbohydrateAmounts = [];
let fatAmounts = [];
let energyAmounts = [];
let inserts = 0;

function addNewRow() {
    table.innerHTML+= 
                    '<tr class="row newIngredient"><td class="col-sm-2"><input type="text" class="timeScheduled col-sm-12"></td><td class="col-sm-2"><input type="text" class="recipeGiven col-sm-12"></td><td class="col-sm-2"><input type="text" class="ingredient col-sm-12"></td><td class="col-sm-2"><input type="" class="amountTaken col-sm-12"></td><td class="col-sm-1"><input type="number" class="protein col-sm-12"></td><td class="col-sm-1"><input type="text" class="carbohydrate col-sm-12"></td><td class="col-sm-1"><input type="text" class="fat col-sm-12"></td><td class="col-sm-1"><input type="text" class="energy col-sm-12"></td></tr>';
                    
    times[inserts] = time.value;
    recipeNames[inserts] = recipeName.value;
    ingredients[inserts] = ingredientNameField.value;
    amountTakens[inserts] = amount.value;
    proteinAmounts[inserts] = proteinField.value;
    carbohydrateAmounts[inserts] = carbohydrateField.value;
    fatAmounts[inserts] = fatField.value;
    energyAmounts[inserts] = energyField.value;

    timeScheduled[inserts].value = times[inserts];
    recipeGiven[inserts].value = recipeNames[inserts];
    ingredient[inserts].value = ingredients[inserts];
    amountTaken[inserts].value = amountTakens[inserts];
    protein[inserts].value = proteinAmounts[inserts];
    carbohydrate[inserts].value = carbohydrateAmounts[inserts];
    fat[inserts].value = fatAmounts[inserts];
    energy[inserts].value = energyAmounts[inserts];

    inserts++;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    time.value = null;
    recipeName.value = null;
    document.getElementById('tableView').style.display = null;
    for(var i=0; i<inserts; i++) {
        timeScheduled[i].value = times[i];
        recipeGiven[i].value = recipeNames[i];
        ingredient[i].value = ingredients[i];
        amountTaken[i].value = amountTakens[i];
        protein[i].value = proteinAmounts[i];
        carbohydrate[i].value = carbohydrateAmounts[i];
        fat[i].value = fatAmounts[i];
        energy[i].value = energyAmounts[i];
    }

});

fetch('values.json')
  .then(response => response.json())
  .then( data => presentData(data))
  .catch( err => console.log(err));

function presentData(data) {
    console.log(data);
    ingredientNameField.value = data[1].ingredientName;
    proteinField.value = data[1].protein;
    carbohydrateField.value = data[1].carbohydrate;
    fatField.value = data[1].fat;
    energyField.value = data[1].energy;

    document.getElementById('amount').addEventListener('input', (e) => {
        proteinField.value = (data[1].protein * (amount.value / 100)).toFixed(3);
        carbohydrateField.value = (data[1].carbohydrate * (amount.value / 100)).toFixed(3);
        fatField.value = (data[1].fat * (amount.value / 100)).toFixed(3);
        energyField.value = (data[1].energy * (amount.value / 100)).toFixed(3);
    });
}