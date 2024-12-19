import { Component, computed, EventEmitter, input, Input, Output, signal, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

//This is used to select a random image from Users
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Input decorator approach
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

 // select = output<string>();
  //Signal approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  //Set getter for image path
  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser() {
    this.select.emit(this.id);
    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
