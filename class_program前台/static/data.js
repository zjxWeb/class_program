function showDate() {
    const date = new Date();
    const year=date.getFullYear();
    const month=date.getMonth()+1;
    const day=date.getDate();
    const hour=date.getHours();
    const min=date.getMinutes();
    const sec=date.getSeconds();
    document.getElementById("clock").innerText=year+"-"+month+"-"+day + "                 "+hour+":"+min+":"+sec;
    return {
        year,month,day,hour,min,sec
    }
};
export function showDateClick (){
    let a ={}
    setInterval(()=>{
        a = showDate()
        window.localStorage.setItem('date',JSON.stringify(a))
    },1000)
};
