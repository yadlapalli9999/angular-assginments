import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task0';
  users;
   cityListItem = ["Adoni","Amalapuram","Anakapalle","Anantapur","Bapatla","Bheemunipatnam","Bhimavaram","Bobbili","Chilakaluripet","Chirala","Chittoor","Dharmavaram","Eluru","Gooty","Gudivada","Gudur","Guntakal","Guntur","Hindupur","Jaggaiahpet","Jammalamadugu","Kadapa","Kadiri","Kakinada","Kandukur","Kavali","Kovvur","Kurnool","Macherla","Machilipatnam","Madanapalle","Mandapeta","Markapur","Nagari","Naidupet","Nandyal","Narasapuram","Narasaraopet","Narsipatnam","Nellore","Nidadavole","Nuzvid","Ongole","Palacole","Palasa Kasibugga","Parvathipuram","Pedana","Peddapuram","Pithapuram","Ponnur","Proddatur","Punganur","Puttur","Rajahmundry","Rajam","Rajampet","Ramachandrapuram","Rayachoti","Rayadurg","Renigunta","Repalle","Salur","Samalkot","Sattenapalle","Srikakulam","Srikalahasti","Srisailam Project (Right Flank Colony) Township","Sullurpeta","Tadepalligudem","Tadpatri","Tanuku","Tenali","Tirupati","Tiruvuru","Tuni","Uravakonda","Venkatagiri","Vijayawada","Vinukonda","Visakhapatnam","Vizianagaram","Yemmiganur","Yerraguntla"]

   listCities(){
     this.users = this.cityListItem
   }
}
