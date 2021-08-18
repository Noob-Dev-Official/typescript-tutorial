//basic types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

/* this says values will be an array of numbers */
let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, 'hello', true];

// tuple - they should be in the same spots
let person: [number, string, boolean] = [1, 'Brad', true];

// tuple array
let employee: [number, string][];

employee = [
	[1, 'brad'],
	[2, 'bye'],
];

// union - meaning it could hold any of the specified data types
let pid: string | number; //it can hold number or string
pid = '30';

// enum
