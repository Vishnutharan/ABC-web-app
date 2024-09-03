import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/UserStore.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  users: User[] = [];
  newUser: User = {
    userId: 0,
    username: '',
    passwordHash: '',
    email: '',
    userType: ''
  };

  constructor(private userService: UserStoreService) { }

  ngOnInit(): void {
    // Optionally, load initial data or perform other setup tasks
  }

  createUser() {
    this.userService.createUser(this.newUser).subscribe(
      () => {
        alert('User created successfully!');
        this.newUser = { userId: 0, username: '', passwordHash: '', email: '', userType: '' };
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

  updateUser() {
    if (this.newUser.userId) {
      this.userService.updateUser(this.newUser.userId, this.newUser).subscribe(
        () => {
          alert('User updated successfully!');
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }

  deleteUser() {
    if (this.newUser.userId) {
      this.userService.deleteUser(this.newUser.userId).subscribe(
        () => {
          alert('User deleted successfully!');
          this.newUser = { userId: 0, username: '', passwordHash: '', email: '', userType: '' };
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }

  getUser() {
    if (this.newUser.userId) {
      this.userService.getUser(this.newUser.userId).subscribe(
        (user: User) => {
          this.newUser = user;
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    }
  }

  loadUserData() {
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error loading user data:', error);
      }
    );
  }
}
