import { ArrayMondenaData } from './interfaceArrayData';
import { Metadata } from './interfaceMetadata';
import { MonedaData } from './interfaceMonedaData';

//Interfaz que reliza contrato con la lista de monedas
export interface ArrayMondenaList{
    attention: string;
    data: ArrayMondenaData;
    metadata: Metadata;
  }
  

 //Interfaz que reliza contrato con una mondena especifica 
export interface ArrayMondenaTicker {
  attention: string;
  data: Array<MonedaData>;
  metadata: Array<Metadata>;
}
