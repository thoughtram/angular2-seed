import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {ContactsListStateComponent} from './components/contacts-list-state/contacts-list-state-component';
import {ContactDetailStateComponent} from './components/contact-detail-state/contact-detail-state-component';
import {ContactEditorStateComponent} from './components/contact-editor-state/contact-editor-state-component';
import {ContactsService} from './common/contacts-service';

import {RouteConfig, ROUTER_PRIMARY_COMPONENT, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

@Component({
  selector: 'contacts-app',
})
@View({
  template: `
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Contacts</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: ContactsListStateComponent },
  { path: '/contact/:id', component: ContactDetailStateComponent },
  { path: '/contact/:id/edit', component: ContactEditorStateComponent }
])
class ContactsApp {
}

bootstrap(ContactsApp, [
  ROUTER_BINDINGS,
  bind(ROUTER_PRIMARY_COMPONENT).toValue(ContactsApp),
  ContactsService
]);
