$(document).ready(function(){
    $("#button").click(function(){
        locationSearch();
    });

    function locationSearch(){

        var request;

         request = $.ajax({
            url:'http://api.weatherapi.com/v1/current.json?key=a12d4da768164901b7680404231310',
            type:'GET',
            data:{
                q:$("#search-box").val(),
            },
            success:function(data){
                var cityTime = data.location.localtime;
            var cityName = data.location.name;
            var temperature = data.current.temp_c;
            var speed = data.current.wind_mph;
            var weather = data.current.condition.text;
            var icon = data.current.condition.icon;

            $("#temp").text(temperature);
            $("#location").text(cityName);
            $("#time").text(cityTime);
            $("#speed").text(speed);
            $("#weather").text(weather);
            $("#icon").attr('src',icon);


    


            console.log(cityName);
            console.log(cityTime);
            console.log(temperature);
            }
            
        });
        // request.done(function(response){
        //     displayResult(response);
        // });
    }

        // function displayResult(jsonObject){
        //     console.log(jsonObject);
        //     var cityTime = jsonObject.location;
        //     var cityName = jsonObject.location.name;
        //     var temperature = jsonObject[1].temp_C;

        //    $("#temp").html() = temperature;

        //     console.log(cityName);
        //     console.log(cityTime);
        //     console.log(temperature);
        // }
})