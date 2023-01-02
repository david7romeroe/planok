import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { QuoteDetail } from "../quotes/quote-detail.model";
import { Quote } from "../quotes/quote.model";
import { User } from "../user-list/user.model";

@Injectable({
    providedIn: 'root'
})
export class RestAPIService {


    constructor(private http: HttpClient){
        
    }

    getUserList(){

      return this.http.get<User[]>('/api-rest/public/usuarios');
    }

    getQuoteList(){

        return this.http.get<Quote[]>('/api-rest/public/cotizaciones');
    }

    getQuoteDetail(id:number){

        let params = new HttpParams();
        params = params.append('quote_id', id );

        return this.http.get<QuoteDetail>('/api-rest/public/cotizaciones',{
            params: params
        }).pipe(map((details: any)=>{

            return {
                idCotizacion: details.idCotizacion,
                descuento: details.descuento,
                subtotal: details.subtotal,
                total: details.total,
                fechaCreacion: details.fechaCreacion,
                estado: details.estado,
                montoCredito: details.montoCredito,
                rutCliente: details.rut_cliente,
                cliente: details.cliente,
                usuario: details.usuario,
                tipoProducto: details.tipo_producto,
                valorProducto: details.valor_producto
            };

        }))
        ;
    }
}