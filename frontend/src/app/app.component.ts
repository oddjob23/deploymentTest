import { WebService } from './_services/Web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private web: WebService) {}

  ngOnInit() {
    this.web.test().subscribe((result) => {
      console.log(result);
    });
    console.log('app started');
  }
}
