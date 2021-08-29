<template>
  <div class="leetcode leetcode-LCP04">
    <!-- <div class="demo"></div> -->
    <h3 class="leetcode-tip">LCP04:覆盖</h3>

    <div class="lc-chunk">
      <div class="chunk-title">描述</div>
      <div>
        你有一块棋盘，棋盘上有一些格子已经坏掉了。你还有无穷块大小为1 *
        2的多米诺骨牌，你想把这些骨牌不重叠地覆盖在完好的格子上，请找出你最多能在棋盘上放多少块骨牌？这些骨牌可以横着或者竖着放。<br />

        输入：n, m代表棋盘的大小；broken是一个b *
        2的二维数组，其中每个元素代表棋盘上每一个坏掉的格子的位置。<br />

        输出：一个整数，代表最多能在棋盘上放的骨牌数。<br />
      </div>

      <div class="chunk-title">示例</div>
      <div>
        输入：n = 2, m = 3, broken = [[1, 0], [1, 1]] <br />
        输出：2 <br />
        解释：我们最多可以放两块骨牌：[[0, 0], [0, 1]]以及[[0, 2], [1,
        2]]。（见下图） <br />

        输入：n = 3, m = 3, broken = [] 输出：4
        解释：下图是其中一种可行的摆放方式
      </div>

      <div class="chunk-title">知识点</div>
      <div>
        <ul>
          <li>图：二分图、染色法</li>
          <li>匈牙利算法</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeetCode",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    Array.prototype.remove = function(val) { 
        var index = this.indexOf(val); 
        if (index > -1) { 
        this.splice(index, 1); 
        } 
    };
    /**
     * 限制
     * 1 <= n <= 8
     * 1 <= m <= 8
     * 0 <= b <= n * m
     */
    // let n = 2, m = 3, broken = [[1, 0], [1, 1]];
    // let n = 2, m = 3, broken = [[1, 1], [1, 2]];

    let broken = [
        [1, 0],
        [2, 5],
        [3, 1],
        [3, 2],
        [3, 4],
        [4, 0],
        [4, 3],
        [4, 6],
        [4, 7],
        [5, 3],
        [5, 5],
        [5, 6],
        [6, 3],
        [7, 2],
        [7, 7],
      ];

    // this.solve(n, m, broken);
    let result = this.bipartiteGraph(8,8, broken)

  console.log(result)
    
  },
  methods: {
    init(){
      // let A = new Map()
      // A.set('a1',['b1','b2'])
      // A.set('a2',['b1','b3'])
      // A.set('a3',['b3'])

      // let B = new Map()
      // B.set('b1',['a1','a2'])
      // B.set('b2',['a1'])
      // B.set('b3',['a3','a2'])
      // B.set('b4',[])

      // this.maxMatch(A,B)
    },

    /**
     * 将棋盘分解为二分图，将所有的点分为根据 i+j 的奇偶性分为 A/B 集合
     */

    bipartiteGraph(n, m, broken) {

      // 将破损数组重新排列
      let tranBroken = new Set();

      broken.forEach((item) => {
        tranBroken.add(`${item[0]}&${item[1]}`);
      });

      // 通过循环将数组拆分成 A，B两个集合
      let A = new Map(); // i+j == 偶数
      let B = new Map(); // i+j == 奇数
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if(tranBroken.has(`${i}&${j}`)) continue;     

          // if ((i + j) % 2 == 0 ) {
          //   A.set(`${i}&${j}`,[])

          //   if(!tranBroken.has(`${i-1}&${j}`) && i>0){
          //     A.get(`${i}&${j}`).push(`${i-1}&${j}`)
          //     B.get(`${i-1}&${j}`)?B.get(`${i-1}&${j}`).push(`${i}&${j}`):B.set(`${i-1}&${j}`,[`${i}&${j}`])
          //   }

          //   if(!tranBroken.has(`${i}&${j-1}`) && j>0){
          //     A.get(`${i}&${j}`).push(`${i}&${j-1}`)
          //     B.get(`${i}&${j-1}`)?B.get(`${i}&${j-1}`).push(`${i}&${j}`):B.set(`${i}&${j-1}`,[`${i}&${j}`])
          //   }
          //   if(!tranBroken.has(`${i+1}&${j}`) && i+1<n){
          //     A.get(`${i}&${j}`).push(`${i+1}&${j}`)
          //     B.get(`${i+1}&${j}`)?B.get(`${i+1}&${j}`).push(`${i}&${j}`):B.set(`${i+1}&${j}`,[`${i}&${j}`])
          //   }

          //   if(!tranBroken.has(`${i}&${j+1}`) && j+1<m){
          //     A.get(`${i}&${j}`).push(`${i}&${j+1}`)
          //     B.get(`${i}&${j+1}`)?B.get(`${i}&${j+1}`).push(`${i}&${j}`):B.set(`${i}&${j+1}`,[`${i}&${j}`])
          //   }

          // } 

          let  gather = (i + j) % 2 == 0 ?A:B

          gather.set(`${i}&${j}`,[])

          if(!tranBroken.has(`${i-1}&${j}`) && i>0){
            gather.get(`${i}&${j}`).push(`${i-1}&${j}`)
          }

          if(!tranBroken.has(`${i}&${j-1}`) && j>0){
            gather.get(`${i}&${j}`).push(`${i}&${j-1}`)
          }
          if(!tranBroken.has(`${i+1}&${j}`) && i+1<n){
            gather.get(`${i}&${j}`).push(`${i+1}&${j}`)
          }

          if(!tranBroken.has(`${i}&${j+1}`) && j+1<m){
            gather.get(`${i}&${j}`).push(`${i}&${j+1}`)
          }

        }
      }
      console.log('集合',A,B)

      return Math.max(this.maxMatch(A),this.maxMatch(B))
      
    },

    /**
     * 将 二分图 分为 A/B 两个集合，获取两个集合的最大匹配数
     *  
     * 查看 a 的匹配项 b，b是否被占用
     * 未占用：a 找到匹配项 b
     * 占用：找到占用 b 的匹配项 c，查看 c 是否有除 b 以外的其他可用匹配项 e
     * 
     * 未占用：将 c 的匹配项改为 e
     * 占用：继续寻找
     * 
     * 直到 找到未占用项
     */

    maxMatch(A){
      let noUse = new Map() // B 集合被占用项
      let matchList = new Map() // 已经匹配项

      let matchFun = (key,value,path)=>{
        
        let isMatch = false
        for(let i=0;i<value.length;i++){
          if(!noUse.get(value[i])){

            // 查询到有未占用项，停止循环，找到匹配项
            matchList.set(key,value[i])
            noUse.set(value[i],key)

            let keys = [...path.keys()]
            for(let j=path.size;j>0;j--){
          
              matchList.set(keys[j-1],path.get(keys[j-1]))
              noUse.set(path.get(keys[j-1]),keys[j-1])
            }

            isMatch = true
            break
          } 
        }
        
        // 未查询到未占用项
        if(!isMatch){
          if(path.get(key)) return false
          let x = 0
            path.set(key,value[x])
            let keyn = noUse.get(value[x])
            let valuen = A.get(keyn)
            valuen.remove(value[x])

            valuen.length>0 && matchFun(keyn,valuen,path)
          
        }
      }

      
      for(let [key,value] of A){
        let p = new Map()
        
        value.length>0&&matchFun(key,value,p)

      }
      // console.log(matchList)

      return matchList.size
    }
  },
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
<style>
.demo {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #000;
  clip-path: polygon(
    0px 0px,
    50px 0px,
    50px 20px,
    30px 20px,
    25px 30px,
    20px 20px,
    0 20px
  );
  border: 2px solid orange;
}
</style>
