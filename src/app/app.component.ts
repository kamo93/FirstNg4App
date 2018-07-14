import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  myNotes: Observable<any>;
  constructor(public aFDB: AngularFireDatabase) {
    this.myNotes = aFDB.object('/Notas').valueChanges();
  }
  name = '';
  note : {
    id: number;
    title: string;
    body: string
  } = {
    id: null,
    title: null,
    body: null
  };
  // myNotes = [
  //   {id: 1, title: 'Note 1', body: 'My first note'},
  //   {id: 2, title: 'Note 2', body: 'My first note'},
  //   {id: 3, title: 'Note 3', body: 'My first note'},
  //   {id: 4, title: 'Note 4', body: 'My first note'},
  // ];
  showForm:boolean = false;
  editNote:boolean = false;
  labelButton:string = '';

  showFormNote(): void {
    this.showForm = true;
    this.editNote = false;
    this.labelButton = 'Agregar Nota';
    this.clearNote();
  }
  hideFormNote(): void {
    this.showForm = false;
    //
  }
  clearNote(): void {
    this.note.title = '';
    this.note.body = '';
  }
  addNewNote(newNote): void {
    console.log(this.myNotes, this.aFDB.database);
    //this.myNotes.set(this.note);
    /*if(!this.editNote){
      let lastItemIndex = this.myNotes.length - 1;
      this.note.id = this.myNotes[lastItemIndex].id + 1;
      let auxObj = Object.assign({}, this.note);
      this.myNotes.push(auxObj);
      this.hideFormNote();
    } else {
      this.myNotes.forEach(function (note, index) {
        if(note.id === this.note.id){
          //this.myNotes[index] = this.note;
          let auxObj = Object.assign({}, this.note);
          this.myNotes[index] = auxObj;
        }
      }, this);
      this.hideFormNote();
    }*/

  }
  /*editNoteForm(thisNote): void {
    this.showFormNote();
    Object.assign(this.note, thisNote);
    this.editNote = true;
    this.labelButton = 'Editar';
  }*/
  /*deleteNote(): void {

    this.myNotes.forEach(function (note, index) {
      if(note.id === this.note.id){
        this.myNotes.splice(index, 1);
      }
    }, this);
    this.hideFormNote();
  }*/
}
