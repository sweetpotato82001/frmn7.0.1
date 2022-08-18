import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from 'src/app/services/record.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-score',
  templateUrl: './table-score.component.html',
  styleUrls: ['./table-score.component.css']
})
export class TableScoreComponent implements OnInit {

  constructor(private _record: RecordService, private _router:Router,private datepipe: DatePipe) { }

 



    seniorRecord={
      id : 0,
      nageLD25:  '00:00:00',nageLD50:  '00:00:00',nageLD100:  '00:00:00',nageLD200:  '00:00:00',nageLD400: '00:00:00',nageLD800:  '00:00:00',
    dosD25:  '00:00:00',dosD50: '00:00:00',dosD100: '00:00:00',dosD200: '00:00:00',brasseD100: '00:00:00',papillonD50: '00:00:00',papillonD100: '00:00:00',
    papillonD200: '00:00:00',nage4D200: '00:00:00',nage4D400: '00:00:00',nageurLM25: '00:00:00',nageurLM50: '00:00:00',nageurLM100: '00:00:00',nageurLM200: '00:00:00',
    nageurLM400: '00:00:00',nageurLM800: '00:00:00',nageurLM1500: '00:00:00',dosM25: '00:00:00',dosM50: '00:00:00',dosM100: '00:00:00',dosM200: '00:00:00',brasseM50: '00:00:00',
    brasseM100: '00:00:00',brasseM200: '00:00:00',brasseMM200: '00:00:00',brasseD200: '00:00:00',brasseDD200:'',brasseD50: '00:00:00',papillonM50: '00:00:00',papillonM100: '00:00:00',papillonM200: '00:00:00',nage4M200:   '00:00:00',nage4M400:   '00:00:00',
    type: ''
    }



    benjaminRecord= {
      id : 0,
      nageLD25:  '00:00:00',nageLD50:  '00:00:00',nageLD100:  '00:00:00',nageLD200:  '00:00:00',nageLD400: '00:00:00',nageLD800:  '00:00:00',
    dosD25:  '00:00:00',dosD50: '00:00:00',dosD100: '00:00:00',dosD200: '00:00:00',brasseD100: '00:00:00',papillonD50: '00:00:00',papillonD100: '00:00:00',
    papillonD200: '00:00:00',nage4D200: '00:00:00',nage4D400: '00:00:00',nageurLM25: '00:00:00',nageurLM50: '00:00:00',nageurLM100: '00:00:00',nageurLM200: '00:00:00',
    nageurLM400: '00:00:00',nageurLM800: '00:00:00',nageurLM1500: '00:00:00', x: '00:00:00',dosM25: '00:00:00',dosM50: '00:00:00',dosM100: '00:00:00',dosM200: '00:00:00',brasseM50: '00:00:00',
    brasseM100: '00:00:00',brasseM200: '00:00:00',brasseD200: '00:00:00',brasseDD200:'',brasseD50: '00:00:00',papillonM50: '00:00:00',papillonM100: '00:00:00',papillonM200: '00:00:00',nage4M200:   '00:00:00',nage4M400:   '00:00:00',
    type: ''
    }



    juniorRecord= {
      id : 0,
      nageLD25:  '00:00:00',nageLD50:  '00:00:00',nageLD100:  '00:00:00',nageLD200:  '00:00:00',nageLD400: '00:00:00',nageLD800:  '00:00:00',
    dosD25:  '00:00:00',dosD50: '00:00:00',dosD100: '00:00:00',dosD200: '00:00:00',brasseD100: '00:00:00',papillonD50: '00:00:00',papillonD100: '00:00:00',
    papillonD200: '00:00:00',nage4D200: '00:00:00',nage4D400: '00:00:00',nageurLM25: '00:00:00',nageurLM50: '00:00:00',nageurLM100: '00:00:00',nageurLM200: '00:00:00',
    nageurLM400: '00:00:00',nageurLM800: '00:00:00',nageurLM1500: '00:00:00',dosM25: '00:00:00',dosM50: '00:00:00',dosM100: '00:00:00',dosM200: '00:00:00',brasseM50: '00:00:00',
    brasseM100: '00:00:00',brasseM200: '00:00:00',brasseD200: '00:00:00',brasseDD200:'',brasseD50: '00:00:00',papillonM50: '00:00:00',papillonM100: '00:00:00',papillonM200: '00:00:00',nage4M200:   '00:00:00',nage4M400:   '00:00:00',
    type: ''
    }
    
    cadetRecord= {
      id : 0,
      nageLD25:  '00:00:00',nageLD50:  '00:00:00',nageLD100:  '00:00:00',nageLD200:  '00:00:00',nageLD400: '00:00:00',nageLD800:  '00:00:00',
    dosD25:  '00:00:00',dosD50: '00:00:00',dosD100: '00:00:00',dosD200: '00:00:00',brasseD100: '00:00:00',papillonD50: '00:00:00',papillonD100: '00:00:00',
    papillonD200: '00:00:00',nage4D200: '00:00:00',nage4D400: '00:00:00',nageurLM25: '00:00:00',nageurLM50: '00:00:00',nageurLM100: '00:00:00',nageurLM200: '00:00:00',
    nageurLM400: '00:00:00',nageurLM800: '00:00:00',nageurLM1500: '00:00:00', x: '00:00:00',dosM25: '00:00:00',dosM50: '00:00:00',dosM100: '00:00:00',dosM200: '00:00:00',brasseM50: '00:00:00',
    brasseM100: '00:00:00',brasseM200: '00:00:00',brasseD200: '00:00:00',brasseDD200:'',brasseD50: '00:00:00',papillonM50: '00:00:00',papillonM100: '00:00:00',papillonM200: '00:00:00',nage4M200:   '00:00:00',nage4M400:   '00:00:00',
    type: ''
    }

    poussinRecord= {
      id : 0,
      nageLD25:  '00:00:00',nageLD50:  '00:00:00',nageLD100:  '00:00:00',nageLD200:  '00:00:00',nageLD400: '00:00:00',nageLD800:  '00:00:00',
      dosD25:  '00:00:00',dosD50: '00:00:00',dosD100: '00:00:00',dosD200: '00:00:00',brasseD100: '00:00:00',papillonD50: '00:00:00',papillonD100: '00:00:00',
      papillonD200: '00:00:00',nage4D200: '00:00:00',nage4D400: '00:00:00',nageurLM25: '00:00:00',nageurLM50: '00:00:00',nageurLM100: '00:00:00',nageurLM200: '00:00:00',
      nageurLM400: '00:00:00',nageurLM800: '00:00:00',nageurLM1500: '00:00:00', x: '00:00:00',dosM25: '00:00:00',dosM50: '00:00:00',dosM100: '00:00:00',dosM200: '00:00:00',brasseM50: '00:00:00',
      brasseM100: '00:00:00',brasseM200: '00:00:00',brasseD200: '00:00:00',brasseDD200:'',brasseD50: '00:00:00',papillonM50: '00:00:00',papillonM100: '00:00:00',papillonM200: '00:00:00',nage4M200:   '00:00:00',nage4M400:   '00:00:00',
      type: ''
    }
    
    
    minimeRecord= {
      id : 0,
      nageLD25:  '00:00:00',nageLD50:  '00:00:00',nageLD100:  '00:00:00',nageLD200:  '00:00:00',nageLD400: '00:00:00',nageLD800:  '00:00:00',
      dosD25:  '00:00:00',dosD50: '00:00:00',dosD100: '00:00:00',dosD200: '00:00:00',brasseD100: '00:00:00',papillonD50: '00:00:00',papillonD100: '00:00:00',
      papillonD200: '00:00:00',nage4D200: '00:00:00',nage4D400: '00:00:00',nageurLM25: '00:00:00',nageurLM50: '00:00:00',nageurLM100: '00:00:00',nageurLM200: '00:00:00',
      nageurLM400: '00:00:00',nageurLM800: '00:00:00',nageurLM1500: '00:00:00', x: '00:00:00',dosM25: '00:00:00',dosM50: '00:00:00',dosM100: '00:00:00',dosM200: '00:00:00',brasseM50: '00:00:00',
      brasseM100: '00:00:00',brasseM200: '00:00:00',brasseD200: '00:00:00',brasseDD200: '',brasseD50: '00:00:00',papillonM50: '00:00:00',papillonM100: '00:00:00',papillonM200: '00:00:00',nage4M200:   '00:00:00',nage4M400:   '00:00:00',
      type: ''
    }

   

    
    avenirRecord= {
      id : 0,
      nageLD25:  '00:00:00',nageLD50:  '00:00:00',nageLD100:  '00:00:00',nageLD200:  '00:00:00',nageLD400: '00:00:00',nageLD800:  '00:00:00',
    dosD25:  '00:00:00',dosD50: '00:00:00',dosD100: '00:00:00',dosD200: '00:00:00',brasseD100: '00:00:00',papillonD50: '00:00:00',papillonD100: '00:00:00',
    papillonD200: '00:00:00',nage4D200: '00:00:00',nage4D400: '00:00:00',nageurLM25: '00:00:00',nageurLM50: '00:00:00',nageurLM100: '00:00:00',nageurLM200: '00:00:00',
    nageurLM400: '00:00:00',nageurLM800: '00:00:00',nageurLM1500: '00:00:00', x: '',dosM25: '00:00:00',dosM50: '00:00:00',dosM100: '00:00:00',dosM200: '00:00:00',brasseM50: '00:00:00',
    brasseM100: '00:00:00',brasseM200: '00:00:00',brasseD200: '00:00:00',brasseDD200:'',brasseD50: '00:00:00',papillonM50: '00:00:00',papillonM100: '00:00:00',papillonM200: '00:00:00',nage4M200:   '00:00:00',nage4M400:   '00:00:00',
    type: ''
    }

    hcRecord= {
      id : 0,
      nageLD25:  '00:00:00',nageLD50:  '00:00:00',nageLD100:  '00:00:00',nageLD200:  '00:00:00',nageLD400: '00:00:00',nageLD800:  '00:00:00',
    dosD25:  '00:00:00',dosD50: '00:00:00',dosD100: '00:00:00',dosD200: '00:00:00',brasseD100: '00:00:00',papillonD50: '00:00:00',papillonD100: '00:00:00',
    papillonD200: '00:00:00',nage4D200: '00:00:00',nage4D400: '00:00:00',nageurLM25: '00:00:00',nageurLM50: '00:00:00',nageurLM100: '00:00:00',nageurLM200: '00:00:00',
    nageurLM400: '00:00:00',nageurLM800: '00:00:00',nageurLM1500: '00:00:00', x: '00:00:00',dosM25: '00:00:00',dosM50: '00:00:00',dosM100: '00:00:00',dosM200: '00:00:00',brasseM50: '00:00:00',
    brasseM100: '00:00:00',brasseM200: '00:00:00',brasseD200: '00:00:00',brasseDD200:'',brasseD50: '00:00:00',papillonM50: '00:00:00',papillonM100: '00:00:00',papillonM200: '00:00:00',nage4M200:   '00:00:00',nage4M400:   '00:00:00',
    type: ''
    }


  
    lmao ='00:10:10';
    x2 = '00:00:00';

  ngOnInit(): void {
      this._record.getRecordByType('Senior').subscribe(
        (data:any)=>{
           this.seniorRecord = data;
          
        },
        (error)=>{
            console.log(error);
            Swal.fire("So");
        }
      );
      this._record.getRecordByType('Junior').subscribe(
        (data:any)=>{
          this.juniorRecord = data;
        

        },
        (error)=>{
            console.log(error);
            Swal.fire("So");
        }
      );
      this._record.getRecordByType('Avenir').subscribe(
        (data:any)=>{
          this.avenirRecord = data;
        },
        (error)=>{
            console.log(error);
            Swal.fire("So");
        }
      );
      this._record.getRecordByType('HC').subscribe(
        (data:any)=>{
          this.hcRecord = data;
        },
        (error)=>{
            console.log(error);
            Swal.fire("So");
        }
      );
      this._record.getRecordByType('minime').subscribe(
        (data:any)=>{
          this.minimeRecord = data;
        },
        (error)=>{
            console.log(error);
            Swal.fire("So");
        }
      );
      this._record.getRecordByType('Benjamin').subscribe(
        (data:any)=>{
          this.benjaminRecord = data;
        },
        (error)=>{
            console.log(error);
            Swal.fire("So");
        }
      );

      this._record.getRecordByType('Cadet').subscribe(
        (data:any)=>{
          this.cadetRecord = data;
        },
        (error)=>{
            console.log(error);
            Swal.fire("So");
        }
      );
      this._record.getRecordByType('Poussin').subscribe(
        (data:any)=>{
          this.poussinRecord = data;
        },
        (error)=>{
            console.log(error);
            Swal.fire("So");
        }
      );
      
  }
  onSubmit(){
          let records = [];
          records.push(this.seniorRecord);
          records.push(this.juniorRecord);
          records.push(this.benjaminRecord);
          records.push(this.cadetRecord);
          records.push(this.poussinRecord);
          records.push(this.hcRecord);
          records.push(this.avenirRecord);
          records.push(this.minimeRecord);

        this._record.saveRecord(this.seniorRecord).subscribe(
          (data:any)=>{
            this._record.saveRecord(this.juniorRecord).subscribe(
              (data:any)=>{
                this._record.saveRecord(this.benjaminRecord).subscribe(
                  (data:any)=>{
                    this._record.saveRecord(this.cadetRecord).subscribe(
                      (data:any)=>{
                        this._record.saveRecord(this.minimeRecord).subscribe(
                          (data:any)=>{
                           
                            this._record.saveRecord(this.hcRecord).subscribe(
                              (data:any)=>{
                                this._record.saveRecord(this.poussinRecord).subscribe(
                                  (data:any)=>{
                                    this._record.saveRecord(this.avenirRecord).subscribe(
                                      (data:any)=>{
                                        Swal.fire("Success !!", 'Record was updated successfully','success').then(() =>{
                                          window.location.reload();
                                        });
                                      },
                                      (error)=>{
                                        console.error(error);
                                        
                                      }
                                    );
                                  },
                                  (error)=>{
                                    console.error(error);
                                    
                                  }
                                );
                              },
                              (error)=>{
                                console.error(error);
                                
                              }
                            );
                          },
                          (error)=>{
                            console.error(error);
                            
                          }
                        );
                      },
                      (error)=>{
                        console.error(error);
                        
                      }
                    );
                  },
                  (error)=>{
                    console.error(error);
                    
                  }
                );
              },
              (error)=>{
                console.error(error);
                
              }
            );
          },
          (error)=>{
            console.error(error);

          }
        );
         
    }
}
