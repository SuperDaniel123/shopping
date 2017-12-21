//字符串转化对象
function getObj(obj,sub){
    let arr = obj
    for(let i = 0; i<arr.length; i++){
      let str = arr[i][sub];
      let pase = JSON.parse(str);
      arr[i][sub] = pase;

    }
}

export {  //暴露出去
    getObj
}