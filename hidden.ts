<mat-form-field appearance="fill">
<mat-label>Make a selection:</mat-label>
<mat-select [(value)]="selectedItem">
<mat-option *ngFor="let item of options" [value]="item">
{{ item }}
</mat-option>
<mat-option [value]="OTHER_OPTION1">{{ OTHER_OPTION1 }}</mat-option>
</mat-select>
</mat-form-field>

<br />

<mat-form-field
appearance="fill"
[ngClass]="{ hidden: selectedItem == OTHER_OPTION1 }">
<mat-label>Enter other option:1</mat-label>
<input matInput />
</mat-form-field>

<br />

<mat-form-field
appearance="fill"
[ngClass]="{ hidden: selectedItem != OTHER_OPTION2 }">
<mat-label>Enter other option:2</mat-label>
<input matInput />
</mat-form-field>




import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly OTHER_OPTION1 = 'OTHER';
  readonly OTHER_OPTION2 = 'OTHER';

  selectedItem?: string;

  options = ['foo', 'bar', 'bazz'];
}
