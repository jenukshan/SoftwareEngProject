import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {

  state = {
    orders:[]
  };
   

  

  constructor(props) {
    super(props);

    const items = firebase.database().ref('Requests');
    items.on("value", datasnap=>{
     this.state.orders.push(datasnap.val())
     // console.log(this.state.requests)
    })



      //this.setState({orders:orderrequests})
     //var order1 = [{name:'sdsd', total:'sdsd', address:'sdsd', foods:'sd'}];
     //this.state.orders.push(order1)

      //console.log(orderrequests.length)
      
      this.createMenuItems = this.createMenuItems.bind(this);
   
  }

     

  // onCollectionUpdate = (querySnapshot) => {
  //   const boards = [];
  //   querySnapshot.forEach((doc) => {
  //     const { title, description, author } = doc.data();
  //     boards.push({
  //       key: doc.id,
  //       doc, // DocumentSnapshot
  //       title,
  //       description,
  //       author,
  //     });
  //   });
  //   this.setState({
  //     boards
  //  });
  // }

  createMenuItems ()
  {

    var orderrequests=[];
     firebase.database().ref("Requests").on("value", function(snap)
     { 
       snap.forEach(
         (childSnapshot)=>
       {
           let data = childSnapshot.val(); 
 
           let order = {name:data.name, total:data.total, address:data.address, foods:data.foods};
           orderrequests.push(order);

           //this.state.orders.push(order);
       })
  
       }
     )

  
  }


  componentDidMount() {
     //this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
     
     this.createMenuItems();
     //this.setOrders();
   
  }

setOrders()
{

  let order = {'name':"data.name", 'total':"data.total", 'address':"data.address", 'foods':"data.foods"};
  this.state.orders.push(order)

  console.log(this.state.orders);

  this.state.orders.map((item,i) =>{
      console.log(item.foods)
  })

}


  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Order Requests
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create" class="btn btn-primary">Add Menu Item</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Items Ordered</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {this.state.orders.map((item,i) =>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.foods}</td>
                    <td>{item.total}</td>
                    <td>
                    <button type="button" class="btn btn-success">Approve</button> &nbsp; &nbsp;
                    <button type="button" class="btn btn-danger">Cancel</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
