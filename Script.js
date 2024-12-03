var input = document.getElementById("input");
var firstSelect = document.getElementById("first");
var secondSelect = document.getElementById("second");

var Selection = () => {

    var selected = firstSelect.value;
    secondSelect.innerHTML = "";
    var luaChon = [];
    if (selected == "doDai") luaChon = ["", "inch => cm", "cm => inch", "dặm => km", "km => dặm"];
    else if (selected == "khoiLuong") luaChon = ["", "lbs => kg", "kg => lbs"];
    else if (selected == "vanToc") luaChon = ["", "km/h => m/s", "m/s =>km/h"];
    else if (selected == "apSuat") luaChon = ["", "atm => Pa", "Pa => atm", "mmHg => Pa", "Pa => mmHg"];
    else if (selected == "nangLuong") luaChon = ["", "Jun => cal", "cal => Jun"];
    else if (selected == "congSuat") luaChon = ["", "Mã lực => kW", "kW => Mã lực"];
    else if (selected == "nhietDo") luaChon = ["", "°C => °F", "°F => °C"];
    for (var i = 0; i < luaChon.length; i++) {
        var luaChonMoi = document.createElement("option");
        luaChonMoi.value = luaChon[i];
        luaChonMoi.text = luaChon[i];
        secondSelect.appendChild(luaChonMoi);
    }
}
var change = () => {
    let dauVao = input.value;
    let kieu = secondSelect.value;
    console.log(dauVao);
    if (dauVao < 0) {
        output.innerHTML = "Giá trị không hợp lệ";
    } else if (dauVao == "") {
        output.innerHTML = "Chưa nhập giá trị";
    } else if (kieu == "inch => cm") {
        output.innerHTML = `${dauVao * 2.34} cm`;
    } else if (kieu == "cm => inch") {
        output.innerHTML = `${dauVao / 2.34} inch`;
    } else if (kieu == "dặm => km") {
        output.innerHTML = `${dauVao * 1.609344} km`;
    } else if (kieu == "km => dặm") {
        output.innerHTML = `${dauVao / 1.609344} dặm`;
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
    } else if (kieu == "Mã lực => kW") {
        output.innerHTML = `${dauVao / 1.3410220888} kW`;
    } else if (kieu == "kW => Mã lực") {
        output.innerHTML = `${dauVao * 1.3410220888} Mã lực`;
    } else if (kieu == "Jun => cal") {
        output.innerHTML = `${dauVao / 4.1868} cal`;
    } else if (kieu == "cal => Jun") {
        output.innerHTML = `${dauVao * 4.1868} Jun`;
    } else if (kieu == "°F => °C") {
        output.innerHTML = `${(dauVao - 32) * 5 / 9} °C`;
    } else if (kieu == "°C => °F") {
        output.innerHTML = `${dauVao * 1.8 + 32} °F`;
    } else {
        output.innerHTML = "Chưa chọn kiểu quy đổi";
    }
}
