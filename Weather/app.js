function weatherBalloon(cityID) {
    let key = 'e932ce3c3d7a4f40db10ef65744bec9b';
    fetch('api.openweathermap.org/data/2.5/weather?q=Ulenurme,ee&APPID=e932ce3c3d7a4f40db10ef65744bec9b').then(function(resp) { return resp.json() }).then(function(data) {console.log(data)}).catch(function(){});
}


window.onload = function() {
    this.weatherBalloon('Tartu');
}