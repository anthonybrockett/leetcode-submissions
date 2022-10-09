/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const A = image.length; 
    const B = image[0].length;
    const startColor = image[sr][sc];
    if (image === null || image.length < 1 || startColor === color) {
        return image
    };
    
    const dfs = function(image, a, b, color, startColor) {
        if (a<0 || a >= A || b<0 || b >= B || startColor !== image[a][b]) {
            return;
        }
        image[a][b] = color;
        dfs(image, a-1, b, color, startColor);
        dfs(image, a+1, b, color, startColor);
        dfs(image, a, b-1, color, startColor);
        dfs(image, a, b+1, color, startColor);  
    }  
    dfs(image, sr, sc, color, startColor);
    return image
};
