import BaiNiu from './bainiu'
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let bainiu1 = new BaiNiu(100,100,1)
let bainiu2 = new BaiNiu(100,200,1)
let bainiu3 = new BaiNiu(200,200,1)
let bainiu4 = new BaiNiu(200,100,1)
setInterval(()=>{
    bainiu1.rush(ctx, bainiu2)
    bainiu2.rush(ctx, bainiu3)
    bainiu3.rush(ctx, bainiu4)
    bainiu4.rush(ctx, bainiu1)
},30)