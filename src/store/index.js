//引入vue与vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建一个store
let store=new Vuex.Store({
	state:{
		//存放数据
		carPanelData:[],
		maxoff:false,
		//是否显示购物车
		carShow:false,
		//创建小球
		ball:{
			show:false,//显示
			el:null,//点击哪一个
			img:''
		}
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
					boff=false;
					return
				}
					boff=false
					state.carShow=true
					state.ball.show=true
					state.ball.img=data.ali_image
					state.ball.el=event.path[0]
					console.log(event)
				}
				
			})
			if(boff){
				state.carShow=true
				let goodsData=data;
				Vue.set(goodsData,'count',1);
				state.carPanelData.push(goodsData);
				state.carShow=true
				state.ball.show=true
				state.ball.img=data.ali_image
				state.ball.el=event.path[0]
				console.log(event)
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
		},
		//显示购物车
		showCar(state){
			state.carShow=true
		},
		//隐藏购物车
		hideCar(state){
			setTimeout(() => {
				state.carShow=false
			},500)
			
		}
	}
})

//暴露store
export default store
