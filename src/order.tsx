
interface Order {
    order_id: string;
    order_type: string;
    event_id: string;
    premise_id: string;
    event_name: string;
    start_date: string;
    autovalidation: number;
    event_type: string;
    second_payment_start_date?: string | null;
    second_payment_end_date?: string | null;
    premise_logo: string;
    name: string;
    surname: string;
    email: string;
    phone_code: string;
    phone: string;
    address?: string | null;
    state?: string | null;
    postal_code?: string | null;
    buyer_id: string;
    payed_at: string;
    transaction_id?: string | null;
    payment_type: string;
    amount: string;
    commission: string;
    refunded_at?: string | null;
    first_payment_type?: string | null;
    first_payment_amount?: string | null;
    first_payment_commission?: string | null;
    first_payment_payed_at?: string | null;
    refund_status?: string | null;
    tickets: Ticket[];
  }

  interface Ticket {
    order_id: string;
    amount: string;
    order_ticket_id: string;
    ticket_id: string;
    ticket_name: string;
    ticket_description: string;
    ticket_policy: string;
    client_email?: string | null;
    client_phone?: string | null;
    client_phone_code?: string | null;
    client_surname?: string | null;
    client_name?: string | null;
    client_nationality?: string | null;
    client_gender?: string | null;
    client_document_id?: string | null;
    client_document_type?: string | null;
    client_birth_date?: string | null;
    client_document_expiry_date?: string | null;
    client_document_expedition_date?: string | null;
    client_address?: string | null;
    client_postal_code?: string | null;
    early_payment_discount?: string | null;
    group_discount?: string | null;
    promotional_code?: string | null;
    promotional_code_discount?: string | null;
    international_discount?: string | null;
    final_payed_price: string;
    ticket_price: string;
    consumed_at: string;
    phone_code: string;
    phone: string;
    extras: TicketExtra[];
  }

  interface TicketExtra {
    order_ticket_extra_id: string;
    order_ticket_id: string;
    extra_id: string;
    extra_name: string;
    extra_description: string;
    times_can_be_consumed: number;
    extra_international_discount?: string | null;
    extra_final_payed_price: string;
    extra_price: string;
    extra_consumed_at: string;
    extra_order_id?: string | null;
    transaction_id?: string | null;
    created_at?: string | null;
    extra_consumitions: ExtraConsumition[];
  }

  interface ExtraConsumition {
    id: string;
    order_extra_id: string;
    consumed_at: string;
  }



export const order: Order = {
    "order_id": "210022ae-3d2b-47f5-95df-149358891fbb",
    "order_type": "event",
    "event_id": "29d8072c-763b-4e1e-865b-67dba415e399",
    "premise_id": "e463dcb0-10d5-432b-9a58-3e398ffce1d7",
    "event_name": "TardeoZaragoza BIG SHOW @ Sala Multiusos",
    "start_date": "2024-03-23T17:00:00.000Z",
    "autovalidation": 0,
    "event_type": "event",
    "second_payment_start_date": null,
    "second_payment_end_date": null,
    "premise_logo": "https://tikitup-prod.s3-eu-west-1.amazonaws.com/30a3fc79-cbdd-4b65-92f3-cc52c91412cb.png",
    "name": "Cristina",
    "surname": "Berrocal",
    "email": "user004@yopmail.com",
    "phone_code": "34",
    "phone": "695550682",
    "address": null,
    "state": null,
    "postal_code": null,
    "buyer_id": "2e2bc9f1-fece-46f8-b780-e6f0a3df4592",
    "payed_at": "2024-03-20T15:44:27.000Z",
    "transaction_id": null,
    "payment_type": "office_guest",
    "amount": "0.00",
    "commission": "0.00",
    "refunded_at": null,
    "first_payment_type": null,
    "first_payment_amount": null,
    "first_payment_commission": null,
    "first_payment_payed_at": null,
    "refund_status": null,
    "tickets": [
      {
        "order_id": "210022ae-3d2b-47f5-95df-149358891fbb",
        "amount": "0.00",
        "order_ticket_id": "715ca850-efb4-4a53-a1aa-e36acf420f67",
        "ticket_id": "04ffd97e-3534-4ae0-8057-5d71b22c519e",
        "ticket_name": "Ticket Promo. Incluye consumición hasta las 18h30",
        "ticket_description": "Ticket Promocional Early Bird. Incluye consumición si la entrada se realiza antes de las 18h30",
        "ticket_policy": "Ticket promocional\nIncluye consumición si la entrada se realiza antes de las 18h30.\nA partir de las 18h31 la entrada sigue siendo válida pero no incluye consumición.\n\nLa entrada es de un sólo uso.\nSi se sale fuera del recinto, se deberá abonar otra entrada para volver a acceder.",
        "client_email": null,
        "client_phone": null,
        "client_phone_code": null,
        "client_surname": null,
        "client_name": null,
        "client_nationality": null,
        "client_gender": null,
        "client_document_id": null,
        "client_document_type": null,
        "client_birth_date": null,
        "client_document_expiry_date": null,
        "client_document_expedition_date": null,
        "client_address": null,
        "client_postal_code": null,
        "early_payment_discount": null,
        "group_discount": null,
        "promotional_code": null,
        "promotional_code_discount": null,
        "international_discount": null,
        "final_payed_price": "0.00",
        "ticket_price": "0.00",
        "consumed_at": "2024-03-23T17:07:59.000Z",
        "phone_code": "34",
        "phone": "695550682",
        "extras": [
          {
            "order_ticket_extra_id": "cb29379e-3254-490c-a6dd-46c802b33f76",
            "order_ticket_id": "715ca850-efb4-4a53-a1aa-e36acf420f67",
            "extra_id": "84fbbb69-cf9e-4ac8-a8c5-b6035cb44139",
            "extra_name": "Bonocopa 3 Consumiciones",
            "extra_description": "Bonocopa válido para tres consumiciones.\nIncluido también consumiciones con bebida energética\n\nNo incluye el alquiler del vaso reutilizable.\n\nSe podrá canjear en la puerta, en taquilla de venta de entradas o zona de cobro",
            "times_can_be_consumed": 3,
            "extra_international_discount": null,
            "extra_final_payed_price": "0.00",
            "extra_price": "0.00",
            "extra_consumed_at": "2024-03-20T19:55:34.000Z",
            "extra_order_id": null,
            "transaction_id": null,
            "created_at": null,
            "extra_consumitions": [
              {
                "id": "e80fdbeb-bca9-4760-b04e-b5801ea034a0",
                "order_extra_id": "cb29379e-3254-490c-a6dd-46c802b33f76",
                "consumed_at": "2024-03-20T19:54:16.000Z"
              },
              {
                "id": "9a705859-5968-40a9-a126-cb38edd6e545",
                "order_extra_id": "cb29379e-3254-490c-a6dd-46c802b33f76",
                "consumed_at": "2024-03-20T19:54:40.000Z"
              },
              {
                "id": "50978c32-ceb3-4061-aabf-69337600e495",
                "order_extra_id": "cb29379e-3254-490c-a6dd-46c802b33f76",
                "consumed_at": "2024-03-20T19:55:34.000Z"
              }
            ]
          }
        ]
      },
      {
        "order_id": "210022ae-3d2b-47f5-95df-149358891fbb",
        "amount": "0.00",
        "order_ticket_id": "f4d13ba6-13cc-4cd0-a3a4-bbb9b5c00897",
        "ticket_id": "04ffd97e-3534-4ae0-8057-5d71b22c519e",
        "ticket_name": "Ticket Promo. Incluye consumición hasta las 18h30",
        "ticket_description": "Ticket Promocional Early Bird. Incluye consumición si la entrada se realiza antes de las 18h30",
        "ticket_policy": "Ticket promocional\nIncluye consumición si la entrada se realiza antes de las 18h30.\nA partir de las 18h31 la entrada sigue siendo válida pero no incluye consumición.\n\nLa entrada es de un sólo uso.\nSi se sale fuera del recinto, se deberá abonar otra entrada para volver a acceder.",
        "client_email": null,
        "client_phone": null,
        "client_phone_code": null,
        "client_surname": null,
        "client_name": null,
        "client_nationality": null,
        "client_gender": null,
        "client_document_id": null,
        "client_document_type": null,
        "client_birth_date": null,
        "client_document_expiry_date": null,
        "client_document_expedition_date": null,
        "client_address": null,
        "client_postal_code": null,
        "early_payment_discount": null,
        "group_discount": null,
        "promotional_code": null,
        "promotional_code_discount": null,
        "international_discount": null,
        "final_payed_price": "0.00",
        "ticket_price": "0.00",
        "consumed_at": "2024-03-23T18:28:12.000Z",
        "phone_code": "34",
        "phone": "695550682",
        "extras": [
          {
            "order_ticket_extra_id": "a58c1b3a-86bf-4665-8fe5-52f3157061d1",
            "order_ticket_id": "f4d13ba6-13cc-4cd0-a3a4-bbb9b5c00897",
            "extra_id": "84fbbb69-cf9e-4ac8-a8c5-b6035cb44139",
            "extra_name": "Bonocopa 3 Consumiciones",
            "extra_description": "Bonocopa válido para tres consumiciones.\nIncluido también consumiciones con bebida energética\n\nNo incluye el alquiler del vaso reutilizable.\n\nSe podrá canjear en la puerta, en taquilla de venta de entradas o zona de cobro",
            "times_can_be_consumed": 3,
            "extra_international_discount": null,
            "extra_final_payed_price": "0.00",
            "extra_price": "0.00",
            "extra_consumed_at": "2024-03-20T20:07:05.000Z",
            "extra_order_id": null,
            "transaction_id": null,
            "created_at": null,
            "extra_consumitions": [
              {
                "id": "58077492-a1cd-4827-a316-e301cd40f604",
                "order_extra_id": "a58c1b3a-86bf-4665-8fe5-52f3157061d1",
                "consumed_at": "2024-03-20T19:47:11.000Z"
              },
              {
                "id": "03c75453-d322-48b2-93c7-7fbb977b127d",
                "order_extra_id": "a58c1b3a-86bf-4665-8fe5-52f3157061d1",
                "consumed_at": "2024-03-20T20:05:23.000Z"
              },
              {
                "id": "9ff373c0-e0c6-4e18-a9b4-326bd9f76049",
                "order_extra_id": "a58c1b3a-86bf-4665-8fe5-52f3157061d1",
                "consumed_at": "2024-03-20T20:07:06.000Z"
              }
            ]
          }
        ]
      }
    ]
  }
