import {Component, View, bootstrap} from 'angular2/angular2';
import {ContactsListStateComponent} from './components/contacts-list-state/contacts-list-state-component'
import {ContactDetailStateComponent} from './components/contact-detail-state/contact-detail-state-component'

import {ContactsService} from './common/contacts-service';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

@Component({
  selector: 'contacts-app',
})
@View({
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: ContactsListStateComponent },
  { path: '/contact/:id', component: ContactDetailStateComponent }
])
class ContactsApp {
}

bootstrap(ContactsApp, [ROUTER_BINDINGS, ContactsService]);
