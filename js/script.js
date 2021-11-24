function toggle(first, sec, div3) {
    var first = document.getElementById(first),
        second = document.getElementById(sec),
        div3 = document.getElementById(div3);
    if (first.style.display === "grid") {
        first.style.display = "none";
        second.style.display = "grid";
        div3.style.display = "none";
    } else { // switch back
        first.style.display = "grid";
        second.style.display = "none";
        div3.style.display = "grid";
    }
}

function myFunction(first, sec) {
    // Get the checkbox
    var checkBox = document.getElementById("first");
    // Get the output text
    var text = document.getElementById("sec");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function on_change(el) {
    var selectedOption = el.target.value;
    if (selectedOption === 'MDM') {
        document.getElementById('text').style.display = 'block';
    } else {
        document.getElementById('text').style.display = 'none'; // Hide el
    }

}