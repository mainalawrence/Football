import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(value:any){
    fetch(`http://localhost:2000/${value._id}`,{
      method: 'PUT',
      mode: 'cors',
      body:JSON.stringify(value)
  }).then(res=>{
      console.log(res); 
  })
  .catch(err=>{
      console.log(err);  
  })
    
  }
}
