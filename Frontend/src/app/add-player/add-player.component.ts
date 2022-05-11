import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  
  file:any=null;
  formData:any=null;
  constructor() { }
  ngOnInit(): void {
  }
  HandleChange(event:any){
    this.file=event.target.files[0];
}
  handleSubmit(value:any)
    {
 console.log(value);
 this.formData=new FormData();
 this.formData.append('data',JSON.stringify(value));
 this.formData.append('image',this.file,this.file.name);
 fetch(`http://localhost:2000/`,{
  method:'POST',
  mode: 'cors',
  body:JSON.stringify(value)
 })
 .then(res=>{
   return res.json();
 })
 .then(data=>{
   console.log(data);
 })
 .catch(error => {
  console.error('Error:', error);
});

}
}
