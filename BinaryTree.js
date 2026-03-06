function Node(value,leftChild = null,rigthChild = null){
    // The value placement its delegate
        // ^ check this
    this.value = value;
    this.leftChild = leftChild;
    this.rigthChild = rigthChild;
}

function BinaryTree(){
    this.root = null;
    this.__insert = (node,value) => {
        if (node == null) {
            return new Node(value);
        }

        if (value < node.value){
            node.leftChild = this.__insert(node.leftChild,value);
            
        }
        else{
            node.rigthChild = this.__insert(node.rigthChild,value);
           
        }
        return node;
    }
    

    this.__handle_browse = (option,node=this.root,nodes=[]) => {
        if (option === 'preorden') nodes.push(node.value);
        if(node.leftChild!=null){
            this.__handle_browse(option,node.leftChild,nodes);
        }
        if (option === 'inorden') nodes.push(node.value);
        if (node.rigthChild!=null){
            this.__handle_browse(option,node.rigthChild,nodes)
        }
        if (option === 'postorden') nodes.push(node.value);
        
        return nodes;
    }

    // main methods
    this.insert = (value)=> this.root = this.__insert(this.root,value);
    this.preorden = ()=>this.__handle_browse('preorden');
    this.inorden = () => this.__handle_browse('inorden');
    this.postorden = () => this.__handle_browse('postorden');
}


(function main(){
    const tree = new BinaryTree();
    
    [1,.5,.2,2,3,0,.6].forEach((value)=>tree.insert(value));
    
    console.log(tree.preorden());
    console.log(tree.inorden());
    console.log(tree.postorden());
})()
