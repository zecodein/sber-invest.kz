function toggle(first, sec, div3) {
    var first = document.getElementById(first),
    second = document.getElementById( sec ),
    div3 = document.getElementById(div3);
    if ( first.style.display === "grid" ) {
        first.style.display = "none";
        second.style.display = "grid";
        div3.style.display = "grid";
    } else { // switch back
        first.style.display = "grid";
        second.style.display = "none";
        div3.style.display = "none";
    }
}