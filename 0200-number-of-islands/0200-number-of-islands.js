/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid) return 0;

    let rowsLength = grid.length; colsLength = grid[0].length
    const visit = new Set();
    let islands = 0;

    function bfs(r,c){
        let q = []
        visit.add(`${r},${c}`)
        q.push([r,c])
        while(q.length > 0){
            let [row,col] = q.shift();
            let directions = [[1,0],[0,1],[-1,0],[0,-1]]
            for(let [dr,dc] of directions){
                let r = row + dr, c = col + dc;
            
                if(r >= 0 && r < rowsLength && c >= 0 && c < colsLength && grid[r][c] == "1" && !visit.has(`${r},${c}`)){
                    q.push([r,c])
                    visit.add(`${r},${c}`)
                }
            }
        }
    }

    for(let r = 0; r<rowsLength ; r++){
        for(let c = 0; c<colsLength; c++){
            console.log(visit.has([r,c]))
            if(grid[r][c] == "1" && !visit.has(`${r},${c}`)){
                bfs(r,c)
                islands += 1
            }
        }
    }

return islands
    
};