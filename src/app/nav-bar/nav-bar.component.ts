import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  scrollpol=false;
ngOnInit(): void {
    window.addEventListener('scroll',()=>{

  if (window.scrollY>30) {
    this.scrollpol=true;
  }
  else{
    this.scrollpol=false;

  }
    })
}
}
