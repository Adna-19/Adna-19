document.getElementById("grade-form").addEventListener('submit', calculateGrades);

function calculateGrades(e) {
    e.preventDefault();

    var data = document.getElementById("grade-form").elements;
    const total_rows = document.getElementsByTagName('tr').length-1;

    var students_data = {
        subject_names: [],
        subject_credits: [],
        subject_marks: [],
    };

    var total_sum = 0.0, total_cr_hrs = 0.0;

    // extracting form data and arranging in simple data structure
    let i = 3, j = 4, k = 5;
    while(students_data.subject_names.length != total_rows) {
        students_data.subject_names.push(data[i].value);
        students_data.subject_credits.push(data[j].value);
        students_data.subject_marks.push(data[k].value);

        i += 3;
        j += 3;
        k += 3;
    }

    // you can choose any attribute of students_data obj
    // for providing a range of iterations..
    for(var x = 0; x < students_data.subject_names.length; x++) {
        let marks = parseInt(students_data.subject_marks[x]);
        let cr_hrs = parseInt(students_data.subject_credits[x]);
        cr_hrs = cr_hrs < 4? cr_hrs: cr_hrs-1;
        let GP;

        if (marks >= 85) { GP = 4.0; } 
        else { GP = (marks / 100) + cr_hrs; }   

        total_sum += GP * cr_hrs;
        total_cr_hrs += cr_hrs;
    }
    
    var GPA = (total_sum / total_cr_hrs).toFixed(1);

    let obtained_marks = getObtainedMarks(students_data.subject_marks);

    let username = data[0].value, rollno = data[1].value, total_marks = data[2].value;
    showOutput(username, rollno, total_marks, obtained_marks, GPA);

}

function showOutput(username, rollno, ttl_marks, obt_marks, gpa) {
    // hide the form-area and show result area
    document.getElementById("form-area").style.display = 'none';
    document.getElementById("result-area").style.display = 'block';
    document.getElementById("result-area").style.marginTop = '30px';

    let percentage_marks = getMarksPercentage(ttl_marks, obt_marks);

    // setting all the values in result form 
    document.getElementById("student-name").appendChild(document.createTextNode(username));
    document.getElementById("student-roll").appendChild(document.createTextNode(rollno));
    document.getElementById("total-marks").appendChild(document.createTextNode(ttl_marks));
    document.getElementById("marks-obtained").appendChild(document.createTextNode(obt_marks));
    document.getElementById("percentage-marks").appendChild(document.createTextNode(percentage_marks+"%"));
    document.getElementById("student-gpa").appendChild(document.createTextNode(gpa));
}

function getMarksPercentage(total_marks, obtained_marks) {
    return (parseInt(obtained_marks) / total_marks) * 100;
}

function getObtainedMarks(marks_list) {
    let obtained = 0;
    for (i = 0; i < marks_list.length; i++)
        obtained += parseInt(marks_list[i]);
    return obtained
}