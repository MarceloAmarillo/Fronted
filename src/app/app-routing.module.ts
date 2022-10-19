import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercaComponent } from './components/acerca/editacerca.component';
import { EditbannerComponent } from './components/banner/editbanner.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditexperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
  { path: 'newskill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'editacerca/:id', component: EditacercaComponent },
  { path: 'editbanner/:id', component: EditbannerComponent },
  { path: 'newproyecto', component: NewproyectoComponent },
  { path: 'editproyecto/:id', component: EditproyectoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
