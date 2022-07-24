import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService  {
  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
    //   `<div>Capital: ${ data.name }</div>` +
    //   `<div>State: ${ data.state }</div>` +
    //   `<div>Population: ${ data.population }</div>`+
      `<div class="card" style="width: 18rem;">
      <img src="https://enterprise.press/wp-content/uploads/2020/09/agreement-1600px-1140x574.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${ data.name }</h5>
        <p class="card-text">${ data.state }</p>
        <a href="#" class="btn btn-primary">${ data.population }</a>
      </div>
    </div>`
  }
}