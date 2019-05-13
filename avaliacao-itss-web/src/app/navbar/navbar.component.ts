import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculos/veiculo-form/model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hiddenBar = new Boolean();
  constructor() { }

  ngOnInit() {
    this.hiddenBar = true;
  }

}
