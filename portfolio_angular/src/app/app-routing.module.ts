import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Portfolio/about', component: AboutComponent },
  { path: 'Portfolio/skills', component: SkillsComponent },
  { path: 'Portfolio/projects', component: ProjectsComponent },
  { path: 'Portfolio/contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta por defecto si no se encuentra ninguna ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };