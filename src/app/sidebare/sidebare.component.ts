import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebare',
  templateUrl: './sidebare.component.html',
  styleUrls: ['./sidebare.component.css']
})
export class SidebareComponent {
  constructor(private router: Router) {} // Injection du service Router

  logOut(){
    localStorage.removeItem("userAuth");
    localStorage.removeItem("accessToken")
    this.router.navigate(['/login'])
}

}
