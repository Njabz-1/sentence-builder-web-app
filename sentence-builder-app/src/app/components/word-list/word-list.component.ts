import { Component } from '@angular/core';
import { WordService } from 'src/app/services/word.service';
import { Word } from 'src/app/models/word.model';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent {
  word: string = '';
  wordTypes: string[] = [] as string[];
  selectedWordType: string = '';
  sentence: string = '';
  wordsByType: Word[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.getWords().subscribe({
      next: data => {
        this.wordsByType = data;

        // Create a Set object to hold the unique word types.
        let wordTypeSet = new Set();

        // Loop through the words and add each word type to the Set.
        for (let word of this.wordsByType) {
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
    // Filter words by selectedWordType
    this.wordsByType = this.wordsByType.filter(word => word.word_type === type);
  }

  addWordToSentence(word: string): void {
    this.sentence += word + ' ';
    // Implement logic to add the selected word to the sentence
  }
}
