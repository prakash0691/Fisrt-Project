import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UsernameValidator {

    static usernameSpaceValidator(control: AbstractControl): ValidationErrors | null {

        var value = <string>control.value;
        if (value.indexOf(' ') > 0) {
            return { usernameshouldnothavespace: true }
        }
        return null;
    }

}

