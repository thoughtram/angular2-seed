import {Component, View, bootstrap} from 'angular2/angular2';
import {ContactsListComponent} from './components/contacts-list/contacts-list-component'
import {ContactsService} from './common/contacts-service';

@Component({
  selector: 'contacts-app',
})
@View({
  templateUrl: './contacts-app.html',
  directives: [ContactsListComponent]
})
class ContactsApp {}

bootstrap(ContactsApp, [ContactsService]);
