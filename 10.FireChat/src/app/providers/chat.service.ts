// Dependencies Angular
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

// Angular Firebase
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

// RXJS
import { map } from 'rxjs/operators';

// Contracts
import { Chat } from '../contracts/chat.interface';
import {UserFirechat} from '../contracts/user-firechat.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Chat>;
  public chats: Chat[] = [];
  public user: UserFirechat;
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user: any) => {
      if (!user) { return; }
      user && user.providerData && user.providerData[0] && (
        this.user = {
          ...user.providerData[0],
        }
      );
    });
  }

  initialize() {
    this.itemsCollection = this.
    afs.
    collection<Chat>('chats', ref => ref.orderBy('date', 'desc').limit(5));
    return this.itemsCollection.valueChanges()
      .pipe(map((chats: Chat[]) => {
        this.chats = chats.reverse();
      }));
  }

  addMessage(message: string) {
    const date: any = new Date().getTime();
    const chat: Chat = {
      date,
      message,
      name: this.user.displayName,
      uid: this.user.uid,
    };
    return this.itemsCollection.add(chat);
  }

  login(provider: string) {
    switch (provider) {
      case 'google':
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      case 'twitter':
        return this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.user = null;
    return this.afAuth.auth.signOut();
  }
}
