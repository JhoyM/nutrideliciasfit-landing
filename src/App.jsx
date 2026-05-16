import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ChevronDown, ChevronRight, Clock, CreditCard, Facebook, HeartHandshake, Instagram, Leaf, MapPin, MessageCircle, Phone, Salad, ShieldCheck, Soup, Sparkles, Star, Truck, UtensilsCrossed, Wallet } from "lucide-react";
import { brand, colors, faqs, howToOrder, menuToday, packs, prices, trustPoints } from "./data/siteContent";

const cn = (...classes) => classes.filter(Boolean).join(" ");
const waLink = (message) => `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;

function buildOrderMessage({ product = "", name = "", location = "", details = "", pack = "No" } = {}) {
  return [
    `Hola, NutriDeliciasFit 👋 Quiero hacer un pedido.`,
    "",
    `Nombre: ${name}`,
    `Pedido: ${product}`,
    `Ubicación en Cercado: ${location}`,
    `Detalles: ${details}`,
    `¿Tengo combo?: ${pack}`,
    "",
    `Entiendo que los pedidos son hasta las ${brand.orderCutoff} y la entrega es entre ${brand.deliveryWindow}.`,
    `También entiendo que el delivery se cotiza según mi ubicación.`,
  ].join("\n");
}

function Container({ children, className = "" }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

function Button({ children, href, variant = "primary", className = "" }) {
  const styles = {
    primary: "text-white shadow-[0_14px_35px_rgba(233,77,26,0.28)]",
    secondary: "bg-white border text-[#233C1E] hover:bg-[#F3F8EA]",
    dark: "bg-[#233C1E] text-white hover:opacity-95",
    ghost: "text-[#233C1E] hover:bg-[#F3F8EA]",
  };
  return (
    <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noreferrer" : undefined} className={cn("inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition active:scale-[0.99] focus:outline-none focus:ring-4", styles[variant], className)} style={variant === "primary" ? { backgroundColor: colors.orange } : variant === "secondary" ? { borderColor: colors.border } : undefined}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={cn("rounded-3xl border bg-white shadow-[0_16px_45px_rgba(35,60,30,0.08)]", className)} style={{ borderColor: colors.border }}>{children}</div>;
}

function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <div className={cn("mb-8", center && "text-center")}>
      <div className={cn("mb-2 inline-flex items-center gap-2 text-sm font-black", center && "justify-center")} style={{ color: colors.orange }}><Sparkles className="h-4 w-4" /> {eyebrow}</div>
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: colors.greenDark }}>{title}</h2>
      {description ? <p className={cn("mt-3 max-w-2xl text-base leading-relaxed", center && "mx-auto")} style={{ color: colors.muted }}>{description}</p> : null}
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-3xl border bg-white" style={{ borderColor: colors.border }}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-start justify-between gap-4 p-5 text-left">
        <div>
          <div className="font-black" style={{ color: colors.greenDark }}>{question}</div>
          {open && <p className="mt-2 text-sm leading-relaxed" style={{ color: colors.muted }}>{answer}</p>}
        </div>
        <ChevronDown className={cn("mt-1 h-5 w-5 shrink-0 transition", open && "rotate-180")} style={{ color: colors.orange }} />
      </button>
    </div>
  );
}

export default function App() {
  const [order, setOrder] = useState({ product: "Plan saludable", name: "", location: "", details: "", pack: "No" });
  const orderLink = useMemo(() => waLink(buildOrderMessage(order)), [order]);
  const packLink = waLink("Hola, NutriDeliciasFit 👋 Quiero información para comprar un Combo 10 o Combo 20. ¿Me explican cómo activo mi saldo por QR?");

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream, color: colors.text }}>
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur" style={{ borderColor: colors.border }}>
        <Container><div className="flex items-center justify-between gap-3 py-3">
          <a href="#inicio" className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-white ring-1 ring-black/5"><img src={brand.logoPath} alt="Logo NutriDeliciasFit" className="h-11 w-11 object-contain" /></span><span className="leading-tight"><span className="block text-sm font-black" style={{ color: colors.greenDark }}>{brand.name}</span><span className="block text-xs" style={{ color: colors.muted }}>{brand.shortCity}</span></span></a>
          <nav className="hidden items-center gap-6 text-sm font-bold lg:flex" style={{ color: colors.greenDark }}><a href="#menu">Menú</a><a href="#combos">Combos</a><a href="#delivery">Delivery</a><a href="#faq">FAQ</a></nav>
          <Button href={orderLink} className="px-4 py-2.5">Pedir <MessageCircle className="h-4 w-4" /></Button>
        </div></Container>
      </header>

      <main id="inicio">
        <section className="relative overflow-hidden"><div className="absolute inset-0" style={{ background: `radial-gradient(circle at 20% 10%, ${colors.greenOlive}33, transparent 34%), radial-gradient(circle at 85% 20%, ${colors.orange}22, transparent 30%)` }} />
          <Container className="relative py-10 sm:py-16"><div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
              <div className="mb-4 flex flex-wrap gap-2"><span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black shadow-sm" style={{ color: colors.greenDark }}><MapPin className="h-4 w-4" style={{ color: colors.orange }} /> {brand.city}</span><span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black shadow-sm" style={{ color: colors.greenDark }}><Clock className="h-4 w-4" style={{ color: colors.orange }} /> Pedidos hasta {brand.orderCutoff}</span><span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black shadow-sm" style={{ color: colors.greenDark }}><Truck className="h-4 w-4" style={{ color: colors.orange }} /> Entrega {brand.deliveryWindow}</span></div>
              <h1 className="text-4xl font-black leading-[1.03] tracking-tight sm:text-6xl" style={{ color: colors.greenDark }}>Comida saludable, rica y lista para ti por delivery.</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: colors.muted }}>Almuerzos saludables y completos en {brand.shortCity}. Pide por WhatsApp, confirma tu ubicación y recibe tu almuerzo sin complicarte.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button href={orderLink}>Pedir por WhatsApp <ChevronRight className="h-4 w-4" /></Button><Button href="#menu" variant="secondary">Ver menú de hoy</Button></div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">{[[CreditCard, "Pago QR o efectivo"], [HeartHandshake, "Atención directa"], [ShieldCheck, "Solo delivery por ahora"]].map(([Icon, text]) => <div key={text} className="rounded-2xl border bg-white p-3 text-sm font-bold" style={{ borderColor: colors.border, color: colors.greenDark }}><Icon className="mb-2 h-5 w-5" style={{ color: colors.orange }} /> {text}</div>)}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .08 }}><Card className="overflow-hidden"><div className="p-5 sm:p-6" style={{ background: `linear-gradient(135deg, ${colors.greenDark}, #34542E)` }}><div className="flex items-center justify-between gap-4"><div><div className="text-sm font-black text-white/80">Pedido rápido</div><div className="text-2xl font-black text-white">Abrimos WhatsApp listo</div></div><div className="rounded-2xl bg-white/12 p-3 text-white"><MessageCircle /></div></div></div><div className="grid gap-3 p-5 sm:p-6"><label className="text-xs font-bold" style={{ color: colors.muted }}>¿Qué quieres pedir?</label><select value={order.product} onChange={(e) => setOrder({ ...order, product: e.target.value })} className="rounded-2xl border bg-white px-4 py-3 text-sm" style={{ borderColor: colors.border }}><option>Plan saludable</option><option>Completo saludable</option><option>Segundo</option><option>Completo</option><option>Sopa extra</option><option>Combo 10</option><option>Combo 20</option></select><div className="grid gap-3 sm:grid-cols-2"><input value={order.name} onChange={(e) => setOrder({ ...order, name: e.target.value })} placeholder="Tu nombre" className="rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: colors.border }} /><input value={order.location} onChange={(e) => setOrder({ ...order, location: e.target.value })} placeholder="Tu zona o referencia" className="rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: colors.border }} /></div><input value={order.details} onChange={(e) => setOrder({ ...order, details: e.target.value })} placeholder="Detalles: sin cebolla, con QR, etc." className="rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: colors.border }} /><select value={order.pack} onChange={(e) => setOrder({ ...order, pack: e.target.value })} className="rounded-2xl border bg-white px-4 py-3 text-sm" style={{ borderColor: colors.border }}><option>No</option><option>Combo 10</option><option>Combo 20</option></select><div className="rounded-2xl p-4 text-sm" style={{ backgroundColor: colors.softGreen, color: colors.greenDark }}><b>Importante:</b> {brand.deliveryPolicy}</div><Button href={orderLink} className="w-full">Abrir WhatsApp y pedir</Button></div></Card></motion.div>
          </div></Container>
        </section>

        <section id="menu" className="bg-white py-14"><Container><SectionTitle eyebrow="Menú editable" title="Menú de hoy" description="Recomendación: menú como tarjetas editables en la web. La imagen queda para redes; las tarjetas cargan mejor, se leen mejor en celular y ayudan a vender mejor." />
          <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]"><Card className="p-6"><div className="text-sm font-black uppercase tracking-[.2em]" style={{ color: colors.greenOlive }}>{menuToday.label}</div><h3 className="mt-2 text-4xl font-black" style={{ color: colors.greenDark }}>{menuToday.date}</h3><p className="mt-2 flex items-center gap-2" style={{ color: colors.muted }}><MapPin className="h-4 w-4" /> {menuToday.location}</p><div className="mt-6 grid gap-3">{prices.map((item) => <div key={item.name} className="flex items-center justify-between rounded-2xl border px-4 py-3" style={{ borderColor: colors.border }}><span className="font-bold" style={{ color: colors.greenDark }}>{item.name}</span><span className="rounded-full px-3 py-1 text-sm font-black text-white" style={{ backgroundColor: colors.orange }}>{item.price}</span></div>)}</div></Card>
            <div className="grid gap-4">{menuToday.items.map((item, index) => { const icons = [Soup, UtensilsCrossed, Salad]; const Icon = icons[index] || Leaf; return <Card key={item.type} className="p-5"><div className="flex items-start gap-4"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white" style={{ backgroundColor: index === 1 ? colors.orange : colors.greenDark }}><Icon className="h-6 w-6" /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="text-xl font-black" style={{ color: colors.greenDark }}>{item.type}</h3><span className="rounded-full px-2.5 py-1 text-xs font-black" style={{ backgroundColor: colors.softOrange, color: colors.orange }}>{item.badge}</span></div><p className="mt-1 text-lg font-bold" style={{ color: colors.text }}>{item.name}</p><p className="mt-2 text-sm leading-relaxed" style={{ color: colors.muted }}>{item.description}</p></div></div></Card>; })}<Button href={orderLink} className="w-full">Pedir este menú por WhatsApp</Button></div>
          </div></Container></section>

        <section id="combos" className="py-14" style={{ backgroundColor: colors.softGreen }}><Container><SectionTitle eyebrow="Clientes recurrentes" title="Combos 10 y 20" description="Pensados para quienes almuerzan seguido con NutriDeliciasFit y quieren comodidad, ahorro y menos fricción al pedir." /><div className="grid gap-5 md:grid-cols-2">{packs.map((pack) => <Card key={pack.id} className={cn("p-6", pack.highlight && "ring-2 ring-[#E94D1A]")}><div className="mb-3 inline-flex rounded-full px-3 py-1 text-xs font-black text-white" style={{ backgroundColor: pack.highlight ? colors.orange : colors.greenDark }}>{pack.highlight ? "Más conveniente" : "Buen inicio"}</div><h3 className="text-3xl font-black" style={{ color: colors.greenDark }}>{pack.title}</h3><p className="mt-2" style={{ color: colors.muted }}>{pack.subtitle}</p><div className="mt-5 rounded-3xl p-5" style={{ backgroundColor: colors.cream }}><div className="flex items-center justify-between"><span>Pagas</span><b className="text-2xl" style={{ color: colors.orange }}>{pack.pay}</b></div><div className="mt-3 flex items-center justify-between"><span>Recibes saldo</span><b className="text-2xl" style={{ color: colors.greenDark }}>{pack.credit}</b></div><div className="mt-3 rounded-2xl px-4 py-3 text-sm font-black" style={{ backgroundColor: colors.softOrange, color: colors.orange }}>{pack.bonus} · Validez {pack.validity}</div></div></Card>)}</div><div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button href={packLink}>Quiero un combo <Wallet className="h-4 w-4" /></Button><Button href="#faq" variant="secondary">Ver preguntas frecuentes</Button></div></Container></section>

        <section id="delivery" className="bg-white py-14"><Container><div className="grid gap-8 lg:grid-cols-2 lg:items-start"><div><SectionTitle eyebrow="Proceso simple" title="Cómo pedir" description="Lo hacemos fácil para que el cliente no piense demasiado. Mientras menos pasos, más ventas." /><div className="grid gap-3">{howToOrder.map((step, i) => <div key={step} className="flex gap-4 rounded-3xl border bg-white p-4" style={{ borderColor: colors.border }}><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-black text-white" style={{ backgroundColor: colors.orange }}>{i + 1}</span><p className="font-bold" style={{ color: colors.greenDark }}>{step}</p></div>)}</div></div><div><SectionTitle eyebrow="Confianza digital" title="Aunque no tengamos local físico, vendemos con claridad" description={brand.serviceModel} /><div className="grid gap-3 sm:grid-cols-2">{trustPoints.map((point) => <div key={point} className="rounded-3xl border p-4" style={{ backgroundColor: colors.cream, borderColor: colors.border }}><BadgeCheck className="mb-2 h-5 w-5" style={{ color: colors.greenOlive }} /><p className="text-sm font-bold" style={{ color: colors.greenDark }}>{point}</p></div>)}</div></div></div></Container></section>

        <section className="py-14" style={{ backgroundColor: colors.greenDark }}><Container><div className="mx-auto max-w-3xl text-center"><div className="mb-3 flex justify-center gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5" style={{ color: colors.orange }} />)}</div><h2 className="text-3xl font-black text-white sm:text-4xl">Próximo paso: sumar testimonios reales</h2><p className="mt-4 text-white/80">Cuando consigas capturas o frases de clientes, reemplazamos esta sección por prueba social real. Eso aumentará muchísimo la confianza, especialmente al no tener sucursal física.</p></div></Container></section>

        <section id="faq" className="bg-white py-14"><Container><SectionTitle eyebrow="Dudas frecuentes" title="Preguntas frecuentes" description="Esta sección evita mensajes repetidos y ayuda al cliente a comprar con más seguridad." /><div className="grid gap-4 md:grid-cols-2">{faqs.map((faq) => <FAQItem key={faq.question} {...faq} />)}</div></Container></section>
      </main>

      <footer className="pb-28 pt-12 md:pb-12" style={{ backgroundColor: colors.black }}><Container><div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><div className="text-3xl font-black" style={{ color: colors.greenOlive }}>{brand.name}</div><p className="mt-2 text-white/70">Comida saludable por delivery en {brand.shortCity}. Pedidos hasta {brand.orderCutoff}.</p><p className="mt-2 text-sm text-white/55">© {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.</p></div><div className="flex items-center gap-4 text-white"><a href={brand.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href={brand.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a><a href={orderLink} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Phone /></a></div></div></Container></footer>

      <div className="fixed bottom-3 left-0 right-0 z-50 md:hidden"><Container><div className="flex items-center gap-2 rounded-3xl border bg-white/95 p-2 shadow-2xl backdrop-blur" style={{ borderColor: colors.border }}><div className="min-w-0 flex-1 px-2"><div className="truncate text-sm font-black" style={{ color: colors.greenDark }}>Pedir ahora</div><div className="truncate text-xs" style={{ color: colors.muted }}>Entrega {brand.deliveryWindow}</div></div><Button href="#menu" variant="secondary" className="px-3 py-2">Menú</Button><Button href={orderLink} className="px-3 py-2">WhatsApp</Button></div></Container></div>
    </div>
  );
}
