class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    hash(key) {
        let total = 0
        let Prime = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * Prime + value) % this.keyMap.length            
        }
        return total
    }
    set(key, value) {
        let index = this.hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }
    get(key) {
        let index = this.hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i]
                }
            }
        }
        return undefined
    }
    keys() {
        let keysArray = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArray.includes(this.keyMap[i][j][0])) {
                        keysArray.push(this.keyMap[i][j][0])
                    }
                }
            }            
        }
        return keysArray
    }
    values() {
        let ValuesArray = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!ValuesArray.includes(this.keyMap[i][j][1])) {
                        ValuesArray.push(this.keyMap[i][j][1])
                    }
                }
            }            
        }
        return ValuesArray
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")

ht.keys().forEach((key) => {
    console.log(ht.get(key));
});
