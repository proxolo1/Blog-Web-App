import { Component, OnInit, ViewChild } from '@angular/core';
import { RichTextEditor, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  

  constructor(private service:FirebaseService) { } 
   @ViewChild('exampleRTE')
  public componentObject! : RichTextEditorComponent;
  private buttonElement! : HTMLElement | null;
  private htmlContent! : string;
  title!:string;
  ngOnInit(): void {
    
  
  }
  getFormattedContent() {
    this.buttonElement = document.getElementById('button');
    this.htmlContent = this.componentObject.getHtml();
    console.log(this.htmlContent);
    this.service.BlogContent(this.title, this.htmlContent)
  }
 
}
