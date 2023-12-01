import { defineStore } from 'pinia'

export const useCart = defineStore('cart',{
    state: () =>({
        cart: [],
    }),
    getters:{
      cartTotal(){
          return this.cart.reduce((total,item)=>{
              return total + (item.price * item.quantity);
          },0)
      }
    },
    actions:{
        async getCarts(){

        }
    }
});
