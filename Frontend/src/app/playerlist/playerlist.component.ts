import { Component, OnInit } from '@angular/core';

interface Playermodel{
  _id?:String,
  firstname?: String,
  lastname?: String,
  dob?: Date,
  position?:String,
  salary?:String,
  image?:any,
}

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
  data:Playermodel[]=[];
  constructor(){
    fetch(`http://localhost:2000/`,{
      method: 'GET',
      mode: 'cors',
  }).then(res=>{
      return res.json()
      
  }).then(data=>{
      this.data=data; 
      console.log(this.data);
      
  })
  .catch(err=>{
      console.log(err);  
  })
  
   }

  ngOnInit(): void {
    
  }

  HandleDelete(id:any){


fetch(`http://localhost:2000/${id}`,{
      method: 'DELETE',
      mode: 'cors',
  }).then(res=>{
      console.log(res); 
  })
  .catch(err=>{
      console.log(err);  
  })
  
  }

}
