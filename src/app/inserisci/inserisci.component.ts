import { Component, Input, OnInit } from '@angular/core';
import { KeyasvalueService } from '../keyasvalue.service';

@Component({
  selector: 'app-inserisci',
  templateUrl: './inserisci.component.html',
  styleUrls: ['./inserisci.component.css']
})
export class InserisciComponent implements OnInit {
  constructor(private kav: KeyasvalueService) {}
  @Input() ref: string;
  @Input() posts: Array<object>;
  importante: boolean;
  ngOnInit() {}
  inserisciPost() {
    var titolo: string = document.getElementById('titolo').value;
    var testo: string = document.getElementById('testo').value;
    this.importante = document.getElementById('importante').checked;
    if (titolo != '' && testo != '') {
      this.posts.push({
        titolo: titolo,
        testo: testo,
        importante: this.importante
      });
      this.kav.pushData(JSON.stringify(this.posts), this.ref).subscribe();
    }
  }
}
