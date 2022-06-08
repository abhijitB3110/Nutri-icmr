const body = document.getElementById('body');
const form = document.getElementById('form');
const ingredientSelect = document.getElementById('ingredientSelect');
const time = document.getElementById('time');
const recipeName = document.getElementById('recipeName');
const ingredientNameField = document.getElementById('ingredientName');
const amount = document.getElementById('amount');
const proteinField = document.getElementById('proteinAmount');
const carbohydrateField = document.getElementById('carbohydrateAmount');;
const fatField = document.getElementById('fatAmount');
const energyField = document.getElementById('energyAmount');
const table = document.getElementById('table');
const filenameEntered = document.getElementById('filename');

const timeScheduled = document.getElementsByClassName('timeScheduled');
const recipeGiven = document.getElementsByClassName('recipeGiven')
const ingredient = document.getElementsByClassName('ingredient');
const amountTaken = document.getElementsByClassName('amountTaken');
const protein = document.getElementsByClassName('protein');
const carbohydrate = document.getElementsByClassName('carbohydrate');
const fat = document.getElementsByClassName('fat');
const energy = document.getElementsByClassName('energy');


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
    // table.innerHTML+= 
    //                 '<tr class="row newIngredient"><td class="col-sm-2"><input type="text" class="timeScheduled col-sm-12"></td><td class="col-sm-2"><input type="text" class="recipeGiven col-sm-12"></td><td class="col-sm-2"><input type="text" class="ingredient col-sm-12"></td><td class="col-sm-2"><input type="text" class="amountTaken col-sm-12"></td><td class="col-sm-1"><input type="" class="protein col-sm-12"></td><td class="col-sm-1"><input type="text" class="fat col-sm-12"></td><td class="col-sm-1"><input type="text" class="carbohydrate col-sm-12"></td><td class="col-sm-1"><input type="text" class="energy col-sm-12"></td></tr>';
    table.innerHTML+= 
                    '<tr class="row newIngredient"><td class="col-sm-2"><input type="text" class="timeScheduled col-sm-12" disabled></td><td class="col-sm-2"><input type="text" class="recipeGiven col-sm-12" disabled></td><td class="col-sm-2"><input type="text" class="ingredient col-sm-12" disabled></td><td class="col-sm-2"><input type="text" class="amountTaken col-sm-12" disabled></td><td class="col-sm-1"><input type="" class="protein col-sm-12" disabled></td><td class="col-sm-1"><input type="text" class="fat col-sm-12" disabled></td><td class="col-sm-1"><input type="text" class="carbohydrate col-sm-12" disabled></td><td class="col-sm-1"><input type="text" class="energy col-sm-12" disabled></td></tr>';
                    
            // table.innerHTML +='<tr class="row newIngredient"><td class="col-sm-2"><input type="text" class="timeScheduled col-sm-12" value="'+time.value+'"></td><td class="col-sm-2"><input type="text" class="recipeGiven col-sm-12" value="'+recipeName.value+'">< td><td class="col-sm-2"><input type="text" class="ingredient col-sm-12" value="'+ ingredientNameField.value+ '"></td><td class="col-sm-2"><input type="text" class="amountTaken col-sm-12" value="'+ amount.value+'">< td><td class="col-sm-1"><input type="number" class="protein col-sm-12" value="'+ proteinField.value+'>"< td><td class="col-sm-1"><input type="text" class="fat col-sm-12" value="'+fatField.value+'">< td><td class="col-sm-1"><input type="text" class="carbohydrate col-sm-12" value="'+carbohydrateField.value+'">< td><td class="col-sm-1"><input type="text" class="energy col-sm-12" value="'+energyField.value+'">< td></tr>';
                    
    times[inserts] = time.value;
    recipeNames[inserts] = recipeName.value;
    ingredients[inserts] = ingredientNameField.value;
    amountTakens[inserts] = amount.value;
    proteinAmounts[inserts] = proteinField.value;
    fatAmounts[inserts] = fatField.value;
    carbohydrateAmounts[inserts] = carbohydrateField.value;
    energyAmounts[inserts] = energyField.value;

    timeScheduled[inserts].value = times[inserts];
    recipeGiven[inserts].value = recipeNames[inserts];
    ingredient[inserts].value = ingredients[inserts];
    amountTaken[inserts].value = amountTakens[inserts];
    protein[inserts].value = proteinAmounts[inserts];
    carbohydrate[inserts].value = carbohydrateAmounts[inserts];
    fat[inserts].value = fatAmounts[inserts];
    energy[inserts].value = energyAmounts[inserts];

    // timeScheduled[inserts].value = time.value;
    // recipeGiven[inserts].value = recipeName.value;
    // ingredient[inserts].value = ingredientNameField.value;
    // amountTaken[inserts].value = amount.value;
    // protein[inserts].value = proteinField.value;
    // carbohydrate[inserts].value = carbohydrateField.value;
    // fat[inserts].value = fatField.value;
    // energy[inserts].value = energyField.value;


    inserts++;
}

function nullifyValues() {
    time.value = null;
    recipeName.value = null;
    ingredientNameField.value = null;
    proteinField.value = null;
    fatField.value = null;
    carbohydrateField.value = null;
    energyField.value = null;
    amount.value = 100;
}

document.getElementById('addToTableButton').addEventListener("click", (e) => {
    if(ingredientNameField.value !== '' && proteinField.value !== '' && fatField.value !== '' && carbohydrateField.value !== '' && energyField.value !== '' && amount.value !== '') {
        addNewRow();
        document.getElementById('tableView').style.display = null;
        document.getElementById('downloadOptions').style.display = null;
        nullifyValues();
        for(var i=0; i<inserts; i++) {
            timeScheduled[i].value = times[i];
            recipeGiven[i].value = recipeNames[i];
            ingredient[i].value = ingredients[i];
            amountTaken[i].value = amountTakens[i];
            if(proteinAmounts[i] === '0') 
                protein[i].value = '-';
            else
                protein[i].value = proteinAmounts[i];

            if(carbohydrateAmounts[i] === '0') 
                carbohydrate[i].value = '-';
            else
                carbohydrate[i].value = carbohydrateAmounts[i];

            if(fatAmounts[i] === '0') 
                fat[i].value = '-';
            else
                fat[i].value = fatAmounts[i];

            if(energyAmounts[i] === '0') 
                energy[i].value = '-';
            else
                energy[i].value = energyAmounts[i];
        }
    }
});

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

document.getElementById('download').addEventListener('click', (e) => {
    let jsonData = []
    let totalProtein = 0
    let totalFat = 0
    let totalCarbohydrate = 0
    let totalEnergy = 0
    for(var i=0; i<inserts; i++) {
        if(protein[i].value === '-') {
            totalProtein += 0
        } else {
            totalProtein += (parseFloat(protein[i].value));
        }
        if(fat[i].value === '-') {
            totalFat += 0
        } else {
            totalFat += parseFloat(fat[i].value);
        }
        if(carbohydrate[i].value === '-') {
            totalCarbohydrate += 0
        } else {
            totalCarbohydrate += parseFloat(carbohydrate[i].value);
        }
        if(energy[i].value === '-') {
            totalEnergy += 0
        } else {
            totalEnergy += parseFloat(energy[i].value);
        }
        var entry = {
            "Timing": timeScheduled[i].value,
            "Menu": recipeGiven[i].value,
            "Ingredients": ingredient[i].value,
            "Amount(g/ml)": amountTaken[i].value,
            "Protein(g)": protein[i].value,
            "Fat(g)": fat[i].value,
            "Carbohydrate(g)": carbohydrate[i].value,
            "Energy(g)": energy[i].value

        }
        jsonData.push(entry)
    }
    var totals = {
        "Timing": 'Total',
        "Menu": '',
        "Ingredients": '',
        "Amount(g/ml)": '',
        "Protein(g)": totalProtein,
        "Fat(g)": totalFat,
        "Carbohydrate(g)": totalCarbohydrate,
        "Energy(g)": totalEnergy
    }
    jsonData.push(totals)
    downloadAsExcel(jsonData)
    filename.value = ''
    document.getElementById('download').disabled = true;
    document.getElementById('filenameWarning').style.display = null;
})

function downloadAsExcel(jsonData) {
    const worksheet = XLSX.utils.json_to_sheet(jsonData)
    const workbook = {
        Sheets:{
            'ICMR': worksheet
        },
        SheetNames: ['ICMR']
    }
    const excelBuffer = XLSX.write(workbook, {bookType:'xlsx', type: 'array'})
    // console.log(excelBuffer)
    saveAsExcel(excelBuffer, this.filename.value)
}

function saveAsExcel(buffer, filename) {
    const data = new Blob([buffer], {type:EXCEL_TYPE})
    saveAs(data, filename + EXCEL_EXTENSION)
}

fetch('values/newjson.json')
  .then(response => response.json())
  .then( data => presentData(data))
  .catch( err => console.log(err));

function presentData(data) {
    // console.log(data)
    for (var op = 0; op < data.length; op++) {
        ingredientSelect.innerHTML += '<option value=' + op + '>' + data[op].ingredientName + '</option>';
    }

    document.getElementById('ingredientSelect').addEventListener('change', function() {
        ingredientName.value =  data[ingredientSelect.value].ingredientName;
        amount.value = 100;
        proteinField.value = data[ingredientSelect.value].protein;
        carbohydrateField.value = data[ingredientSelect.value].carbohydrate;
        fatField.value = data[ingredientSelect.value].fat;
        energyField.value = data[ingredientSelect.value].energy;
    })

    document.getElementById('amount').addEventListener('input', (e) => {

        if(document.getElementById('editValues').disabled !== true){
            proteinField.value = Math.round((data[ingredientSelect.value].protein * (amount.value / 100)) * 100 ) / 100;
            carbohydrateField.value = Math.round((data[ingredientSelect.value].carbohydrate * (amount.value / 100)) * 100 ) / 100;
            fatField.value = Math.round((data[ingredientSelect.value].fat * (amount.value / 100)) * 100 ) / 100;
            energyField.value = Math.round((data[ingredientSelect.value].energy * (amount.value / 100)) * 100 ) / 100;
        }
    });
}

filename.addEventListener('input', (e) => {
    document.getElementById('download').disabled = (filename.value === '');
    document.getElementById('filenameWarning').style.display = ((filename.value === '') ? null : 'none');
})

document.getElementById('editValues').addEventListener('click', e => {
    time.disabled = true;
    recipeName.disabled = true;
    ingredientSelect.disabled = true;
    ingredientName.disabled = false;
    proteinField.disabled = false;
    carbohydrateField.disabled = false;
    fatField.disabled = false;
    energyField.disabled = false;
    document.getElementById('addToTableButton').disabled = true;
    document.getElementById('editValues').style.width = '80%';
    document.getElementById('editValues').disabled = true;
    document.getElementById('saveEditedValues').style.display = null;
});

document.getElementById('saveEditedValues').addEventListener('click', e => {
    if(!(isNaN(parseFloat(proteinField.value)) || isNaN(parseFloat(fatField.value)) || isNaN(parseFloat(carbohydrateField.value)) || isNaN(parseFloat(energyField.value)))) {    
        time.disabled = false;
        recipeName.disabled = false;
        ingredientSelect.disabled = false;
        ingredientName.disabled = true;
        proteinField.disabled = true;
        carbohydrateField.disabled = true;
        fatField.disabled = true;
        energyField.disabled = true;
        document.getElementById('addToTableButton').disabled = false;    
        document.getElementById('editValues').style.width = '100%';
        document.getElementById('editValues').disabled = false;
        document.getElementById('saveEditedValues').style.display = 'none';
        document.getElementById('editWarning').style.display = 'none';
    } else {
        document.getElementById('editWarning').style.display = null;
    }
});