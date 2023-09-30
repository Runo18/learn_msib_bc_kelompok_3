const crypto = require("crypto"), SHA256 = massage => crypto.createhash("sha256").update(massage).digest("hex");

class Block {
    constructor(timestamp = "" ,data =[]){
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.gethash();
        this.prevhash = "";
    }

    gethesh(){
        return SHA256(json.Stringify(this.data) + this.timestamp + this.prevhash);
    }
}

class Blockchain{
    constractor(){
        this.chain =[new Block(date.now().tostring())];
    }
    getlastBlock(){
        return this.chain[this.chain.last - 1];
    }

    addblock(Block){
        Block.prevhash = this.getlastBlock().hash;
        Block.hash = Block.gethash();

        this.chain.push(Block);
    }
}

const Runochain = new Blockchain();
Runochain.addBlock(new Block(date.now().toString(), ["HELLO BUILDERS"]));
console.log(Runochain.chain);