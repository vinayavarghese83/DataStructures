//key is a  string , so take ascii code and add up

class Hashing {
    constructor(max = 10) {
      this.table = new Array(max);
      this.size = max;
    }
  
    _hash(key) {
      let hash = 0;
      // console.log(key)
      //finds asccii
      for (let i = 0; i < key.length; i++) {
        console.log(key.charCodeAt(i))
        hash += key.charCodeAt(i);
        // console.log("hash",hash );
      
      }
      // console.log("hash", hash);
  
      console.log("_hasing done index ,size", hash % this.size, this.size);
  
      return hash % this.size;
    }
  
    //set key value pair
  
    add(key, value) {
      const index = this._hash(key);
  
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push([key, value]);
  
      console.log(this.table[index][0]);
    }
  
    get(key) {
      const index = this._hash(key);
      console.log(index);
  
      for (let i = 0; i < this.size; i++) {
        if (!this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
      return undefined;
    }
    remove(key) {
      const index = this._hash(key);
      console.log(index);
  
      for (let i = 0; i < this.size; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i].splice(i, 1);
          //this.size --
          return;
        }
      }
    }
  
    print() {
      for (let i = 0; i < this.size; i++) {
        if (this.table[i]) {
          console.log(i,this.table[i]);
        }
      }
    }
  }
  
  
  const hasTable =  new Hashing(10)
  hasTable.add("name" , "vinaya")
  hasTable.add("age" , 10)
  hasTable.add("name1" , "vinaya1")
  hasTable.add("age1" , 10)
  
  hasTable.print();

  hasTable.remove("age1")

  hasTable.print();