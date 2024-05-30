import { Component, OnInit } from '@angular/core';
import { Users } from '../Models/users.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css']
})
export class AdminDashbordComponent implements OnInit {
  accessToken!: string;
  users:any;
  imageSrc:string

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.accessToken = localStorage.getItem('accessToken') || '';
    this.getAllUsers(this.accessToken);
  }

  getAllUsers(myToken: string): void {
    this.userService.getAllUsers(myToken).subscribe(data => {
      this.users = data;
     
    });
  }
}
