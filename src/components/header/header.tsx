import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

interface nav_header{
    name:string;
    style:string;
    route:string;
}

const Header:React.FC = ()=> {
    const origin_header:nav_header[]=[{
        name: '组别介绍',
        style: 'header-primary',
        route: '/intro'
    },
    {
        name: '产品展示',
        style: 'header-primary',
        route: '/product'
    },{
        name: '木犀团队',
        style: 'header-center',
        route:'/'
    },{
        name: '成员介绍',
        style: 'header-primary',
        route: '/member'
    },{
        name: '加入我们',
        style: 'header-primary',
        route: '/join'
    }];
    
    const [header,setHeader]=useState(origin_header)
    const [order,setOrder]=useState(0)
    useEffect(()=>{
        "use strict"
        var route = window.location.pathname;
        var active = header.find(item =>{
			return item.route === route;
		});
        if(!active){
            return
        }
        //对象可能为“未定义”报错————这里取消了严格模式
        if(active.style === 'header-primary'){
			active.style += ' header-active'
		}
    },[])

    const handleClick = (i: React.SetStateAction<number>)=>{
        const order = i
        setOrder(order)
        console.log(i);
        
        console.log(order);
        
    }

    return (
        <header>
            <div className="header-wrap">
                { header.map( (item ,i)=> (
                    <div className={item.style} key={i}><Link className ={`${i===2?"header-word team-name":"header-word"}` } to={item.route === "/"?"":item.route}>{item.name}</Link></div>
                )) }
            </div>
        </header>
    );
}

export default Header;