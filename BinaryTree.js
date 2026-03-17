function Node(value,leftChild = null,rigthChild = null){
    // The value placement its delegate
        // ^ check this
    this.value = value;
    this.leftChild = leftChild;
    this.rigthChild = rigthChild;
}

function BinaryTree(root_value=null){
    this.root = root_value !== null?new Node(root_value):null;
    this.__handle_insert = (node,value) => {
        if (node == null) {
            return new Node(value);
        }

        if (value < node.value){
            node.leftChild = this.__handle_insert(node.leftChild,value);
            
        }
        else{
            node.rigthChild = this.__handle_insert(node.rigthChild,value);
           
        }
        return node;
    }
    
    this.__handle_browse = (option,action=(node)=>false,node=this.root,nodes=[]) => {
        if (action(node)) return;

        if (option === 'preorden') nodes.push(node.value);
        if(node.leftChild!=null){
            this.__handle_browse(option,action,node.leftChild,nodes);
        }
        if (option === 'inorden') nodes.push(node.value);
        if (node.rigthChild!=null){
            this.__handle_browse(option,action,node.rigthChild,nodes)
        }
        if (option === 'postorden') nodes.push(node.value);
        

        return nodes;
    }

    // main methods
    this.insert = (value)=> this.root = this.__handle_insert(this.root,value);
    this.preorden = ()=>this.__handle_browse('preorden');
    this.inorden = () => this.__handle_browse('inorden');
    this.postorden = () => this.__handle_browse('postorden');

    this.search = (value) => {
        let algorithm='preorden'
        // Necesario ?
        if (value == this.root.value) return this.root;
        if (value < this.root.value) algorithm = 'inorden'
        if (value > this.root.value) algorithm = 'postorden'
        
        let node_founded = null;
        this.__handle_browse(algorithm,(node)=>{
            if (node.value == value){
                node_founded = node
                return true;
            }
        })
        
        return node_founded
    }
}



(function main(){
    const tree = new BinaryTree();
    
    [1,.5,.2,2,3,0,.6,4,5,6,7,89,97,45].forEach((value)=>tree.insert(value));
    
    console.log('-----pre orden-----\n',tree.preorden());
    console.log(tree.inorden());
    console.log(tree.postorden());
    console.log('--------------------------')
    console.log(tree.search(3))
})()
