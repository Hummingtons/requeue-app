import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardAdmin from '../Pages/DashboardAdmin';
import Inventory from '../Pages/Inventory';
import InventoryItemAdd from '../Pages/InventoryItemAdd';
import InventoryItemEdit from '../Pages/InventoryItemEdit';
import InventoryItemView from '../Pages/InventoryItemView';
import Rooms from '../Pages/Rooms';
import RoomsAdd from '../Pages/RoomsAdd';
import RoomsEdit from '../Pages/RoomsEdit';
import RoomsView from '../Pages/RoomsView';
import Requests from '../Pages/Requests';
import RequestReserveItemAdd from '../Pages/RequestReserveItemAdd';
import RequestReserveItemView from '../Pages/RequestReserveItemView';
import RequestReserveItemEdit from '../Pages/RequestReserveItemEdit';
import RequestReserveRoomAdd from '../Pages/RequestReserveRoomAdd';
import RequestReserveRoomEdit from '../Pages/RequestReserveRoomEdit';
import RequestReserveRoomView from '../Pages/RequestReserveRoomView';
import WSchedules from '../Pages/WSchedules';

const SidebarRoute = () => {
    return (
      <div>
        <Sidebar>
            <Routes>
                <Route path='/dashboard_admin' element={<DashboardAdmin />}></Route>
                <Route path='/inventory' element={<Inventory />}></Route>
                <Route path='/inventory/item_add' element={<InventoryItemAdd />}></Route>
                <Route path='/inventory/item_edit/:id' element={<InventoryItemEdit />}></Route>
                <Route path='/inventory/item_view/:id' element={<InventoryItemView />}></Route>
                <Route path='/rooms' element={<Rooms />}></Route>
                <Route path='/rooms/room_add' element={<RoomsAdd />}></Route>
                <Route path='/rooms/room_edit/:id' element={<RoomsEdit />}></Route>
                <Route path='/rooms/room_view/:id' element={<RoomsView />}></Route>
                <Route path='/requests' element={<Requests />}></Route>
                <Route path='/requests/reserve_item_add' element={<RequestReserveItemAdd />}></Route>
                <Route path='/requests/reserve_item_view/:id' element={<RequestReserveItemView />}></Route>
                <Route path='/requests/reserve_item_edit/:id/:status_id' element={<RequestReserveItemEdit />}></Route>
                <Route path='/requests/reserve_room_add' element={<RequestReserveRoomAdd />}></Route>
                <Route path='/requests/reserve_room_view/:id' element={<RequestReserveRoomView />}></Route>
                <Route path='/requests/reserve_room_edit/:id/:status_id' element={<RequestReserveRoomEdit />}></Route>
                <Route path='/wschedules' element={<WSchedules />}></Route>
            </Routes>
        </Sidebar>
      </div>
    );
}

export default SidebarRoute