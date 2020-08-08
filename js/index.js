function changeRead() {
    var element1 = document.getElementById("read-more-click");
    if (element1.value == 'read') {
        element1.value = "hide"
        element1.innerHTML = `Hide <i class="fa fa-chevron-up" data-toggle="collapse" data-target="#boxcollapse">`;
    } else {
        element1.value = "read"
        element1.innerHTML = `Read More <i class="fa fa-chevron-up" data-toggle="collapse" data-target="#boxcollapse">`;
    }
}