const numberOfSeries = +prompt("Nechta serial ko'rdingiz", "");
const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genress: [],
    private: false,
};
for (let i = 1; i <= numberOfSeries; i++) {
    let serial = prompt(`${i + 1}`, "Oxirgi ko'rgan serialingiz?");
    let ball = +prompt(`${i + 1}: ${serial} kinosiga necha ball berasiz???`, "");

    if (serial != null && serial != "" && ball != null && ball != "") {
        seriesDB.series[serial] = ball;
    } else {
        i--
    }
}
if (numberOfSeries < 5) {
    alert("kam serial ko'ripsiz")
} else if (numberOfSeries >= 5 && numberOfSeries <= 10) {
    alert("siz classik tomoshabin ekansiz")
} else if (numberOfSeries > 10) {
    alert("siz serialchi zvezda ekansiz")
}else{
    alert("siz seriallni bo'lajak eri ekansiz")
}


console.log(seriesDB);
