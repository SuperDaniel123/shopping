//字符串转化对象
function getObj(obj,sub){
    let arr = obj
    for(let i = 0; i<arr.length; i++){
      let str = arr[i][sub];
      let pase = JSON.parse(str);
      arr[i][sub] = pase;

    }
}

//获取页面高度
function pageHeight(dom){
    let inHeight = window.screen.height
    let content = document.querySelector(dom)
    content.style.minHeight = inHeight + 'px'
}

export {  //暴露出去
    getObj,
    pageHeight
}