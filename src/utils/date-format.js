export function getMonthDay(num){
    const date= new Date(num);
    return add_0(date.getMonth()+1)+'月'+''+add_0(date.getDate())+'日'
}
export function getMMSS(num){
    const date=new Date(num);
    return add_0(date.getMinutes())+':'+add_0(date.getSeconds())
}

function add_0(num){
    if(num<10){
        return '0'+num
    }
    return num;
}
