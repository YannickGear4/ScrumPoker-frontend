import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DynamicPageService {

  constructor(private router: Router) { }

    private pageCount = 0;
    
    createNewPage():string {
      this.pageCount++;
      const pageName = `room-page-${this.pageCount}`;
      return pageName;

    }

    navigateToPage(pageName: string): void {
      this.router.navigate([`/${pageName}`])
    }





  


}
