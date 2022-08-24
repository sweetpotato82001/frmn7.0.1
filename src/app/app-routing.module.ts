import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from 'ag-grid-community';
import { AddClubComponent } from './admin/add-club/add-club.component';
import { AddCompetitionComponent } from './admin/add-competition/add-competition.component';
import { AddNageurComponent } from './admin/add-nageur/add-nageur.component';
import { AddParticipantComponent } from './admin/add-participant/add-participant.component';
import { AddTestComponent } from './admin/add-test/add-test.component';
import { ClubHistoryComponent } from './admin/club-history/club-history.component';
import { CompetitionHistoryComponent } from './admin/competition-history/competition-history.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DetailCompetitionComponent } from './admin/detail-competition/detail-competition.component';
import { EditAccountFormComponent } from './admin/edit-account-form/edit-account-form.component';
import { EditClubForm1Component } from './admin/edit-club-form1/edit-club-form1.component';
import { EditClubComponent } from './admin/edit-club/edit-club.component';
import { EditCompetitionFormComponent } from './admin/edit-competition-form/edit-competition-form.component';
import { EditCompetitionComponent } from './admin/edit-competition/edit-competition.component';
import { EditNageurFormComponent } from './admin/edit-nageur-form/edit-nageur-form.component';
import { EditNageurComponent } from './admin/edit-nageur/edit-nageur.component';
import { EditParticipantDetailComponent } from './admin/edit-participant-detail/edit-participant-detail.component';
import { EditParticipantComponent } from './admin/edit-participant/edit-participant.component';
import { EditTestComponent } from './admin/edit-test/edit-test.component';
import { EditTetsDetailsComponent } from './admin/edit-tets-details/edit-tets-details.component';
import { ExperimentComponent } from './admin/experiment/experiment.component';
import { FilterNageursComponent } from './admin/filter-nageurs/filter-nageurs.component';
import { HistoryParticipantComponent } from './admin/history-participant/history-participant.component';
import { HistoryTestComponent } from './admin/history-test/history-test.component';
import { LookForAccountComponent } from './admin/look-for-account/look-for-account.component';
import { LookForClubComponent } from './admin/look-for-club/look-for-club.component';
import { NageurDetailFormComponent } from './admin/nageur-detail-form/nageur-detail-form.component';
import { NageurHistoryComponent } from './admin/nageur-history/nageur-history.component';
import { ParticipantDetailsComponent } from './admin/participant-details/participant-details.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { RegisterComponent } from './admin/register/register.component';
import { TableScoreComponent } from './admin/table-score/table-score.component';
import { TransfertComponent } from './admin/transfert/transfert.component';
import { ViewAccountComponent } from './admin/view-account/view-account.component';
import { ViewClubsComponent } from './admin/view-clubs/view-clubs.component';
import { ViewCompetitionComponent } from './admin/view-competition/view-competition.component';
import { ViewDetailsTestComponent } from './admin/view-details-test/view-details-test.component';
import { ViewNageursComponent } from './admin/view-nageurs/view-nageurs.component';
import { ViewParticipantComponent } from './admin/view-participant/view-participant.component';
import { ViewTetsComponent } from './admin/view-tets/view-tets.component';
import { ViewdetailformComponent } from './admin/viewdetailform/viewdetailform.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'admin',
    component:DashboardComponent,
    children: [
    
      {
         path:'register',
         component: RegisterComponent,
         
      },
      {
        path:'home',
        component: WelcomeComponent,
     },
     {
      path:'ViewAccount',
      component: ViewAccountComponent,
     },
     {
      path:'filterAccount',
      component: TestComponent,
     },
     {
      path:'editAccount',
      component: EditAccountComponent,
     },
     {
      path:'editAccountForm/:id',
      component: EditAccountFormComponent,
     },
     {
      path:'addClub',
      component: AddClubComponent,
     },
     {
      path:'viewClub',
      component: ViewClubsComponent,
     },
     {
      path:'filterClub',
      component:LookForClubComponent,
     },
     {
      path:'ClubDetails/:id',
      component:ViewdetailformComponent,
     },
     {
      path:'editClub',
      component:EditClubComponent,
     },
     {
      path:'editClubForm/:id',
      component:EditClubForm1Component,
     },
     {
      path:'addCompetitor',
      component: AddNageurComponent,
     },
     {
      path:'viewCompetitor',
      component: ViewNageursComponent,
     },
     {
      path:'filterCompetitor',
      component:FilterNageursComponent,
     },
     {
      path:'CompetitorDetails/:id',
      component:NageurDetailFormComponent,
     },
     {
      path:'editCompetitor',
      component:EditNageurComponent,
     },
     {
      path:'editCompetitorForm/:id',
      component:EditNageurFormComponent,
     },
     {
      path:'transfertForm/:id',
      component:TransfertComponent,
     },
     {
      path:'clubHistory',
      component:ClubHistoryComponent,
     },
     {
      path:'nageurHistory',
      component:NageurHistoryComponent,
     },
     {
      path:'addCompetition',
      component:AddCompetitionComponent,
    },
    {
      path:'viewCompetition',
      component:ViewCompetitionComponent
    },
    {
      path:'detailsCompetition/:id',
      component:DetailCompetitionComponent,
    },
    {
      path:'editCompetition',
      component:EditCompetitionComponent
    },
    {
      path:'editCompetitionForm/:id',
      component:EditCompetitionFormComponent
    },
    {
      path:'historyCompetition',
      component: CompetitionHistoryComponent
    }  ,{
      path:'addTest',
      component:AddTestComponent,
     },  {
      path:'viewTest',
      component:ViewTetsComponent,
     },{
      path:'viewTestDetails/:id',
      component:ViewDetailsTestComponent,
     }, {
      path:'editTest',
      component:EditTestComponent,
     },{
      path:'editTestDetails/:id',
      component:EditTetsDetailsComponent,
     },
     {
      path:'historyTest',
      component:HistoryTestComponent,
     },
     {
      path:'addParticipant',
      component:AddParticipantComponent,
     },
     {
      path:'viewParticipant',
      component:ViewParticipantComponent,
     },
     {
      path:'participantDetails/:id',
      component:ParticipantDetailsComponent,
     },
     {
      path:'editParticipant',
      component:EditParticipantComponent,
     },
     {
      path:'editParticipantDetails/:id',
      component:EditParticipantDetailComponent,
     },
     {
      path:'historyParticipant',
      component:HistoryParticipantComponent,
     },
     {
      path:'tablescore',
      component:TableScoreComponent
     }
  ]
},
{
  path:'',
  component: LoginComponent
},
{
  path:'experiment', 
  component:ExperimentComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
