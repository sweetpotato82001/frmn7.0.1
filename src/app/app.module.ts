import { NgModule } from '@angular/core'
import { DatePipe } from '@angular/common';;
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './admin/register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { CarouselModule } from './admin/carousel/carousel.module';
import { SidebarAccountComponent } from './admin/sidebar-account/sidebar-account.component';
import { DashboardAccountComponent } from './admin/dashboard-account/dashboard-account.component';
import { ViewAccountComponent } from './admin/view-account/view-account.component';
import { HttpClientModule } from '@angular/common/http';
import {  MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { DatatestComponent } from './admin/datatest/datatest.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatMenuModule} from '@angular/material/menu';
import { TestComponent } from './test/test.component';
import { AgGridModule } from 'ag-grid-angular';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ButtonCellRendererComponent } from './button-cell-renderer/button-cell-renderer.component';
import { EditAccountFormComponent } from './admin/edit-account-form/edit-account-form.component';
import { AddClubComponent } from './admin/add-club/add-club.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewClubsComponent } from './admin/view-clubs/view-clubs.component';
import { LookForClubComponent } from './admin/look-for-club/look-for-club.component';
import { ButtonDetailRendererComponent } from './admin/button-detail-renderer/button-detail-renderer.component';
import { ViewdetailformComponent } from './admin/viewdetailform/viewdetailform.component';
import { EditClubComponent } from './admin/edit-club/edit-club.component';
import { ButtonDetail1RendererComponent } from './admin/button-detail1-renderer/button-detail1-renderer.component';
import { EditClubForm1Component } from './admin/edit-club-form1/edit-club-form1.component';
import { AddNageurComponent } from './admin/add-nageur/add-nageur.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ViewNageursComponent } from './admin/view-nageurs/view-nageurs.component';
import { FilterNageursComponent } from './admin/filter-nageurs/filter-nageurs.component';
import { ButtonDetail2RendererComponent } from './admin/button-detail2-renderer/button-detail2-renderer.component';
import { NageurDetailFormComponent } from './admin/nageur-detail-form/nageur-detail-form.component';
import { EditNageurComponent } from './admin/edit-nageur/edit-nageur.component';
import { ButtonEdit1RendererComponent } from './admin/button-edit1-renderer/button-edit1-renderer.component';
import { EditNageurFormComponent } from './admin/edit-nageur-form/edit-nageur-form.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { TransfertComponent } from './admin/transfert/transfert.component';
import { ClubHistoryComponent } from './admin/club-history/club-history.component';
import { NageurHistoryComponent } from './admin/nageur-history/nageur-history.component';
import { AddCompetitionComponent } from './admin/add-competition/add-competition.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ViewCompetitionComponent } from './admin/view-competition/view-competition.component';
import { ButtonDetailCRendererComponent } from './admin/button-detail-c-renderer/button-detail-c-renderer.component';
import { DetailCompetitionComponent } from './admin/detail-competition/detail-competition.component';
import { EditCompetitionComponent } from './admin/edit-competition/edit-competition.component';
import { ButtonDetailC1RendererComponent } from './admin/button-detail-c1-renderer/button-detail-c1-renderer.component';
import { EditCompetitionFormComponent } from './admin/edit-competition-form/edit-competition-form.component';
import { CompetitionHistoryComponent } from './admin/competition-history/competition-history.component';
import { ButtonDetailC2RendererComponent } from './admin/button-detail-c2-renderer/button-detail-c2-renderer.component';
import { TableScoreComponent } from './admin/table-score/table-score.component';
import { AddTestComponent } from './admin/add-test/add-test.component';
import { ViewTetsComponent } from './admin/view-tets/view-tets.component';
import { ButtonParticipantRendererComponent } from './admin/button-participant-renderer/button-participant-renderer.component';
import { ViewDetailsTestComponent } from './admin/view-details-test/view-details-test.component';
import { EditTestComponent } from './admin/edit-test/edit-test.component';
import { ButtonEditTestComponent } from './admin/button-edit-test/button-edit-test.component';
import { EditTetsDetailsComponent } from './admin/edit-tets-details/edit-tets-details.component';
import { HistoryTestComponent } from './admin/history-test/history-test.component';
import { AddParticipantComponent } from './admin/add-participant/add-participant.component';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewParticipantComponent } from './admin/view-participant/view-participant.component';
import { ButtonDetailParticipantRendererComponent } from './admin/button-detail-participant-renderer/button-detail-participant-renderer.component';
import { ParticipantDetailsComponent } from './admin/participant-details/participant-details.component';
import { EditParticipantComponent } from './admin/edit-participant/edit-participant.component';
import { ButtonEditParticipantRendererComponent } from './admin/button-edit-participant-renderer/button-edit-participant-renderer.component';
import { EditParticipantDetailComponent } from './admin/edit-participant-detail/edit-participant-detail.component';
import { HistoryParticipantComponent } from './admin/history-participant/history-participant.component';
import { HistoryAccountComponent } from './admin/history-account/history-account.component';
import { ExperimentComponent } from './admin/experiment/experiment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    WelcomeComponent,
    SidebarAccountComponent,
    DashboardAccountComponent,
    ViewAccountComponent,
    DatatestComponent,
    TestComponent,
    EditAccountComponent,
    ButtonCellRendererComponent,
    EditAccountFormComponent,
    AddClubComponent,
    ViewClubsComponent,
    LookForClubComponent,
    ButtonDetailRendererComponent,
    ViewdetailformComponent,
    EditClubComponent,
    ButtonDetail1RendererComponent,
    
    EditClubForm1Component,
       AddNageurComponent,
       ViewNageursComponent,
       FilterNageursComponent,
       ButtonDetail2RendererComponent,
       NageurDetailFormComponent,
       EditNageurComponent,
       ButtonEdit1RendererComponent,
       EditNageurFormComponent,
       ProfilComponent,
       TransfertComponent,
       ClubHistoryComponent,
       NageurHistoryComponent,
       AddCompetitionComponent,
       ViewCompetitionComponent,
       ButtonDetailCRendererComponent,
       DetailCompetitionComponent,
       EditCompetitionComponent,
       ButtonDetailC1RendererComponent,
       EditCompetitionFormComponent,
       CompetitionHistoryComponent,
       ButtonDetailC2RendererComponent,
       TableScoreComponent,
       AddTestComponent,
       ViewTetsComponent,
       ButtonParticipantRendererComponent,
       ViewDetailsTestComponent,
       EditTestComponent,
       ButtonEditTestComponent,
       EditTetsDetailsComponent,
       HistoryTestComponent,
       AddParticipantComponent,
       ViewParticipantComponent,
       ButtonDetailParticipantRendererComponent,
       ParticipantDetailsComponent,
       EditParticipantComponent,
       ButtonEditParticipantRendererComponent,
       EditParticipantDetailComponent,
       HistoryParticipantComponent,
       HistoryAccountComponent,
       ExperimentComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CarouselModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    AgGridModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule
    
 
  ],
  providers: [MatDatepickerModule,AuthInterceptorProviders,DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
