let showtime = () => { 
    let times = new Date();
    let hr = times.getHours();
    let mins = times.getMinutes();
    let sec = times.getSeconds();
    let am = "AM";

    let days = times.toLocaleDateString('default',{weekday : 'long'});
    let date = times.getDate();
    let month = times.getMonth();
    let year = times.getFullYear();
    
    if(hr == 0){
        hr = 12;
    }
    else if(hr > 12){
        hr -= 12;
        am = "PM"
    }
    
    hr = (hr < 10)? "0" + hr : hr;
    mins = (mins < 10)? "0" + mins :mins;
    sec = (sec < 10)? "0" + sec : sec;
    
   document.getElementById("gethr").innerHTML = `${hr}`;
   document.getElementById("getmins").innerHTML = `${mins}`;
   document.getElementById("getsec").innerHTML = `${sec}`;
   document.getElementById("getam").innerHTML = `${am}`;

   document.getElementById("getdatess").innerHTML = `${date} / ${month} / ${year}`;
   document.getElementById("getdays").innerHTML = `${days}`;

}
// showtime();




setInterval(showtime,1000);
