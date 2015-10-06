import {Component, EventEmitter, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';

@Component({
  selector: 'contacts-list-component',
  events: ['contactOpened'],
  properties: ['data']
})
@View({
  templateUrl: './components/contacts-list/contacts-list-component.html',
  directives: [CORE_DIRECTIVES]
})
export class ContactsListComponent {
  contactOpened = new EventEmitter();
  onContactOpened (contact: Contact) {
    this.contactOpened.next(contact)
  }
}
