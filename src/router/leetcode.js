

/**
 * leetcode 相关路由配置
 */
 
 
 const files = require.context('../view/leetcode', true, /index\.vue$/);
 const importAll = context => {
     const map = {}
 
     for (const key of context.keys()) {
         const keyArr = key.split('/')
         keyArr.shift() // 移除.
         // map[keyArr.join('.').replace(/\.vue$/g, '')] = context(key).default
         map[keyArr[0]] = context(key).default
     }
     return map
 }
 let map = importAll(files)
 // 转换字符串为首字母大写
 const titleCase = (str) => {
     var arr = str.split(" ");
     for(var i = 0;i < arr.length;i++){
         arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase();
     }
     return arr.join(" ");
 }
 
 const leetCodeRoutes = []
 
 for(let key in map){
     leetCodeRoutes.push({
         path: `/${key}`,
         name: `${titleCase(key)}`,
         component: map[key],
         meta: {
           title: 'LeetCode'
         }
     })
 }
 
 
 
 
 export default leetCodeRoutes
 
 
 