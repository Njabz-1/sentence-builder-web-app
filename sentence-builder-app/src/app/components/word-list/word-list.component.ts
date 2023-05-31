import { Component } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent {
  words: string[] = [];
  wordTypes: string[] = [];

  // insert random list of 5 nound
  Nouns = ['cat', 'dog', 'bird', 'fish', 'mouse'];
  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.getWords().subscribe({
      next: data => {
        this.words = data;
  
        // Create a Set object to hold the unique word types.
        let wordTypeSet = new Set();
  
        // Loop through the words and add each word type to the Set.
        // for (let word of this.words) {
        //   wordTypeSet.add(word.word_type);
        // }
  
        // // Convert the Set back to an array.
        // this.wordTypes = Array.from(wordTypeSet);
      },
      error: error => {
        console.log('There was an error while fetching the words!', error);
      }
    });
  }
}
