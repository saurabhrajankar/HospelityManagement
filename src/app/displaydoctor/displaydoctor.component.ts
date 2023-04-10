import { Component,} from '@angular/core';
import {MatDialog,} from '@angular/material/dialog';
import { AptformComponent } from '../aptform/aptform.component';

@Component({
  selector: 'app-displaydoctor',
  templateUrl: './displaydoctor.component.html',
  styleUrls: ['./displaydoctor.component.scss']
})
export class DisplaydoctorComponent  {

  doctorslist: any = [
    
    {id: 1, image: '../../assets/Doc1.jpg', name: 'Dr. Whet Faartz', specilization: 'Gynaecologist'},

    {id: 2, image: '../../assets/doc8.jpg', name: 'Dr. Akhil', specilization: 'Dentist'},

    {id: 3, image: '../../assets/doc9.jpg', name: 'Dr. Tai Lung', specilization: 'Pediatrist'},

    {id: 4, image: '../../assets/doc4.jpg', name: 'Dr. Robert Rodrigez', specilization: 'ENT'},

    {id: 5, image: '../../assets/doc2.jpg', name: 'Dr. Jonathan', specilization: 'Surgeon'},

    {id: 6, image: '../../assets/doc6.jpg', name: 'Dr. Juan', specilization: 'Dermatologist'}

  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  aptformDialogBox(): void {
    const dialogRef = this.dialog.open(AptformComponent, {
      data:'',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
   
  }
  
}
