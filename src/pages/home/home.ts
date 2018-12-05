import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public form 	: FormGroup;

  constructor(public navCtrl 		: NavController,
            public navParams 	: NavParams,
            private _FB          : FormBuilder)
			{

			   // Define the FormGroup object for the form
			   // (with sub-FormGroup objects for handling
			   // the dynamically generated form input fields)
			   this.form = this._FB.group({
			      formdate     : this._FB.array([
			         this.initTechnologyFields()
			      ])
			   });
			}

	initTechnologyFields() : FormGroup
		{
		   return this._FB.group({
		      fdate : ['', Validators.required],
		      todate : ['', Validators.required]
		   });
		}

	addNewInputField() : void
		{
		   const control = <FormArray>this.form.controls.formdate;
		   control.push(this.initTechnologyFields());
		}

	removeInputField(i : number) : void
	{
	   const control = <FormArray>this.form.controls.formdate;
	   control.removeAt(i);
	}

	manage(val : any) : void
	{
	   console.dir(val);
	}
}
