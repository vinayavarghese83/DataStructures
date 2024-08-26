class HashTable{
    constructor(MAX=10){
        this.table=new Array(MAX);
        this.size=MAX;
    }
_hash(key){
     let hash=0;
     for(let i=0;i<key.length;i++){
        hash+=key.charCodeAt(i);
     }
     return hash % this.size;
 }
 //set key value pair
 set(key,value){
    const index=this._hash(key);
    if(!this.table[index]){
      this.table[index]=[];
    }
   this.table[index].push([key,value]);
 }
  get(key){
   const index=this._hash(key);
   if(!this.table[index]) return undefined;
   for(let i=0;i<this.table[index].length;i++){
     if(this.table[index][i][0] === key){
         return this.table[index][i][1];
     }
   }
   return undefined;
 }
 remove(key){
    const index = this._hash(key);
    if(!this.table[index]) return ;
    for(let i=0;i<this.table[index].length;i++){
        if(this.table[index][i][0] === key){
             this.table[index].splice(i,1);
             return;
        }
    }
 }
 print(){
    for(let i=0;i<this.size;i++){
        if(this.table[i]){
            console.log(i,this.table[i]);
        }
    }
 }
}
const hashTable = new HashTable();
hashTable.set('name1','Riya Vinayan');
hashTable.set('age1',32);
hashTable.set('name','Veena Vinayan');
hashTable.set('age',35);
hashTable.set('name2','Rema Vinayan');
hashTable.set('age2',61);
hashTable.print();
console.log(hashTable.get('name'));
hashTable.remove('age');