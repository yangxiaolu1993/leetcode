/**
 * 合并２个数组中相同的数据
 */

// 创建用户数据数组
const usersInfo = Array.from({ length: 10 }, (val, index) => {
    return {
        uid: `${index + 1}`,
        name: `user-name-${index}`,
        age: index + 10,
        avatar: ``
    }
});

// 创建用户得分数据数组（与 usersInfo 的关联是相同的 uid）
const scoresInfo = Array.from({ length: 8 }, (val, index) => {
    return {
        uid: `${index + 1}`,
        score: ~~(Math.random() * 10000),
        comments: ~~(Math.random() * 10000),
        stars: ~~(Math.random() * 1000)
    }
});


/**
 * 将 usersInfo 改变成 Map 结构，即[键，值]对形式
 */
function scoreMapFun(result){
    result = scoresInfo.reduce((obj, cur) => {
        obj[cur.uid] = cur;
        return obj;
    }, Object.create(null))
    
    return result
}



 export const margeArray = ()=>{
    let scoreMap = scoreMapFun(scoreMap)
    
    for(let i=0;i<usersInfo.length;i++){
        let scores = scoreMap[usersInfo[i].uid]
        console.log(scores)
        if(scores){
            usersInfo[i] = Object.assign(usersInfo[i],{
                score: scores.score,
                comments: scores.comments,
                stars: scores.stars
            })
        }
    }

    console.log(usersInfo)
 }