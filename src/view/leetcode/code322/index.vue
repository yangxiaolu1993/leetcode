<template>
    <div class="leetcode leetcode-code322">
      <h3 class="leetcode-tip">322:零钱兑换</h3>

      <div class="lc-chunk">
        <div class="chunk-title">描述</div>
        <div>
            给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。</br>

            你可以认为每种硬币的数量是无限的。
        </div>

        <div class="chunk-title">示例</div>
        <div>
          输入：coins = [1, 2, 5], amount = 11  </br>
          输出：3 
        </div>

        <div class="chunk-title">参考链接</div>
        <div>
          https://blog.csdn.net/qq_37479128/article/details/89178058
        </div>

        <div class="chunk-title">动态规划</div>
        <div>
          
          动态规划：尝试分解子问题

          - 在研究了好几天，看了大佬们无数的解题思想之后，我终于明白了动态规划的本质，其实理解一个算法的思想，有很多时候只差临门一脚，希望我的题解能帮助到大家。</br>
            
          - 我们经常听到「最优子结构」「缩小问题规模」「自顶向下」「自底向上」等跟动态规划相关的词汇。</br>
            
          - 接下来就彻底搞懂这种思想，顺带着我自己也重温一遍刚刚搞懂的喜悦。</br>

          ----------------开始解题，拿实例来说话----------------------</br>

          - 假设给出的不同面额的硬币是[1, 2, 5]，目标是 120，问最少需要的硬币个数？</br>

          - 我们要分解子问题，分层级找最优子结构，看到这又要晕了哈，憋急~~ 下面马上举例。</br>

          - 这里我们使用「自顶向下」思想来考虑这个题目，然后用「自底向上」的方法来解题，体验算法的冰火两重天。</br>

          - dp[i]: 表示总金额为 i 的时候最优解法的硬币数</br>

          - 我们想一下：求总金额 120 有几种方法？下面这个思路关键了 !!! </br>
            一共有 3 种方式，因为我们有 3 种不同面值的硬币。 </br>
            1.拿一枚面值为 1 的硬币 + 总金额为 119 的最优解法的硬币数量 </br>
              这里我们只需要假设总金额为 119 的最优解法的硬币数有人已经帮我们算好了，</br>
              不需要纠结于此。(虽然一会也是我们自己算，哈哈)</br>
              即：dp[119] + 1</br>
            2.拿一枚面值为 2 的硬币 + 总金额为 118 的最优解法的硬币数</br>
              这里我们只需要假设总金额为 118 的最优解法的硬币数有人已经帮我们算好了</br>
              即：dp[118] + 1</br>
            3.拿一枚面值为 5 的硬币 + 总金额为 115 的最优解法的硬币数</br>
              这里我们只需要假设总金额为 115 的最优解法的硬币数有人已经帮我们算好了</br>
              即：dp[115] + 1</br>
              
            - 所以，总金额为 120 的最优解法就是上面这三种解法中最优的一种，也就是硬币数最少的一种，我们下面试着用代码来表示一下：</br>
              
            - dp[120] = Math.min(dp[119] + 1, dp[118] + 1, dp[115] + 1);</br>
              
            - 推导出「状态转移方程」：</br>
              dp[i] = Math.min(dp[i - coin] + 1, dp[i - coin] + 1, ...) </br>
              其中 coin 有多少种可能，我们就需要比较多少次，那么我们到底需要比较多少次呢？ </br>
              当然是 coins 数组中有几种不同面值的硬币，就是多少次了~ 遍历 coins 数组，分别去对比即可  </br>
              
            - 上面方程中的 dp[119]，dp[118]，dp[115] 我们继续用这种思想去分解，这就是动态规划了，把这种思想，思考问题的方式理解了，这一类型的题目问题都不会太大。
        </div>
        <div class="chunk-title">延伸</div>

        <div>深度优先遍历：采用堆栈的形式，先进后出</div>
        <div>广度优先遍历：采用队列的形式，先进先出</div>
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
    
    // 实例一
    let coins1 = [83,186,419,408]
    let amount1 = 6249

    // 实例二
    let coins = [1, 2, 5]
    let amount = 11

    let res = this.dpFun(coins1,amount1)

    console.log(res)
  },
  methods: {
    /**
     * 方案一：LeetCode 通过，但结果并不好
     * 思路：参考【https://blog.csdn.net/qq_37479128/article/details/89178058】
     */
    getAllWays(coins,amount){
      let T = []
      for(let i=0;i<coins.length;i++){
          T[i] = []
        for(let j=0;j<=amount;j++){

          if(j==0){
            T[i][j] = 0
            continue;
          }
          
          if(i == 0){
            if(coins[i] > j){
                T[i][j] = -1
            } else{
              let a = j/coins[i]
              T[i][j] = Math.round(a) == a?a:-1
            }
            
          } else {
            if(j<coins[i]){
              T[i][j] = T[i-1][j]
            }else{
              if(T[i-1][j] != -1 && T[i][j-coins[i]] != -1){
                T[i][j] = Math.min(T[i-1][j],T[i][j-coins[i]]+1)
              } else {
                if(T[i-1][j] == -1) T[i][j] = T[i][j-coins[i]]+1

                if(T[i][j-coins[i]] == -1) T[i][j] = T[i-1][j]
              }
            }
          }
        }
      }
      const result = T[coins.length-1][amount]
      return result
    },
    /**
     * 方案二：在方案一的基础上加入’缓存策略‘，这种技巧成为记忆化
     * 思路：参考【https://blog.csdn.net/qq_37479128/article/details/89178058】
     */
    getAllWaysCache(coins,amount){
      let T = []

      let cache = []
      
      for(let i=0;i<coins.length;i++){
          T[i] = []
        for(let j=0;j<=amount;j++){

          if(j==0){
            T[i][j] = 0
            continue;
          }
          
          if(i == 0){
            if(coins[i] > j){
                T[i][j] = -1
            } else{
              let a = j/coins[i]
              T[i][j] = Math.round(a) == a?a:-1
            }
            
          } else {
            if(j<coins[i]){
              T[i][j] = T[i-1][j]
            }else{
              if(T[i-1][j] != -1 && T[i][j-coins[i]] != -1){
                T[i][j] = Math.min(T[i-1][j],T[i][j-coins[i]]+1)
              } else {
                if(T[i-1][j] == -1) T[i][j] = T[i][j-coins[i]]+1

                if(T[i][j-coins[i]] == -1) T[i][j] = T[i-1][j]
              }
            }
          }
        }
      }
      const result = T[coins.length-1][amount]
      return result
    },

    /**
     * 方案三：动态规划
     */
    dpFun(coins, amount){
      let dp = new Array( amount + 1 ).fill( Infinity );
        dp[0] = 0;
        
        for (let i = 1; i <= amount; i++) {
          for (let coin of coins) {
            if (i - coin >= 0) {
              dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
          }
        }
        
        return dp[amount] === Infinity ? -1 : dp[amount];
    }
  }
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
