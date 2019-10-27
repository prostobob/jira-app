import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rx-jira';
  items$: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items$ = db.collection('users').valueChanges();
  }
}

