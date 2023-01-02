import { Component, OnInit, ViewChild } from '@angular/core';
import { RestAPIService } from '../share/rest-api.service';
import { QuoteDetail } from './quote-detail.model';
import { Quote } from './quote.model';
declare var window: any;

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  constructor(private api: RestAPIService) { }

  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: number[] = [8, 16, 24];

  detail: QuoteDetail = {
    idCotizacion: 0,
    descuento: 0,
    subtotal: 0,
    total: 0,
    fechaCreacion: '',
    estado: '',
    montoCredito: 0,
    rutCliente: 0,
    cliente: '',
    usuario: '',
    tipoProducto: '',
    valorProducto: 0,
  };

  quotes: Quote[] = [];
  tableModal: any;

  ngOnInit(): void {
    this.tableModal = new window.bootstrap.Modal(
      document.getElementById('quoteModal')
    );

    this.fetchQuotes();
  }

  fetchQuotes(){

    this.api.getQuoteList().subscribe((quotes: Quote[]) => {
      this.quotes = quotes;
    });
  }

  showDetail(id: number) {
    this.api.getQuoteDetail(id).subscribe((detail: QuoteDetail) => {
      this.detail = detail;
      this.tableModal.show();
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchQuotes();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchQuotes();
  }
}
