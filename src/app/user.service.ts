import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    // Lógica para obtener la lista de usuarios, por ejemplo, desde una API o un arreglo de datos
    return [
      { id: '1', name: 'Usuario 1' },
      { id: '2', name: 'Usuario 2' },
      { id: '3', name: 'Usuario 3' }
    ];
  }

  getUserDetails(userId: string) {
    // Lógica para obtener los detalles del usuario con el ID proporcionado
    // Por ejemplo, consulta una API o busca en la lista de usuarios
    // Retorna los detalles del usuario como un objeto
    return { id: userId, name: `Usuario ${userId}`, email: `usuario${userId}@example.com` };
  }
}
