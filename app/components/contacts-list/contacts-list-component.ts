import {
  Component,
  EventEmitter,
  View,
  CORE_DIRECTIVES,
  Input,
  Output
} from 'angular2/angular2';
import {Contact} from '../../models/contact';

@Component({selector: 'contacts-list-component'})
@View({
  templateUrl: './components/contacts-list/contacts-list-component.html',
  directives: [CORE_DIRECTIVES]
})
export class ContactsListComponent {
  @Input() data:Contact[];
  @Output() contactOpened = new EventEmitter();

  onContactOpened (contact: Contact) {
    this.contactOpened.next(contact)
  }
}
