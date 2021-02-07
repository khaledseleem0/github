export  const  addtocart =(productsInfo,amount)=>{
    return{
        type:"ADD_TO_CART",
        productsInfo,
        amount
    }
}
export  const  removefromcart =(index)=>{
    return{
        type:"REMOVE_FROM_CART",
        index
    };
};
    export  const  reset =()=>{
        return{
            type:"RESET"
        };
}