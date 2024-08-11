// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoleGuardService implements CanActivate {

//   constructor(public auth: AuthService, public router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot): boolean {
//     const expectedRole = route.data['expectedRole'];
//     const currentRole = localStorage.getItem('role'); // Adjust this as per your implementation

//     if (!this.auth.isAuthenticated() || currentRole !== expectedRole) {
//       this.router.navigate(['login']);
//       return false;
//     }
//     return true;
//   }
// }
