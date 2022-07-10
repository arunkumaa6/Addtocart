const package=[
    {
        id:5,
        name:'song',
        description:'addicted',
},
{
        id:6,
        name:'art',
        description:'addicted',
},
{
        id:7,
        name:'natura',
        description:'addicted',
},
{
        id:8,
        name:'haven',
        description:'addicted',
}
];


var addCartItems=[];

//click function id(5)
function addCartFun5(prodId){
    console.log('package',package,prodId);
    var checkItem=addCartItems.find(({id})=> id==prodId);
    console.log(checkItem);
        if(checkItem){
            let sample=addCartItems.map((pack)=>{
                if(pack.id===prodId){
                    return{
                        ...pack,
                        qty:pack.qty +=1,
                    };
                }
                else{
                    return{
                        pack
                    }
                }
            });
            addCartItems=sample;
        }   
        else{
            let dataPack=package.find(({id})=> id===prodId);
            addCartItems.push({...dataPack, qty:1});
        }
}

// click function id(6)
function addCartFun6(prodId){
    console.log('package',package,prodId);
    var checkItem1=addCartItems.find(({id})=> id==prodId);
        if(checkItem1){
            let sample1=addCartItems.map((packval)=>{
                if(packval.id===prodId){
                    return{
                        ...packval,
                        qty:packval.qty +=1,
                    };
                }
                else{
                    return{
                        packval
                    }
                }
            });
            addCartItems=sample1;
        }   
        else{
            let dataPack=package.find(({id})=> id===prodId);
            addCartItems.push({...dataPack, qty:1});
        }
}

//add to cart
function cartFun(){
    console.log(addCartItems);
}