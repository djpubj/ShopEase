import { atom } from "recoil";


export const productDataState1=atom({
    key:"productlist1",
    default:[]
})

export const productDataState2=atom({
    key:"productlist2",
    default:[]
})

export const orderInCartState=atom({
    key:"cartproduct",
    default:[]
})

export const totalAmountState = atom({
  key: 'totalAmountState',
  default: 0,
});

export const currentProduct = atom({
  key: 'currentproduct',
  default: 0,
});

