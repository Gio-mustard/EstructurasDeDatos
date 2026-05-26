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
        
        if (value.length < node.value.length){
            node.leftChild = this.__handle_insert(node.leftChild,value);
            
        }
        else{
            node.rigthChild = this.__handle_insert(node.rigthChild,value);
           
        }
        return node;
    }
    
    this.__handle_browse = (option,action=(node,level)=>false,node=this.root,nodes=[],level=0) => {
        if (action(node, level)) return;

        if (option === 'preorden') nodes.push(node.value);
        if(node.leftChild!=null){
            this.__handle_browse(option,action,node.leftChild,nodes,level+1);
        }
        if (option === 'inorden') nodes.push(node.value);
        if (node.rigthChild!=null){
            this.__handle_browse(option,action,node.rigthChild,nodes,level+1)
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

        // if (value == this.root.value) return true;
        if (value < this.root.value) algorithm = 'inorden'
        if (value > this.root.value) algorithm = 'postorden'
        
        let node_founded = null;
        let level_founded = -1;
        let node_type;
        this.__handle_browse(algorithm,(node,level)=>{
            
            if (node.value == value){
                node_founded = node
                level_founded = level;
                if (node===this.root){
                    node_type = 'es raiz'
                }
                else if (node!==this.root&&node.leftChild===null && node.rigthChild === null){
                    node_type = 'es nodo intermedio'
                }
                else{
                    node_type = 'es hijo'
                }
                
                return true;
            }
        })
        
        if(node_founded){
            return {founded:true,type:node_type,level:level_founded};
        }
        else return {founded:false,type:node_type,level:level_founded};
    }

    this.delete = (node) => {

    }
    this.delete_all = (node) => {

    }
}



const nombres = [
    "maria",
    'mondongo',
    "pablo",
    "cesar",
    "julian",
    "Alisson",
    "Danae",
    "Alfredo",
    "Marcelo",
    "Leon",
    "Luis",
    "Ashley",
    "Ashley 2",
    "Redfield",
    "Ethan",
    "Rojuu",
    "Beef",
    "brandy",
    "Julissa"   
].map(n=>n.toLowerCase());

const arbolesNombres = new BinaryTree();

nombres.forEach(nombre=>arbolesNombres.insert(nombre))
console.log(arbolesNombres.preorden());
console.log('uwu')
console.log(arbolesNombres.search('mondongo'))