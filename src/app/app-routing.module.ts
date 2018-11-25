import { NgModule } from '@angular/core'


import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
import { ConnectusComponent } from './components/connectus/connectus.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component';
import {WebdevComponent} from './components/webdev/webdev.component';
import { BlogDetilsComponent } from './components/blog-detils/blog-detils.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'about', component: AboutusComponent  },
    {path: 'webdev', component: WebdevComponent   },
    { path: 'blog', component: BlogComponent   },
    {path: 'blog/:id', component: BlogDetilsComponent  },
    { path: 'connectUs', component: ConnectusComponent , data: {state: 'connectUs'}  },
    { path: '**', component: PageNotFound404Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
