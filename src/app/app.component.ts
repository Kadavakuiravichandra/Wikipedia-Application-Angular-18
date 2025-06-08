import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WikipediaSearchApplicationComponent } from "./Projects/Wikipedia/wikipedia-search-application/wikipedia-search-application.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, WikipediaSearchApplicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'My First Angular App 🚀';
}
