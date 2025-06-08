import { Component, inject, signal } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { State } from '../../../Model/state.model';
import { HttpClient } from '@angular/common/http';
import { Wikipedia, WikipediaResponse } from '../../../Model/wikipedia.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wikipedia-search-application',
  standalone: true,
  imports: [MatProgressSpinner, MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './wikipedia-search-application.component.html',
  styleUrl: './wikipedia-search-application.component.css',
})
export class WikipediaSearchApplicationComponent {
  urlState = signal<State>(State.Ideal);
  userText = signal<string>('');
  results = signal<Wikipedia[]>([]);
  errMsg = signal('');

  http = inject(HttpClient);

  onChangeUserText(event: Event): void {
    this.userText.set((event.target as HTMLInputElement).value);
  }

  onSearch(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      const query = this.userText().trim();
      if (!query) return;
      this.urlState.set(State.Pending);
      this.results.set([]);
      const url = `https://apis.ccbp.in/wiki-search?search=${query}`;
      this.http.get<WikipediaResponse>(url).subscribe({
        next: (res) => {
          this.results.set(res.search_results);
          this.urlState.set(State.Success);
          this.userText.set('');
          console.log(res.search_results);
        },
        error: (err) => {
          this.errMsg.set(`${err.message} Api call fail`);
          this.urlState.set(State.Failure);
          this.userText.set('');
        },
        complete: () => {
          // console.log(this.results());
          this.urlState.set(State.Success);
        },
      });
    }
  }
}
