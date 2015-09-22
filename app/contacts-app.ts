import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'contacts-app',
})
@View({
  templateUrl: './contacts-app.html',
  styleUrls: ['./contacts-app.css']
})
class ContactsApp {}

bootstrap(ContactsApp);
