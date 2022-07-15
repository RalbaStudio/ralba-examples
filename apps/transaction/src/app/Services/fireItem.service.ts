import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Item } from '../features/data/model/item';

@Injectable({
  providedIn: 'root'
})
export class fireItemService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add item
  addItem(item : Item) {
    //item.id = this.afs.createId();
    return this.afs.collection('/Items').add(item);
  }

  // get all items
  getAllItems() {
    return this.afs.collection<Item>('/Items').snapshotChanges();
  }

  // delete student
  deleteItem(item : Item) {
     this.afs.doc('/Items/'+item.id).delete();
  }

  // update student
  updateItem(item : Item) {
    this.deleteItem(item);
    this.addItem(item);
  }
    
}