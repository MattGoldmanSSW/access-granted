import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { LottieAnimationViewModule } from 'ng-lottie';
import { AuthClient } from '../../helpers/api-client';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    LottieAnimationViewModule,
    FormsModule
  ],
  providers: [AuthClient]
})
export class IdentityModule { }
