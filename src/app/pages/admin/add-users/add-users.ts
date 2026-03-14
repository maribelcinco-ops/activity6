import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../services/users.service';
import { UsersModel } from '../../../models/UsersModel';

@Component({
  selector: 'app-add-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-users.html',
  styleUrls: ['./add-users.css']
})
export class AddUsers {

  registerForm: FormGroup;
  users: UsersModel[] = [];
  message = "";

  constructor(private fb: FormBuilder, private userService: UsersService) {

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['Student', Validators.required]
    });

  }

  register() {

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const user: UsersModel = this.registerForm.value;

    this.userService.addUser(user);

    this.users = this.userService.getUsers();

    this.message = "Registration successful";

    this.registerForm.reset({ role: 'Student' });

  }

}