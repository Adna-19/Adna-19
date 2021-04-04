document.getElementById("addButton").addEventListener("click", addMoreRows);
function addMoreRows(e) {
    e.preventDefault();
    
    const total_tds = document.getElementsByTagName('tr').length;
    let tr = document.createElement('tr');
    
    // creating td1 data and appending it to <tr>
    let td1 = createSubjectInput(total_tds);
    tr.appendChild(td1);

    // creating td2 data and appending it to <tr>
    let td2 = createCreditInput(total_tds);
    tr.append(td2);
    
    // // creating td3 data and appending it to <tr>
    let td3 = createMarksInput(total_tds);
    tr.appendChild(td3);
    
    document.getElementsByTagName('tbody')[0].appendChild(tr);
}

function createSubjectInput(total_subjects) {
    let td1 = document.createElement('td');
    let td1_item = document.createElement('input');
    td1_item.type = "text";
    td1_item.className = "form-control";
    td1_item.name = `Subject${total_subjects}`;
    td1_item.placeholder = "Subject name here...";
    td1.appendChild(td1_item);
    
    return td1;
}

function createCreditInput(total_subjects) {
    let td2 = document.createElement('td');
    let td2_item = document.createElement('select');
    td2_item.className = "custom-select";
    td2_item.name = `Subject${total_subjects}Credits`;

    let option1_for_select = document.createElement('option');
    let option2_for_select = document.createElement('option');
    let option3_for_select = document.createElement('option');
    let option4_for_select = document.createElement('option');

    option1_for_select.selected;
    option1_for_select.hidden;
    option1_for_select.appendChild(document.createTextNode('------'));

    option2_for_select.value = "2";
    option2_for_select.appendChild(document.createTextNode('Two'));

    option3_for_select.value = "3";
    option3_for_select.appendChild(document.createTextNode('Three'));

    option4_for_select.value = "4";
    option4_for_select.appendChild(document.createTextNode('Four'));

    td2_item.appendChild(option1_for_select);
    td2_item.appendChild(option2_for_select);
    td2_item.appendChild(option3_for_select);
    td2_item.appendChild(option4_for_select);
    td2.appendChild(td2_item);
    
    return td2;
}

function createMarksInput(total_subjects) {
    let td3 = document.createElement('td');
    let td3_item = document.createElement('input');
    td3_item.type = "number";
    td3_item.className = "form-control";
    td3_item.name = `Subject${total_subjects}Points`;
    td3.appendChild(td3_item);

    return td3;
}