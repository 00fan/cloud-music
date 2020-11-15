export default function(count){
    if(count>10000){
        return count%1000+'万'
    }else{
        return count;
    }
}