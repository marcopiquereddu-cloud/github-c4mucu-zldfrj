import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tx',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.css']
})
export class TxComponent implements OnInit {
  constructor() {}
  @Input() posts: Array<object>;
  @Input() titolo: string;
  @Input() testo: string;
  selezione: boolean = false;
  ngOnInit() {}
  mostraTesto() {
    if (this.selezione === false) {
      this.selezione = true;
    } else if (this.selezione === true) {
      this.selezione = false;
    }
  }
}
