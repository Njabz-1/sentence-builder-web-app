import { Component } from '@angular/core';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent {

  // insert random list of 5 nound
  Nouns = ['cat', 'dog', 'bird', 'fish', 'mouse'];
  constructor() { }

  ngOnInit(): void {
  }
}
