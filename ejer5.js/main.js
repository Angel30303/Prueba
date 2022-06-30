var selectedRow = null;

function formSubmit() {

    var formdata = readfact();
    if (selectedRow == null)
        insertNewData(formdata);
    else if (selectedRow != null) {
        update(formdata);
    }
    resetf();

}

function readfact() {
    var formdata = {};
    formdata["name"] = document.getElementById("name").value;
    formdata["lastname"] = document.getElementById("lastname").value;
    formdata["phone"] = document.getElementById("phone").value;
    formdata["email"] = document.getElementById("email").value;
    formdata["direction"] = document.getElementById("direction").value;
    return formdata;
}

function insertNewData(data) {


    var table = document.getElementById("viewlist").getElementsByTagName('tbody')[0]
    console.log(document.getElementsByName("table"))
    var newRow = table.insertRow(table.length);
    space1 = newRow.insertCell(0);
    space1.innerHTML = data.name;
    space2 = newRow.insertCell(1);
    space2.innerHTML = data.lastname;
    space3 = newRow.insertCell(2);
    space3.innerHTML = data.phone;
    space4 = newRow.insertCell(3);
    space4.innerHTML = data.email
    space5 = newRow.insertCell(4);
    space5.innerHTML = data.direction;
    space6 = newRow.insertCell(5);
    space6.innerHTML = `<a onClick="Edit(this)">Editar</a>
                         <a onClick="Delete(this)">Borrar</a>`

}

function resetf() {
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("direction").value = "";
    document.getElementById("name1").value = "";
    selectedRow = null;
};

function Edit(td) {

    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("direction").value = selectedRow.cells[4].innerHTML;
}

function update(formdata) {
    selectedRow.cells[0].innerHTML = formdata.name;
    selectedRow.cells[1].innerHTML = formdata.lastname;
    selectedRow.cells[2].innerHTML = formdata.phone;
    selectedRow.cells[3].innerHTML = formdata.email;
    selectedRow.cells[4].innerHTML = formdata.direction;
}

function search(formdata) {

    if (document.getElementById("name") == document.getElementById(name1)) {

        const datos = [
            selectedRow.cells[0].innerHTML = formdata.name,
            selectedRow.cells[1].innerHTML = formdata.lastname,
            selectedRow.cells[2].innerHTML = formdata.phone,
            selectedRow.cells[3].innerHTML = formdata.email,
            selectedRow.cells[4].innerHTML = formdata.direction
        ]

        document.getElementById(datos);

    } else {
        confirm('No se encontraron registro que concidan')
    }
}

function Delete(td) {
    if (confirm('Esta seguro de eliminar este registro')) {
        row = td.parentElement.parentElement;
        document.getElementById("viewlist").deleteRow(row.rowIndex);
        resetf();
    }
}

function validacion() {

    isValid = true;

}