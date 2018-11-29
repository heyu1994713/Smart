<template>
	<div class="item">
			<div>
					<div class="item-img"><img :alt="item.name_title" :src="item.sku_info[itemIndex].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
							</div>
								<h6>{{item.name}}</h6>
								<h3 >{{item.name_title}}</h3>
								<div class="params-colors">
									<ul class="colors-list">
										<li v-for="(item,index) in item.sku_info ">
											<a href="javascript:;" :title="item.spec_json.show_name" @click="tab(index)">
												<img :src="'http://img01.smartisanos.cn/'+item.spec_json.image+'20X20.jpg'"></a></li>
									</ul>
								</div>
								<div class="item-btns clearfix">
									<span class="item-gray-btn"><a href="javascript:;" target="_blank">查看详情</a> </span>
									<span class="item-blue-btn" @click="addCarPanelData(item.sku_info[itemIndex])">加入购物车 </span>
								</div>
								<div class="item-price clearfix">
									<i>¥</i><span>199.00</span>
								</div>
							<div class="discount-icon">false</div>
						<div class="item-cover">
									<a href="javascript:;" target="_blank"></a>
					</div>
			</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				itemIndex:0
			}
			
		},
		//接收参数
		props : {
			item : Object
		},
		//点击方法
		methods : {
			tab(index){
				this.itemIndex=index;
				console.log(index);
			},
			//调用添加购物车的方法
			addCarPanelData(data){
				this.$store.commit('addCarPanelData',data);
			}
		}
	}
</script>

<style>
</style>