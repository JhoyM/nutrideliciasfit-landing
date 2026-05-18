export const brand = {
  name: "NutriDeliciasFit",
  city: "Cercado — Cochabamba",
  shortCity: "Cercado, Cochabamba",
  whatsappDisplay: "+591 68459468",
  whatsappNumber: "59168459468",
  orderCutoff: "9:00 am",
  deliveryWindow: "12:30 a 1:00 pm",
  deliveryPolicy: "El delivery se cotiza por WhatsApp según tu ubicación dentro de Cercado.",
  serviceModel: "Marca de comida saludable por delivery, sin sucursal física por ahora.",
  payments: ["QR", "Efectivo"],
  logoPath: "/LogoND1.jpg",
  instagramUrl: "https://www.instagram.com/nutrideliciasfit?igsh=MXNrM3Y4NnF6cXJiOA==",
  facebookUrl: "https://www.facebook.com/share/1FsJrztm6A/",
  tiktokUrl: "",
};

export const colors = {
  greenDark: "#233C1E",
  greenOlive: "#8EB131",
  orange: "#E94D1A",
  white: "#FFFFFF",
  black: "#000000",
  cream: "#FFF9F2",
  softGreen: "#F3F8EA",
  softOrange: "#FFF1EA",
  border: "#E8E2D8",
  text: "#20231F",
  muted: "#667060",
};

export const menuToday = {
  label: "Menú de hoy",
  date: "Lunes 18 de mayo",
  location: "Cercado — Cochabamba",
  items: [
    { type: "Sopa", name: "Carotitos", description: "Sopa diaria, ideal para acompañar tu almuerzo.", badge: "Clásico" },
    { type: "Segundo", name: "Pollo a la Broaster + arroz + papa frita", description: "Opción tradicional, contundente y sabrosa para el almuerzo.", badge: "Popular" },
    { type: "Saludable", name: "Pollo al vapor con espinacas + omelette + ensalada de remolacha con zanahoria y papa en cubitos", description: "Versión más equilibrada para quienes quieren comer rico cuidando su rutina.", badge: "Fit" },
  ],
};

export const prices = [
  { name: "Segundo", price: "18 Bs" },
  { name: "Sopa extra", price: "10 Bs" },
  { name: "Plan saludable", price: "20 Bs" },
  { name: "Completo", price: "22 Bs" },
  { name: "Completo saludable", price: "25 Bs" },
];

export const packs = [
  { id: "pack10", title: "Combo 10", subtitle: "Ideal para iniciar una rutina saludable sin complicarte.", pay: "190 Bs", credit: "200 Bs", bonus: "+10 Bs de beneficio", validity: "30 días", highlight: false },
  { id: "pack20", title: "Combo 20", subtitle: "La mejor opción para clientes recurrentes, oficina o semana completa.", pay: "370 Bs", credit: "400 Bs", bonus: "+30 Bs de beneficio", validity: "45 días", highlight: true },
];

export const howToOrder = [
  "Elige tu almuerzo o combo.",
  "Escríbenos por WhatsApp antes de las 9:00 am.",
  "Confirma tu ubicación dentro de Cercado.",
  "Te cotizamos el delivery según tu zona.",
  "Pagas por QR o efectivo y recibes tu pedido entre 12:30 y 1:00 pm.",
];

export const trustPoints = [
  "Menú diario claro y actualizado.",
  "Pedidos directos por WhatsApp, sin procesos complicados.",
  "Pagos por QR o efectivo.",
  "Delivery coordinado dentro de Cercado, Cochabamba.",
  "Packs pensados para clientes recurrentes.",
  "Atención cercana, práctica y humana.",
];

export const faqs = [
  { question: "¿Hasta qué hora puedo pedir para recibir hoy?", answer: "Recibimos pedidos hasta las 9:00 am. Después de esa hora puedes escribirnos para consultar disponibilidad o agendar para el siguiente día hábil." },
  { question: "¿Dónde entregan?", answer: "Trabajamos con delivery dentro de Cercado, Cochabamba. La cobertura y el costo se confirman por WhatsApp según tu ubicación exacta." },
  { question: "¿Cuánto cuesta el delivery?", answer: "El delivery se cotiza internamente por WhatsApp según la ubicación del cliente dentro de Cercado." },
  { question: "¿Cómo funcionan los combos 10 y 20?", answer: "Son combos prepago: Combo 10 paga 190 Bs y recibe saldo de 200 Bs. Combo 20 paga 370 Bs y recibe saldo de 400 Bs." },
  { question: "¿Qué métodos de pago aceptan?", answer: "Aceptamos pago por QR y efectivo." },
  { question: "¿Tienen sucursal física?", answer: "Por ahora trabajamos como marca de comida saludable por delivery. Los pedidos y coordinación se realizan por WhatsApp." },
];
