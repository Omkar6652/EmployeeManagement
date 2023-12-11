import { Component } from '@angular/core';
import { AuthenticationService } from '../Shared/authentication.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import { employee } from './employee';
interface empNode{
  name: string;
  children?: empNode[];
  url?: string;
}

const TREE_DATA: empNode[] = [
  {
    name: 'IT',
    children: [{name: 'Bill gates', url :'https://www.google.com'}, {name: 'Mark zukerberg',url :'https://www.google.com'}, {name: 'Satya nadela',url :'https://www.google.com'}],
  },
  {
    name: 'HR',
    children: [{name: 'rajnath singh',url :'https://www.google.com'}, {name: 'sashi tharoor',url :'https://www.google.com'}],
  },
     { 
        name: 'Electrical',
        children: [{name: 'Nikola Tesla',url :'https://www.google.com'}, {name: 'Einstien',url :'https://www.google.com'}],
      
    
  },
];



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
//variables
nestedDatasource: any;


authoriser:AuthenticationService
//constructor
constructor(authoriser : AuthenticationService ){
this.authoriser=authoriser;
this.dataSource.data = TREE_DATA;
}
//methods
authandforw():void{

}
ngOnInIT()
{

}
treeControl = new NestedTreeControl<empNode>(node => node.children);
dataSource = new MatTreeNestedDataSource<empNode>();



hasChild = (_: number, node: empNode) => !!node.children && node.children.length > 0;
}
