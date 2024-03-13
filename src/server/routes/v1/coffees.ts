import { eventHandler } from 'h3';

export default eventHandler(() => [
  {
    id: 1,
    name: 'Yirga Santos',
    price: 31.99,
    description: 'Yirga Santos ist ein vollmundiger Espresso Blend mit 25% Robusta Anteil. ',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0593/0873/6557/files/b_250g_yirgasantos.jpg',
  },
  {
    id: 2,
    name: 'Apas',
    price: 27.00,
    description: 'Für den unkomplizierten Genuss. Nussig, schokoladig, säurearm.',
    imageUrl: 'https://kaffeemacher.de/cdn/shop/files/APASPackshot_1.jpg?v=1700056377',
  },
  {
    id: 3,
    name: 'Black Rabbit',
    price: 29.50,
    description: 'Ein klassischer und kräftiger Espresso mit viel Körper und einem hohen Robustaanteil. ',
    imageUrl: 'https://herr-hase.com/media/image/38/87/f7/2021-03-29-ESPRESSIO-BLACK-RABBIT.jpg',
  },
]);
