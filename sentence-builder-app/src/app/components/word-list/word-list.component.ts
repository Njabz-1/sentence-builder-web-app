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
  selectedWord: Word = {} as Word;
  sentence: string = '';
  wordsByType: Word[] = [];
  allWords: Word[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.getWords().subscribe((data) =>{
        this.allWords = data;

        // Create a Set object to hold the unique word types.
        let wordTypeSet = new Set();

        // Loop through the words and add each word type to the Set.
        for (let word of this.allWords) {
          wordTypeSet.add(word.word_type);
        }

        // Convert the Set back to an array.
        this.wordTypes = Array.from(wordTypeSet) as string[];

        if (this.wordTypes.length > 0) {
          this.selectedWordType = this.wordTypes[0];
          this.getWordsByType(this.selectedWordType);
        }
      },
      error => {
        console.log('There was an error while fetching the words!', error);
      }
    );
  }

  getWordsByType(type: string): void {
    console.log('Selected word type: ' + type);
    this.wordsByType = this.allWords.filter(word => word.word_type === type);
    console.log('Words of selected type:', this.wordsByType);
  }

  addWordToSentence(word: Word): void {
    this.sentence += word.word + ' ';
    // Implement logic to add the selected word to the sentence
  }
}
