<template>
    <div class="leetcode leetcode-LCP03">
      <h3 class="leetcode-tip">LCP03:机器人大冒险</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>
          力扣团队买了一个可编程机器人，机器人初始位置在原点(0, 0)。小伙伴事先给机器人输入一串指令command，机器人就会无限循环这条指令的步骤进行移动。指令有两种：<br/>

          U: 向y轴正方向移动一格 <br/>
          R: 向x轴正方向移动一格。<br/>
          不幸的是，在 xy 平面上还有一些障碍物，他们的坐标用obstacles表示。机器人一旦碰到障碍物就会被损毁。 <br/>

          给定终点坐标(x, y)，返回机器人能否完好地到达终点。如果能，返回true；否则返回false。 <br/>
        </div>

        <div class="chunk-title">示例</div>
        <div>
          输入：command = "URR", obstacles = [], x = 3, y = 2<br/>
          输出：true<br/>
          解释：U(0, 1) -> R(1, 1) -> R(2, 1) -> U(2, 2) -> R(3, 2)。<br/>
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
    // "RUUR"
    // [[10, 5], [1, 6], [6, 10], [3, 0], [0, 3], [0, 10], [6, 2]]
    // 7856
    // 9033

    // let command = "URR", obstacles = [], x = 3, y = 2;
    let command = "RUUR", obstacles = [[10, 5], [1, 6], [6, 10], [3, 0], [0, 3], [0, 10], [6, 2]], x = 7859, y = 7856;
    let result = this.solveTem(command,obstacles, x, y)
    console.log(result)
  },
  methods: {
    /**
     * 方案一
     */
    solve(command, obstacles, x, y){

      let cir = 0
      let s = [0,0]
      let nc = [...command]

      let upObs = new Map()

      for(let [x,y] of obstacles){
        if(upObs.get(x)){
          upObs.get(x).push(y)
        }else{
          upObs.set(x,[y])
        }
      }

      while(!(cir > nc.length)){
        s[nc[cir] == 'U'?1:0] += 1
        let isDes = []
        if(upObs.get(s[0])){
          isDes = upObs.get(s[0]).filter(i=>{
            return i==s[1]
          })
        }

        if(isDes.length || s[0] > x || s[1]>y){
          return false
        }else if(s[0]==x &&s[1]==y){
          return true
        }else{
          cir = cir == nc.length-1?0:cir+1
        }
      }
    },
    /**
     * 将方案yi中，使用 Set 方式代替 Map 方式，执行超时
     */
    solveSet(command, obstacles, x, y){

      let cir = 0
      let s = [0,0]
      let nc = [...command]

      let upObs = new Set()
      for(let [x,y] of obstacles){
        upObs.add(`${x}&${y}`)
      }

      while(!(cir > nc.length)){
        s[nc[cir] == 'U'?1:0] += 1

        if(upObs.has(`${s[0]}&${s[1]}`) || s[0] > x || s[1]>y){
          return false
        }else if(s[0]==x &&s[1]==y){
          return true
        }else{
          cir = cir == nc.length-1?0:cir+1
        }
      }
    },

    /**
     * 模拟行走路线
     */
    solveTem(command, obstacles, x, y){
      var arr = ['0, 0']
      var x0 = 0, y0 = 0
      command.split('').forEach(item => arr.push(item === 'R' ? `${++x0}, ${y0}` : `${x0}, ${++y0}`))

      var loop = Math.min(Math.floor(x / x0), Math.floor(y / y0))

      if (!(arr.includes(`${x - loop * x0}, ${y - loop * y0}`))) return false

      if (obstacles.length > 0) for (var [a, b] of obstacles) {
        if (a > x || b > y) continue
        loop = Math.min(Math.floor(a / x0), Math.floor(b / y0))
        if (arr.includes(`${a - loop * x0}, ${b - loop * y0}`)) return false
      }

      return true

    },

    /**
     * 最小轨迹
     */
    minTrack(command, obstacles, x, y){
      
    }
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
