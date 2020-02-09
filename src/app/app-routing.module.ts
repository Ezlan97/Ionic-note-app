import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'note-detail',
    loadChildren: () => import('./note-detail/note-detail.module').then( m => m.NoteDetailPageModule)
  },
  {
    path: 'note-create',
    loadChildren: () => import('./note-create/note-create.module').then( m => m.NoteCreatePageModule)
  },
  {
    path: 'note-edit',
    loadChildren: () => import('./note-edit/note-edit.module').then( m => m.NoteEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
