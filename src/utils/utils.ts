//生成从minNum到maxNum的随机数
export const randomNum = (minNum: number, maxNum?: number) => {
    if(minNum && !maxNum){
        return Math.floor((Math.random() * minNum + 1));
    }
    if(maxNum){
        return Math.floor((Math.random() * (maxNum - minNum + 1) + minNum ));
    }

    return 0

}


