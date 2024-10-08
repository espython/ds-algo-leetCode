/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     var max = 0, current_string = "", i, char, pos;

  for (i = 0; i < s.length; i ++) {
      char = s.charAt(i);
      pos = current_string.indexOf(char);
      if (pos !== -1) {
          // cut "dv" to "v" when you see another "d"
          current_string = current_string.substring(pos + 1);
      }
      current_string += char;
      max = Math.max(max, current_string.length);
  }
  return max;
};