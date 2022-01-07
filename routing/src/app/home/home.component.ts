import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  home(){
  this.router.navigate(['/home']);
  }
  about(){
    this.router.navigate(['/about']);
  }
  products(){
    this.router.navigate(['/products']);
  }
  contacts(){
    this.router.navigate(['/contacts']);
  }

  terms(){
    this.router.navigate(['/terms']);
  }


}
