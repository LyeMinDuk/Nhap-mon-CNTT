var input = document.getElementById("input");
var output = document.getElementById("output");
var firstSelect = document.getElementById("first");
var secondSelect = document.getElementById("second");

var Selection = () => {

    var selected = firstSelect.value;
    secondSelect.innerHTML = "";
    var luaChon = [];
    if (selected == "doDai") luaChon = ["", "in => cm", "cm => in", "mile => km", "km => mile"];
    else if (selected == "khoiLuong") luaChon = ["", "lbs => kg", "kg => lbs"];
    else if (selected == "vanToc") luaChon = ["", "km/h => m/s", "m/s =>km/h"];
    else if (selected == "apSuat") luaChon = ["", "atm => Pa", "Pa => atm", "mmHg => Pa", "Pa => mmHg"];
    else if (selected == "nangLuong") luaChon = ["", "J => cal", "cal => J"];
    else if (selected == "congSuat") luaChon = ["", "HP => kW", "kW => HP"];
    else if (selected == "nhietDo") luaChon = ["", "°C => °F", "°F => °C"];
    for (var i = 0; i < luaChon.length; i++) {
        var luaChonMoi = document.createElement("option");
        luaChonMoi.value = luaChon[i];
        luaChonMoi.text = luaChon[i];
        secondSelect.appendChild(luaChonMoi);
    }
}
var change = (n) => {
    let dauVao = input.value;
    let kieu = secondSelect.value;
    console.log(dauVao);
    if (kieu == "in => cm") {
        output.innerHTML = `${dauVao * 2.34} cm`;
    } else if (kieu == "cm => in") {
        output.innerHTML = `${dauVao / 2.34} in`;
    } else if (kieu == "mile => km") {
        output.innerHTML = `${dauVao * 1.609344} km`;
    } else if (kieu == "km => mile") {
        output.innerHTML = `${dauVao / 1.609344} mile`;
    } else if (kieu == "kg => lbs") {
        output.innerHTML = `${dauVao * 2.20462262185} lbs`;
    } else if (kieu == "lbs => kg") {
        output.innerHTML = `${dauVao / 2.20462262185} kg`;
    } else if (kieu == "m/s =>km/h") {
        output.innerHTML = `${dauVao * 3.6} kh/h`;
    } else if (kieu == "km/h => m/s") {
        output.innerHTML = `${dauVao / 3.6} m/s`;
    } else if (kieu == "atm => Pa") {
        output.innerHTML = `${dauVao * 101325} Pa`;
    } else if (kieu == "Pa => atm") {
        output.innerHTML = `${dauVao / 101325} atm`;
    } else if (kieu == "mmHg => Pa") {
        output.innerHTML = `${dauVao * 133.322} Pa`;
    } else if (kieu == "Pa => mmHg") {
        output.innerHTML = `${dauVao / 133.322} mmHg`;
    } else if (kieu == "HP => kW") {
        output.innerHTML = `${dauVao / 1.3410220888} kW`;
    } else if (kieu == "kW => HP") {
        output.innerHTML = `${dauVao * 1.3410220888} HP`;
    } else if (kieu == "J => cal") {
        output.innerHTML = `${dauVao / 4.1868} cal`;
    } else if (kieu == "cal => J") {
        output.innerHTML = `${dauVao * 4.1868} J`;
    } else if (kieu == "°F => °C") {
        output.innerHTML = `${(dauVao - 32) * 5 / 9} °C`;
    } else if (kieu == "°C => °F") {
        output.innerHTML = `${dauVao * 1.8 + 32} °F`;
    }
}
