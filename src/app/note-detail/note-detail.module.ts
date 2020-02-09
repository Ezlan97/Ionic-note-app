import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteDetailPageRoutingModule } from './note-detail-routing.module';

import { NoteDetailPage } from './note-detail.page';

import { MatProgressSpinnerModule, MatCardModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteDetailPageRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [NoteDetailPage]
})
export class NoteDetailPageModule {}
