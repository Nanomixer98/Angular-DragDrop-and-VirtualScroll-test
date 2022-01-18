import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(`https://restcountries.com/v2/all`)
      .subscribe(paises => this.paises = paises);
  }

  drop(event: CdkDragDrop<any>) {
    // console.log(event);
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex)
  }

}
