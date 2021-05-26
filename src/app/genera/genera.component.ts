import { Component, Input, OnInit } from '@angular/core';
import { KeyasvalueService } from '../keyasvalue.service';

@Component({
  selector: 'app-genera',
  templateUrl: './genera.component.html',
  styleUrls: ['./genera.component.css']
})
export class GeneraComponent implements OnInit {
  constructor(private kav: KeyasvalueService) {}
  @Input() ref: string;
  @Input() posts: Array<object>;
  ngOnInit() {}
  generaChiave() {
    this.kav.createKEY('').subscribe(
      (y: any) => {
        this.ref = y;
        let K = this.ref.split('"');
        this.ref = K[1];
        document.getElementById('alert').innerHTML =
          '<br>La tua chiave è ' + this.ref;
      },
      err => console.error('Observer got an error: ' + err)
    );
  }
}
