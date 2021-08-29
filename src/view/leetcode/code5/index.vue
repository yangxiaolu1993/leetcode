<template>
  <div class="leetcode leetcode-code5">
    <h3 class="leetcode-tip">5：最长回文子串</h3>

    <div class="lc-chunk">
      <div class="chunk-title">描述</div>
      <div>给你一个字符串 s，找到 s 中最长的回文子串。</div>
    </div>

    <div class="lc-chunk">
      <div class="chunk-title">名词解释</div>
      <div>
        回文子串：字符串正序读的结果与倒序读的结果一样，例如“上海自来水来自海上”
      </div>
    </div>

    <div class="lc-chunk">
      <div class="chunk-title">知识点</div>
      <div>
        回文子串：字符串正序读的结果与倒序读的结果一样，例如“上海自来水来自海上”
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
    // let s =
    //   "mqizdjrfqtmcsruvvlhdgzfrmxgmmbguroxcbhalzggxhzwfznfkrdwsvzhieqvsrbyedqxwmnvovvnesphgddoikfwuujrhxwcrbttfbmlayrlmpromlzwzrkjkzdvdkpqtbzszrngczvgspzpfnvwuifzjdrmwfadophxscxtbavrhfkadhxrmvlmofbzqshqxazzwjextdpuszwgrxirmmlqitjjpijptmqfbggkwaolpbdglmsvlwdummsrdyjhmgrasrblpjsrpkkgknsucsshjuxunqiouzrdwwooxclutkrujpfebjpoodvhknayilcxjrvnykfjhvsikjabsdnvgguoiyldshbsmsrrlwmkfmyjbbsylhrusubcglaemnurpuvlyyknbqelmkkyamrcmjbncpafchacckhymtasylyfjuribqxsekbjkgzrvzjmjkquxfwopsbjudggnfbuyyfizefgxamocxjgkwxidkgursrcsjwwyeiymoafgyjlhtcdkgrikzzlenqgtdukivvdsalepyvehaklejxxmmoycrtsvzugudwirgywvsxqapxyjedbdhvkkvrxxsgifcldkspgdnjnnzfalaslwqfylmzvbxuscatomnmgarkvuccblpoktlpnazyeazhfucmfpalbujhzbykdgcirnqivdwxnnuznrwdjslwdwgpvjehqcbtjljnxsebtqujhmteknbinrloregnphwhnfidfsqdtaexencwzszlpmxjicoduejjomqzsmrgdgvlrfcrbyfutidkryspmoyzlgfltclmhaeebfbunrwqytzhuxghxkfwtjrfyxavcjwnvbaydjnarrhiyjavlmfsstewtxrcifcllnugldnfyswnsewqwnvbgtatccfeqyjgqbnufwttaokibyrldhoniwqsflvlwnjmffoirzmoxqxunkuep";
    // let s1 = "1232414321";
    let s2 = "bb";
    console.log(this.solveMid(s2));
    // console.log(this.solve(s2));
  },
  methods: {
    /**
     * 方案一：执行没问题，但在 LC 中提交显示“超出时间限制...”，添加 && maxL.length < (s.length - 1 - n1)
     */
    solve(s) {
      if (s == "") return s;
      let n1 = 0;
      let n2 = s.length - 1;
      let maxL = s.substring(n1, 1);

      while (n1 < s.length - 1 && maxL.length <= s.length - 1 - n1) {
        if (s[n2] == s[n1]) {
          let sChild = s.substring(n1, n2 + 1);

          if (this.isPalindrome(sChild)) {
            if (maxL.length < sChild.length) maxL = sChild;
            n1 += 1;
            n2 = s.length - 1;
          } else {
            n2 -= 1;
          }
        } else {
          n2 -= 1;
        }
      }

      return maxL;
    },

    /**
     * 方案二：取中间值
     * 回文字符串有2种情况：
     * 1、长度是奇数：从中间值向移动，值是相等的。如：abcba  中间值是c
     * 2、长度是偶数：中间值有2个，中间值是相等，向2边移动，值也是相等的。如：abccba  中间值是c，c
     * 
     * 思路：假定字符串的每一位都是中心位，向2边循环，直到不一致的值出现，则前一位表示是回文字符串
     */
    solveMid(s) {
      if (s.length == 1) return s;

      let result = "";
      for (let i = 0; i < s.length; i++) {

        // 奇数情况
        isPalindrome(i, i);

        // 偶数情况
        isPalindrome(i, i + 1);
      }

      function isPalindrome(m, n) {
        
        while (m >= 0 && n < s.length && s[m] == s[n]) {
          m -= 1;
          n += 1;
        }
        
        if (s[m + 1] == s[n - 1] && (n - m - 1 > result.length)) {
          result = s.substring(m + 1, n);
        }
      }

      return result;
    },
    /**
     * 判断当前字符串是否是回文字符串
     * 思路一：将字符串反转，判断两个字符串是否一样
     */
    isPalindrome(s) {
      var reverseS = s.split("").reverse().join("");
      return s == reverseS;
    },

    /**
     * 判断当前字符串是否是回文字符串
     * 思路二：若是回文字符串，会有一个中间位置，两边的内容是一致的，所以获取到字符串的中间位置，向两边循环，若不一致则为false
     */
    isPalindromeMid(s) {
      let n1 = 0;
      let n2 = 0;
      let mid = ~~(s.length / 2);

      if (s.length % 2) {
        // 奇数
        n1 = mid - 1;
        n2 = n1 + 2;
      } else {
        // 偶数
        n1 = mid - 1;
        n2 = mid;
      }

      for (let i = n1; i < mid; i++) {
        if (s[n1] !== s[n2]) {
          return false;
        }

        n1 -= 1;
        n2 += 1;
      }

      return true;
    },
  },
};
</script>

<style lang="scss">
@import '@s/leetcode.scss';
</style>
