import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import Inventory from '../Pages/Inventory';
import InventoryItemAdd from '../Pages/InventoryItemAdd';
import InventoryItemEdit from '../Pages/InventoryItemEdit';
import InventoryItemView from '../Pages/InventoryItemView';

const SidebarRoute = () => {
    return (
      <div>
        <Sidebar>
            <Routes>
                <Route path='/inventory' element={<Inventory />}></Route>
                <Route path='/inventory/item_add' element={<InventoryItemAdd />}></Route>
                <Route path='/inventory/item_edit/:id' element={<InventoryItemEdit />}></Route>
                <Route path='/inventory/item_view/:id' element={<InventoryItemView />}></Route>
            </Routes>
        </Sidebar>
      </div>
    );
}

export default SidebarRoute