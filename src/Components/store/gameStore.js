import {createSlice} from '@reduxjs/toolkit'

const scanForCombos = (grid, checking = false) => {
    const combos = [];
    let type;
    let count;
    let comboTemp = [];
    for (let i = 0; i < 8; i++) {
        type = null
        comboTemp = []
        count = 1
        for (let j = 0; j < 8; j++) {
            if (grid[i][j] === type) {
                count++;
            } else {
                if (count > 2) {
                    if (checking) {
                        return true
                    }
                    combos.push(...comboTemp)
                }
                comboTemp = [];
                type = grid[i][j]
                count = 1
            }
            comboTemp.push([i, j])
        }
        if (count > 2) {
            if (checking) {
                return true
            }
            combos.push(...comboTemp)
        }
    }
    comboTemp = [];

    for (let i = 0; i < 8; i++) {
        type = null
        comboTemp = []
        count = 1
        for (let j = 0; j < 8; j++) {
            if (grid[j][i] === type) {
                count++;
            } else {
                if (count > 2) {
                    if (checking) {
                        return true
                    }
                    combos.push(...comboTemp)
                }
                comboTemp = [];
                type = grid[j][i]
                count = 1
            }
            comboTemp.push([j, i])
        }
        if (count > 2) {
            if (checking) {
                return true
            }
            combos.push(...comboTemp)
        }
    }
    if (checking) {
        return false
    }
    return combos
}

const removeGems = (grid, combos, state = null) => {
    for (const combo of combos) {
        grid[combo[0]][combo[1]] = null
        if (state) {
            state.points += 10;
        }
    }
}

const dropGems = (grid) => {
    for (let i = 7; i !== -1; i--) {
        for (let j = 7; j !== -1; j--) {
            if (grid[i][j] === null) {
                if (i === 0) {
                    grid[i][j] = Math.floor(Math.random() * 7)
                } else {
                    grid[i][j] = grid[i - 1][j]
                    grid[i - 1][j] = null
                }
            }
        }
    }
}

const hasNull = (grid) => {
    for (const row of grid) {
        if (row.indexOf(null) !== -1) {
            return true
        }
    }
    return false
}

const initialGrid = () => {
    const makeArray = (ARRAY_LENGTH) => Array.from(Array(ARRAY_LENGTH)).map(_ => Math.floor(Math.random() * 7))
    let grid = Array.from(Array(8)).map(() => makeArray(8))
    let combos = scanForCombos(grid);
    if (combos.length || hasNull(grid)) {
        removeGems(grid, combos)
        combos = []
        while (hasNull(grid)) {
            dropGems(grid)
            combos = scanForCombos(grid)
            if (combos.length) {
                removeGems(grid, combos)
            }
        }
    }
    return grid
}

const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

const moveGem = (grid, gem1, gem2) => {  // action.payload = gem1 // state.selectedGem = gem2
    let a = grid[gem1.x][gem1.y]
    grid[gem1.x][gem1.y] = grid[gem2.x][gem2.y]
    grid[gem2.x][gem2.y] = a
    gem2.x = null
    gem2.y = null
}

const hasCombos = (grid, gem1, gem2) => {
    let gridClone = clone(grid)
    moveGem(gridClone, gem1, {x: gem2.x, y: gem2.y})
    let result = scanForCombos(gridClone, true)
    console.log(result)
    return result
}

const initialState = {
    points: 0,
    player: 'player',
    time: 0,
    selectedGem: {x: null, y: null},
    gemGrid: initialGrid()
}


export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        increment: (state) => {
            state.points += 1
        },
        incrementByAmount: (state, action) => {
            state.points += action.payload
        },
        setPlayer: (state, action) => {
            state.player = action.payload
        },
        selectGem: (state, action) => {
            if (state.selectedGem.x === null) {
                state.selectedGem = action.payload
            } else {
                if (
                    Math.abs(state.selectedGem.x - action.payload.x) + Math.abs(state.selectedGem.y - action.payload.y) === 1 &&
                    hasCombos(state.gemGrid, action.payload, state.selectedGem)
                ) {
                    moveGem(state.gemGrid, action.payload, state.selectedGem)
                } else {
                    state.selectedGem = action.payload
                }
            }
        },
        updateGrid: (state) => {
            let combos = scanForCombos(state.gemGrid);
            if (combos.length || hasNull(state.gemGrid)) {
                removeGems(state.gemGrid, combos, state)
                combos = []
                while (hasNull(state.gemGrid)) {
                    dropGems(state.gemGrid)
                    combos = scanForCombos(state.gemGrid)
                    if (combos.length) {
                        removeGems(state.gemGrid, combos, state)
                    }
                }
            }

        }
    },
})

// Action creators are generated for each case reducer function
export const {increment, incrementByAmount, setPlayer, selectGem, updateGrid} = gameSlice.actions

const gameReducer = gameSlice.reducer

export default gameReducer