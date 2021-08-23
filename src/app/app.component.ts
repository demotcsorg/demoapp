import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sampleapp';
  var h1 = document.querySelector('h1');
  h1.innerHTML = '<a href="&#x3000;javascript:alert(1)">CLICKME</a>';
  var innerHTML = h1.innerHTML;
  console.log(innerHTML);
  h1.innerHTML = innerHTML;
}
