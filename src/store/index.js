//引入vue与vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建一个store
let store=new Vuex.Store({
	state:{
		//存放数据
		carPanelData:[],
		maxoff:false
	},
	//统计计算
	getters:{
		totleCount(state){
			let count=0;
			state.carPanelData.forEach(goods=>{
				count+=goods.count
			})
			return count
		},
		totlePrice(state){
			let price=0;
			state.carPanelData.forEach(goods=>{
				price+=goods.count*goods.price
			})
			return price
		}
	},
	mutations:{
		addCarPanelData(state,data){
			//是否添加过购物车
			let boff=true;
			
			state.carPanelData.forEach(goods=>{
				if(goods.sku_id===data.sku_id){
					goods.count++;
					if(goods.count>goods.limit_num){
					goods.count--;
					state.maxoff=true;
				}
					boff=false;
				}
				
			})
			if(boff){
				let goodsData=data;
				Vue.set(goodsData,'count',1);
				state.carPanelData.push(goodsData);
			}
			
			console.log(state.carPanelData)
		},
		delCarpanelData(state,id){
			state.carPanelData.forEach((goods,index)=>{
				if(goods.sku_id==id){
					state.carPanelData.splice(index,1)
					return
				}
			})
		},
		closePrompt(state){
			state.maxoff=false;
		}
	}
})

//暴露store
export default store
