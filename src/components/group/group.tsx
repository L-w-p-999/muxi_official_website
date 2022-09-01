import  { useState } from 'react'
import './groupStyle.scss'
import { CSSTransition } from "react-transition-group"
import GroupItem from './group-item';
import GroupController from './group-controller';
import Flower from '../flower/flower';



function Group() {

	const [store, setStore] = useState(0)
	return (
		<div className="wrapper">
			<Flower />
			{/* 之前GroupItem是被包裹在一个className='products-intro'组件中的，该组件的作用是为文字的切换增加淡出淡入效果 */}
				<div className="products-intro">
				<CSSTransition
						in={true}//为true进入显示组件（主要通过in属性来控制组件状态）
						classNames="card"//设置类名的前缀
						timeout={1000}//设置过渡动画事件
						unmountOnExit={true}//消失动画结束后 + display:none
					>
						<GroupItem data={store} />
					</CSSTransition>
				</div>
			<GroupController select={setStore} current={store} />
		</div>
	)
}

export default Group