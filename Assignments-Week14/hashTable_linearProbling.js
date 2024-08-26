//Implement linear Probing in 
//find index , then takes index +1 and checks its undefined or not if undefined , saves the value
class HashTable{

    constructor(SIZE){
        this.size=SIZE;
        this.table=new Array(SIZE);
    }

    hashCode(key){
        return key%this.size;
    }

    set(key,value)
    {
        let index=this.hashCode(key);
        while(this.table[index]!=undefined){
           index=index+1%this.size;
        }
        this.table[index]={key,value};
      }

      get(key){
        let index=this.hashCode(key);
        while(this.table[index]!=undefined){
            if(this.table[index].key===key){
                 return this.table[index].value;
            }
            index=index+1%this.size;
        }
    }
    print()
    {
        console.log(this.table)
    }

}

const hashTable = new HashTable(10)
hashTable.set(1,"Apple")
hashTable.set(2,"Banana")
hashTable.set(3,"Guva")
hashTable.set(12,"Strawberry")
hashTable.set(13,"Orange")
hashTable.print()

console.log(hashTable.get(15));
console.log(hashTable.get(12));

