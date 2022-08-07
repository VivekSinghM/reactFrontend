import React, { useContext } from 'react'
import { MenuCard } from '../../context/MenuProvider';
import { Order } from '../../context/OrderProvide';
import Logo from '../../static/Logo'
import ItemList from './itemList/ItemList';
import css from './Menu.module.css'

const Menu = prop =>{
    const {menu} = useContext(MenuCard);
    const {sendOrder} = useContext(Order)
    const orderItems={}
    const addOrderItems=key=>{orderItems[key]=1; console.log(orderItems);}
    const isAdded= key=> {console.log(key); return orderItems[key] !== undefined};

    const menuItems = Object.entries(menu).map(([key,val]) => {
        return <ItemList key={key} val={val} qty={orderItems[key]} addOrderItems={()=>addOrderItems(key)} isAdded={()=>isAdded(key)} cssIconCenter={css.iconCenter}/>
    }
        );

    // useEffect(_=>{
    // },[menu]);

    return(
        <>
        <nav className="navbar navbar-dark bg-dark text-light justify-content-between fixed-bottom">
            <a className="navbar-brand">Aloo Kachaloo</a> 
            <div className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={()=>sendOrder(orderItems)}>Order</button>
            </div>
        </nav>
        <div className='container'>
            <div className='row text-center'>
                <div className={'col border '+css.menu}>
                    <div className='text-light' style={{paddingTop: '15%'}}>
                        <br/>
                        <div className='row d-flex justify-content-center' style={{height:'250px'}}>
                            <Logo/>
                        </div>
                        <h1 className ={'heading '+css.heading} style={{paddingBottom: '15%'}}>Aloo Kachaloo</h1>
                    </div>
                    <table className='table table-light text-left'>
                        <thead className='thead font-weight-bold text-light' style={{background:"#222222",}}>
                            <tr>
                            <td  className='pl-3'>Item</td>
                            <td>price</td>
                            <td></td>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {menuItems}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}
export default Menu;