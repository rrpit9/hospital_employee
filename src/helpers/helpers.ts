export function isNumberKey(event: any) : any {
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
    }
    return false;
}

export function gender() : any {
    return ['Male','Female','Others'];
}

export function marital() : any {
    return ['Married','UnMarried','Divorced'];
}