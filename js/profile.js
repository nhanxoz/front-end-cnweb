$(function() {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});
document.getElementById("select1").onclick = function() {
    document.getElementById("buy").style.display = "none";
    document.getElementById("profile-detail").style.display = "block"; // hide body div tag
};
document.getElementById("select4").onclick = function() {
    document.getElementById("profile-detail").style.display = "none";
    document.getElementById("buy").style.display = "block"; // hide body div tag
};