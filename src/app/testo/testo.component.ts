import { Component, Input, OnInit } from '@angular/core';
import { KeyasvalueService } from '../keyasvalue.service';

@Component({
  selector: 'app-testo',
  templateUrl: './testo.component.html',
  styleUrls: ['./testo.component.css']
})
export class TestoComponent implements OnInit {
  constructor(private kav: KeyasvalueService) {}
  @Input() posts: Array<object>;
  @Input() ref: string;
  h: boolean;
  ngOnInit() {}
  mostraImportanti() {
    if (document.getElementById('soloImportanti').checked !== true) {
      this.h = false;
    } else {
      this.h = true;
    }
  }
  eliminaPost(ref: any) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i] === ref) {
        this.posts.splice(i, 1);
      }
    }
    this.kav.pushData(JSON.stringify(this.posts), this.ref).subscribe();
  }
}
