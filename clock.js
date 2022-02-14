let flag = true;
window.onload = function clock(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();

    let month = time.getMonth()+1;
    let day = time.getDate();
    let weeks = '日一二三四五六'.split('');
    let week = weeks[time.getDay()];

    document.getElementById(6).innerText = Math.floor(month / 10);
    document.getElementById(7).innerText = month % 10;

    document.getElementById(9).innerText = Math.floor(day / 10);
    document.getElementById(10).innerText = day % 10;

    document.getElementById(11).innerText = " 周"+week;



    document.getElementById(1).innerText = Math.floor(hour / 10);
    document.getElementById(2).innerText = hour % 10;

    document.getElementById(4).innerText = Math.floor(minute / 10);
    document.getElementById(5).innerText = minute % 10;

    if(flag)
    {
        document.getElementById(3).innerHTML = "&nbsp;";
    }
    else
    {
        document.getElementById(3).innerText = ":";
    }
    flag = !flag;
}

setInterval(clock, 1000);