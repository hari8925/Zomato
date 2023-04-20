import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  

  
  trophy={
    
    csk:"won 4 times",
    mi:'won 5 times',
    rcb:'won sala cup namdhe'
  }
  constructor(private router:Router){
    
  }
}
