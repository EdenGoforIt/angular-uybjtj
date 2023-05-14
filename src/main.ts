import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './app.compnent.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
