import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsernamePageComponent } from '../username-page/username-page.component';

interface StoryPoint {
  id: string;
  label: string;
  checked: boolean;
  info: string;
}

@Component({
  selector: 'app-room-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-page.component.html',
  styleUrl: './room-page.component.scss'
})
export class RoomPageComponent implements OnInit{
  username?: string = undefined
  isClicked = false;
  clickedField = false;
  

  storyPoints: StoryPoint[] = [{
    id: 'questionmark',
    label: '?',
    checked: false,
    info: "Unklarheiten bestehen, Story ist nicht abschätzbar"
  }, {
    id: 'coffee',
    label: '☕',
    checked: false,
    info: "Enthalten"
  }, {
    id: 'one',
    label: '1',
    checked: false,
    info: "Schnelle Mini Anforderung (Aufgaben)"
  }, {
    id: 'two',
    label: '2',
    checked: false,
    info: "Größer als Aufgabe, kleiner als echte Story"
  },{
    id: 'three',
    label: '3',
    checked: false,
    info: "Kleine Story"
  },{
    id: 'five',
    label: '5',
    checked: false,
    info: "Turn-by-Turn-Navigation Bsp.: Zugeordnete Gastroeinheiten anzeigen "
  },{
    id: 'eight',
    label: '8',
    checked: false,
    info: "Mittlere Story, Komplexität unbekannt"
  },{
    id: 'thirteen',
    label: '13',
    checked: false,
    info: "Komplexe Story, Komplexität/Umfang abschätzbar"
  },{
    id: 'twenty',
    label: '20',
    checked: false,
    info: "Komplexe Story, Komplexität/Umfang kaum abschätzbar"
  },{
    id: 'fourty',
    label: '40',
    checked: false,
    info: "Architektur, Konzepte, Komplexität/Umfang nicht abschätzbar"
  },{
    id: 'hundred',
    label: '100',
    checked: false,
    info: "Ganzen Projekten vorbehalten"
  }] 

  ngOnInit(): void {
    this.username = localStorage.getItem("username") ?? undefined

    if(!this.username) {
      alert("Hallo")

    }
  }


  toggleText() {
    this.isClicked = !this.isClicked;
  }
  
  toggleField(id: string){
    const index = this.storyPoints.findIndex((storyPoint) => storyPoint.id === id);
    this.storyPoints[index].checked = !this.storyPoints[index].checked;

    if (this.storyPoints[index].checked) {
      this.storyPoints.forEach((point, i) => {
        point.checked = i === index; // Nur das angeklickte Feld auf true setzen
      });
    }
    
    }

    
  }


 

