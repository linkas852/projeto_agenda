const new_name = document.querySelector('#name');
const new_tel = document.querySelector('#tel');
const tbody = document.querySelector("tbody");

const btn_add = document.querySelector("#btn_add").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(new_name.value, new_tel.value);

    let new_row = document.createElement("tr");
    let new_data_name = document.createElement("td");
    let new_data_tel = document.createElement("td");

    new_data_name.innerHTML = new_name.value
    new_data_tel.innerHTML = new_tel.value
    new_row.append(new_data_name);
    new_row.append(new_data_tel);
    tbody.append(new_row)
    
    new_name.value = ''
    new_tel.value = ""
})
