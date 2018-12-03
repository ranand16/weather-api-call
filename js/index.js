$(document).ready(function() {
    $.ajax({
        type: "GET",
        async: false,
        url: "https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&amp;id=1261481&amp;units=metric",
        dataType: "json",
        processData: true,
        success: function(result) {
            reqSucceeded(result);
        },
        error: reqFailed
    });

    function reqSucceeded(result) {
        console.log(result);
        var icon = result.weather[0].icon;
        $('#renderData').text(JSON.stringify(result));
        $('#renderCloud > img').attr('src','https://openweathermap.org/img/w/'+icon+'.png');
        $('#weather').text(result.weather[0].main);
        $('#temp').text(result.main.temp);
        $('#pressure').text(result.main.pressure);
        $('#temp_min').text(result.main.temp_min);
        $('#temp_max').text(result.main.temp_max);
        $('#wind_speed').text(result.wind.speed);
        $('#country').text(result.sys.country);
    }

    function reqFailed(result) {
        alert(result.status + '' + result.statusText);
    }
});