import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Property } from '../../models/property';
import { catchError, EMPTY, filter, Observable, of } from 'rxjs';
import { HousingService } from '../../services/housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsResolverService implements Resolve<Property> {

constructor(
  private housingService: HousingService,
  private router : Router
) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property> | Property {
  const propId = route.params['id'];
  return this.housingService.getProperty(+propId).pipe(
    filter((property): property is Property => !!property),
    catchError(() => {
      this.router.navigate(['/']);
      return EMPTY;
    })
  )
  
}

}
