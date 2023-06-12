import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userList: any[]; // Reemplaza 'any' con el tipo apropiado para tus objetos de usuario
  selectedUser: any; // Variable para almacenar el usuario seleccionado

  constructor(private userService: UserService) {
    // Obtener la lista de usuarios del servicio
    this.userList = this.userService.getUsers();
  }

  showUserDetails(userId: number) {
    // Buscar el usuario correspondiente en la lista userList
    this.selectedUser = this.userList.find(user => user.id === userId);
  }
}

