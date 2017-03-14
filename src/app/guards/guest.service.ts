import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../users/user.service';

@Injectable()
export class GuestService implements CanActivate {

  	constructor(private userService: UserService, private router: Router) { }

  	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
  		let isAuthenticated = this.userService.isAuthenticated();

  		if (isAuthenticated) {
  			this.router.navigate(['/home']);
  		} else {
  			return true;
  		}
  	}

}

