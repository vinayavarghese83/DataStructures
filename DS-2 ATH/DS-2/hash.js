// const collection = new Map()
// collection.set("name","athira")
// collection.set("Phone","7907924190")
// console.log(collection.get("name"));
// console.log(collection.get("Phone"));
// console.log(collection.size);

class HashTable{

    constructor(size=3) {
      this.table = new Array(size)
    }

    _hash(key){
      let hash = 0
      for(let i=0;i<key.length;i++){
        hash = (hash+key.charCodeAt(i)) % this.table.length
      }
      
      return hash
    }

    //seperate chaining
    // set(key,value){
    //   let index = this._hash(key)
    //   if(!this.table[index]){
    //     this.table[index]=[]
    //   }
    //   this.table[index].push([key,value])
    //   return this
    // }

    //linear probhing
    set(key,value){
      let index = this._hash(key)
      while (this.table[index]!==undefined) {
        index = (index+1) % this.table.length
      }
      this.table[index]=[key,value]
      return this
    }

    // Quadratic probhing
    // set(key,value){
    //   let index = this._hash(key)
    //   let i=1
    //   while (this.table[index]!==undefined) {
    //     index = (index+i*i)%this.table.length
    //     i++
    //   }
    //   this.table[index]=[key,value]
    //   return this
    // }

    get(key){
      let index = this._hash(key)
      if(this.table[index]){
        for(let i = 0;i<this.table[index].length;i++){
          if(this.table[index][i][0]==key){
            return this.table[index][i][1]
          }
        }
      }
      return undefined
    }

    delete(key){
      let index = this._hash(key)
      if(this.table[index]){
        for(let i=0;i<this.table[index].length;i++){
          if(this.table[index][i][0]==key){
            this.table[index].splice(i,1)
            return true
          }
        }
      }
      return false
    }

    keys(){
      let allKeys = []
      for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
          for(let j=0;j<this.table[i].length;j++){
            allKeys.push(this.table[i][j][0])
          }
        }
      }
      return allKeys
    }

    // keys() {
    //   let allKeys = [];
    //   for (let subArray of this.dataMap) {
    //     if (subArray) {
    //       for (let pair of subArray) {
    //         if (pair && pair[0] !== undefined) {
    //           allKeys.push(pair[0]);
    //         }
    //       }
    //     }
    //   }
    //   return allKeys;
    // }
    
    
    values(){
      let allvalues=[]
      for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
          for(let j=0;j<this.table[i].length;j++){
            allvalues.push(this.table[i][j][1])
          }
        }
      }
      return allvalues
    }
  }
  
  let myhashtable = new HashTable()
  myhashtable.set('name','athira')
  myhashtable.set('age',23)
  // myhashtable.set('ate',1400)
  console.log(myhashtable.keys());
  
  console.log(myhashtable.values());
  
  console.log(myhashtable);
