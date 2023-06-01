import { Component } from '@angular/core';
import { Sentence } from 'src/app/models/sentence.model';
import { SentenceService } from 'src/app/services/sentence.service';

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css']
})
export class SentencesComponent {
  sentences: Sentence[] = [];
  constructor(private sentenceService: SentenceService) { }

  ngOnInit(): void {
    this.sentenceService.getSentences().subscribe((data: Sentence[]) => {
      this.sentences = data;
    });
  }
}
