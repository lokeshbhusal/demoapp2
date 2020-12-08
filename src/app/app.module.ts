import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';




import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { EditDepComponent } from './department/edit-dep/edit-dep.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentService } from 'src/app/services/department.service';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    EmployeeComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    DepartmentComponent,
    ShowDepComponent,
    EditDepComponent,
    AddDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatIconModule, 
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent],
  entryComponents:[AddDepComponent]
})
export class AppModule { }
