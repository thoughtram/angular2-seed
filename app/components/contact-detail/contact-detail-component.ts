import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
  selector: 'contact-detail-component'
})
@View({
  templateUrl: './components/contact-detail/contact-detail-component.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class ContactDetailComponent {
  contact: Contact;
  constructor (contactsService: ContactsService, routeParams: RouteParams) {
    this.contact = contactsService.getContact(routeParams.get('id'));
  }
}
