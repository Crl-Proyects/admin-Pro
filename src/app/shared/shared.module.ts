import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    declarations: [
        HeaderComponent,
        BreadcrumsComponent,
        SidebarComponent,
        NopagefoundComponent,
    ],
    imports: [],
    exports: [
        HeaderComponent,
        BreadcrumsComponent,
        SidebarComponent,
        NopagefoundComponent,
    ],
    providers: [],
})
// tslint:disable-next-line:eofline
export class SharedModule { }