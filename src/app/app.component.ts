import { HttpHeaders } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { KeyasvalueService } from './keyasvalue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private kav: KeyasvalueService) {}
  title = 'Blocco note';
  ref: string;
  posts: Array<object> = [];
  ngOnInit() {
    var p = prompt(
      'Inserire la chiave utilizzata o annulla per ottenere una nuova chiave'
    );
    if (p == null || p == '') {
      document.getElementById('alert').innerHTML =
        '<br>Non è stata inserita la chiave<br>I dati non saranno memorizzati';
    } else {
      this.ref = p;
      this.kav.getData(this.ref).subscribe(
        (y: any) => {
          if (y === '{}') {
            this.posts = [];
          } else {
            this.posts = JSON.parse(y);
          }
        },
        err => console.error('Observer got an error: ' + err)
      );
      document.getElementById('alert').innerHTML =
        '<br>La tua chiave è: ' + this.ref + "<br>E' davvero una chiave?";
    }
  }
}
