import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaughterDComponent } from './default/daughter-d/daughter-d.component';
import { FatherDComponent } from './default/father-d/father-d.component';
import { GrandpaDComponent } from './default/grandpa-d/grandpa-d.component';
import { SonDComponent } from './default/son-d/son-d.component';
import { MaterialModule } from './material.module';
import { DaughterOPBComponent } from './onpush broken/daughter-opb/daughter-opb.component';
import { FatherOPBComponent } from './onpush broken/father-opb/father-opb.component';
import { GrandpaOPBComponent } from './onpush broken/grandpa-opb/grandpa-opb.component';
import { SonOPBComponent } from './onpush broken/son-opb/son-opb.component';
import { DaughterOpComponent } from './onpush/daughter-op/daughter-op.component';
import { FatherOpComponent } from './onpush/father-op/father-op.component';
import { GrandpaOpComponent } from './onpush/grandpa-op/grandpa-op.component';
import { SonOpComponent } from './onpush/son-op/son-op.component';

@NgModule({
  declarations: [
    AppComponent,
    GrandpaDComponent,
    FatherDComponent,
    DaughterDComponent,
    DaughterOpComponent,
    FatherOpComponent,
    GrandpaOpComponent,
    SonOpComponent,
    SonDComponent,
    GrandpaOPBComponent,
    FatherOPBComponent,
    SonOPBComponent,
    DaughterOPBComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
