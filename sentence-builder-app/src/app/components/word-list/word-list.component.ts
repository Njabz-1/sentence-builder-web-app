import { Component } from '@angular/core';
import { WordService } from 'src/app/services/word.service';
import { Word } from 'src/app/models/word.model';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent {
  words: Word[] = [];
  word: string = '';
  wordTypes: string[] = [] as string[];
  selectedWordType: string = '';
  sentence: string = '';

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
        for (let word of this.words) {
          wordTypeSet.add(word.word_type);
        }

        // Convert the Set back to an array.
        this.wordTypes = Array.from(wordTypeSet) as string[];
      },
      error: error => {
        console.log('There was an error while fetching the words!', error);
      }
    });
  }

  getWordsByType(type: string): void {
    // Implement logic to filter words based on selected word type
    // You can update the 'words' array to contain only the words of the selected type
    // Example: this.words = this.words.filter(word => word.word_type === type);
  }

  addWordToSentence(word: string): void {
    this.sentence += word + ' ';
    // Implement logic to add the selected word to the sentence
  }
}
