import { Component, ViewChild } from '@angular/core';
import { Form, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-test.component.html',
  styleUrl: './form-test.component.css'
})
export class FormTestComponent {
  firstFormSubmit(myFirstForm: NgForm): void {
    alert(myFirstForm);
    alert(myFirstForm.value.nametextbox)
  }
  @ViewChild("myForm") myForm!:NgForm;

  showValues() {
    alert(this.myForm.value.name)
  }
  resetForm() {

  }
  checkValidity() {

  }
}
