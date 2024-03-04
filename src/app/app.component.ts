import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataSource } from 'typeorm';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-typeorm';

  constructor() {

    const AppDataSource = new DataSource({
      type: 'postgres',
      host: 'host.docker.internal',
      port: 15432,
      username: 'postgres',
      password: '<password>',
      database: 'exmar',
      synchronize: true,
      logging: true,
      entities: [],
      subscribers: [],
      migrations: [],
    });
    console.log('AppDataSource', AppDataSource);

  }
}
