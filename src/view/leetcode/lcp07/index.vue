<template>
    <div class="leetcode leetcode-LCP07">
      <h3 class="leetcode-tip">LCP 07:传递信息</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>小朋友 A 在和 ta 的小伙伴们玩传信息游戏，游戏规则如下：<br/>1、有 n 名玩家，所有玩家编号分别为 0 ～ n-1，其中小朋友 A 的编号为 0 <br/>2、每个玩家都有固定的若干个可传信息的其他玩家（也可能没有）。传信息的关系是单向的（比如 A 可以向 B 传信息，但 B 不能向 A 传信息）。<br/>3、每轮信息必须需要传递给另一个人，且信息可重复经过同一个人<br/>给定总玩家数 n，以及按 [玩家编号,对应可传递玩家编号] 关系组成的二维数组 relation。返回信息从小 A (编号 0 ) 经过 k 轮传递到编号为 n-1 的小伙伴处的方案数；若不能到达，返回 0。</div>
        <div class="chunk-title">示例</div> 
        <div>
          输入：n = 5, relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], k = 3 <br/>
          输出：3  <br/>
          解释：信息从小 A 编号 0 处开始，经 3 轮传递，到达编号 4。共有 3 种方案，分别是 0->2->0->4， 0->2->1->4， 0->2->3->4。 <br/>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  name: "LeetCode",
  data() {
    return {
      data: [
        {
            name: 'a',
            children: [
                { name: 'b', children: [{ name: 'e' }] },
                { name: 'c', children: [{ name: 'f' }] },
                { name: 'd', children: [{ name: 'g' }] },
            ],
        },
        {
            name: 'a2',
            children: [
                { name: 'b2', children: [{ name: 'e2' }] },
                { name: 'c2', children: [{ name: 'f2' }] },
                { name: 'd2', children: [{ name: 'g2' }] },
            ],
        }
      ],
    };
  },
  mounted() {

    /**
     * 深度优先遍历、广度优先遍历 例子
     */
    // let res = this.dfsFun(this.data)
    // console.log(res)
    // console.log(this.bfsFun(this.data))

    /**
     * leetcode 实例
     */ 

   let n = 5, relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], k = 3;

  //  let n=3,relation = [[0,2],[0,1],[1,2],[2,1],[2,0],[1,0]],k=1
   let result = this.solveNum(n,relation,k)
  console.log(result)
  },
  methods: {
    solve(n, relation, k){
      const map = new Array(n).fill(0).map(()=>[])
      
      relation.forEach(item=>{
        map[item[0]].push(item[1])
      })

      let result = []
      let circle = (keys,children,num)=>{
        children.push(keys)
        if(num > k-1){
          result.push(children)
        } else {
          
          if(map[keys] && map[keys].length>0){
            map[keys].forEach(key=>{
              circle(key,JSON.parse(JSON.stringify(children)),num+1)
            })
          }
        }
      }
      map.forEach((key,index)=>{
        circle(index,[],0)
      })

      return result
    },

    solveNum(n, relation, k){
      const map = new Array(n).fill(0).map(()=>[])
      
      relation.forEach(item=>{
        map[item[0]].push(item[1])
      })

      let nums = 0
      let circle = (keys,num)=>{
        if(num > k-1){
          if(keys == n-1) nums += 1
        } else {
          
          if(map[keys] && map[keys].length>0){
            map[keys].forEach(key=>{
              circle(key,num+1)
            })
          }
        }
      }
      circle(0,0)

      return nums
    },


    numWays(n, relation, k) {
        let ways = 0;
        const edges = new Array(n).fill(0).map(() => new Array());

        for (const [src, dst] of relation) {
            edges[src].push(dst);
        }

        const dfs = (index, steps) => {
            if (steps === k) {
                if (index === n - 1) {
                    ways++;
                }
                return;
            }
            const list = edges[index];
            for (const nextIndex of list) {
                dfs(nextIndex, steps + 1);
            }
        }
        
        dfs(0, 0);
        return ways;
    },

    /**
     * 深度优先遍历 DFS（depth-first） 
     * 广度优先遍历 BFS（breadth-first）
     */
  
    dfsFun(data){
      const result = [];
      data.forEach(item => {
          const map = data => {
              result.push(data.name);
              data.children && data.children.forEach(child => map(child));
          }
          map(item);
      })
      return result.join(',');
    },

    bfsFun(data){
      let result = []
      let queue = data // 创建一个队列
      while(queue.length > 0){
        [...queue].forEach(item=>{
          
          queue.shift() // 出栈
          result.push(item.name)
          item.children && item.children.forEach(child=>queue.push(child))
        })
      }
      return result.join(',')
    }
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
