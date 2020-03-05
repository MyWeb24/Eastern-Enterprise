export interface Address{
    city:string,
    add1:string,
    add2:string,
    postal_code:string,
    
}

export interface Employee
{
    id : number,
    name:string,
    phone:number,
    full_address : Address[]
}