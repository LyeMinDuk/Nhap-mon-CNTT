var input = document.getElementById("input");
var loai = document.getElementById("cmm");
var output = document.getElementById("output");

function Selection() {
    var firstSelect = document.getElementById("first");
    var secondSelect = document.getElementById("second");
    var selected = firstSelect.value;
    secondSelect.innerHTML = "";
    var luaChon = [];
    if (selected == "doDai") luaChon = ["", "in => cm", "cm => in", "m => km", "km => m"];
    else if (selected == "khoiLuong") luaChon = ["", "lb => kg", "kg => lb"];
    else if (selected == "vanToc") luaChon = ["", "km/h => m/s", "m/s =>km/h"];
    else if (selected == "apSuat") luaChon = ["", "atm => Pa", "Pa => atm", "mmHg => Pa", "Pa => mmHg"];
    else if (selected == "nangLuong") luaChon = ["", "J => cal", "cal => J"];
    else if (selected == "congSuat") luaChon = ["", "hp => kW", "kW => hp"];
    else if (selected == "nhietDo") luaChon = ["", "°C => °F", "°F => °C"];
    for (var i = 0; i < luaChon.length; i++) {
        var luaChonMoi = document.createElement("option");
        luaChonMoi.value=luaChon[i];
        luaChonMoi.text=luaChon[i];
        secondSelect.appendChild(luaChonMoi);
    }
}
