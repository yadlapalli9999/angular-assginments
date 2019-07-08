import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // data:any;
  listData;
  constructor() { 
  }
  getList():any{
    return this.listData = this.data
  }


data=[
  {
    "name":"Andhra Pradesh",
    "capital":"Guntur",
    "language":"Telugu",
    "image":"../assets/andhra-map.jpg",
    "decription":"Andhra Pradesh is one of the leading rice-growing states in the country and is a major producer of India's tobacco. The state's rivers—particularly the Godavari and the Krishna, but also the Penneru—account for its agricultural importance."
},
{
    "name":"Telangana",
    "capital":"Hyderabad",
    "language":"Telugu",
    "image":"../assets/telangana.jpg",
    "decription":"Telangana is a land locked state with Maharashtra, Karnataka, Chhattisgarh, and Andhra Pradesh as its border states. Hyderabad is known as City of Pearls. K.Chandrashekar Rao is the first and current Chief Minister of the state from the Telegana Rashtra Samithi(TRS)."
},
{
    "name":"Tamil Nadu",
    "capital":"Chennai",
    "language":"Tamil",
    "image":"../assets/Tamilnadu.jpg",
    "decription":"Its capital and largest city is Chennai (formerly known as Madras). Tamil Nadu lies in the southernmost part of the Indian subcontinent and is bordered by the union territory of Puducherry and the South Indian states of Kerala, Karnataka, and Andhra Pradesh."
},
{
    "name":"Karnataka",
    "capital":"Bengaluru",
    "language":"Kannada",
    "image":"../assets/KarnatakamapL.jpg",
    "decription":"It was formed on 1 November 1956, with the passage of the States Reorganisation Act. Originally known as the State of Mysore, it was renamed Karnataka in 1973. The state corresponds to the Carnatic region. The capital and largest city is Bangalore (Bengaluru)."
},
{
    "name":"Kerala",
    "capital":"Thiruvananthapuram",
    "language":"Malayalam",
    "image":"../assets/Kerela.jpg",
    "decription":"The land of God, Kerala is believed to be a gift of the Arabian Sea. The pride of Kerala are Gorgeous and Exotic Beaches, Breathtaking hill Stations, Enchanting waterfalls, Beautiful lagoons, Meandering rivers and Amazing natural scenarios. These colors are made Kerala as a land of beauty and paradise on earth."
},
{
    "name":"Maharashtra",
    "capital":"Mumbai",
    "language":"Marathi",
    "image":"../assets/Maharashtra.jpeg",
    "decription":"Maharashtra is a state in the western peninsular region of India occupying a substantial portion ... has over 112 million inhabitants and its capital, Mumbai, has a population around 18 million making it the most populous urban area in India."
},
{
    "name":"Gujarat",
    "capital":"Gandhinagar",
    "language":"Gujarati",
    "image":"../assets/gujarat_map.jpg",
    "decription":"The first capital of Gujarat was Ahmedabad; the capital was moved to Gandhinagar in 1970."
},
{
    "name":"Punjab",
    "capital":"Chandigarh",
    "language":"Punjabi",
    "image":"../assets/Punjab.png",
    "decription":"CHANDIGARH, India — Since Chandigarh is the shared capital city of both Punjab and Haryana, two farming states in northern India, many of the state government offices are located there. To replace Lahore, which became part of Pakistan during British Partition in 1947, the Indian Punjab required a new capital city"
},
{
    "name":"Uttar Pradesh",
    "capital":"Lucknow",
    "language":"Hindi",
    "image":"../assets/uttarpradesh-district-new.gif",
    "decription":"Uttar Pradesh is a state in northern India. With roughly 200 million inhabitants, it is the most .... Sher Shah and his son Islam Shah ruled Uttar Pradesh from their capital at Gwalior. After the death of Islam Shah Suri, ... In 1920, the capital of the province was shifted from Allahabad to Lucknow."
},
{
    "name":"Rajasthan",
    "capital":"Jaipur",
    "language":"Hindi",
    "image":"../assets/rajstatemap.jpg",
    "decription":"Rajasthani (Devanagari: राजस्थानी) refers to a group of Indo-Aryan languages spoken .... In India, Rajasthani is written in the Devanagari script, an abugida which is written from left to right. Earlier, the Mahajani script, or Muriya, was used ..."
},


]
}