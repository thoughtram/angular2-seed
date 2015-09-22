import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';

@Component({
  selector: 'contacts-list-component',
})
@View({
  templateUrl: './components/contacts-list/contacts-list-component.html',
  directives: [CORE_DIRECTIVES]
})
export class ContactsListComponent {
  contacts: Array<Contact> = [
    {
      firstname: 'Pascal',
      lastname: 'Precht',
      street: 'thoughtram road 1',
      zip: '30165',
      city: 'Hannover'
    },
    {
      firstname: 'Christoph',
      lastname: 'Burgdorf',
      street: 'thoughtram road 2',
      zip: '30629',
      city: 'Hannover'
    }
  ]
}
