import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteCreatePageRoutingModule } from './note-create-routing.module';

import { NoteCreatePage } from './note-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteCreatePageRoutingModule
  ],
  declarations: [NoteCreatePage]
})
export class NoteCreatePageModule {}
