/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;
        let finish = n;
        while(start < finish) {
            const mid = Math.floor((start + finish) * 0.5);
            if(isBadVersion(mid)) {
                finish = mid
            } else {
                start = mid + 1
            }
        }
        return finish
    };
};