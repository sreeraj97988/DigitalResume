import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VideoResumeComponent } from './video-resume/video-resume.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'form',component:FormComponent},
{path:'login',component:LoginComponent},
{path:'create-resume',component:CreateResumeComponent},
{path:'video-resume',component:VideoResumeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
