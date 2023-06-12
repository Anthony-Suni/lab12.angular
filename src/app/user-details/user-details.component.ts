import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userList: any[]; // Reemplaza 'any' con el tipo apropiado para tus objetos de usuario
  @Input() selectedUser: any;


  constructor(private userService: UserService) {
    // Obtener la lista de usuarios del servicio
    this.userList = this.userService.getUsers();
  }

  showUserDetails(userId: number) {
    // Buscar el usuario correspondiente en la lista userList
    this.selectedUser = this.userList.find(user => user.id === userId);
  }
}
