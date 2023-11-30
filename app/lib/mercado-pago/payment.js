const mercadopago = require('./mercado-pago');

// Ruta de tu servidor Next.js para crear un pago
export default async function handler(req, res) {
  const preference = await mercadopago.preferences.create({
    items: [
      {
        title: 'Producto Ejemplo',
        unit_price: 100,
        quantity: 1,
      },
    ],
    back_urls: {
      success: 'https://tu-sitio.com/pago-exitoso',
      failure: 'https://tu-sitio.com/pago-fallido',
      pending: 'https://tu-sitio.com/pago-pendiente',
    },
    auto_return: 'approved',
  });

  res.json({ id: preference.id });
}