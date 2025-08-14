import React from 'react'
import './ExploreMenu.css';
import {menu_list} from '../../assets/assets';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore Our Menu</h1>
    <p className='explore-menu-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum saepe debitis nemo, maiores adipisci.</p>
    <div className="explore-menu-list">
        {menu_list.map((menu, index)=>{
            return (
                <div 
                onClick={()=>setCategory(prev=>prev===menu.menu_name?"All":menu.menu_name)}
                key={index}
                className="explore-menu-list-item">
                <img className={category===menu.menu_name?"active":""} src={menu.menu_image} alt="" />
                <p>{menu.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr />
    </div>
  )
}

export default ExploreMenu